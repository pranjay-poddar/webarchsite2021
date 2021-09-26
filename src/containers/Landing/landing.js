import React from 'react'
import '../Landing/landing.css'
import logo from '../../files/logo.png'
import { Container, Col, Row } from 'react-bootstrap'

const Landing = () => {
  return (
    <Container>
      <Row className='content'>
        <Col className='img-container'>
          <img src='./logo.png' alt='logo' />
        </Col>
      </Row>
    </Container>
  )
}

export default Landing
