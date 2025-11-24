import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./rootReduser";

const loadStorage = () => {
  const storage = localStorage.getItem("redux");

  if (!storage) {
    return undefined;
  }

  return JSON.parse(storage);
};

const saveStorage = (state) => {
  localStorage.setItem("redux", JSON.stringify(state));
};

const presetStates = loadStorage();

const store = createStore(
  rootReducer,
  presetStates,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveStorage({
    theme: store.getState().theme,
  });
});

export default store;
