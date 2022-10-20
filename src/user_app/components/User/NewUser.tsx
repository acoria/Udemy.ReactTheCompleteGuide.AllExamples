import { useState } from "react";
import { User } from "../../model/User";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import styles from "./NewUser.module.css";

export const NewUser: React.FC<{ onNewUser: (newUser: User) => void }> = (
  props
) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState<number>();

  const onUsernameChangedHandler = (event: any) => {
    setUsername(event.target.value);
  };

  const onAgeChangedHandler = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <Card>
      <form
        className={styles.newUser}
        onSubmit={(event) => {
          event.preventDefault();
          props.onNewUser(new User(username, age !== undefined ? age : 0));
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={onUsernameChangedHandler}
          value={username}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={onAgeChangedHandler}
          value={age}
        />
        <footer>
          <Button type="submit">Add user</Button>
        </footer>
      </form>
    </Card>
  );
};
