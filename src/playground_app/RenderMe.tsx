import React from "react";

export const RenderMe: React.FC<{ name: string }> = (props) => {
  console.log("RenderMe");
  return <h1>{props.name}</h1>;
};
