import React from 'react'
import '../Landing/landing.css'
import logo from '../../files/logo.png'

const Landing = () => {
  return (
    <div className='container'>
      <img src={logo} className='Home-logo' alt='logo' />
      <div className='moving-clouds'></div>
      <h1 className='logo-text'>Webarch</h1>
    </div>
  )
}

export default Landing
