import React from "react";
import { Col, Card, Button } from "react-bootstrap";

const BookingCard = ({booking, date}) => {
  const {name, time, space} = booking;
return (
  <Col className="p-2">
    <Card className="text-center">
    <Card.Body className="text-center">
       <p className="h5 text-brand">{name}</p>
       <p className="fw-bold">{time}</p>
       <p className="text-secondary">{space} space available</p>
       <Button className="gradiant-btn">BOOK APPOINTMENT</Button>
    </Card.Body>
    </Card>
  </Col>
);
};

export default BookingCard;