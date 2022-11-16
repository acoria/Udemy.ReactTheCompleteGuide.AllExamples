import { useState } from "react";
import { AddPerson } from "./AddPerson";
import { IPerson } from "./IPerson";
import styles from "./OwnBackendApp.module.css";
import { PersonList } from "./PersonList";

export const OwnBackendApp: React.FC = () => {
  const [persons, setPersons] = useState<IPerson[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const mapToPerson = (json: any): IPerson[] => {
    return json.map((personData: any) => {
      return {
        firstname: personData.firstname,
        lastname: personData.lastname,
        age: personData.age,
      };
    });
  };

  const getPersons = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/persons");
      const json = await response.json();
      setPersons(mapToPerson(json));
    } catch (error) {
      setErrorMessage("Server error. Is it running?");
    }
  };
  getPersons();
  return (
    <div className={styles.ownBackendApp}>
      {errorMessage !== "" && <h3>{`Oops: ${errorMessage}`}</h3>}
      <AddPerson />
      <PersonList persons={persons} />
    </div>
  );
};
