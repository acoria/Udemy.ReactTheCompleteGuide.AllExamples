import { NavLink, Outlet } from "react-router-dom";
import styles from "./MainHeader.module.css";

export const MainHeader: React.FC = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? styles.active : "";
            }}
            to={"welcome"}
          >
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? styles.active : "";
            }}
            to={"products"}
          >
            Products
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
