import React from "react";

const DoNotRenderMe: React.FC<{ passSomething: () => void }> = (props) => {
  console.log("DoNotRenderMe");
  return <h1>My static text</h1>;
};
export default React.memo(DoNotRenderMe);
