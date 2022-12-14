import { Item } from "../model/Item";
import { ICartItem } from "../model/ICartItem";

export class CartContentsInfo {
  addToCartContents(
    cartItems: ICartItem[],
    item: Item,
    amount: number
  ): ICartItem[] {
    return this.updateCartContents(
      cartItems,
      item,
      amount,
      (oldAmount: number, updateAmount: number) => {
        return oldAmount + updateAmount;
      }
    );
  }

  removeFromCartContents(
    cartItems: ICartItem[],
    item: Item,
    amount: number
  ): ICartItem[] {
    return this.updateCartContents(
      cartItems,
      item,
      amount,
      (oldAmount: number, updateAmount: number) => {
        return oldAmount - updateAmount;
      }
    );
  }

  private updateCartContents(
    cartItems: ICartItem[],
    item: Item,
    amount: number,
    amountUpdateCalculation: (oldAmount: number, updateAmount: number) => number
  ) {
    const newCartItems = [...cartItems];
    const cartItem = cartItems[item.id];
    newCartItems[item.id] = {
      ...cartItem,
      amount: amountUpdateCalculation(cartItem.amount, amount),
    };
    return newCartItems;
  }

  calculateTotalItemCount(cartItems: ICartItem[]): number {
    return cartItems.reduce((prevCount, cartItem) => {
      return prevCount + cartItem.amount;
    }, 0);
  }

  calculateTotalCartAmount(cartItems: ICartItem[]): number {
    return cartItems.reduce(
      (prevPrice, cartItem) =>
        prevPrice + cartItem.amount * +cartItem.item.price,
      0
    );
  }
}
