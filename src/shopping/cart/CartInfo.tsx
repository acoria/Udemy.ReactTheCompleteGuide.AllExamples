import { useContext } from "react";
import CartIcon from "./CartIcon";
import styles from "./CartInfo.module.css";
import { CartContext } from "./store/CartContext";

export const CartInfo: React.FC = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className={styles.cartInfo}>
      <button onClick={cartContext.openCartHandler}>
        <CartIcon />
        {/* <img src="../images/shopping_cart.png"/> */}
        <div className={styles.cartName}>Your Cart</div>
        <div className={styles.itemAmount}>
          {cartContext.totalCartItemCount}
        </div>
      </button>
    </div>
  );
};
