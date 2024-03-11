import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/auth";

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.auth) {
      // 로그인된 상태일 경우
      setIsLoggedIn(true);
    } else {
      // 로그아웃된 상태일 경우
      setIsLoggedIn(false);
    }
  }, [auth]);

  const signIn = () => {
    navigate("./login");
  };

  const signOut = () => {
    dispatch(logout());
  };

  return (
    <nav>
      <Link to="/">
        <h1>Shop</h1>
      </Link>
      <div className="nav-right">
        <button className="cart-button"></button>
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
