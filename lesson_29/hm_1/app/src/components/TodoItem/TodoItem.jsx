import { capitalize, changeStatus } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import {
  changeTodo,
  deleteTodo,
} from "../../store/features/todos/todosActions";
import "./TodoItem.scss";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDeleteTodos = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleChangeStatus = (id, status) => {
    const newStatus = changeStatus(status);

    dispatch(changeTodo(id, newStatus));
  };

  return (
    <li className="todo" data-id={todo.id} data-status={todo.status}>
      <div className="todo__main">
        <div className="todo__title">{todo.title}</div>
        <div className="todo__desc">{todo.description}</div>
      </div>
      <div className="todo__meta">
        <span className={`pill pill--${todo.priority}`}>
          {capitalize(todo.priority)}
        </span>
        <span
          className={`badge badge--${todo.status}`}
          onClick={() => {
            handleChangeStatus(todo.id, todo.status);
          }}
        >
          {capitalize(todo.status)}
        </span>
        <time className="date" dateTime={todo.date}>
          {todo.date}
        </time>
        <button
          className="todo__delete"
          title="Видалити задачу"
          onClick={() => {
            handleDeleteTodos(todo.id);
          }}
        >
          ×
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
