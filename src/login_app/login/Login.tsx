import { useEffect, useState } from "react";
import { Card } from "../UI/Card";
import styles from "./Login.module.css";

export const Login: React.FC<{ onLogin: () => void }> = (props) => {
  const [email, setEmail] = useState("me@reactTraining.com");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const timerIdentifier = setTimeout(() => {
      setIsPasswordValid(password.trim().length > 2);
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
                isPasswordValid ? "" : styles.invalid
              }`}
            >
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
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
