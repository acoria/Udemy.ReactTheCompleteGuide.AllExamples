import { Card } from "../UI/Card";
import styles from "./LoggedIn.module.css";

export const LoggedIn: React.FC = () => {
  return (
    <Card className={styles.loggedIn}>
      <h2>You are now logged in!</h2>
    </Card>
  );
};
