import "./App.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const auth = getAuth();
  // auth.setPersistence("session"); // 탭이 열려있는 동안에만 사용자를 기억한다.

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
