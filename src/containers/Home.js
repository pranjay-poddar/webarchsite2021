import logo from '../files/logo.png'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Landing from '../containers/Landing/landing'
import './Home.css'

const Home = () => {
  return (
    <div>
      <header>
        {/* <img src={logo} className='Home-logo' alt='logo' /> */}
        <Landing />
        {/* <p>Webarch Site 2021</p>
        <a
          className='Home-link'
          href='https://webarchsrm.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Main Branch
        </a>
        <Link to='/'>Home</Link>
        <Link to='/team'>Team</Link> */}
      </header>
    </div>
  )
}

export default Home
