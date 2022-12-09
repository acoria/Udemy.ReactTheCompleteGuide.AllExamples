import { Route } from "react-router-dom";
import { MainHeader } from "./components/MainHeader";
import { Products } from "./pages/Products";
import { Welcome } from "./pages/Welcome";
import "./RoutingApp.css";

export const RoutingApp: React.FC = () => {
  return (
    <>
      <h3>Routing active. Choose /welcome or /products</h3>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </>
  );
};
