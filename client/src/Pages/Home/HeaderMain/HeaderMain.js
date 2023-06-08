import React from "react";
import chair from "../../../images/chair.png" ;
import { Container, Row, Col, Button } from "react-bootstrap";

const HeaderMain = () => {
return (
  <Container>
    <Row className="align-items-center" style={{height: "500px"}}>
      <Col md={{ span: 4, offset: 1 }} >
        <p className="h1 fw-bold">Your New Smile <br /> Starts Here</p>
        <p className="text-secondary">aute consectetur ex reprehenderit in magna officia id non mollit aute voluptate do aute ametin dolor veniam adipisicing.</p>
        <Button className="gradiant-btn">Get Appointment</Button>
      </Col>
      <Col md={7}>
        <img className="img-fluid" src={chair} alt="chair"/>
      </Col>
    </Row>
  </Container>
);
};

export default HeaderMain;