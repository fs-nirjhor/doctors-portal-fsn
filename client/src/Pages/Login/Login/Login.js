import React from "react";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import LoginForm from "../LoginForm/LoginForm";
import { Container, Row, Col } from "react-bootstrap";
import bg from "../../../images/login.png";

const Login = () => {
return (
  <div>
  <NavigationBar/>
    <Container >
      <Row xs={1} md={2} className="justify-content-center align-items-center my-5">
        <Col >
          <LoginForm/>
        </Col>
        <Col >
          <img className="img-fluid" src={bg} alt="login-bg" />
        </Col>
      </Row>
    </Container>
  </div>
);
};

export default Login;