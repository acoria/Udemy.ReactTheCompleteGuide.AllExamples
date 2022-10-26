import { useContext } from "react";
import { LoggedIn } from "./loggedIn/LoggedIn";
import { Login } from "./login/Login";
import styles from "./LoginAppWithAuth.module.css";
import { AuthContext } from "./store/AuthContext";
import { Toolbar } from "./toolbar/Toolbar";

export const LoginAppWithAuthOverview: React.FC = () => {
  const authContext = useContext(AuthContext);
  return (
    <div className={styles.loginApp}>
      <Toolbar />
      {authContext.isLoggedIn ? <LoggedIn /> : <Login />}
    </div>
  );
};
