import { useContext } from "react";
import { Card } from "../ui/Card";
import styles from "./Cart.module.css";
import { CartItem } from "./CartItem";
import { CartContext } from "./store/CartContext";

export const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);

  const hasItems =
    cartContext.cartItems.filter((cartItem) => cartItem.amount > 0).length > 0;

  return (
    <Card className={styles.cart}>
      <section className={styles.cartItems}>
        {cartContext.cartItems
          .filter((cartItem) => cartItem.amount > 0)
          .map((cartItem) => (
            <CartItem item={cartItem.item} key={cartItem.item.id} />
          ))}
      </section>
      <div className={styles.amount}>
        <h1 className={styles.totalLabel}>Total amount</h1>
        <h1>{`€${cartContext.totalCartAmount.toFixed(2)}`}</h1>
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.closeButton}
          onClick={cartContext.closeCartHandler}
        >
          Close
        </button>
        <span className={styles.mainActionButton}>
          {hasItems && <button>Order</button>}
        </span>
      </div>
    </Card>
  );
};
