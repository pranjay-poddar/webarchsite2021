import { Nav, Navbar } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import "./App.css";

function Menu() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            WebArch
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets">Home</Nav.Link>
              <Nav.Link href="#deets">About</Nav.Link>
              <Nav.Link href="#deets">Services</Nav.Link>
              <Nav.Link href="#deets">Client</Nav.Link>
              <Nav.Link href="#deets">Contact</Nav.Link>
              <Nav.Link href="#deets">Team</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;
