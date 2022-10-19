import { useState } from "react";
import { User } from "../model/User";
import { NewUser } from "./NewUser";
import { UserList } from "./UserList";

export const UserApp: React.FC = () => {
  const [users, setUsers] = useState([new User("Jack", 23)]);

  const onNewUserHandler = (user: User) =>
    setUsers((prevUsers) => [user, ...prevUsers]);

  return (
    <div>
      <h2>User App</h2>
      <NewUser onNewUser={onNewUserHandler} />
      <UserList users={users} />
    </div>
  );
};
