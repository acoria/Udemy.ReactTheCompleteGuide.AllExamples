import { IConcept } from "./concepts/IConcept";
import { ExpensesApp } from "./expensesApp/ExpensesApp";
import { GoalApp } from "./goal_app/components/GoalApp";
import { Playground } from "./playground_app/Playground";
import { UserApp } from "./user_app/UserApp";

export const concepts: IConcept[] = [
  { name: "User App", description: "The app allows for adding users to a list.", topics: ["Own components (Buttons, Cards)","Fragments", "Portals", "Refs", "User input (two-way binding)", "Validation and resetting", "Modals"], component: UserApp },
  { name: "My Goal App", component: GoalApp },
  { name: "Expenses App", component: ExpensesApp },
  { name: "Playground", component: Playground },
];