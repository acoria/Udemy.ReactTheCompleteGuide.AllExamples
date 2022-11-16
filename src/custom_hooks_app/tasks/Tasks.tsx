import { useEffect, useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { NewTask } from "./NewTask";
import { ITask } from "./Task";
import styles from "./Tasks.module.css";
import { TasksList } from "./TasksList";

export const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loadTasksRequestHandler = () => {
    loadTasks();
  };

  const addNewTaskHandler = (task: ITask) => {
    addTask(task);
  };

  const addTask = async (task: ITask) => {
    try {
      const response = await fetch(
        "https://udemy-react-the-complete-ff634-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
        {
          method: "POST",
          body: JSON.stringify(task),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch {}
  };

  useEffect(() => {
    setIsLoading(true);
    setError("");
    setTimeout(async () => {
      try {
        const response = await fetch(
          "https://udemy-react-the-complete-ff634-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
        );
        const jsonData = await response.json();
        const tasks: ITask[] = [];
        for (const key in jsonData) {
          tasks.push({ id: jsonData[key].id, title: jsonData[key].title });
        }
        setIsLoading(false);
        setTasks(tasks);
      } catch (error) {
        setIsLoading(false);
        setError("Server not responding");
      }
    }, 500);
  }, []);

  const loadTasks = () => {
    setIsLoading(true);
    setError("");
    setTimeout(async () => {
      try {
        const response = await fetch(
          "https://udemy-react-the-complete-ff634-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
        );
        const jsonData = await response.json();
        const tasks: ITask[] = [];
        for (const key in jsonData) {
          tasks.push({ id: jsonData[key].id, title: jsonData[key].title });
        }
        setIsLoading(false);
        setTasks(tasks);
      } catch (error) {
        setIsLoading(false);
        setError("Server not responding");
      }
    }, 500);
  };

  return (
    <div className={styles.tasks}>
      {error !== "" && <ErrorMessage error={error} />}
      <NewTask onAddNewTaskHandler={addNewTaskHandler} />
      <TasksList tasks={tasks} loadTasksRequest={loadTasksRequestHandler} />
      {isLoading && <h3>Loading...</h3>}
    </div>
  );
};
