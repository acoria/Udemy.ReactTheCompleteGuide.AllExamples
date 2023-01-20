import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainHeader } from "./components/MainHeader";
import { ErrorPage } from "./components/pages/ErrorPage";
import { ProductDetails } from "./components/pages/ProductDetails";
import { Products } from "./components/pages/Products";
import { Welcome } from "./components/pages/Welcome";

export const Routing6App: React.FC = () => {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainHeader />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "welcome",
          element: <Welcome />,
        },
        {
          path: "products",
          element: <Products />,
          children: [{ path: ":productId", element: <ProductDetails /> }],
        },
      ],
    },
  ]);
  return <RouterProvider router={browserRouter} />;
};
