import React from "react";
import { useFormContext } from "react-hook-form";
import InputMask from "react-input-mask";

interface InputProps {
  name: string;
  placeholder: string;
  isTextarea?: boolean;
}

export const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  isTextarea,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [inputName, setInputName] = React.useState("");
  const error = errors[name]?.message as string;

  return (
    <div className="input">
      {isTextarea ? (
        <textarea
          {...register(name)}
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder={placeholder}
        ></textarea>
      ) : name === "phone" ? (
        <InputMask
          {...register(name)}
          mask="+7 (999) 999 99 99"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <input
          {...register(name)}
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder={placeholder}
          type="text"
        />
      )}
      <span>{error}</span>
    </div>
  );
};
