import { IConcept } from "./concept/IConcept";
import { GoalApp } from "./goal_app/components/GoalApp";
import { SomeOtherApp } from "./masterDetail/SomeOtherApp";

export const Concepts: IConcept[] = [
  { name: "Expenses App", component: SomeOtherApp },
  { name: "My Goal App", component: GoalApp },
  { name: "Course Goal App", component: GoalApp },
  { name: "Some other app1", component: SomeOtherApp },
  { name: "Some other app2", component: SomeOtherApp },
  { name: "Some other app3", component: SomeOtherApp },
];
