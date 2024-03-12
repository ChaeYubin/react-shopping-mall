import React from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { selectCategory } from "../store/productSlice";
import { clear } from "../store/cartSlice";
import { clearAll } from "../store/productSlice";

function Nav({ isLoggedIn }) {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signIn = () => {
    navigate("./login");
  };

  const signOut = () => {
    auth.signOut();
    dispatch(clear());
    dispatch(clearAll());
  };

  const cart = () => {
    navigate("./cart");
    dispatch(selectCategory({ category: "all" }));
  };

  return (
    <nav>
      <Link to="/">
        <h1>Shop</h1>
      </Link>
      <div className="nav-right">
        <button className="cart-button" onClick={cart}></button>
        <button className="user-button"></button>
        {isLoggedIn ? (
          <button className="logout-button" onClick={signOut}></button>
        ) : (
          <button className="login-button" onClick={signIn}></button>
        )}
      </div>
    </nav>
  );
}

export default Nav;
