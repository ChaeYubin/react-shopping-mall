import React from "react";
import CartProductList from "../pages/CartPage/CartProductList";
import "./CartModal.css";
import { useNavigate } from "react-router-dom";

function CartModal({ cart }) {
  const navigate = useNavigate();

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="cart-modal-container">
      <CartProductList products={cart.products} type={"modal"} />
      <div className="total">합계: $ {cart.totalPrice}</div>
      <button onClick={handleGoToCart}>장바구니로 이동</button>
    </div>
  );
}

export default CartModal;
