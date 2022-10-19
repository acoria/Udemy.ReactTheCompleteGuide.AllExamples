import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { User } from "../model/User";
import styles from "./NewUser.module.css";

export const NewUser: React.FC<{ onNewUser: (newUser: User) => void }> = (
  props
) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);

  const onSubmitHandler: FormEventHandler = (event: FormEvent) => {
    event.preventDefault();
    props.onNewUser(new User(username, age));
  };

  const onUsernameChangedHandler = (event: any) => {
    setUsername(event.target.value);
  };

  const onAgeChangedHandler = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <div className={styles.newUser}>
      <form onSubmit={onSubmitHandler}>
        <label>Username</label>
        <input
          type="text"
          onChange={onUsernameChangedHandler}
          value={username}
        />
        <label>Age (Years)</label>
        <input type="number" onChange={onAgeChangedHandler} value={age} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
