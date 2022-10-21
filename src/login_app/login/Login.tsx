import { useState } from "react";
import { Card } from "../UI/Card";
import styles from "./Login.module.css";

export const Login: React.FC<{ onLogin: () => void }> = (props) => {
  return (
    <Card>
      <form className={styles.login}
        onSubmit={(event) => {
          event.preventDefault();
          props.onLogin();
        }}
      >
        <div className={styles.credentials}>
          <div className={styles.labels}>
            <label htmlFor="email">E-Mail</label>
            <label htmlFor="password">Password</label>
          </div>
          <div className={styles.inputs}>
            <input id="email" type="email" />
            <input id="password" type="password" />
          </div>
        </div>
        {<button type="submit">Login</button>}
      </form>
    </Card>
  );
};
