import React, { useEffect } from 'react'
import './landing.css'
import logo from '../../files/logo.png'
import web from '../../files/web.png'
import arch from '../../files/arch.png'
import mobWeb from '../../files/mob-web.png'
import mobArch from '../../files/mob-arch.png'
import { Col, Row } from 'react-bootstrap'
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
    <Col className='landing'>
      <Col className='landing-gif'></Col>
      <Col className='landing-layer'></Col>
      <Col className='landing-main'>
        <Navbar isHome={true} />
        <Col className='landing-logo'>
          <img src={logo} alt='logo' />
        </Col>
        <Row className='landing-content'>
          <Col className='landing-left-content'>
            <img src={web} alt='web' />
          </Col>
          <Col className='landing-right-content'>
            <img src={arch} alt='arch' />
          </Col>
          <Col className='landing-left-mob-content'>
            <img src={mobWeb} alt='web' />
          </Col>
          <Col className='landing-right-mob-content'>
            <img src={mobArch} alt='arch' />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className='landing-tag'>Architects of the Web.</h1>
          </Col>
        </Row>
      </Col>
    </Col>
  )
}

export default Landing
