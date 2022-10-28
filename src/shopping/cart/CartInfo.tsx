import { useContext } from "react";
import styles from "./CartInfo.module.css";
import { CartContext } from "./store/CartContext";

export const CartInfo: React.FC = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className={styles.cartInfo}>
      <button>
        {/* <img src=""/> */}
        <div className={styles.cartName}>Your Cart</div>
        <div className={styles.itemAmount}>
          {cartContext.totalCartItemCount}
        </div>
      </button>
    </div>
  );
};
