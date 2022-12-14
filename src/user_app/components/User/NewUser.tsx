import { useRef, useState } from "react";
import { User } from "../../model/User";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import { ErrorModal } from "../UI/errorModal/ErrorModal";
import { ModalError } from "../UI/errorModal/ModalError";
import styles from "./NewUser.module.css";

export const NewUser: React.FC<{ onNewUser: (newUser: User) => void }> = (
  props
) => {
  const [username, setUsername] = useState("");
  const age = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<ModalError>();

  const onUsernameChangedHandler = (event: any) => {
    setUsername(event.target.value);
  };

  const errorModalDismissHandler = () => {
    setError(undefined);
  };

  return (
    <div>
      {error && (
        <ErrorModal error={error!!} onDismiss={errorModalDismissHandler} />
      )}
      <Card>
        <form
          className={styles.newUser}
          onSubmit={(event) => {
            event.preventDefault();
            if (
              username.trim().length === 0 ||
              age.current == null ||
              age.current.value.trim().length === 0
            ) {
              setError(
                new ModalError(
                  "Not enough information",
                  "Fill out username and age"
                )
              );
              return;
            }
            //+ converts string to number
            if (+age.current.value < 1) {
              setError(new ModalError("Invalid age", "Enter an age > 0"));
              return;
            }

            props.onNewUser(new User(username, age.current.value));
            setUsername("");
            age.current.value = "";
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
          <input id="age" type="number" ref={age} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};
