import React, { useState } from "react";
import "./NewNav.css";

import { GiHamburgerMenu } from "react-icons/gi";
// import image1 from "./Artboard1.png";

import { Link } from "react-router-dom";
// import { Link as NavLink } from "react-scroll";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div className="navra">
      <nav className="main-nav">
        {/* 1st logo part  */}
        {/* <div className="logona">
          <img src={image1} style={{ width: "50px" }} alt="logo" />
        </div> */}

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul className="uline" style={{ width: "45vw" }}>
            <li className={showMediaIcons ? "lina anim" : "lina"}>
              <Link to="/#About">
                <span style={{ color: "#00E8FF" }}>01. </span>About us
              </Link>
            </li>
            <li className={showMediaIcons ? "lina anim" : "lina"}>
              <Link to="/#Domains">
                <span style={{ color: "#00E8FF" }}>02. </span>Domains
              </Link>
            </li>
            <li className={showMediaIcons ? "lina anim" : "lina"}>
              <Link to="/projects">
                <span style={{ color: "#00E8FF" }}>03. </span>Projects
              </Link>
            </li>
            <li className={showMediaIcons ? "lina anim" : "lina"}>
              <Link to="/#Clients">
                <span style={{ color: "#00E8FF" }}>04. </span>Clients
              </Link>
            </li>
            <li className={showMediaIcons ? "lina anim" : "lina"}>
              <Link to="/team">
                <span style={{ color: "#00E8FF" }}>05. </span>Team
              </Link>
            </li>
            <li className={showMediaIcons ? "lina anim" : "lina"}>
              <Link to="/#Contact">
                <span style={{ color: "#00E8FF" }}>06. </span>Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <button
              className="hama"
              style={{
                background: "transparent",
                color: "#00e8ff",
                border: "none",
                boxShadow: "none",
              }}
              onClick={() => setShowMediaIcons(!showMediaIcons)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </div>
  );
};

export default Navbar;
