import { useContext } from "react";
import { useEffect, useReducer, useState } from "react";
import { AuthContext } from "../store/AuthContext";
import { Card } from "../UI/Card";
import styles from "./Login.module.css";

type passwordAction =
  | { type: "PASSWORD_CHANGE"; newPassword: "" }
  | { type: "DO_NOTHING" }; //example for another action

type PasswordState = { password: string; isPasswordValid: boolean };
const passwordReducer = (
  prevState: PasswordState,
  passwordAction: passwordAction
) => {
  switch (passwordAction.type) {
    case "PASSWORD_CHANGE":
      return {
        password: passwordAction.newPassword,
        isPasswordValid: passwordAction.newPassword.trim().length > 2,
      };
  }
  //There is also the possibility to access the previous state by prevState variable
  //Default
  return { password: "", isPasswordValid: false };
};
export const Login: React.FC = () => {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("me@reactTraining.com");
  const [isFormValid, setIsFormValid] = useState(false);

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    password: "",
    isPasswordValid: false,
  });

  //By pulling out properties from the state and handling them over to the useEffect, you can
  //prevent the useEffect from being triggered every time the state changes
  const { password } = passwordState;

  useEffect(() => {
    const timerIdentifier = setTimeout(() => {
      setIsFormValid(email.includes("@") && password.trim().length > 2);
      console.log("Validity changed");
    }, 300);
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
          authContext.loginHandler();
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
                value={passwordState.password}
                onChange={(event) => {
                  //this is only used to demonstrate the useReducer functionality
                  //it does not actually make much more sense to use it instead of the useEffect
                  dispatchPassword({
                    type: "PASSWORD_CHANGE",
                    newPassword: event.currentTarget.value,
                  } as passwordAction);
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
