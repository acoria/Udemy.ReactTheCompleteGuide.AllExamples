import { Item } from "../model/Item";
import { Card } from "../ui/Card";
import { ShopItem } from "./ShopItem";
import styles from "./ShopItemList.module.css";

export const ShopItemList: React.FC<{ items: Item[] }> = (props) => {
  // const wrapInDivider = (index: number, node: ReactNode) =>
  //   index < props.items.length - 1 && <hr>{node}</hr>;
  // const shopItem = (item: Item, index: number) => (
  //   <ShopItem key={index} item={item} />
  // );

  return (
    <Card className={styles.shopItemList}>
      {props.items.map((item, index) => (
        // wrapInDivider(index, shopItem(item, index))
        <ShopItem key={index} item={item} />
      ))}
    </Card>
  );
};
