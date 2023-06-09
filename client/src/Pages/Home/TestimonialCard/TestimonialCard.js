import React from "react";
import { Col, Card, Row } from "react-bootstrap";

const TestimonialCard = ({testimonial}) => {
  const {name, address, comment, photo} = testimonial;
return (
  <Col className="my-3">
    <Card >
      <Card.Body >
      <Card.Text >{comment}</Card.Text>
      <Row className="align-items-center">
      <Col xs={4}>
        <img src={photo} alt="people" className="img-fluid"/>
      </Col>
      <Col xs={8}>
        <p style={{color: "#1CC7C1"}} className="h6">{name}</p>
        <p className="small">{address}</p>
      </Col>
      </Row>
      </Card.Body>
    </Card>
  </Col>
);
};

export default TestimonialCard;