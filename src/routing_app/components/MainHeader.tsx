import { Link, NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css";

export const MainHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/history">
              History
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/inputWithPrompt">
              Input with Prompt
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
