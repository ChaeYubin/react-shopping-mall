import "./App.css";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import instance from "./api/axios";
import { setAllProducts } from "./store/productSlice";
import { useDispatch } from "react-redux";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();
  const dispatch = useDispatch();

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

    instance
      .get("products")
      .then((result) => result.data)
      .then((products) => dispatch(setAllProducts({ products: products })));
  }, []);

  return (
    <div className="App">
      <Nav isLoggedIn={isLoggedIn} />
      <Outlet />
    </div>
  );
}

export default App;
