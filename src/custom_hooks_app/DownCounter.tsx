import { Card } from "../ui/Card";
import styles from "./DownCounter.module.css";
import { useCounter } from "./useCounter";

export const DownCounter: React.FC = () => {
  const counter: number = useCounter((a) => a - 1);

  return (
    <Card className={styles.downCounter}>
      <h3>{counter}</h3>
    </Card>
  );
};
