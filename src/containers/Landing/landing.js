import React, { useEffect } from 'react'
import './landing.css'
import logo from '../../files/logo.png'
import web from '../../files/web.png'
import arch from '../../files/arch.png'
import mobWeb from '../../files/mob-web.png'
import mobArch from '../../files/mob-arch.png'
import { Link } from 'react-scroll'
import Navbar from '../Navbar/NavBar'

const Landing = () => {
  function nameReveal() {
    if (
      document.querySelector('.landing-left-content') !== undefined &&
      document.querySelector('.landing-right-content') !== undefined &&
      document.querySelector('.landing-left-mmob-content') !== undefined &&
      document.querySelector('.landing-right-mob-content') !== undefined
    ) {
      setTimeout(function () {
        document.querySelector('.landing-left-content').style.visibility =
          'visible'
        document.querySelector('.landing-right-content').style.visibility =
          'visible'
        document.querySelector('.landing-left-mob-content').style.visibility =
          'visible'
        document.querySelector('.landing-right-mob-content').style.visibility =
          'visible'
      }, 4000)
    }
  }

  useEffect(() => {
    nameReveal()
  }, [])

  return (
    <div className='landing'>
      <div className='landing-gif'></div>
      <div className='landing-layer'></div>
      <div className='landing-main'>
        <Navbar isHome={true} />
        <div className='landing-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='landing-box'>
          <div className='landing-content'>
            <div className='landing-left-content'>
              <img src={web} alt='web' />
            </div>
            <div className='landing-right-content'>
              <img src={arch} alt='arch' />
            </div>
            <div className='landing-left-mob-content'>
              <img src={mobWeb} alt='web' />
            </div>
            <div className='landing-right-mob-content'>
              <img src={mobArch} alt='arch' />
            </div>
          </div>
          <div>
            <div>
              <h1 className='landing-tag'>Architects of the Web</h1>
            </div>
          </div>
          <div>
            <Link activeClass='active' to='Services' duration={0} smooth={true}>
              <div className='landing-down-arrow'>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
