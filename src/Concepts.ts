import { IConcept } from "./concept/IConcept";
import { ExpensesApp } from "./expensesApp/ExpensesApp";
import { GoalApp } from "./goal_app/components/GoalApp";
import { SomeOtherApp } from "./masterDetail/SomeOtherApp";

export const concepts: IConcept[] = [
  { name: "My Goal App", component: GoalApp },
  { name: "Expenses App", component: ExpensesApp },
  { name: "Some other app1", component: SomeOtherApp },
  { name: "Some other app2", component: SomeOtherApp },
  { name: "Some other app3", component: SomeOtherApp },
];
