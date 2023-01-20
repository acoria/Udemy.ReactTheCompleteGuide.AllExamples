import { useParams } from "react-router-dom";

export const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  return <h3>Here are the details on {productId}</h3>;
};
