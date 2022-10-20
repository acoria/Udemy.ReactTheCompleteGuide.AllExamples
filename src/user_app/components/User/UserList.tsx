import { User } from "../../model/User";
import styles from "./UserList.module.css";

export const UserList: React.FC<{ users: User[] }> = (props) => {
  const userList = props.users.map((user) => {
    return <p key={user.id}>{`${user.name} (${user.age} years old)`}</p>;
  });

  return <div className={styles.userList}>{userList}</div>;
};
