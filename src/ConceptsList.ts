import { IConcept } from "./concepts/IConcept";
import { CustomHooksWrapper } from "./custom_hooks_app/CustomHooksWrapper";
import { ExpensesAppWrapper } from "./expensesApp/ExpensesAppWrapper";
import { FormAppWrapper } from "./form_app/FormAppWrapper";
import { GoalAppWrapper } from "./goal_app/GoalAppWrapper";
import { LoginAppWrapper } from "./login_app/LoginAppWrapper";
import { LoginAppWithAuthWrapper } from "./login_app_with_auth_component/LoginAppWithAuthWrapper";
import { MovieAppWrapper } from "./movie_app/MovieAppWrapper";
import { OwnBackendAppWrapper } from "./own_backend_app/OwnBackendAppWrapper";
import { PerformanceWrapper } from "./performance/PerformanceWrapper";
import { PlaygroundWrapper } from "./playground_app/PlaygroundWrapper";
import { ReduxWrapper } from "./redux_app/ReduxWrapper";
import { RoutingAppWrapper } from "./routing_app/RoutingAppWrapper";
import { ShoppingAppWrapper } from "./shopping/ShoppingAppWrapper";
import { UserAppWrapper } from "./user_app/UserAppWrapper";

export const concepts: IConcept[] = [
  {
    name: "Routing",
    description:
      "Works with library 'React-Router' (react-router-dom@5) to enable client-site routing of pages.",
    topics: [
      "BrowserRouter: Wrap your application into this component to enable routing",
      "Route: Define a route which can be navigated to e.g. /products",
      "Link: Define a link -> A wrapper around an '<a href..> element without the disadvantage of reloading the entire page (optionally)",
      "NavLink: Same as link but with the possibility to define an activeClassName to highlight that a certain page is active",
      "useParams: Hook to transfer parameters within the url",
      "useHistory: To navigate imperatively/navigate a user to a page",
      "Prompt: prevent unwanted transitions -> ensure data is not lost by navigating mistakenly to another page",
      "useLocation: To extract query parameters from the url"
    ],
    component: RoutingAppWrapper,
  },
  {
    name: "Redux",
    description:
      "Works with library 'Redux' to handle state externally by a store.",
    component: ReduxWrapper,
  },
  { name: "Forms", component: FormAppWrapper },
  { name: "Custom Hooks", component: CustomHooksWrapper },
  {
    name: "Own Backend",
    description: "Connects to a local backend",
    component: OwnBackendAppWrapper,
  },
  {
    name: "Movies",
    topics: ["Asynchronous REST calls"],
    component: MovieAppWrapper,
  },
  {
    name: "Playground",
    description:
      "This is a playground for trying out anything you want. So go crazy!",
    component: PlaygroundWrapper,
  },
  {
    name: "Performance",
    description: "Contains performance improvements",
    topics: ["React.memo()", "useCallback()", "useMemo()"],
    component: PerformanceWrapper,
  },
  {
    name: "Food ordering",
    description: "Order food online",
    topics: ["All principles needed for a basic React App"],
    component: ShoppingAppWrapper,
  },
  {
    name: "Login with AuthComponent",
    topics: [
      "React context with a separate AuthComponent handling login/logout",
    ],
    component: LoginAppWithAuthWrapper,
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
    component: LoginAppWrapper,
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
    component: UserAppWrapper,
  },
  { name: "My Goal App", component: GoalAppWrapper },
  { name: "Expenses App", component: ExpensesAppWrapper },
];
