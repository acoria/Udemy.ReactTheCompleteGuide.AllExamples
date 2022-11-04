import { IConcept } from "./concepts/IConcept";
import { ExpensesApp } from "./expensesApp/ExpensesApp";
import { GoalApp } from "./goal_app/components/GoalApp";
import { LoginApp } from "./login_app/LoginApp";
import { LoginAppWithAuth } from "./login_app_with_auth_component/LoginAppWithAuth";
import { Playground } from "./playground_app/Playground";
import { Performance } from "./performance/Performance";
import { ShoppingApp } from "./shopping/ShoppingApp";
import { UserApp } from "./user_app/UserApp";

export const concepts: IConcept[] = [
  { name: "Playground", component: Playground },
  { name: "Performance", description: "Contains performance improvements", topics: ["React.memo()", "useCallback()", "useMemo()"], component: Performance },
  {
    name: "Food ordering",
    description: "Order food online",
    topics: ["All principles needed for a basic React App"],
    component: ShoppingApp,
  },
  {
    name: "Login with AuthComponent",
    topics: [
      "React context with a separate AuthComponent handling login/logout",
    ],
    component: LoginAppWithAuth,
  },
  {
    name: "Login",
    topics: [
      "LocalStorage",
      "Debouncing",
      "useEffect()",
      "useReducer()",
      "useContext()",
    ],
    component: LoginApp,
  },
  {
    name: "User App",
    description: "The app allows for adding users to a list.",
    topics: [
      "Own components (Buttons, Cards)",
      "Fragments",
      "Portals",
      "Refs",
      "User input (two-way binding)",
      "Validation and resetting",
      "Modals",
    ],
    component: UserApp,
  },
  { name: "My Goal App", component: GoalApp },
  { name: "Expenses App", component: ExpensesApp },
];
