import { useState } from "react";
import { Animal } from "./model/Animal";
import styles from "./AddAnimal.module.css";

export const AddAnimal: React.FC<{ addAnimal: (animal: Animal) => void }> = (
  props
) => {
  const [animalName, setAnimalName] = useState("");
  const [animalHabitat, setAnimalHabitat] = useState("");

  const createAnimal = (): Animal => {
    const animal = new Animal();
    animal.name = animalName;
    animal.habitat = animalHabitat;
    return animal;
  };

  return (
    <div className={styles.animalInNativeCss}>
        <h2>Test</h2>
      {/* <div className="animalInNativeCss"> */}
      <label htmlFor="animalName">Animal name</label>
      <input
        key="animalName"
        type="text"
        onChange={(event) => {
          setAnimalName(event.target.value);
        }}
      />
      <label htmlFor="animalHabitat">Animal habitat</label>
      <input
        key="animalHabitat"
        type="text"
        onChange={(event) => {
          setAnimalHabitat(event.target.value);
        }}
      />
      <button onClick={() => props.addAnimal(createAnimal())}>
        Add to farm
      </button>
    </div>
  );
};
