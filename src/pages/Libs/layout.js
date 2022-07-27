import React, { useEffect, useState } from 'react';
import InputField from './InputField/layout';

const Libs = ({
  title,
  libTextArray,
  fillTypeArray,
  userAnswerArray,
  getNewMadLib,
  setUserAnswer,
}) => {

  const [formFields, setFormFields] = useState([]);

  //#region Effects

  useEffect(() => {
    getNewMadLib();
  }, []);

  useEffect(() => {
    if (fillTypeArray) {
      setFormFields(createFormFields());
    }
  }, [fillTypeArray]);

  //#endregion

  //#region Common Methods

  const createFormFields = () => {
    let fields = [];
    fillTypeArray.forEach(field => {
      fields.push(
        <>
          <InputField 
            key={field.id}
            id={field.id}
            label={field.text}
            error={"Field is required."}
            userAnswerArray={userAnswerArray}
            setUserAnswer={setUserAnswer}
          />
          <br></br>
        </>
      );
    });
    return fields;
  }

  //#endregion

  //#region  Handlers

  //#endregion


  return(
    <div>
      <h2>Title: {title}</h2>
      <div>
        {formFields}
      </div>
    </div>
  );

}

export default Libs;