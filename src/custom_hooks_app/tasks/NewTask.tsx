import { useState } from "react";
import { Card } from "../../ui/Card";
import styles from "./NewTask.module.css";
import { ITask } from "./Task";

export const NewTask: React.FC<{
  onAddNewTaskHandler: (task: ITask) => void;
}> = (props) => {
  const [title, setTitle] = useState("");

  return (
    <Card className={styles.newTask}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.onAddNewTaskHandler({ id: "0", title: title });
          setTitle("");
        }}
      >
        <label htmlFor="task">Task</label>
        <input
          key="task"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </Card>
  );
};
