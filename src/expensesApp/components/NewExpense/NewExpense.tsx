import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { NewExpensesOverview } from "./NewExpensesOverview";

const NewExpense = (props: any) => {
  const [showExpensesOverview, setShowExpensesOverview] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData: any) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const onToggleToOverviewHandler = () =>
    setShowExpensesOverview((showExpenses) => !showExpenses);

  const expenseContent = showExpensesOverview ? (
    <NewExpensesOverview onToggleToNewExpenses={onToggleToOverviewHandler} />
  ) : (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={onToggleToOverviewHandler}
      />
    </div>
  );

  return expenseContent;
};

export default NewExpense;
