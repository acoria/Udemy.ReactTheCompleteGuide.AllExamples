import { IConcept } from "./concepts/IConcept";
import { ExpensesApp } from "./expensesApp/ExpensesApp";
import { GoalApp } from "./goal_app/components/GoalApp";
import { Playground } from "./playground_app/Playground";
import { UserApp } from "./user_app/UserApp";

export const concepts: IConcept[] = [
  { name: "User App", component: UserApp },
  { name: "My Goal App", component: GoalApp },
  { name: "Expenses App", component: ExpensesApp },
  { name: "Playground", component: Playground },
];