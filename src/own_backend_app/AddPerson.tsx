import { useState } from "react";
import { Card } from "../ui/Card";
import styles from "./AddPerson.module.css";

export const AddPerson: React.FC = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <Card className={styles.addPerson}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          fetch(
            `http://localhost:8080/api/persons?firstname=${firstname}&lastname=${lastname}`,
            {
              method: "POST",
            }
          );
          setFirstname("");
          setLastname("");
        }}
      >
        <label htmlFor="firstname">Firstname</label>
        <input
          key="firstname"
          type="text"
          onChange={(event) => {
            setFirstname(event.currentTarget.value);
          }}
          value={firstname}
        />
        <label htmlFor="lastname">Lastname</label>
        <input
          key="lastname"
          type="text"
          value={lastname}
          onChange={(event) => {
            setLastname(event.currentTarget.value);
          }}
        />
        <button type="submit">Add Person</button>
      </form>
    </Card>
  );
};
