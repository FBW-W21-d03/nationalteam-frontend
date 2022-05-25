import "./App.css";
import { Link } from "react-router-dom";
import { useUser } from "./context/UserContext";
import { LoginForm } from "./components/LoginForm";

function App() {
  const { user } = useUser();
  const expires = user ? new Date(user.exp * 1000) : "";
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Homepage Nationalteam Projekt</h1>
        {user ? (
          <>
            <p>{JSON.stringify(user)}</p>
            <p>{`${expires.toLocaleDateString(
              "de"
            )} ${expires.toLocaleTimeString("de")}`}</p>
            <p>
              <Link to="/nationalteam">Hier geht's zum Nationalteam</Link>
            </p>
          </>
        ) : (
          <LoginForm />
        )}
      </div>
    </div>
  );
}

export default App;
