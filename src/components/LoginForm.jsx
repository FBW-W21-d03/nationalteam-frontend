import { useState } from "react";
import { useUser } from "../context/UserContext";

export const LoginForm = () => {
  const { signIn } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>LoginForm</h1>
      <div>
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
