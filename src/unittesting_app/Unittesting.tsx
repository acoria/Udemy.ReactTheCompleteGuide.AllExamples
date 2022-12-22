import { useState } from "react";

export const Unittesting: React.FC = () => {
  const [textChanged, setTextChanged] = useState(false);

  const onButtonClickHandler = () => {
    setTextChanged(true);
  };

  return (
    <>
      <h1>Hello World!</h1>
      {!textChanged && <p>Initial text</p>}
      {textChanged && <p>Changed text</p>}
      <button onClick={onButtonClickHandler}>Change text</button>
    </>
  );
};
