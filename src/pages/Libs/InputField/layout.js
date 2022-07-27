import { useRef } from "react";


const InputField = ({
  id,
  label,
  error,
  isRequired = true,
  userAnswerArray,
  setUserAnswer,
}) => {

  const handleValueChange = (e) => {
    setUserAnswer(id, e.target.value, userAnswerArray);
  }

  return (
    <>
      <label>{label}:</label>
      <input type="text" onChange={handleValueChange}/>
    </>
  );
}

export default InputField;