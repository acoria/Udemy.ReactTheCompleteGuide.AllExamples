import { Provider } from "react-redux";
import { SimpleReduxApp } from "./SimpleReduxApp";
import { SimpleReduxStore } from "./SimpleReduxStore";
import { ToolkitReduxApp } from "./ToolkitReduxApp";
import { ToolkitReduxStore } from "./ToolkitReduxStore";

export const ReduxWrapper: React.FC = () => {
  return (
    <>
      <Provider store={SimpleReduxStore}>
        <SimpleReduxApp />
      </Provider>
      <Provider store={ToolkitReduxStore}>
        <ToolkitReduxApp />
      </Provider>
    </>
  );
};
