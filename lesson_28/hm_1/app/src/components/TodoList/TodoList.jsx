import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";

const TodoList = ({ todos }) => {
  if (todos.length === 0) {
    return (
      <div className="todo-empty">
        <div className="todo-empty__inner">
          <h2 className="todo-empty__title">Поки що немає задач</h2>
        </div>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
