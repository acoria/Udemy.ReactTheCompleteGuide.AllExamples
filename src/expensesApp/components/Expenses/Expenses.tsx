import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { ExpensesChart } from "./ExpensesChart";
import { ExpensesList } from "./ExpensesList/ExpensesList";

const Expenses = (props: any) => {
  const [filteredYear, setFilteredYear] = useState(2022);

  const filteredItems = props.items.filter((item: any) => {
    return item.date.getFullYear().toString() === filteredYear.toString();
  });

  const onFilterChangedHandler = (year: number) => {
    setFilteredYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterChanged={onFilterChangedHandler}
      />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items={filteredItems} />
    </Card>
  );
};

export default Expenses;
