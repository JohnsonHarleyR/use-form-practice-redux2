import { useRef } from "react";
import { useForm } from "react-hook-form";

const InputField = ({
  id,
  name,
  label,
  error,
  register,
  isRequired = true,
}) => {

  return (
    <>
      <label>{label}:</label>
      <input
        type="text"
        name={name}
        ref={register}
      />
    </>
  );
}

export default InputField;