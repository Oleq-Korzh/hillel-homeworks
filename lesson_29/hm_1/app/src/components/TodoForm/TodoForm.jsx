import { useFormik } from "formik";
import * as Yup from "yup";
import { validation } from "../../utils/validation";
import { getCurrentTime } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { setTodo } from "../../store/features/todos/todosActions";
import { useLang } from "../../hooks/useLang";
import "./TodoForm.scss";

const TodoForm = () => {
  const dispath = useDispatch();
  const { langData } = useLang();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      priority: "low",
      status: "pending",
    },
    validationSchema: Yup.object({
      title: validation.title,
      description: validation.desc,
    }),
    onSubmit: async (val, { resetForm }) => {
      const date = getCurrentTime(".");
      const timestamp = Date.now();
      const id = crypto.randomUUID();

      const task = { ...val, date, id, timestamp };

      dispath(setTodo(task));
      resetForm();
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  const handleOnChangeInput = (e) => {
    formik.setFieldError("title", "");
    formik.setFieldError("description", "");
    formik.handleChange(e);
  };

  return (
    <>
      <form className="todo-form" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder={langData.form.titlePlaceholder}
          value={formik.values.title}
          onChange={handleOnChangeInput}
        />
        <textarea
          name="description"
          placeholder={langData.form.descPlaceholder}
          rows="2"
          value={formik.values.description}
          onChange={handleOnChangeInput}
        ></textarea>
        <div className="form-row">
          <select
            name="priority"
            value={formik.values.priority}
            onChange={formik.handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <select
            name="status"
            value={formik.values.status}
            onChange={formik.handleChange}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In progress</option>
            <option value="done">Done</option>
          </select>

          <button type="submit" className="btn btn--primary">
            {langData.form.button}
          </button>
        </div>
        {formik.errors.title && (
          <div className="todo-error">{formik.errors.title}</div>
        )}
        {formik.errors.description && (
          <div className="todo-error">{formik.errors.description}</div>
        )}
      </form>
    </>
  );
};

export default TodoForm;
