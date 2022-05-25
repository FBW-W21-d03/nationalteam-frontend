import { useState } from "react";
import { useUser } from "../context/UserContext";
import "./LoginForm.css";

export const LoginForm = () => {
  const { signIn } = useUser();
  const [email, setEmail] = useState("ralf.siewert@actyvyst.com");
  const [password, setPassword] = useState("abc1234");

  const onSignIn = async () => {
    try {
      await signIn(email, password);
    } catch (err) {
      alert("Login fehlgeschlagen");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 400,
        width: 400,
      }}
    >
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onSignIn();
        }}
      >
        Login
      </button>
    </div>
  );
};
