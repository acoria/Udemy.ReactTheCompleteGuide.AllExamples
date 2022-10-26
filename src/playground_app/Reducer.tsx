import { Reducer, useReducer } from "react";
import styles from "./Playground.module.css";

interface IState {}
interface INameState extends IState {
  name: string;
  age: number;
}

interface INameAction {
  newLastname: string;
}

interface IFirstnameAction extends INameAction {
  newFirstname: string;
}

const nameReducer = (prevState: INameState, action: INameAction) => {
  return { ...prevState, name: action.newLastname };
};

export const Playground: React.FC = () => {
  const [nameState, dispatchNameState] = useReducer<
    Reducer<INameState, INameAction>
  >(nameReducer, {
    name: "Sheldon",
    age: 3,
  });

  dispatchNameState({ newLastname: "Test" });

  return <div className={styles.playground}>{}</div>;
};
