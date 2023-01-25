import { useState } from "react";
import "./List.css";

export const List: React.FC = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const removeItemHandler = (selectedIndex: number) => {
    setItems((prevItems) => {
      return [...prevItems].filter((_, index) => index != selectedIndex);
    });
  };

  const addItemHandler = () => {
    setItems((prevItems) => {
      return [...prevItems, prevItems.length + 1];
    });
  };

  const listItems = items.map((item, index) => {
    return (
      <li
        key={index}
        className="ListItem"
        onClick={() => removeItemHandler(index)}
      >
        {item}
      </li>
    );
  });

  return (
    <div>
      <button className="Button" onClick={addItemHandler}>
        Add item to list
      </button>
      <p>Click item to remove it</p>
      <ul className="List">{listItems}</ul>
    </div>
  );
};
