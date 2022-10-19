import ExpenseItem from "../ExpensesCard/ExpenseItem";

export const ExpensesList = (props: any) => {
  if (props.items.length === 0) {
    return (
      <h4 style={{ color: "gray", paddingLeft: "1rem" }}>
        Sorry, there are no entries for your selection
      </h4>
    );
  }
  return (
    <ul className="expenses-list">
      {props.items.map((item: any, index: number) => {
        return (
          <ExpenseItem
            key={index}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
  );
};
