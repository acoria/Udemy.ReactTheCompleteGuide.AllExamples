import React from "react";

const MemoChildWithBooleanProp: React.FC<{ amIBeautiful: boolean }> = (
  props
) => {
  console.log("MemoChildWithBooleanProp evaluated");
  return <h1>MemoChildWithBooleanProp</h1>;
};

export default React.memo(MemoChildWithBooleanProp);
