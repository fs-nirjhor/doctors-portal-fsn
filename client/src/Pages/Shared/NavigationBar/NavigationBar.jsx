import { useContext } from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import {auth} from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { UserContext } from "../../../App";

function NavigationBar({bw}) {
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const handleLogout = () => {
    signOut(auth)
    .then(() => setCurrentUser({}))
    .catch(error => alert(error.code));
  };
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="me-2" as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link className="me-2" as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link className="me-2" as={NavLink} to="/appointment">Dental Services</Nav.Link>
       {/*  <Nav.Link className={`${bw} me-2`} as={NavLink} to="/reviews">Reviews</Nav.Link>
            <Nav.Link className={`${bw} me-2`}  as={NavLink} to="/dashboard">Dashboard</Nav.Link> */}
            <Nav.Link className="text-bw me-2" as={NavLink} to="/reviews">Reviews</Nav.Link>
            <Nav.Link className="text-bw me-2"  as={NavLink} to="/dashboard">Dashboard</Nav.Link>
           { currentUser.email 
           ? <Nav.Link className="text-bw me-2" onClick = {handleLogout} > Logout</Nav.Link>
          : <Nav.Link className="text-bw me-2" as={NavLink} to="/login">Login</Nav.Link>
           }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
