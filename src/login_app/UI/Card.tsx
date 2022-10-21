import { ReactNode } from "react";
import styles from "./Card.module.css";

export const Card: React.FC<{ className?: string; children: ReactNode }> = (
  props
) => {
  return (
    <div className={`${props.className} ${styles.card}`}>{props.children}</div>
  );
};
