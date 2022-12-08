import { useDispatch, useSelector } from "react-redux";
import { IReduxState } from "./IReduxState";

export const SimpleReduxApp: React.FC = () => {
  const counter = useSelector<IReduxState, number>((state) => state.counter);
  const showCounter = useSelector<IReduxState, boolean>(
    (state) => state.showCounter
  );
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const addHandler = () => {
    dispatch({ type: "add", amount: 5 });
  };
  const toggleHandler = () => {
    dispatch({ type: "toggle" });
  };
  return (
    <>
      {showCounter && (
        <div>
          <p>Counter:</p>
          <p>{counter}</p>
          <div>
            <button onClick={incrementHandler}>+ 1</button>
            <button onClick={decrementHandler}>- 1</button>
            <button onClick={addHandler}>Add 5</button>
          </div>
        </div>
      )}
      <button onClick={toggleHandler}>Toggle counter</button>
    </>
  );
};
