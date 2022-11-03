import { useContext, useState } from "react";
import { CartContext } from "../cart/store/CartContext";
import { Item } from "../model/Item";
import styles from "./ShopItem.module.css";

export const ShopItem: React.FC<{ item: Item }> = (props) => {
  const [amount, setAmount] = useState("1");
  const cartContext = useContext(CartContext);

  return (
    <section className={styles.shopItem}>
      <section className={styles.itemInfo}>
        <div className={styles.itemTitle}>
          <h3>{props.item.title}</h3>
        </div>
        <div className={styles.itemDescription}>
          <h3>{props.item.description}</h3>
        </div>
        <div className={styles.itemPrice}>
          <h3>{`€${props.item.price}`}</h3>
        </div>
      </section>
      <div className={styles.itemAmount}>
        <div className={styles.itemAmountInfo}>
          <label htmlFor="itemAmount">Amount</label>
          <input
            id="itemAmount"
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          ></input>
        </div>
        <button
          onClick={() => {
            cartContext.addItemToCartHandler(props.item, +amount);
            setAmount("1");
          }}
        >
          + Add
        </button>
      </div>
    </section>
  );
};
