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
    if (cartItem == null) {
      newCartItems[item.id] = { item: item, amount: amount };
    } else {
      newCartItems[item.id] = {
        ...cartItem,
        amount: amountUpdateCalculation(cartItem.amount, amount),
      };
    }
    return newCartItems;
  }

  calculateTotalItemCount(cartItems: ICartItem[]): number {
    let totalItemCount = 0;
    cartItems.forEach((cartItem) => {
      totalItemCount = totalItemCount + cartItem.amount;
    });

    return totalItemCount;
  }

  calculateTotalCartAmount(cartItems: ICartItem[]): number {
    let totalAmount = 0;
    cartItems.forEach(
      (cartItem) =>
        (totalAmount = totalAmount + cartItem.amount * +cartItem.item.price)
    );
    return +totalAmount.toLocaleString("en-US", { minimumIntegerDigits: 2 });
  }
}
