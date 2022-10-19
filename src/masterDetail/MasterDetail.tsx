import { useState } from "react";
import { IConcept } from "../concept/IConcept";
import { ConceptDetails } from "./ConceptDetails";
import { ConceptList } from "./ConceptList";
import styles from "./MasterDetail.module.css";

export const MasterDetail: React.FC<{concepts: IConcept[]}> = (props) => {

  const [selectedConcept, setSelectedConcept] = useState(props.concepts[0]);

  const onSelectConceptHandler = (selectedConcept: IConcept) => {
    setSelectedConcept(selectedConcept);
  };

  return (
    <div className={styles.masterDetail}>
      <ConceptList
        concepts={props.concepts}
        onSelectConcept={onSelectConceptHandler}
        selectedConceptId={selectedConcept.name}
      />
      <ConceptDetails concept={selectedConcept} />
    </div>
  );
};
