import { TOGGLE_THEME } from "../theme/themeTypes";
import {
  COUNT_DOWN,
  COUNT_UP,
  COUNT_RESET,
  COUNT_WAITING,
} from "./counterTypes";

const initialState = {
  count: 0,
  waiting: false,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_WAITING: {
      return { ...state, waiting: true };
    }
    case COUNT_UP: {
      return { ...state, count: state.count + 1, waiting: false };
    }
    case COUNT_DOWN: {
      return { ...state, count: state.count - 1, waiting: false };
    }
    case COUNT_RESET: {
      return { ...state, count: 0, waiting: false };
    }
    default: {
      return state;
    }
  }
};

export default countReducer;
