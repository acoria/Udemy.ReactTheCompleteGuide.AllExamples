import { useEffect, useReducer, useState } from "react";
import { Card } from "../UI/Card";
import styles from "./Login.module.css";
import { IAction } from "./reducer/IAction";
import { PasswordChangeAction } from "./reducer/PasswordChangeAction";

type PasswordState = { password: string; isPasswordValid: boolean };
const passwordReducer = (prevState: PasswordState, action: IAction) => {
  if (action.type === PasswordChangeAction.TYPE) {
    const newPassword = (action as PasswordChangeAction).password;
    return {
      password: newPassword,
      isPasswordValid: newPassword.trim().length > 2,
    };
  }
  //There is also the possibility to access the previous state by prevState variable

  //Default
  return { password: "", isPasswordValid: false };
};

export const Login: React.FC<{ onLogin: () => void }> = (props) => {
  const [email, setEmail] = useState("me@reactTraining.com");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    password: "",
    isPasswordValid: false,
  });

  useEffect(() => {
    const timerIdentifier = setTimeout(() => {
      setIsFormValid(email.includes("@") && password.trim().length > 2);
      console.log("Validity changed");
    }, 500);
    //a cleanup function can be returned, which is executed every time
    //the component is destructed (when a reload is triggered)
    return () => {
      console.log("CLEANUP");
      clearTimeout(timerIdentifier);
    };
  }, [email, password]);

  return (
    <Card>
      <form
        className={styles.login}
        onSubmit={(event) => {
          event.preventDefault();
          props.onLogin();
        }}
      >
        <h3>Login</h3>
        <div className={styles.credentials}>
          <div className={styles.labels}>
            <label htmlFor="email">E-Mail</label>
            <label htmlFor="password">Password</label>
          </div>
          <div className={styles.inputs}>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
            <div
              className={`${styles.inputs} ${
                passwordState.isPasswordValid ? "" : styles.invalid
              }`}
            >
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.currentTarget.value);
                  //this is only used to demonstrate the useReducer functionality
                  dispatchPassword(
                    new PasswordChangeAction(event.currentTarget.value)
                  );
                }}
              />
            </div>
          </div>
        </div>
        {
          <button type="submit" disabled={!isFormValid}>
            Login
          </button>
        }
      </form>
    </Card>
  );
};
