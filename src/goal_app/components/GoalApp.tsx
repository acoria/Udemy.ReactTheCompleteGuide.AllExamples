import { GoalList } from "./GoalList";
import { NewGoal } from "./NewGoal";
import styles from "./GoalApp.module.css";
import { useState } from "react";
import { Goal } from "../model/Goal";

export const GoalApp: React.FC = () => {
  const [goals, setGoals] = useState([new Goal("Goal1"), new Goal("Goal2")]);

  const onNewGoalHandler = (newGoal: Goal) => {
    setGoals((oldGoals) => {
      return [newGoal, ...goals];
    });
  };

  const onDeleteGoalHandler = (goalId: number) => {
    setGoals((oldGoals) => {
      const newGoals: Goal[] = [];
      oldGoals
        .filter((goal) => {
          console.log(goalId);
          return goal.id !== goalId;
        })
        .forEach((goal) => newGoals.push(goal));
      return newGoals;
    });
  };

  return (
    <div className={styles.goalApp}>
      <NewGoal onNewGoal={onNewGoalHandler} />
      <GoalList onDeleteGoal={onDeleteGoalHandler} goals={goals} />
    </div>
  );
};
