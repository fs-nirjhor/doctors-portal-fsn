import React from "react";
import { Col, Card } from "react-bootstrap";

const DoctorsCard = ({doctor}) => {
  const {name, phone, photo} = doctor;
  return (
    <Col className="my-3">
      <Card >
        {doctor.image ? 
        <Card.Img src={`data:${doctor.image.contentType};base64,${doctor.image.img}`} />
        :
          <Card.Img src={'http://localhost:5000'+photo}/>
          }
        <Card.Body className="text-center">
          <Card.Title >{name}</Card.Title>
          <Card.Text >{phone}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DoctorsCard;
