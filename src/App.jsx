import "./App.css";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.auth) {
      setIsLoggedIn(true);
      setUserName(auth.userEmail);
    } else {
      setIsLoggedIn(false);
    }
  }, [auth]);

  return (
    <div className="App">
      <Nav />
      <Outlet />
      {isLoggedIn ? <p>{userName}님 안녕하세요.</p> : null}
    </div>
  );
}

export default App;
