import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import styles from "./Toolbar.module.css";

export const Toolbar: React.FC = () => {
  const authContext = useContext(AuthContext);

  return (
    <div className={styles.toolbar}>
      <h3>Login App</h3>
      <div className={styles.menu}>
        {authContext.isLoggedIn && (
          <button onClick={authContext.logoutHandler}>Logout</button>
        )}
      </div>
    </div>
  );
};
