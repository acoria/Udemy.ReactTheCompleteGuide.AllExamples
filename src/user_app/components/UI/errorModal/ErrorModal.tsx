import { Button } from "../Button";
import { Card } from "../Card";
import { ModalError } from "./ModalError";
import styles from "./ErrorModal.module.css";
import { Backdrop } from "./overlay/Backdrop";
import { ModalOverlay } from "./overlay/ModalOverlay";
import ReactDOM from "react-dom";
import React from "react";

export const ErrorModal: React.FC<{
  error: ModalError;
  onDismiss: () => void;
}> = (props) => {
  const ErrorBackdrop = () => <Backdrop onClick={props.onDismiss} />;
  const ErrorModalOverlay = () => (
    <ModalOverlay>
      <Card className={styles.errorModal}>
        <header className={styles.header}>{props.error.title}</header>
        <div className={styles.content}>
          <p>{props.error.message}</p>
        </div>
        <footer className={styles.footer}>
          <Button onClick={props.onDismiss}>Okay</Button>
        </footer>
      </Card>
    </ModalOverlay>
  );

  return (
    <>
      {ReactDOM.createPortal(
        <ErrorBackdrop />,
        document.getElementById("backdrop-root")!!
      )}
      {ReactDOM.createPortal(
        <ErrorModalOverlay />,
        document.getElementById("overlay-root")!!
      )}
    </>
  );
};
