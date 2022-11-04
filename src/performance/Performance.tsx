import { useCallback, useState } from "react";
import { AlwaysRenderChild } from "./AlwaysRenderChild";
import MemoChildWithBooleanProp from "./MemoChildWithBooleanProp";
import MemoChildWithFunctionProp from "./MemoChildWithFunctionProp";

export const Performance: React.FC = () => {
  const [someStateToChange, setSomeStateToChange] = useState(true);
  const someFunction = () => {};
  const someFunctionAsCallback = useCallback(someFunction, []);

  return (
    <div>
      {/* Children are always re-evaluated when the parent is re-evaluated */}
      <AlwaysRenderChild />
      {/* Children wrapped in memo are only re-evaluated when their props change (since their props are cached) */}
      <MemoChildWithBooleanProp amIBeautiful={true} />
      {/* This child re-evaluates despite of being wrapped in memo because "someFunction" is created newly every time the parent is recreated */}
      <MemoChildWithFunctionProp
        makeMeBeautiful={someFunction}
        calledWithCallback={false}
      />
      {/* To avoid re-evaluation, the function that is passed needs to be wrapped in "useCallback" */}
      <MemoChildWithFunctionProp
        makeMeBeautiful={someFunctionAsCallback}
        calledWithCallback={true}
      />
      <button onClick={() => setSomeStateToChange((prevState) => !prevState)}>
        Trigger Re-evaluation
      </button>
    </div>
  );
};
