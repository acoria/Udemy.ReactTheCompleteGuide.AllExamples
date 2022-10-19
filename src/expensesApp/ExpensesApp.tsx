import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const myExpenses = [
  { title: "Udemy courses", amount: 13.99, date: new Date(2019, 9, 13) },
  { title: "Coffee", amount: 50.99, date: new Date(2022, 2, 13) },
  { title: "Cellar shelves", amount: 83.39, date: new Date(2020, 11, 13) },
  { title: "Wall pictures", amount: 243.3, date: new Date(Date.now()) },
  { title: "Books", amount: 140, date: new Date(2021, 10, 13) },
];

export const ExpensesApp: React.FC = () => {
  const [expenses, setExpenses] = useState(myExpenses);
  console.log(expenses);

  const addExpenseHandler = (expense: any) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
