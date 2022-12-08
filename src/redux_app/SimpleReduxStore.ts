import { configureStore } from "@reduxjs/toolkit";
import { IReduxState } from "./IReduxState";

const initialState: IReduxState = { counter: 0, showCounter: true };
const counterReducer = (
  currentState: IReduxState = initialState,
  action: any
) => {
  if (action.type === "increment") {
    return {
      counter: currentState.counter + 1,
      showCounter: currentState.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: currentState.counter - 1,
      showCounter: currentState.showCounter,
    };
  }
  if (action.type === "add") {
    return {
      counter: currentState.counter + action.amount,
      showCounter: currentState.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: currentState.counter,
      showCounter: !currentState.showCounter,
    };
  }
  return initialState;
};

export const SimpleReduxStore = configureStore({ reducer: counterReducer });
