import { ReactNode, useEffect, useState } from "react";
import { FoodList } from "../../FoodList";
import { ICartItem } from "../../model/ICartItem";
import { Item } from "../../model/Item";
import { CartContentsInfo } from "../CartContentsInfo";
import { CartModal } from "../CartModal";
import { CartContext } from "./CartContext";

export const CartProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [totalCartItemCount, setTotalCartItemCount] = useState(0);
  const [totalCartAmount, setTotalCartAmount] = useState(0);
  const setupCartItems = () => {
    const cartItems: ICartItem[] = [];
    FoodList.forEach((food: Item) => {
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
      {displayCart && <CartModal />}
      {props.children}
    </CartContext.Provider>
  );
};
