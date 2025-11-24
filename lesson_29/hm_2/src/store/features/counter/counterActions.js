import {
  COUNT_DOWN,
  COUNT_RESET,
  COUNT_UP,
  COUNT_WAITING,
} from "./counterTypes";

export const countUp = () => ({ type: COUNT_UP });
export const countDown = () => ({ type: COUNT_DOWN });
export const countReset = () => ({ type: COUNT_RESET });
export const countWaiting = () => ({ type: COUNT_WAITING });

export const countUpAsync = (duration) => {
  return async (dispatch) => {
    dispatch(countWaiting());

    setTimeout(() => {
      dispatch(countUp());
    }, duration);
  };
};

export const countDownAsync = (duration) => {
  return async (dispatch) => {
    dispatch(countWaiting());

    setTimeout(() => {
      dispatch(countDown());
    }, duration);
  };
};
