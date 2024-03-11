import "./App.css";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // 로그인된 상태일 경우
        setIsLoggedIn(true);
        setUserName(user.email);
      } else {
        // 로그아웃된 상태일 경우
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <Nav />
      <Outlet />
      {isLoggedIn ? <p>{userName}님 안녕하세요.</p> : null}
    </div>
  );
}

export default App;
