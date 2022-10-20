import styles from "./Playground.module.css";

export const Playground: React.FC = () => {

    const content = <div>Test</div>

  return <div className={styles.playground}>
    {content}
    {/* <button></button> */}
  </div>;
};
