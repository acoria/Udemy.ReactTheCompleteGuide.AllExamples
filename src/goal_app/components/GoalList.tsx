import { Goal } from "../model/Goal";
import styles from "./GoalList.module.css";

export const GoalList: React.FC<{
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
}> = (props) => {
  return (
    <div className={styles.goalList}>
      {props.goals.map((goal) => {
        return (
          <div
            className={`${styles.goalList} ${styles.goalListItem}`}
            key={goal.id}
            onClick={() => props.onDeleteGoal(goal.id)}
          >
            <h2>{goal.name}</h2>
          </div>
        );
      })}
    </div>
  );
};
