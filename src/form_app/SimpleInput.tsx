import { useState } from "react";

export const SimpleInput: React.FC = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredInputInvalid = !enteredNameIsValid && enteredNameTouched;
  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }
  const enteredInputClasses = enteredInputInvalid
    ? "form-control invalid"
    : "form-control";

  const onNameInputChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredNameTouched(true);
    setEnteredName(event.target.value);
  };

  const onNameInputBlurredHandler = () => {
    setEnteredNameTouched(true);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(enteredName);
    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    setEnteredName("");
    setEnteredNameTouched(false);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={enteredInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={onNameInputChangedHandler}
          onBlur={onNameInputBlurredHandler}
        />
        {enteredInputInvalid && (
          <p className="form-control error-text">Entered name is invalid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
