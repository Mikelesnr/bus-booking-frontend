import React from "react";
import { Nav, Navbar, Container, Dropdown, Button } from "react-bootstrap";
function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">BLENDON</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="me-5">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  REGISTER
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#admin">Admin</Dropdown.Item>
                  <Dropdown.Item href="#driver">Driver</Dropdown.Item>
                  <Dropdown.Item href="traveller">Traveller</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            <Nav>
              <Button variant="secondary" href="#login">
                LOGIN
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
