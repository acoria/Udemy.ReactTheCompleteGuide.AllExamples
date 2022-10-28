import { ReactNode } from "react";
import styles from "./ModalOverlay.module.css";

export const ModalOverlay: React.FC<{
  children: ReactNode;
}> = (props) => {
  return <div className={styles.moduleOverlay}>{props.children}</div>;
};
