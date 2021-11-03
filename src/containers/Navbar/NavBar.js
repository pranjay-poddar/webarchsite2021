import React, { useState } from 'react'
import './NavBar.css'

import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../../files/logo.png'

import { Link } from 'react-router-dom'
// import { Link as NavLink } from "react-scroll";
const Navbar = ({ isHome }) => {
  const [showMediaIcons, setShowMediaIcons] = useState(false)

  let animated = localStorage.getItem('isAnimated')
  return (
    <div className={isHome ? (!animated ? 'navra' : 'navba') : 'navba'}>
      <nav className='main-nav'>
        {/* 1st logo part  */}
        {!isHome && (
          <div className='logona'>
            <Link to='/'>
              <img src={logo} style={{ width: '50px' }} alt='logo' />
            </Link>
          </div>
        )}

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'
          }
        >
          <ul className='uline'>
            <li className={showMediaIcons ? 'lina anim' : 'lina'}>
              <Link to='/#About'>
                <span style={{ color: '#00E8FF' }}>01. </span>About us
              </Link>
            </li>
            <li className={showMediaIcons ? 'lina anim' : 'lina'}>
              <Link to='/#Domains'>
                <span style={{ color: '#00E8FF' }}>02. </span>Domains
              </Link>
            </li>
            <li className={showMediaIcons ? 'lina anim' : 'lina'}>
              <Link to='/projects'>
                <span style={{ color: '#00E8FF' }}>03. </span>Projects
              </Link>
            </li>
            <li className={showMediaIcons ? 'lina anim' : 'lina'}>
              <Link to='/#Clients'>
                <span style={{ color: '#00E8FF' }}>04. </span>Clients
              </Link>
            </li>
            <li className={showMediaIcons ? 'lina anim' : 'lina'}>
              <Link to='/team'>
                <span style={{ color: '#00E8FF' }}>05. </span>Team
              </Link>
            </li>
            <li className={showMediaIcons ? 'lina anim' : 'lina'}>
              <Link to='/#Contact'>
                <span style={{ color: '#00E8FF' }}>06. </span>Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className='social-media'>
          {/* hamburget menu start  */}
          <div className='hamburger-menu'>
            <button
              className='hama'
              style={{
                background: 'transparent',
                color: '#00e8ff',
                border: 'none',
                boxShadow: 'none',
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
  )
}

export default Navbar
