import styles from "./ErrorMessage.module.css";

export const ErrorMessage: React.FC<{ error: string }> = (props) => {
  return (
    <div className={styles.errorMessage}>
      <h2>{`Oops: ${props.error}`}</h2>
    </div>
  );
};
