import { useRef } from "react";
import { useForm } from "react-hook-form";


const InputField = ({
  id,
  name,
  label,
  error,
  isRequired = true,
  userAnswerArray,
  setUserAnswer,
}) => {

  const { register } = useForm();

  const handleValueChange = (e) => {
    setUserAnswer(id, e.target.value, userAnswerArray);
  }

  return (
    <>
      <label>{label}:</label>
      <input
        type="text"
        onChange={handleValueChange}
        {...register(name)}
      />
    </>
  );
}

export default InputField;