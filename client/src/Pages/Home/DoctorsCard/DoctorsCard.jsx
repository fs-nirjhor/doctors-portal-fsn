import React from "react";
import { Col, Card } from "react-bootstrap";

const DoctorsCard = ({doctor}) => {
  const {name, phone, photo} = doctor;
  return (
    <Col className="my-3">
      <Card >
        <Card.Img src={'http://localhost:5000'+photo}/>
        <Card.Body className="text-center">
          <Card.Title >{name}</Card.Title>
          <Card.Text >{phone}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DoctorsCard;
