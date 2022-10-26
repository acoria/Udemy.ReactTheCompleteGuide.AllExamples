import { FormEvent, useState } from "react";
import { Goal } from "../model/Goal";
import styles from "./NewGoal.module.css";

export const NewGoal: React.FC<{
  onNewGoal: (newGoal: Goal) => void;
}> = (props) => {
  const [goalName, setGoalName] = useState("");
  return (
    <div className={styles.newGoal}>
      <form
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          props.onNewGoal(new Goal(goalName));
          setGoalName("");
        }}
      >
        <input
          value={goalName}
          onChange={(event) => {
            // setGoalName(event.currentTarget.value);
            setGoalName(event.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
