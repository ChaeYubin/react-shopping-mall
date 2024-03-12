import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartProductList from "./CartProductList";
import emptyCart from "./../../assets/cart.png";
import "./CartPage.css";
import { Link, useNavigate } from "react-router-dom";
import { clear } from "../../store/cartSlice";
import { removeFromCart } from "../../store/productSlice";

function CartPage() {
  const products = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePaymentButtonClick = () => {
    products.forEach((product) => dispatch(removeFromCart({ id: product.id })));
    dispatch(clear());
    navigate("/");
  };

  return (
    <>
      {products.length > 0 ? (
        <div className="cart-page-container">
          <h2>장바구니</h2>
          <CartProductList products={products} />
          <div className="cart-footer">
            <div className="total">합계: $ {totalPrice}</div>
            <button onClick={handlePaymentButtonClick}>계산하기</button>
          </div>
        </div>
      ) : (
        <div className="empty-cart-page">
          <img src={emptyCart} alt="장바구니가 비었습니다." />
          <h2>Cart가 비어있습니다.</h2>
          <p>Cart에 상품을 넣어주세요.</p>
          <span>
            <Link to="/">계속 쇼핑하기</Link>
          </span>
        </div>
      )}
    </>
  );
}

export default CartPage;
