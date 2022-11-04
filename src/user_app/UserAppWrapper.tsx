import { FC, useState } from "react";
import { IConcept } from "../concepts/IConcept";
import { NewUser } from "./components/User/NewUser";
import { UserList } from "./components/User/UserList";
import { User } from "./model/User";

export class UserAppWrapper implements IConcept {
  name = "User App";
  description = "The app allows for adding users to a list.";
  topics = [
    "Own components (Buttons, Cards)",
    "Fragments",
    "Portals",
    "Refs",
    "User input (two-way binding)",
    "Validation and resetting",
    "Modals",
  ];
  component: React.FC = () => {
    // const [users, setUsers] = useState<User[]>([]);
    const [users, setUsers] = useState([new User("Jack", "23")]);

    const onNewUserHandler = (user: User) =>
      setUsers((prevUsers) => [user, ...prevUsers]);

    return (
      <div>
        <div id="backdrop-root" />
        <div id="overlay-root" />
        <NewUser onNewUser={onNewUserHandler} />
        <UserList users={users} />
      </div>
    );
  };
}
