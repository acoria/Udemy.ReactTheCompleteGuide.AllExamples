// import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { Link, Route, useParams } from "react-router-dom";
import { Comments } from "./Comments";
import { products } from "./Products";

//Route can be used to dynamically load content
//Link is only shown when the exact path matches

//useRouteMatch can be used for getting rid of hard coded routes for pages where the url is clear
//because we are already on a specific page
//"path" contains the dynamic link/"url" the concrete one

// interface IProductDetailsParams {
//   productId: string;
//   somethingElse: string;
// }

export const ProductDetails: React.FC = () => {
  // const params = useParams<IProductDetailsParams>();
  const params = useParams();
  // const routeMatch = useRouteMatch();
  const productName = products.find(
    (product) => product.id === params.productId
  )?.name;

  return (
    <>
      <section>
        <h1>Product Details</h1>
        <p>{productName}</p>
        <p>Product Id: {params.productId}</p>
      </section>
      <hr />
      <div>
        {/*Compatibility issues with Router dom 5 -> 6 */}
        {/* <Route path={routeMatch.path} exact> */}
        {/* <Route path={routeMatch.path}>
          <Link to={`${routeMatch.url}/comments`}>Load comments</Link>
        </Route>
        <Route path={`${routeMatch.path}/comments`}>
          <Comments />
        </Route> */}
      </div>
    </>
  );
};
