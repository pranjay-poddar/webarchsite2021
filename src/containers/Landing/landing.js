import React, { useEffect } from 'react'
import './landing.css'
import logo from '../../files/logo.png'
import web from '../../files/landing/web.png'
import arch from '../../files/landing/arch.png'
import mobWeb from '../../files/landing/mob-web.png'
import mobArch from '../../files/landing/mob-arch.png'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/NavBar'

const Landing = () => {
  function nameReveal() {
    if (
      document.querySelector('.landing-left-content') !== undefined &&
      document.querySelector('.landing-right-content') !== undefined &&
      document.querySelector('.landing-left-mmob-content') !== undefined &&
      document.querySelector('.landing-right-mob-content') !== undefined &&
      document.querySelector('.landing-down-arrow') !== undefined
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
        document.querySelector('.landing-down-arrow').style.visibility =
          'visible'
      }, 4000)
    }
  }

  useEffect(() => {
    if (
      localStorage.getItem('isAnimated') === null ||
      localStorage.getItem('isAnimated') === undefined
    ) {
      localStorage.setItem('isAnimated', false)
      nameReveal()
    } else if (localStorage.getItem('isAnimated') === false) {
      localStorage.setItem('isAnimated', true)
    } else {
      localStorage.setItem('isAnimated', true)
    }

    console.log(localStorage.getItem('isAnimated'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem('isAnimated')])

  let animated = localStorage.getItem('isAnimated')

  return (
    <div
      className={
        !animated
          ? 'landing landing-animation'
          : 'landing final-landing-animation'
      }
    >
      <div className='landing-gif'></div>
      <div
        className={
          !animated
            ? 'landing-layer landing-layer-animation'
            : 'landing-layer final-landing-layer-animation'
        }
      ></div>
      <div className='landing-main'>
        <Navbar isHome={true} />
        <div
          className={
            !animated
              ? 'landing-logo landing-logo-animation'
              : 'landing-logo final-landing-logo-animation'
          }
        >
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className='landing-box'>
          <div className='landing-content'>
            <div
              className={
                !animated
                  ? 'landing-left-content landing-left-content-animation'
                  : 'landing-left-content final-landing-left-content-animation'
              }
            >
              <img src={web} alt='web' />
            </div>
            <div
              className={
                !animated
                  ? 'landing-right-content landing-right-content-animation'
                  : 'landing-right-content final-landing-right-content-animation'
              }
            >
              <img src={arch} alt='arch' />
            </div>
            <div
              className={
                !animated
                  ? 'landing-left-mob-content landing-left-mob-content-animation'
                  : 'landing-left-mob-content final-landing-left-mob-content'
              }
            >
              <img src={mobWeb} alt='web' />
            </div>
            <div
              className={
                !animated
                  ? 'landing-right-mob-content landing-right-mob-content-animation'
                  : 'landing-right-mob-content final-landing-right-mob-content'
              }
            >
              <img src={mobArch} alt='arch' />
            </div>
          </div>
          <div>
            <div>
              <h1
                className={
                  !animated
                    ? 'landing-tag landing-tag-animation'
                    : 'landing-tag final-landing-tag-animation'
                }
              >
                Architects of the Web
              </h1>
            </div>
          </div>
          <div>
            <Link to='/#About'>
              <div
                className={
                  !animated
                    ? 'landing-down-arrow'
                    : 'landing-down-arrow display-arrow'
                }
              >
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
