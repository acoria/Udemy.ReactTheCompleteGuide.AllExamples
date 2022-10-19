import { useState } from "react";
import Card from "../../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props: any) => {
  //useState can only be called directly in the function but not in nested parts
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("New title");
    //the title will not be up to date here yet because setTitle only queues the request
    //for setting the title and at this point title still contains the old value
    console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount + " €"}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
