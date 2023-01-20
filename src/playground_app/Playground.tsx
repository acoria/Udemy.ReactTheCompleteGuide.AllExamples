import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Welcome } from "./routing/pages/Welcome";
import { MainHeader } from "./routing/MainHeader";
import { Products } from "./routing/pages/Products";
import { RouteNotFoundError } from "./routing/pages/RouteNotFountError";
import { ProductDetails } from "./routing/pages/ProductDetails";

export const Playground: React.FC = () => {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainHeader />,
      children: [
        { path: "welcome", element: <Welcome /> },
        {
          path: "products",
          element: <Products />,
          children: [{ path: ":productId", element: <ProductDetails /> }],
        },
        // { path: "/products/:productId", element: <ProductDetails /> },
      ],
      errorElement: <RouteNotFoundError />,
    },
  ]);
  return <RouterProvider router={browserRouter} />;
};
