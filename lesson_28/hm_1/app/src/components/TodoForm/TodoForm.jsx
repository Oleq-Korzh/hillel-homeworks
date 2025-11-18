import { useFormik } from "formik";
import * as Yup from "yup";
import { validation } from "../../utils/validation";
import { getCurrentTime } from "../../utils/helpers";
import { setTodoItem } from "../../utils/api";
import "./TodoForm.scss";
import { useContext } from "react";
import TodosContext from "../../context/Todos/TodosContext";

const TodoForm = () => {
  const { handleSetTodo } = useContext(TodosContext);

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
      const todos = await setTodoItem(task);

      handleSetTodo(todos);
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
          placeholder="Назва задачі"
          value={formik.values.title}
          onChange={handleOnChangeInput}
        />
        <textarea
          name="description"
          placeholder="Опис задачі"
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
            Add
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
