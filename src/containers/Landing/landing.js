import React, { useEffect } from 'react'
import './landing.css'
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
      sessionStorage.getItem('isAnimated') === null ||
      sessionStorage.getItem('isAnimated') === undefined
    ) {
      sessionStorage.setItem('isAnimated', false)
      nameReveal()
    } else if (sessionStorage.getItem('isAnimated') === false) {
      sessionStorage.setItem('isAnimated', true)
    } else {
      sessionStorage.setItem('isAnimated', true)
    }

    console.log(sessionStorage.getItem('isAnimated'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionStorage.getItem('isAnimated')])

  let animated = sessionStorage.getItem('isAnimated')

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
            <img src="https://tyracatr.sirv.com/Images/logo.png" alt='logo' />
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
              <img src="https://tyracatr.sirv.com/Images/web.png" alt='web' />
            </div>
            <div
              className={
                !animated
                  ? 'landing-right-content landing-right-content-animation'
                  : 'landing-right-content final-landing-right-content-animation'
              }
            >
              <img src="https://tyracatr.sirv.com/Images/arch.png" alt='arch' />
            </div>
            <div
              className={
                !animated
                  ? 'landing-left-mob-content landing-left-mob-content-animation'
                  : 'landing-left-mob-content final-landing-left-mob-content'
              }
            >
              <img src="https://tyracatr.sirv.com/Images/mob-web.png" alt='web' />
            </div>
            <div
              className={
                !animated
                  ? 'landing-right-mob-content landing-right-mob-content-animation'
                  : 'landing-right-mob-content final-landing-right-mob-content'
              }
            >
              <img src="https://tyracatr.sirv.com/Images/mob-arch.png" alt='arch' />
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
