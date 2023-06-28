import React, {useState} from "react";
import { Col, Card, Button } from "react-bootstrap";
import AppointmentModal from "../AppointmentModal/AppointmentModal";

const BookingCard = ({booking, date}) => {
  const {name, time, space} = booking;
  const [isOpen, setIsOpen] = useState(false);
  const openModel = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
return (
  <Col className="p-2">
    <Card className="text-center">
    <Card.Body className="text-center">
       <p className="h5 text-brand">{name}</p>
       <p className="fw-bold">{time}</p>
       <p className="text-secondary">{space} space available</p>
       <Button className="gradiant-btn" onClick = {openModel} >BOOK APPOINTMENT</Button>
       <AppointmentModal isOpen={isOpen} closeModal={closeModal} booking={booking} date={date}/>
    </Card.Body>
    </Card>
  </Col>
);
};

export default BookingCard;