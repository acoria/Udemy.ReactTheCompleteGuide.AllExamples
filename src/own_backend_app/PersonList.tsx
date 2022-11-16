import { Card } from "../ui/Card";
import { IPerson } from "./IPerson";
import styles from "./PersonList.module.css";

export const PersonList: React.FC<{ persons: IPerson[] }> = (props) => {
  return (
    <div className={styles.personList}>
      {props.persons.map((person, index) => (
        <Card key={index}>
          <h1>{person.firstname}</h1>
          <h1>{person.lastname}</h1>
        </Card>
      ))}
    </div>
  );
};
