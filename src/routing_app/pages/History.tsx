// import { useHistory } from "react-router-dom";

export const History: React.FC = () => {
  //this is an object for accessing the browser history
  //push: allows to add a new page to the history so the user can navigate back afterwards
  //replace: removes the old page, acts like a redirect and the old page no longer exists
  //Compatibility issues with Router dom 5 -> 6
  // const history = useHistory();

  const onNavigateToWelcomePageHandler = () => {
    // history.push("/welcome");
  };

  return (
    <button onClick={onNavigateToWelcomePageHandler}>
      Click me to get back to the welcome page
    </button>
  );
};
