import { useInput } from "./useInput";

export const SimpleInput: React.FC = () => {
  const {
    enteredValue: enteredName,
    setTouched: setEnteredNameTouched,
    enteredValueIsValid: enteredNameIsValid,
    hasError: nameHasError,
    onValueInputChangedHandler: onNameInputChangedHandler,
    onValueInputBlurredHandler: onNameInputBlurredHandler,
    reset: resetNameInput,
  } = useInput((enteredValue) => enteredValue.trim() !== "");
  const {
    enteredValue: enteredEmail,
    setTouched: setEnteredEmailTouched,
    enteredValueIsValid: enteredEmailIsValid,
    hasError: emailHasError,
    onValueInputChangedHandler: onEmailInputChangedHandler,
    onValueInputBlurredHandler: onEmailInputBlurredHandler,
    reset: resetEmailInput,
  } = useInput((enteredValue) => enteredValue.includes("@"));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  const validClass = "form-control";
  const invalidClass = "form-control invalid";
  const enteredNameInputClasses = nameHasError ? invalidClass : validClass;
  const enteredEmailInputClasses = emailHasError ? invalidClass : validClass;

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if (!formIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={enteredNameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={onNameInputChangedHandler}
          onBlur={onNameInputBlurredHandler}
        />
        {nameHasError && (
          <p className="form-control error-text">Entered name is invalid</p>
        )}
      </div>
      <div className={enteredEmailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={onEmailInputChangedHandler}
          onBlur={onEmailInputBlurredHandler}
        />
        {emailHasError && (
          <p className="form-control error-text">Entered e-mail is invalid</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
