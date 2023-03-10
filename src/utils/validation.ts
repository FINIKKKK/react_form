import * as yup from "yup";

export const FormScheme = yup.object().shape({
  phone: yup
    .string()
    .matches(/^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$/, "Некорректный номер телефона")
    .required("Обязательное поле"),
  name: yup
    .string()
    .min(3, "Имя должно состоять из 3 символов")
    .required("Обязательное поле"),
  message: yup
    .string()
    .min(15, "Сообщение должно состоять минимум из 15 символов")
    .required("Обязательное поле"),
});
