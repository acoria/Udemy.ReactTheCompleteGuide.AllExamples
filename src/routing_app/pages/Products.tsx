// import { useHistory, useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//Link is a wrapper around the anchor/"a" tag that prevents a reload of the page
//location.pathname: contains the current path, so in this case /products

export const products = [
  { id: "1", name: "Book" },
  { id: "2", name: "Game" },
  { id: "3", name: "Movie" },
];

export const Products: React.FC = () => {
  //Compatibility issues with Router dom 5 -> 6
  // const history = useHistory();
  // const location = useLocation();
  // const urlParams = new URLSearchParams(location.search);
  // const isSortingAscending = urlParams.get("sort") === "asc";

  const onSortButtonClickHandler = () => {
    //as an alternative to a string, push also takes an object as a path for better readability
    // history.push(`${location.pathname}?sort=${isSortingAscending ? "desc" : "asc"}`);
    // history.push({
    //   pathname: location.pathname,
    //   search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    // });
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

  // const sortedProducts = sortProducts(products, isSortingAscending);

  return (
    <section>
      {/* <h1>Our Products</h1>
      <button onClick={onSortButtonClickHandler}>
        Sort {isSortingAscending ? "descending" : "ascending"}
      </button>
      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>
            //Compatibility issues with Router dom 5 -> 6
            <Link to={`${location.pathname}/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul> */}
    </section>
  );
};
