import React, { useEffect } from 'react'
import '../Landing/landing.css'
import logo from '../../files/logo.png'
import web from '../../files/web.png'
import arch from '../../files/arch.png'
import { Container, Col, Row } from 'react-bootstrap'

const Landing = () => {
  function nameReveal() {
    if (
      document.querySelector('.left-content') != undefined &&
      document.querySelector('.right-content') != undefined
    ) {
      setTimeout(function () {
        document.querySelector('.left-content').style.visibility = 'visible'
        document.querySelector('.right-content').style.visibility = 'visible'
      }, 4000)
    }
  }

  useEffect(() => {
    nameReveal()
  }, [])

  return (
    <Container className='container'>
      <Col className='img-container'>
        <img src={logo} alt='logo' />
      </Col>
      <Row className='content'>
        <Col className='left-content'>
          <img
            style={{ position: 'relative', right: '-50px' }}
            src={web}
            alt='web'
          />
        </Col>
        <Col className='right-content'>
          <img src={arch} alt='arch' />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className='tag'>Architects of the Web.</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Landing
