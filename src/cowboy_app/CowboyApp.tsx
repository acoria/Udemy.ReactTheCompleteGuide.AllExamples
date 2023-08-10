import { useEffect, useState } from "react";
import { AddAnimal } from "./AddAnimal";
import { AnimalList } from "./AnimalList";
import { Animal } from "./model/Animal";
import styles from "./Animal.module.css";
import "./Animal.css";

export const CowboyApp: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    Animal.findAll().then((animals: Animal[]) => {
      if (animals.length !== 0) {
        setAnimals(animals);
      }
    });
  }, []);

  const onAddAnimalHandler = (animal: Animal) => {
    Animal.save(animal).then(() =>
      setAnimals((previous) => [...previous, animal])
    );
  };

  return (
    <>
      <div className={styles.animalInNativeCss}>
        {/* <div className="animalInNativeCss"> */}
        <h2>In Cowboy app</h2>
        <h3>Cowboy app title</h3>
        <AddAnimal addAnimal={onAddAnimalHandler} />
      </div>
      <AnimalList animals={animals} />
    </>
  );
};
