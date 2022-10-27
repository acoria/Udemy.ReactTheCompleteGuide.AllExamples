import { ReactNode } from "react";
import styles from "./Card.module.css";

export const Card: React.FC<{ className?: string; children?: ReactNode }> = (
  props
) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};
