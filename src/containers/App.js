import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Navbar from "./Navbar/NavBar"

function App() {
  return (
    <Router>
      <Navbar />
      <Main />
    </Router>
  );
}

export default App;
