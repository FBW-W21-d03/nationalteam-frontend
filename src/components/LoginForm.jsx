import { useState } from "react";
import { useUser } from "../context/UserContext";
import "./LoginForm.css";

export const LoginForm = () => {
  const { signIn } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login__content-container">
      <h1>Login</h1>
      <div className="login__form-container">
        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          placeholder="Passwort"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={() => {
            // console.log(email, password);
            signIn(email, password);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};
