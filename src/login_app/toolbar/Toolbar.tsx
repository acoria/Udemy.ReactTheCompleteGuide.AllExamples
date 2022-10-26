import { useContext } from "react";
import { AdminContext } from "../store/AdminContext";
import styles from "./Toolbar.module.css";

export const Toolbar: React.FC<{
  isAuthenticated: boolean;
  onLogout: () => void;
}> = (props) => {
  const adminContext = useContext(AdminContext);

  return (
    <div className={styles.toolbar}>
      <h3>Login App</h3>
      {adminContext.isAdmin && <h5> (AdminMode)</h5>}
      <div className={styles.menu}>
        {props.isAuthenticated && (
          <button onClick={props.onLogout}>Logout</button>
        )}
      </div>
    </div>
  );
};
