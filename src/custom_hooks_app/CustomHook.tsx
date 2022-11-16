import styles from "./CustomHook.module.css";
import { DownCounter } from "./counter/DownCounter";
import { UpCounter } from "./counter/UpCounter";
import { Tasks } from "./tasks/Tasks";

export const CustomHook: React.FC = () => {
  return (
    <div className={styles.customHook}>
      <section>
        <h1>Counters</h1>
        <UpCounter />
        <DownCounter />
      </section>
      <section>
        <h1>Tasks</h1>
        <Tasks />
      </section>
    </div>
  );
};
