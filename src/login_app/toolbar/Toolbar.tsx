import styles from "./Toolbar.module.css";

export const Toolbar: React.FC<{
  isLoggedIn: boolean;
  onLogout: () => void;
}> = (props) => {
  return (
    <div className={styles.toolbar}>
      <h3>Login</h3>
      <div className={styles.menu}>
        {props.isLoggedIn && <button onClick={props.onLogout}>Logout</button>}
      </div>
    </div>
  );
};
