import { useContext } from "react";
import { changeTodoItem, removeTodoItem } from "../../utils/api";
import { capitalize, changeStatus } from "../../utils/helpers";
import TodosContext from "../../context/Todos/TodosContext";
import "./TodoItem.scss";

const TodoItem = ({ todo }) => {
  const { handleSetTodo } = useContext(TodosContext);

  const handleDeleteTodos = async (id) => {
    const todos = await removeTodoItem(id);

    handleSetTodo(todos);
  };

  const handleChangeStatus = async (id, status) => {
    const newStatus = changeStatus(status);
    const todos = await changeTodoItem(id, newStatus);

    handleSetTodo(todos);
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
