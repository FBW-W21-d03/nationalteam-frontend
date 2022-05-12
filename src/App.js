import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Homepage</h1>
      <Link to="/nationalteam">Hier geht's zum Nationalteam</Link>
    </div>
  );
}

export default App;
