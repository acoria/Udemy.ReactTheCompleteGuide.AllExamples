import { useContext } from "react";
import { Card } from "../ui/Card";
import styles from "./Cart.module.css";
import { CartItem } from "./CartItem";
import { CartContext } from "./store/CartContext";

export const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);

  return (
    <Card className={styles.cart}>
      {cartContext.cartItems
        .filter((cartItem) => cartItem !== undefined && cartItem.amount > 0)
        .map((cartItem) => (
          <CartItem item={cartItem.item} key={cartItem.item.id} />
        ))}
      <div className={styles.amount}>
        {/* <hr></hr> */}
        <h1 className={styles.totalLabel}>Total amount</h1>
        <h1>{`€${cartContext.totalCartAmount}`}</h1>
      </div>
    </Card>
  );
};
