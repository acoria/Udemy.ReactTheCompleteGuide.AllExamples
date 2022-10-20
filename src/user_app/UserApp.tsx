import { useState } from "react";
import { User } from "./model/User";
import { NewUser } from "./components/User/NewUser";
import { UserList } from "./components/User/UserList";

export const UserApp: React.FC = () => {
  // const [users, setUsers] = useState<User[]>([]);
  const [users, setUsers] = useState([new User("Jack", "23")]);

  const onNewUserHandler = (user: User) =>
    setUsers((prevUsers) => [user, ...prevUsers]);

  return (
    <div>
      <div id="backdrop-root"/>
      <div id="overlay-root"/>
      <NewUser onNewUser={onNewUserHandler} />
      <UserList users={users} />
    </div>
  );
};
