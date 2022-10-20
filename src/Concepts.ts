import { IConcept } from "./concept/IConcept";
import { ExpensesApp } from "./expensesApp/ExpensesApp";
import { GoalApp } from "./goal_app/components/GoalApp";
import { SomeOtherApp } from "./masterDetail/SomeOtherApp";
import { UserApp } from "./user_app/UserApp";

export const concepts: IConcept[] = [
  { name: "User App", component: UserApp },
  { name: "My Goal App", component: GoalApp },
  { name: "Expenses App", component: ExpensesApp },
  { name: "Some other app2", component: SomeOtherApp },
];
