import React from "react";
import { Nav, Navbar, Container, Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">BLENDON</Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="me-5">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  REGISTER
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item><Link to="/admin-signup">Admin</Link></Dropdown.Item>
                  <Dropdown.Item><Link to="/driver-signup">Driver</Link></Dropdown.Item>
                  <Dropdown.Item><Link to="/traveller-signup">Traveller</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            <Nav>
              <Button variant="secondary">
                <Link to="/login">LOGIN</Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
