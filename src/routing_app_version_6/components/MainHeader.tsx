import { NavLink, Outlet } from "react-router-dom";
import styles from "./MainHeader.module.css";

export const MainHeader: React.FC = () => {
  const applyStyling = ({ isActive }: { isActive: boolean }): any => {
    return isActive ? styles.active : "";
  };
  return (
    <>
      <ul>
        <li>
          <NavLink className={applyStyling} to={"welcome"}>
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink className={applyStyling} to={"products"}>
            Products
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
