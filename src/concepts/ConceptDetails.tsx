import { IConcept } from "./IConcept";
import styles from "./ConceptDetails.module.css";

export const ConceptDetails: React.FC<{ concept: IConcept }> = (props) => {
  return (
    <div className={styles.conceptDetails}>
      <div>{props.concept.component({}, {})}</div>
    </div>
  );
};
