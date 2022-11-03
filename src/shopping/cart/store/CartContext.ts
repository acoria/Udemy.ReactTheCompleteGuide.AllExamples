import React from "react";
import { FoodList } from "../../FoodList";
import { Item } from "../../model/Item";

//initializing the context here has no effect but will later allow for code completion
export const CartContext = React.createContext({
  cartItems: [{ item: FoodList[0], amount: 0 }],
  totalCartItemCount: 0,
  totalCartAmount: 0,
  addItemToCartHandler: (item: Item, amount: number) => {},
  removeItemFromCartHandler: (item: Item, amount: number) => {},
  openCartHandler: () => {},
  closeCartHandler: () => {},
});
