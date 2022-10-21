import { IConcept } from "./IConcept";
import styles from "./ConceptDetails.module.css";

export const ConceptDetails: React.FC<{ concept: IConcept }> = (props) => {
  return (
    <div className={styles.conceptDetails}>
      {props.concept.description != null && (
        <p className={styles.conceptDetailsDescription}>
          {props.concept.description}
        </p>
      )}
      {props.concept.topics != null && (
        <>
          <h4>Covered topics</h4>
          <ul>
            {props.concept.topics.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
          <h4>Example</h4>
        </>
      )}
      {props.concept.component({}, {})}
    </div>
  );
};
