import styles from "./Playground.module.css";

export const Playground: React.FC = () => {

    const content = <div><h1>Test</h1></div>

  return <div className={styles.playground}>
    <button>{content}</button>
  </div>;
};
