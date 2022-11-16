import { Card } from "../../ui/Card";
import { ITask } from "./Task";
import styles from "./TasksList.module.css";

export const TasksList: React.FC<{
  tasks: ITask[];
  loadTasksRequest: () => void;
}> = (props) => {
  return (
    <Card className={styles.tasksList}>
      <button onClick={props.loadTasksRequest}>Reload</button>
      <h4>Tasks:</h4>
      {props.tasks.map((task) => (
        <Card key={task.id} className={styles.singleTask}>
          <h3>{task.title}</h3>
        </Card>
      ))}
    </Card>
  );
};
