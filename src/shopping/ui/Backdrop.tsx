import styles from "./Backdrop.module.css";

export const Backdrop: React.FC<{ onClick: () => void }> = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};
