import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // 로그인된 상태일 경우
        setIsLoggedIn(true);
      } else {
        // 로그아웃된 상태일 경우
        setIsLoggedIn(false);
      }
    });
  }, []);

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
