import { useEffect, useState } from "react";
import { CartContentsInfo } from "./cart/CartContentsInfo";
import { CartModal } from "./cart/CartModal";
import { CartContext } from "./cart/store/CartContext";
import { FoodList } from "./FoodList";
import { ICartItem } from "./model/ICartItem";
import { Item } from "./model/Item";
import { ShopItemList } from "./shopItems.tsx/ShopItemList";
import styles from "./ShoppingApp.module.css";
import { Toolbar } from "./toolbar/Toolbar";
import { Card } from "./ui/Card";

export const ShoppingApp: React.FC = () => {
  const [totalCartItemCount, setTotalCartItemCount] = useState(0);
  const [totalCartAmount, setTotalCartAmount] = useState(0);
  const setupCartItems = () => {
    const cartItems: ICartItem[] = [];
    FoodList.forEach((food: Item, index: number) => {
      cartItems[food.id] = { item: food, amount: 0 };
    });
    return cartItems;
  };
  const [cartItems, setCartItems] = useState<ICartItem[]>(setupCartItems());
  const [displayCart, setDisplayCart] = useState(false);

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

  const onOpenCartHandler = () => {
    setDisplayCart(true);
  };
  const onCloseCartHandler = () => {
    setDisplayCart(false);
  };

  useEffect(() => {
    const cartContentsInfo = new CartContentsInfo();
    setTotalCartItemCount(cartContentsInfo.calculateTotalItemCount(cartItems));
    setTotalCartAmount(cartContentsInfo.calculateTotalCartAmount(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        totalCartItemCount: totalCartItemCount,
        totalCartAmount: totalCartAmount,
        addItemToCartHandler: onAddItemToCartHandler,
        removeItemFromCartHandler: onRemoveItemFromCartHandler,
        openCartHandler: onOpenCartHandler,
        closeCartHandler: onCloseCartHandler,
      }}
    >
      <div id="backdrop"></div>
      <div id="overlay"></div>
      <div className={styles.shopping}>
        {displayCart && <CartModal />}
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
