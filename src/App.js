import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { useUser } from "./context/UserContext";

function App() {
  const { user, signOut } = useUser();

  let expirationString = "";
  if (user) {
    const expDate = new Date(user.exp * 1000);
    expirationString =
      expDate.toLocaleDateString("de") + " " + expDate.toLocaleTimeString("de");
  }
  return (
    <div className="App">
      <h1>Homepage Nationalteam Projekt</h1>
      {user ? (
        <>
          <p>Hallo {user.email}</p>
          <p>Dein Token ist gültig bis {expirationString}</p>
          <div>
            <button
              onClick={() => {
                signOut();
              }}
            >
              Ausloggen
            </button>
          </div>

          <Link to="/nationalteam">Hier geht's zum Nationalteam</Link>
        </>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default App;
