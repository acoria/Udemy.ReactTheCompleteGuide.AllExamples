import "./NewExpensesOverview.css";

export const NewExpensesOverview = (props: any) => {
  return (
    <div className="new-expense-overview">
      <button onClick={() => props.onToggleToNewExpenses()}>
        Add new expense
      </button>
    </div>
  );
};
