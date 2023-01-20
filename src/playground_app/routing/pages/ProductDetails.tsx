import { useParams } from "react-router-dom";

export const ProductDetails: React.FC = () => {
  const params = useParams<{ productId: string }>();
  return <h1>Details page: {params.productId}</h1>;
};
