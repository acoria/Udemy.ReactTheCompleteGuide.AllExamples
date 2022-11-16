import { useEffect, useState } from "react";

//this is a custom hook that makes the state logic inside reusable
export const useCounter = (calculation: (a: number) => number): number => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => calculation(prevCounter));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [calculation]);

  return counter;
};
