// import { Redirect, Route, Switch } from "react-router-dom";
import { MainHeader } from "./components/MainHeader";
import { NotFound } from "./pages/NotFound";
import { History } from "./pages/History";
import { ProductDetails } from "./pages/ProductDetails";
import { Products } from "./pages/Products";
import { Welcome } from "./pages/Welcome";
import "./RoutingApp.css";
import { InputWithPrompt } from "./pages/InputWithPrompt";

//dynamic path declaration with colon :
//multiple declarations are possible e.g. /:productId/:userName

//Switch: shows only one of the defined routes. Without, with a url such as /products/5
//both Products and ProductDetails will be shown. It is not an exact match and all urls that match will be shown

//exact: the path will only match, if it is exactly the one defined and nothing additional such as a product id

//* is a placeholder for any value, so it can be used as a fallback at the end of the routing

export const RoutingApp: React.FC = () => {
  return (
    <>
      {/*Compatibility issues with Router dom 5 -> 6 */}
      {/* <h3>Routing is active. Choose /welcome or /products</h3>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/inputWithPrompt">
            <InputWithPrompt />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main> */}
    </>
  );
};
