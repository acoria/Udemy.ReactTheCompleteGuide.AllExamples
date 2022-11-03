import { CartInfo } from "../cart/CartInfo";
import styles from "./Toolbar.module.css";

export const Toolbar: React.FC = () => {
  return (
    <header className={styles.toolbar}>
      <h1>React Meals</h1>
      <div className={styles.cartInfo}>
        <CartInfo />
      </div>
    </header>
  );
};
