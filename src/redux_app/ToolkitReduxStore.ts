import { configureStore, createSlice } from "@reduxjs/toolkit";
import { IReduxState } from "./IReduxState";

const initialState: IReduxState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //method names act as unique identifier for actions
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      //unlike in the SimpleReduxStore, here the state is copied internally, so the state can be manipulated
      //"directly" and only the attributes that need changing have to be set
      state.counter--;
    },
    add(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export const ToolkitReduxStore = configureStore({
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;
