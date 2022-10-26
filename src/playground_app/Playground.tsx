import { useState } from "react";
import { DoNotRenderMe } from "./DoNotRenderMe";
import styles from "./Playground.module.css";
import { RenderMe } from "./RenderMe";

let counter = 1;

export const Playground: React.FC = () => {
  const [text, setText] = useState("Text");
  return (
    <div className={styles.playground}>
      <RenderMe name={text} />
      <DoNotRenderMe />
      <button
        onClick={() => {
          counter = counter + 1;
          setText(`${counter} - new Text`);
        }}
      >
        Change state
      </button>
    </div>
  );
};
