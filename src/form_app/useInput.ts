import { useState } from "react";

export const useInput = (validation: (value: string) => boolean) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setTouched] = useState(false);

  const enteredValueIsValid = validation(enteredValue);
  const hasError = !enteredValueIsValid && enteredValueTouched;

  const onValueInputChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTouched(true);
    setEnteredValue(event.target.value);
  };

  const onValueInputBlurredHandler = () => {
    setTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setTouched(false);
  };

  return {
    enteredValue,
    setTouched: setTouched,
    enteredValueIsValid,
    hasError,
    onValueInputChangedHandler,
    onValueInputBlurredHandler,
    reset,
  };
};
