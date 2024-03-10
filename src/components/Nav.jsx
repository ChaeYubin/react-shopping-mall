import React, { useEffect, useState } from "react";
import "./Nav.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

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

  return (
    <nav>
      <Link to="/">
        <h1>Shop</h1>
      </Link>
      <div className="nav-right">
        <button>cart</button>
        <button>user</button>
        {isLoggedIn ? (
          <button onClick={signOut}>logout</button>
        ) : (
          <button onClick={signIn}>login</button>
        )}
      </div>
    </nav>
  );
}

export default Nav;
