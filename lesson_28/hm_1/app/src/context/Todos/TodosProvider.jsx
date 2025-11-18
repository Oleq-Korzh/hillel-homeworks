import { useState, useEffect } from "react";
import TodosContext from "./TodosContext";
import { getTodoList } from "../../utils/api";

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const todos = (await getTodoList()) || [];

      setTodos(todos);
    };

    fetchData();
  }, []);

  const handleSetTodo = (newTodos = []) => {
    setTodos(newTodos);
  };

  return (
    <TodosContext.Provider value={{ todos, handleSetTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
