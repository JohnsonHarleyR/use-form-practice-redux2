import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from './InputField/layout';
import './styling/lib.css';

const Libs = ({
  title,
  fillTypeArray,
  libResultArray,
  getNewMadLib,
  setUserAnswers,
  renderLibResult,
}) => {

  const { register, reset, handleSubmit } = useForm({
    mode: "onSubmit",
  });

  const [isComplete, setIsComplete] = useState(false);
  const [formFields, setFormFields] = useState([]);
  const [resultDisplay, setResultDisplay] = useState([]);

  //#region Effects

  useEffect(() => {
    getNewMadLib();
  }, []);

  useEffect(() => {
    if (fillTypeArray) {
      reset();
      setFormFields(createFormFields());
    }
  }, [fillTypeArray]);

  useEffect(() => {
    if (isComplete) {
      renderLibResult();
    }
  }, [isComplete]);

  useEffect(() => {
    if (libResultArray) {
      setResultDisplay(createResultDisplay());
    }
  }, [libResultArray]);

  //#endregion

  //#region Common Methods

  const createResultDisplay = () => {
    let newResult = [];
    libResultArray.forEach(r => {
      newResult.push(
        <span className={r.class}>{r.text}</span>
      );
    });
    return newResult;
  }

  const createFormFields = () => {
    let fields = [];
    fillTypeArray.forEach(field => {
      fields.push(
        <>
          <InputField 
            key={field.id}
            id={field.id}
            name={field.id}
            label={field.text}
            error={"Field is required."}
            register={register}
            // userAnswerArray={userAnswerArray}
            // {...register(`f${field.id}`)}
          />
          <br></br>
        </>
      );
    });
    return fields;
  }

  //#endregion

  //#region  Handlers

  const onFormSubmit = (data) => {
    console.log(data);
    setUserAnswers(data);
    setIsComplete(true);
  }

  const onErrors = (errors) => {
    console.error(errors);
  }

  //#endregion


  return(
    <div>
      <h2>Title: {title}</h2>
      {!isComplete
        ? <div>
            <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
              {formFields}
              <button>Submit</button>
            </form>
          </div>
        : <div>
            {resultDisplay}
          </div>}
    </div>
  );

}

export default Libs;