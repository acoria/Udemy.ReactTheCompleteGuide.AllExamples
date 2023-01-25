import "./Modal.css";

export const Modal: React.FC<{ onClose: () => void }> = (props) => {
  return (
    <div className="Modal">
      <h1>A Modal</h1>
      <button className="Button" onClick={props.onClose}>
        Dismiss
      </button>
    </div>
  );
};
