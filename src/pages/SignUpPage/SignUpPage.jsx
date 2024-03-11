import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onCheckPasswordChange = (e) => {
    setCheckPassword(e.target.value);
  };

  const signUp = (e) => {
    e.preventDefault();

    if (password !== checkPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      setPassword("");
      setCheckPassword("");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("회원가입이 완료되었습니다.");
        navigate("/login");
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          alert("이미 가입된 이메일입니다.");
        } else if (err.code === "auth/invalid-email") {
          alert("이메일 주소를 올바르게 입력하세요.");
          setEmail("");
        }
      });
  };

  return (
    <div className="login-page-container">
      <div className="login-container">
        <h1 className="login-title-text">회원가입</h1>
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
          <input
            type="password"
            value={checkPassword}
            onChange={onCheckPasswordChange}
            autoComplete="off"
            placeholder="비밀번호를 한번 더 입력하세요."
          />
          <button type="submit" onClick={signUp}>
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
