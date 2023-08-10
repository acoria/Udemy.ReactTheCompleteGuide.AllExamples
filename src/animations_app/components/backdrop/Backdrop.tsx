import "./Backdrop.css";

export const Backdrop: React.FC<{ showBackdrop: boolean }> = (props) => {
  const cssClasses = [
    "Backdrop",
    props.showBackdrop ? "BackdropOpen" : "BackdropClosed",
  ];

  return <div className={cssClasses.join(" ")}></div>;
};
