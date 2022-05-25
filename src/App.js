import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { useUser } from "./context/UserContext";

function App() {
  const { token } = useUser();
  console.log(token);
  return (
    <div className="App">
      <h1>Homepage Nationalteam Projekt</h1>
      {token ? (
        <Link to="/nationalteam">Hier geht's zum Nationalteam</Link>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default App;
