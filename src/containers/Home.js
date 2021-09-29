import logo from "../files/logo.png";
import { Link } from "react-router-dom";
import "./Home.css";
import SectionHead from "./SectionHeader/SectionHead";
import NavBar from "./Navbar/NavBar";

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <header className="Home-header">
        <SectionHead value="header" />
        <img src={logo} className="Home-logo" alt="logo" />
        <p>Webarch Site 2021</p>
        <a
          className="Home-link"
          href="https://webarchsrm.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Main Branch
        </a>
        <Link to="/">Home</Link>

        <Link to="/team">Team</Link>
      </header>
    </div>
  );
};

export default Home;
