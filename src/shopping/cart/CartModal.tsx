import { useContext } from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "../ui/Backdrop";
import { ModalOverlay } from "../ui/ModalOverlay";
import { Cart } from "./Cart";
import { CartContext } from "./store/CartContext";

export const CartModal: React.FC = () => {
  const cartContext = useContext(CartContext)
  const CartBackdrop = () => <Backdrop onClick={cartContext.closeCartHandler} />;
  const CartComponent = () => {
    return (
      <ModalOverlay>
        <Cart />
      </ModalOverlay>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <CartBackdrop />,
        document.getElementById("backdrop")!!
      )}
      {ReactDOM.createPortal(
        <CartComponent />,
        document.getElementById("overlay")!!
      )}
    </>
  );
};
