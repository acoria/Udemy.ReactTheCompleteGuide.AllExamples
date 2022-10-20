import { ReactNode } from "react";
import styles from "./Button.module.css";

export const Button: React.FC<{
  type?: JSX.IntrinsicElements["button"]["type"];
  onClick?: () => void;
  children: ReactNode;
}> = (props) => {
  return (
    <button className={styles.button} type={props.type || "button"}>
      {props.children}
    </button>
  );
};
