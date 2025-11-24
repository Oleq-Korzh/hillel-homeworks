import {
  ADD_TODO,
  CHANGE_TODO,
  DELETE_TODO,
  GET_TODO,
  LOADING_TODO,
} from "./todosTypes";

const initialState = {
  data: [],
  isLoading: false,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_TODO: {
      return { ...state, isLoading: true };
    }
    case GET_TODO: {
      return { ...state, data: action.payload, isLoading: false };
    }
    case ADD_TODO: {
      return { ...state, data: action.payload, isLoading: false };
    }
    case DELETE_TODO: {
      return { ...state, data: action.payload, isLoading: false };
    }
    case CHANGE_TODO: {
      return { ...state, data: action.payload, isLoading: false };
    }
    default: {
      return state;
    }
  }
};

export default todosReducer;
