import { useState } from "react";
//Compatibility issues with Router dom 5 -> 6
// import { Prompt, useHistory } from "react-router-dom";

export const InputWithPrompt: React.FC = () => {
  // const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);

  const onFocusHandler = () => {
    setIsEditing(true);
  };

  const onButtonClickHandler = () => {
    setIsEditing(false);
  };

  return (
    <>
      {/* <Prompt
        when={isEditing}
        message={(location) =>
          "Are you sure you want to leave already? Any entered data will be lost :("
        }
      /> */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // history.push("/welcome");
        }}
      >
        <input onFocus={onFocusHandler}></input>
        <button onClick={onButtonClickHandler}>Submit</button>
      </form>
    </>
  );
};
