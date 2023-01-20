import { Outlet, useNavigate } from "react-router-dom";

export const Products: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Products</h1>
      <section>
        <h4>Laptops</h4>
        <button
          onClick={() => {
            navigate("laptops");
          }}
        >
          Find out more
        </button>
      </section>
      <section>
        <h4>Headphones</h4>
        <button
          onClick={() => {
            navigate("headphones");
          }}
        >
          Find out more
        </button>
      </section>
      <Outlet />
    </>
  );
};
