import { Button } from "../Button";
import { Card } from "../Card";
import { ModalError } from "./ModalError";
import styles from "./ErrorModal.module.css";

export const ErrorModal: React.FC<{
  error: ModalError;
  onDismiss: () => void;
}> = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onDismiss} />
      <Card className={styles.errorModal}>
        <header className={styles.header}>{props.error.title}</header>
        <div className={styles.content}>
          <p>{props.error.message}</p>
        </div>
        <footer className={styles.footer}>
          <Button onClick={props.onDismiss}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
