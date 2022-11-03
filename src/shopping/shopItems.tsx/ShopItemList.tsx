import { Item } from "../model/Item";
import { Card } from "../ui/Card";
import { ShopItem } from "./ShopItem";
import styles from "./ShopItemList.module.css";

export const ShopItemList: React.FC<{ items: Item[] }> = (props) => {
  return (
    <Card className={styles.shopItemList}>
      <ul>
        {props.items.map((item) => (
          <li>
            <ShopItem key={item.id} item={item} />
          </li>
        ))}
      </ul>
    </Card>
  );
};
