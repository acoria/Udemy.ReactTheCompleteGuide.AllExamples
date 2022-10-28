import { useEffect, useState } from "react";
import { CartContentsInfo } from "./cart/CartContentsInfo";
import { CartContext } from "./cart/store/CartContext";
import { FoodList } from "./FoodList";
import { ICartItem } from "./model/ICartItem";
import { Item } from "./model/Item";
import { ShopItemList } from "./shopItems.tsx/ShopItemList";
import styles from "./Shopping.module.css";
import { Toolbar } from "./toolbar/Toolbar";
import { Card } from "./ui/Card";

export const Shopping: React.FC = () => {
  const [totalCartItemCount, setTotalCartItemCount] = useState(0);
  //TODO: add empty array
  const [cartItems, setCartItems] = useState<ICartItem[]>([
    { itemId: FoodList[1].id, amount: 0 },
  ]);

  const onAddItemToCartHandler = (item: Item, amount: number) => {
    const newCardItems = new CartContentsInfo().addToCartContents(
      cartItems,
      item,
      amount
    );
    setCartItems(newCardItems);
  };

  const onRemoveItemFromCartHandler = (item: Item, amount: number) => {
    const newCardItems = new CartContentsInfo().removeFromCartContents(
      cartItems,
      item,
      amount
    );
    setCartItems(newCardItems);
  };

  useEffect(() => {
    setTotalCartItemCount(
      new CartContentsInfo().calculateTotalItemCount(cartItems)
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        totalCartItemCount: totalCartItemCount,
        addItemHandler: onAddItemToCartHandler,
        removeItemHandler: onRemoveItemFromCartHandler,
      }}
    >
      <div className={styles.shopping}>
        <Toolbar />
        <Card className={styles.description}>
          <h1>Delicious Food, Delivered To You</h1>
          <p>
            Choose your favorite meal from our broad selection of meals and
            enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients just-in-time
            and of course by experienced chefs!
          </p>
        </Card>
        <ShopItemList items={FoodList} />
      </div>
    </CartContext.Provider>
  );
};
