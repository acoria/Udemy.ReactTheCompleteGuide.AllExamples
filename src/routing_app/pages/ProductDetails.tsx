import { useParams } from "react-router-dom";
import { products } from "./Products";

interface IProductDetailsParams {
  productId: string;
}

export const ProductDetails: React.FC = () => {
  const params = useParams<IProductDetailsParams>();

  const productName = products.find(
    (product) => product.id === params.productId
  )?.name;
  return (
    <section>
      <h1>Product Details</h1>
      <p>{productName}</p>
      <p>Product Id: {params.productId}</p>
    </section>
  );
};
