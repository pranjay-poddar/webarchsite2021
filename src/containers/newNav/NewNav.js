import React, { useState } from "react";
import "./NewNav.css";

import { GiHamburgerMenu } from "react-icons/gi";
// import image1 from "./Artboard1.png";

import { Link } from "react-router-dom";
import { Link as NavLink } from "react-scroll";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div className="navra">
      <nav className="main-nav">
        {/* 1st logo part  */}

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul className="uline">
            <li className="lina">
              <NavLink
                to="Home"
                onClick={() => setShowMediaIcons(!showMediaIcons)}
              >
                Home
              </NavLink>
            </li>
            <li className="lina">
              <NavLink
                to="Domain"
                onClick={() => setShowMediaIcons(!showMediaIcons)}
              >
                Domains
              </NavLink>
            </li>
            <li className="lina">
              <NavLink
                to="About"
                onClick={() => setShowMediaIcons(!showMediaIcons)}
              >
                About Us
              </NavLink>
            </li>
            <li className="lina">
              <NavLink
                to="Phase"
                onClick={() => setShowMediaIcons(!showMediaIcons)}
              >
                Phases
              </NavLink>
            </li>
            <li className="lina">
              <NavLink
                to="FAQs"
                onClick={() => setShowMediaIcons(!showMediaIcons)}
              >
                FAQs
              </NavLink>
            </li>
            <li className="lina">
              <NavLink
                to="Reach"
                onClick={() => setShowMediaIcons(!showMediaIcons)}
              >
                Reach
              </NavLink>
            </li>
            {showMediaIcons && (
              <Link
                to="/login"
                class="gs btn btn-1 "
                onClick={() => setShowMediaIcons(!showMediaIcons)}
              >
                Get Started
              </Link>
            )}
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
                color: "#e93e7d",
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
