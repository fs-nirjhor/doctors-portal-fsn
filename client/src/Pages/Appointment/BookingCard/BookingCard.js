import React, {useState} from "react";
import { Col, Card, Button } from "react-bootstrap";
import BookingModal from "../BookingModal/BookingModal";
//import BookingModal from "../BookingModal/TestModal";

const BookingCard = ({booking, date}) => {
  const {name, time, space} = booking;
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
return (
  <Col className="p-2">
    <Card className="text-center">
    <Card.Body className="text-center">
       <p className="h5 text-brand">{name}</p>
       <p className="fw-bold">{time}</p>
       <p className="text-secondary">{space} space available</p>
       <Button className="gradiant-btn" onClick = {openModal} >BOOK APPOINTMENT</Button>
       <BookingModal isOpen={isOpen} closeModal={closeModal} booking={booking} date={date}/>
    </Card.Body>
    </Card>
  </Col>
);
};

export default BookingCard;