import { useContext } from "react";
import { Item } from "../model/Item";
import styles from "./CartItem.module.css";
import { CartContext } from "./store/CartContext";

export const CartItem: React.FC<{ item: Item }> = (props) => {
  const cartContext = useContext(CartContext);
  const itemCount = () => cartContext.cartItems[props.item.id].amount;

  const onAddItemHandler = () => {
    cartContext.addItemToCartHandler(props.item, 1);
  };

  const onRemoveItemHandler = () => {
    cartContext.removeItemFromCartHandler(props.item, 1);
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.itemInfo}>
        <h1>{props.item.title}</h1>
        <div className={styles.amounts}>
          <h3>{`€${props.item.price}`}</h3>
          <input value={`x ${itemCount()}`} readOnly />
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={onRemoveItemHandler}>-</button>
        <button onClick={onAddItemHandler}>+</button>
      </div>
      <div></div>
    </div>
  );
};
