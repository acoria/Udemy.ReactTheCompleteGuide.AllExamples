import { User } from "../../model/User";
import { Card } from "../UI/Card";
import styles from "./UserList.module.css";

export const UserList: React.FC<{ users: User[] }> = (props) => {
  const userList = props.users.map((user) => {
    return <li key={user.id}>{`${user.name} (${user.age} years old)`}</li>;
  });

  return (
    <Card className={styles.userList}>
      <ul>{userList}</ul>
    </Card>
  );
};
