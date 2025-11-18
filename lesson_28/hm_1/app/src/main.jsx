import { createRoot } from "react-dom/client";
import App from "./components/App/App.jsx";
import TodosProvider from "./context/Todos/TodosProvider.jsx";

createRoot(document.getElementById("root")).render(
  <TodosProvider>
    <App />
  </TodosProvider>
);
