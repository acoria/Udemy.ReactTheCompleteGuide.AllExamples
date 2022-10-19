import React from "react";
import { IConcept } from "../concept/IConcept";
import styles from "./ConceptList.module.css";

export const ConceptList: React.FC<{
  concepts: IConcept[];
  onSelectConcept: (selectedConcept: IConcept) => void;
  selectedConceptId: string;
}> = (props) => {
  return (
    <div className={styles.conceptList}>
      {props.concepts.map((concept, index) => {
        return (
          <button
            className={`${styles.conceptList} ${
              concept.name === props.selectedConceptId ? styles.selected : ""
            }`}
            key={`conceptList_${index}`}
            onClick={() => props.onSelectConcept(concept)}
          >
            {concept.name}
          </button>
        );
      })}
    </div>
  );
};
