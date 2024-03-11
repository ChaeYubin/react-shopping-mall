import React from "react";
import { useState } from "react";
import "./LoginPage.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./../../redux/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(login(email));
        navigate("/");
      })
      .catch((err) => {
        alert("로그인 정보가 올바르지 않습니다.");
        setEmail("");
        setPassword("");
      });
  };

  return (
    <div className="login-page-container">
      <div className="login-container">
        <h1 className="login-title-text">로그인</h1>
        <form className="login-input-form">
          <input
            type="email"
            value={email}
            onChange={onEmailChange}
            autoComplete="off"
            placeholder="이메일을 입력하세요."
          />
          <input
            type="password"
            value={password}
            onChange={onPasswordChange}
            autoComplete="off"
            placeholder="비밀번호를 입력하세요."
          />
          <button type="submit" onClick={logIn}>
            로그인
          </button>
        </form>
        <p>
          <span className="text-bold">계정이 없습니까?</span>{" "}
          <Link to="/signUp">가입하기</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
