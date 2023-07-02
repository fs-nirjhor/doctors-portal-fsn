import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar({bw}) {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="me-2" as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link className="me-2" as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link className="me-2" as={NavLink} to="/services">Dental Services</Nav.Link>
            <Nav.Link className={`${bw} me-2`} as={NavLink} to="/reviews">Reviews</Nav.Link>
            <Nav.Link className={`${bw} me-2`}  as={NavLink} to="/blog">Blog</Nav.Link>
            <Nav.Link className={`${bw} me-2`}  as={NavLink} to="/contact">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;