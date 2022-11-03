export const OuterComponent: React.FC = () => {
  const addHandler: (amount: number) => void = () => {};
  //the binding provides a value for the function, so the inner component does not need to know about the value
  return <InnerComponent onAddHandler={addHandler.bind(null, 1)} />;
};

export const InnerComponent: React.FC<{
  onAddHandler: (amount: number) => void;
}> = (props) => {
  //the 0 as parameter is ignored, since it is provided by the binding. It is for cases where the value is unknown in this place
  return <button onClick={() => props.onAddHandler(0)}>Call add method</button>;
};
