import { useContext } from "react";
import styles from "./CartInfo.module.css";
import { CartContext } from "./store/CartContext";

export const CartInfo: React.FC = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className={styles.cartInfo}>
      <button onClick={cartContext.openCartHandler}>
        {/* <img src="../images/shopping_cart.png"/> */}
        <div className={styles.cartName}>Your Cart</div>
        <div className={styles.itemAmount}>
          {cartContext.totalCartItemCount}
        </div>
      </button>
    </div>
  );
};
