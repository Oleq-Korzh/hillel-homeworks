import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./features/characters/characterSlice";
import loaderReducer from "./features/loader/loaderSlice";

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    loader: loaderReducer,
  },
});

export default store;
