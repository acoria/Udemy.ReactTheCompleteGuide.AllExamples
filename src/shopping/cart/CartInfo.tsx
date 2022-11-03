import { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import styles from "./CartInfo.module.css";
import { CartContext } from "./store/CartContext";

export const CartInfo: React.FC = () => {
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
  const cartContext = useContext(CartContext);
  const totalCartItemCount = cartContext.totalCartItemCount;
  const className = `${styles.cartInfo} ${
    isButtonHighlighted ? styles.bump : ""
  }`;
  useEffect(() => {
    setIsButtonHighlighted(true);
    const timer = setTimeout(() => setIsButtonHighlighted(false), 300);
    setIsButtonHighlighted(true);
    return () => {
      clearTimeout(timer);
    };
  }, [totalCartItemCount]);

  return (
    <div className={className}>
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
