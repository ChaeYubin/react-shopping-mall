import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

function Nav({ isLoggedIn }) {
  const auth = getAuth();
  const navigate = useNavigate();

  const signIn = () => {
    navigate("./login");
  };

  const signOut = () => {
    auth.signOut();
  };

  const cart = () => {
    navigate("./cart");
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
