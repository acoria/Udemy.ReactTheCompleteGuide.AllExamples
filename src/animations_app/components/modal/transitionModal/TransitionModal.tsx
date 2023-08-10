import "./TransitionModal.css";

export const TransitionModal: React.FC<{
  onClose: () => void;
  showModal: boolean;
}> = (props) => {
  const cssClasses = ["Modal", props.showModal ? "ModalOpen" : "ModalClosed"];
  return (
    <div className={cssClasses.join(" ")}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.onClose}>
        Dismiss
      </button>
    </div>
  );
};
