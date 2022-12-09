import { useDispatch, useSelector } from "react-redux";
import { IReduxState } from "./IReduxState";
import { counterActions } from "./ToolkitReduxStore";

export const ToolkitReduxApp: React.FC = () => {
  const counter = useSelector<IReduxState, number>((state) => state.counter);
  const showCounter = useSelector<IReduxState, boolean>(
    (state) => state.showCounter
  );
  const dispatch = useDispatch();

  const incrementHandler = () => {
    //action creator method, which creates an action object (with unique identifier, so literals are no longer necessary)
    dispatch(counterActions.increment());
    // dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const addHandler = () => {
    //creates object such as { type: SOME_UNIQUE_IDENTIFIER, payload: 5 }
    dispatch(counterActions.add(5));
  };
  const toggleHandler = () => {
    dispatch(counterActions.toggle());
  };
  return (
    <>
      {showCounter && (
        <div>
          <p>Counter:</p>
          <p>{counter}</p>
          <div>
            <button onClick={incrementHandler}>+ 1 with toolkit</button>
            <button onClick={decrementHandler}>- 1 with toolkit</button>
            <button onClick={addHandler}>Add 5</button>
          </div>
        </div>
      )}
      <button onClick={toggleHandler}>Toggle with toolkit</button>
    </>
  );
};
