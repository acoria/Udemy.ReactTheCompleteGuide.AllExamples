import { useState } from "react";
import { IConcept } from "./IConcept";
import { ConceptDetails } from "./ConceptDetails";
import { ConceptList } from "./ConceptList";
import styles from "./Concepts.module.css";

export const Concepts: React.FC<{ concepts: IConcept[] }> = (props) => {
  const [selectedConcept, setSelectedConcept] = useState(props.concepts[0]);

  const onSelectConceptHandler = (selectedConcept: IConcept) => {
    setSelectedConcept(selectedConcept);
  };

  return (
    <>
    <div className={styles.conceptTitle}>
      <h1 className={styles.concepts} id="app_title">React examples</h1>
      </div>
      <div className={styles.concepts}>
        <ConceptList
          concepts={props.concepts}
          onSelectConcept={onSelectConceptHandler}
          selectedConceptId={selectedConcept.name}
        />
        <ConceptDetails concept={selectedConcept} />
      </div>
</>
  );
};
