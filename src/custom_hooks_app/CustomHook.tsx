import styles from "./CustomHook.module.css";
import { DownCounter } from "./DownCounter";
import { UpCounter } from "./UpCounter";

export const CustomHook: React.FC = () => {
  return (
    <div className={styles.customHook}>
      <UpCounter />
      <DownCounter />
    </div>
  );
};
