import React, { useEffect } from 'react'
import '../Landing/landing.css'
import logo from '../../files/logo.png'
import web from '../../files/web.png'
import arch from '../../files/arch.png'
import { Container, Col, Row } from 'react-bootstrap'

const Landing = () => {
  function nameReveal() {
    if (
      document.querySelector('.landing-left-content') !== undefined &&
      document.querySelector('.landing-right-content') !== undefined
    ) {
      setTimeout(function () {
        document.querySelector('.landing-left-content').style.visibility =
          'visible'
        document.querySelector('.landing-right-content').style.visibility =
          'visible'
      }, 4000)
    }
  }

  useEffect(() => {
    nameReveal()
  }, [])

  return (
    <Container className='landing'>
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
      </Row>
      <Row>
        <Col>
          <h1 className='landing-tag'>Architects of the Web.</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Landing
