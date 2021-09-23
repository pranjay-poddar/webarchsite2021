import logo from "../files/logo.png";
import { Link } from "react-router-dom";
import "./Home.css";
import SectionHead from "./SectionHeader/SectionHead";

const Home = () => {
  return (
    <div className="Home">
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
        <SectionHead value="header" />

        <SectionHead value="header" />
        <SectionHead value="header" />

        <SectionHead value="header" />
        <SectionHead value="header" />
        <SectionHead value="header" />
        <SectionHead value="header" />

        <SectionHead value="header" />
        <SectionHead value="header" />
        <Link to="/team">Team</Link>
      </header>
    </div>
  );
};

export default Home;
