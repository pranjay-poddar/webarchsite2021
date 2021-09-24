import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import Container from "react-bootstrap/Container";

import "./Nav.css";

const Menu = () => {
  return (
    <div>
      {/* const [show, setShow] = useState(false);  */}
      {/* const showDropdown = () => {
  setShow(!show);
};
const hideDropdown = () => {
  setShow(false);
}; */}

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
            <Nav className="floating">
              <Nav.Link className="element" href="#deets">
                Home
              </Nav.Link>
              <Nav.Link className="element" href="#deets">
                Projects
              </Nav.Link>
              <Nav.Link className="element" href="#deets">
                Team
              </Nav.Link>

              <NavDropdown
                title="Dropdown"
                id="collasible-nav-dropdown"
                // show={show}
                // onMouseEnter={showDropdown}
                // onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item className="element" href="#action/3.1">
                  Testimonials
                </NavDropdown.Item>
                <NavDropdown.Item className="element" href="#action/3.2">
                  About
                </NavDropdown.Item>
                <NavDropdown.Item className="element" href="#action/3.3">
                  Services
                </NavDropdown.Item>
                <NavDropdown.Item className="element" href="#action/3.4">
                  Contact
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#action/3.5">Client</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
