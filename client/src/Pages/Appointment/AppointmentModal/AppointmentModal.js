import React from 'react';
import Modal from 'react-modal';
import { Form, Row, Col, Button } from "react-bootstrap";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: "20px",
    boxShadow: "10px 10px 10px lightgray"
  },
};

Modal.setAppElement('#root');

function AppointmentModal({isOpen,closeModal, booking,date}) {
  
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p className="h4 text-brand text-center">{booking.name}</p>
        <p className="text-center small">On {date.toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "short"
        })}</p>
        <form className="px-md-5">
        <Form.Control className="mb-3" type="text" placeholder="Your Name" />
        <Form.Control className="mb-3" type="tel" placeholder="Phone Number" />
        <Form.Control className="mb-3" type="email" placeholder="Email" />
        <Row xs={3} className="mb-3">
        <Col >
        <Form.Select aria-label="Gender select">
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="others">Others</option>
      </Form.Select>
        </Col>
          <Col >
        <Form.Control type="number" placeholder="Your Age" />
          </Col>
          <Col >
        <Form.Control type="number" placeholder="Weight" />
          </Col>
        </Row>
        <Button className="gradiant-btn ms-auto mt-3 w-25 d-block">SEND</Button>
        </form>
      </Modal>
    </div>
  );
}

export default AppointmentModal;