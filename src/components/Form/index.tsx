import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormScheme } from "../../utils/validation";

interface FormProps {
  setIsVisible: (value: boolean) => void;
}

export const Form: React.FC<FormProps> = ({ setIsVisible }) => {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(FormScheme),
  });

  const onSubmit = (formData: any) => {
    const json = JSON.stringify(formData);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  return (
    <div className="form__wrapper">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="form">
          <svg
            className="close"
            onClick={() =>setIsVisible(false)}
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
          <h2>Форма обратной связи</h2>
          <Input name="phone" placeholder="Номер телефона" />
          <Input name="name" placeholder="Имя" />
          <Input name="message" placeholder="Сообщение" isTextarea />
          <button className="btn">Отправить</button>
        </form>
      </FormProvider>
    </div>
  );
};
