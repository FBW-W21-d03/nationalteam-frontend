import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <h1>Homepage Nationalteam Projekt</h1>
      <LoginForm />
      <Link to="/nationalteam">Hier geht's zum Nationalteam</Link>
    </div>
  );
}

export default App;
