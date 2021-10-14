import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Footer from  "./Footer/Footer";

function App() {
  return (
    <Router>
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
