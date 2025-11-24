import { combineReducers } from "redux";
import themeReducer from "./features/theme/themeReducer";
import countReducer from "./features/counter/counterReducer";

const rootReducer = combineReducers({
  counter: countReducer,
  theme: themeReducer,
});

export default rootReducer;
