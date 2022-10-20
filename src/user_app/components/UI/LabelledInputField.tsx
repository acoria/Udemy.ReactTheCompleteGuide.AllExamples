import styles from "./LabelledInputFields.module.css";

export const LabelledInputField: React.FC<{
  id: string;
  label: string;
  type?: JSX.IntrinsicElements["input"]["type"];
  onChange?: (event: any) => void;
  value?: any;
  className?: string;
}> = (props) => {
  return (
    <div className={`${styles.labelledInputField} ${props.className}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type || "input"}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};
