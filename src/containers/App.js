import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Menu from "./Nav";

function App() {
  return (
    <Router>
      <Menu />
      <Main />
    </Router>
  );
}

export default App;
