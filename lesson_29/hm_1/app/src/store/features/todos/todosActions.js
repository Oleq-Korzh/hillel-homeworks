import {
  changeTodoItem,
  getTodoList,
  removeTodoItem,
  setTodoItem,
} from "../../../utils/api";
import {
  ADD_TODO,
  CHANGE_TODO,
  DELETE_TODO,
  GET_TODO,
  LOADING_TODO,
} from "./todosTypes";

export const getTodos = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING_TODO });

    const todos = await getTodoList();

    dispatch({
      type: GET_TODO,
      payload: todos,
    });
  };
};

export const setTodo = (todo) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_TODO });

    const todos = await setTodoItem(todo);

    dispatch({
      type: ADD_TODO,
      payload: todos,
    });
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_TODO });

    const todos = await removeTodoItem(id);

    dispatch({
      type: DELETE_TODO,
      payload: todos,
    });
  };
};

export const changeTodo = (id, newStatus) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_TODO });

    const todos = await changeTodoItem(id, newStatus);

    dispatch({
      type: CHANGE_TODO,
      payload: todos,
    });
  };
};
