import React from "react";
import { FoodList } from "../../FoodList";
import { Item } from "../../model/Item";

export const CartContext = React.createContext({
  cartItems: [{ itemId: FoodList[0].id, amount: 0 }],
  totalCartItemCount: 0,
  addItemHandler: (item: Item, amount: number) => {},
  removeItemHandler: (item: Item, amount: number) => {},
});
