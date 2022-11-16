import { useEffect, useState } from "react";
import { Card } from "../../ui/Card";
import { IPlant } from "./IPlant";
import styles from "./Plant.module.css";

export const Plant: React.FC = () => {
  const [name, setName] = useState("");
  const [plants, setPlants] = useState<IPlant[]>([]);

  const loadPlants = async () => {
    const response = await fetch("http://localhost:8080/api/plants");
    const jsonData = await response.json();
    const plants = [];
    for (const key in jsonData) {
      plants.push({ id: jsonData[key].id, name: jsonData[key].name });
    }
    setPlants(plants);
  };

  useEffect(() => {
    loadPlants();
  }, []);

  return (
    <div className={styles.plant}>
      <label htmlFor="plant">Plant</label>
      <input
        key="plant"
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button
        onClick={async () => {
          const response = await fetch("http://localhost:8080/api/plants", {
            method: "POST",
            body: JSON.stringify({ id: 0, name: name }),
            headers: { "Content-Type": "application/json" },
          });
          setName("");
          loadPlants();
        }}
      >
        Add plant
      </button>
      <h4>Plants:</h4>
      {plants.map((plant) => (
        <Card>
          <h4>{plant.name}</h4>
        </Card>
      ))}
    </div>
  );
};
