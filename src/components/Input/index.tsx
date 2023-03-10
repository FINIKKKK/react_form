import React from "react";
import { useFormContext } from "react-hook-form";
import InputMask from "react-input-mask";

import ss from "./Input.module.scss";

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
  const [value, setValue] = React.useState("");
  const error = errors[name]?.message as string;

  return (
    <div className={ss.input}>
      {isTextarea ? (
        <textarea
          {...register(name)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        ></textarea>
      ) : name === "phone" ? (
        <InputMask
          {...register(name)}
          mask="+7 (999) 999 99 99"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <input
          {...register(name)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          type="text"
        />
      )}
      {value && (
        <svg
          className={ss.clear}
          onClick={() => setValue("")}
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 0.906428L8.09357 0L4.5 3.59357L0.906428 0L0 0.906428L3.59357 4.5L0 8.09357L0.906428 9L4.5 5.40643L8.09357 9L9 8.09357L5.40643 4.5L9 0.906428Z"
            fill="black"
          />
        </svg>
      )}
      <span>{error}</span>
    </div>
  );
};
