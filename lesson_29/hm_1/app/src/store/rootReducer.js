import { combineReducers } from "redux";
import langReducer from "./features/lang/langReducer";
import todosReducer from "./features/todos/todosReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  lang: langReducer,
});

export default rootReducer;
