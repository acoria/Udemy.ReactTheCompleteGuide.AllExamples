import { CartProvider } from "./cart/store/CartProvider";
import { FoodList } from "./FoodList";
import { ShopItemList } from "./shopItems.tsx/ShopItemList";
import styles from "./ShoppingApp.module.css";
import { Toolbar } from "./toolbar/Toolbar";
import { Card } from "./ui/Card";

export const ShoppingApp: React.FC = () => {
  return (
    <CartProvider>
      <div id="backdrop"></div>
      <div id="overlay"></div>
      <div className={styles.shopping}>
        <Toolbar />
        <main>
          <Card className={styles.description}>
            <h1>Delicious Food, Delivered To You</h1>
            <p>
              Choose your favorite meal from our broad selection of meals and
              enjoy a delicious lunch or dinner at home.
            </p>
            <p>
              All our meals are cooked with high-quality ingredients
              just-in-time and of course by experienced chefs!
            </p>
          </Card>
          <ShopItemList items={FoodList} />
        </main>
      </div>
    </CartProvider>
  );
};
