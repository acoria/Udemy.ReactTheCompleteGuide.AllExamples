import { useState } from "react";
import { IConcept } from "../concepts/IConcept";
import { LoggedIn } from "./loggedIn/LoggedIn";
import { Login } from "./login/Login";
import { LoginApp } from "./LoginApp";
import styles from "./LoginApp.module.css";
import { Toolbar } from "./toolbar/Toolbar";

export class UserLoginWrapper implements IConcept {
  name = "Login";
  topics = [
    "LocalStorage",
    "Debouncing",
    "useEffect",
    "useReducer",
    "useContext",
  ];
//   component = LoginApp
  component: React.FC = () => {
    const isUserLoggedIn = () => localStorage.getItem(IS_LOGGED_IN) === "true";
    const IS_LOGGED_IN = "isLoggedIn";
    const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn());
    const onLoginHandler = () => {
      localStorage.setItem(IS_LOGGED_IN, "true");
      setIsLoggedIn(true);
    };

    const onLogoutHandler = () => {
      localStorage.setItem(IS_LOGGED_IN, "false");
      setIsLoggedIn(false);
    };

    return (
      <div className={styles.loginApp}>
        <Toolbar isAuthenticated={isLoggedIn} onLogout={onLogoutHandler} />
        {isLoggedIn ? <LoggedIn /> : <Login onLogin={onLoginHandler} />}
      </div>
    );
  };
}
