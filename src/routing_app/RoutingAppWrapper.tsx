import { BrowserRouter } from "react-router-dom";
import { RoutingApp } from "./RoutingApp";

export const RoutingAppWrapper: React.FC = () => {
  return (
    <BrowserRouter>
      <RoutingApp />
    </BrowserRouter>
  );
};
