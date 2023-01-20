import { Link, NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css";

//NavLink is an addition to Link. It allows for an activeClassName to style it when it is selected

export const MainHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            {/*Compatibility issues with Router dom 5 -> 6 */}
            {/* <NavLink activeClassName={styles.active} to="/welcome"> */}
            <NavLink to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            {/* <NavLink activeClassName={styles.active} to="/products"> */}
            <NavLink to="/products">
              Products
            </NavLink>
          </li>
          <li>
            {/* <NavLink activeClassName={styles.active} to="/history"> */}
            <NavLink to="/history">
              History
            </NavLink>
          </li>
          <li>
            {/* <NavLink activeClassName={styles.active} to="/inputWithPrompt"> */}
            <NavLink to="/inputWithPrompt">
              Input with Prompt
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
