import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import fluoride from "../../../images/fluoride.png" ;
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <Navbar expand="md">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src={fluoride}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="dental logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="me-2" as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link className="me-2" as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link className="me-2" as={NavLink} to="/services">Dental Services</Nav.Link>
            <Nav.Link className="text-bw me-2" as={NavLink} to="/reviews">Reviews</Nav.Link>
            <Nav.Link className="text-bw me-2" as={NavLink} to="/blog">Blog</Nav.Link>
            <Nav.Link className="text-bw me-2" as={NavLink} to="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;