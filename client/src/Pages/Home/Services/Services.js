import React from "react";
import { Col, Card } from "react-bootstrap";

const Services = ({service}) => {
return (
  <Col className="my-2">
    <Card className="h-100 text-center">
      <Card.Img src={service.img} className="p-5"/>
      <Card.Body >
        <Card.Title >{service.title}</Card.Title>
        <Card.Text >{service.text}</Card.Text>
      </Card.Body>
    </Card> 
  </Col>
);
};

export default Services;