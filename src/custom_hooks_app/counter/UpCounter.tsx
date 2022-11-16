import { Card } from "../../ui/Card";
import styles from "./UpCounter.module.css";
import { useCounter } from "./hooks/useCounter";

export const UpCounter: React.FC = () => {
  const counter = useCounter((a) => a + 1);

  return (
    <Card className={styles.upCounter}>
      <h3>{counter}</h3>
    </Card>
  );
};
