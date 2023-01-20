import { Outlet, useNavigate } from "react-router-dom";

export const Products: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <h2>Books</h2>
        <button
          onClick={() => {
            navigate("books");
          }}
        >
          See more details
        </button>
      </section>
      <section>
        <h2>Tablets</h2>
        <button
          onClick={() => {
            navigate("tablets");
          }}
        >
          See more details
        </button>
      </section>
      <Outlet />
    </>
  );
};
