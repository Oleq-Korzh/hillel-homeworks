import { useState, useMemo } from "react";
import { PRIORITY_ORDER } from "../../utils/helpers";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Toolbar from "../Toolbar/Toolbar";
import { useContext } from "react";
import TodosContext from "../../context/Todos/TodosContext";
import "./App.scss";

function App() {
  const { todos } = useContext(TodosContext);
  const [filters, setFilters] = useState({
    _sort: "newest",
    _status: "all",
    _priority: "all",
    _search: "",
  });

  const filteredTodos = useMemo(() => {
    let list = [...todos];

    if (filters._search !== "") {
      list = list.filter((todo) => {
        return todo.title.toLowerCase().includes(filters._search);
      });
    }

    if (filters._sort === "newest") {
      list = list.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
    } else if (filters._sort === "oldest") {
      list = list.sort((a, b) => {
        return a.timestamp - b.timestamp;
      });
    } else if (filters._sort === "priority") {
      list = list.sort((a, b) => {
        return PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority];
      });
    }

    if (filters._status !== "all") {
      list = list.filter((todo) => {
        return todo.status === filters._status;
      });
    }

    if (filters._priority !== "all") {
      list = list.filter((todo) => {
        return todo.priority === filters._priority;
      });
    }

    return list;
  }, [todos, filters]);

  const handleFilters = (newFilter) => {
    setFilters(newFilter);
  };

  return (
    <main className="app">
      <section className="card">
        <Header />
        <TodoForm />
        <Toolbar filters={filters} setFilters={handleFilters} />
        <TodoList todos={filteredTodos} />
        <Footer count={filteredTodos.length} />
      </section>
    </main>
  );
}

export default App;
