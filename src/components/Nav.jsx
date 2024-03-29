import React from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory, setAllProducts } from "../store/productSlice";
import { clear } from "../store/cartSlice";
import CartModal from "./CartModal";
import instance from "../api/axios";

function Nav({ isLoggedIn }) {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isModalOpen = useSelector((state) => state.modal.open);

  const signIn = () => {
    dispatch(selectCategory({ category: "all" }));
    navigate("./login");
  };

  const signOut = () => {
    auth.signOut();
    dispatch(clear()); // 장바구니 비우기

    instance
      .get("products")
      .then((result) => result.data)
      .then((products) => dispatch(setAllProducts({ products: products })));
  };

  const goToCart = () => {
    if (auth.currentUser !== null) {
      navigate("./cart");
      dispatch(selectCategory({ category: "all" }));
    } else {
      alert("로그인이 필요한 기능입니다.");
    }
  };

  return (
    <>
      <nav>
        <Link to="/">
          <h1 className="shop-title">Shop</h1>
        </Link>
        <div className="nav-right">
          {cart.products.length > 0 ? (
            <div className="cart-item-count">
              <p>{cart.products.length}</p>
            </div>
          ) : null}

          <button className="cart-button" onClick={goToCart}></button>
          <button className="user-button"></button>
          {isLoggedIn ? (
            <button className="logout-button" onClick={signOut}></button>
          ) : (
            <button className="login-button" onClick={signIn}></button>
          )}
        </div>
      </nav>
      {isModalOpen && <CartModal cart={cart} />}
    </>
  );
}

export default Nav;
