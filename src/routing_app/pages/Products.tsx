import { Link, useHistory, useLocation, useParams } from "react-router-dom";

export const products = [
  { id: "1", name: "Book" },
  { id: "2", name: "Game" },
  { id: "3", name: "Movie" },
];

export const Products: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const urlParams = new URLSearchParams(location.search);
  const isSortingAscending = urlParams.get("sort") === "asc";

  const onSortButtonClickHandler = () => {
    history.push(`/products?sort=${isSortingAscending ? "desc" : "asc"}`);
  };

  const sortProducts = (
    products: { id: string; name: string }[],
    ascending: boolean
  ) => {
    return products.sort((productA, productB) => {
      if (ascending) {
        return productA.id > productB.id ? 1 : -1;
      } else {
        return productA.id < productB.id ? 1 : -1;
      }
    });
  };

  const sortedProducts = sortProducts(products, isSortingAscending);

  return (
    <section>
      <h1>Our Products</h1>
      <button onClick={onSortButtonClickHandler}>
        Sort {isSortingAscending ? "descending" : "ascending"}
      </button>
      <ul>
        {sortedProducts.map((product) => (
          <li>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
