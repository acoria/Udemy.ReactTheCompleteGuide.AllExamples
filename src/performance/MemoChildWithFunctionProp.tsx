import React from "react";

const MemoChildWithFunctionProp: React.FC<{
  makeMeBeautiful: () => void;
  calledWithCallback: boolean;
}> = (props) => {
  const componentName = `MemoChildWithFunctionProp${
    props.calledWithCallback ? " -called with callback-" : ""
  }`;
  console.log(`${componentName} evaluated`);
  return <h1>{componentName}</h1>;
};

export default React.memo(MemoChildWithFunctionProp);
