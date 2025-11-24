import * as Yup from "yup";

const validationTitle = Yup.string()
  .required("Введіть заголовок задачі")
  .min(5, "Заголовок має бути довшим");

const validationDesc = Yup.string()
  .required("Введіть опис задачі")
  .min(10, "Опис надто короткий");

export const validation = {
  title: validationTitle,
  desc: validationDesc,
};
