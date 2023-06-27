import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import doctor from "../../../images/doctor.png" ;
import "./Appointment.css";

const Appointment = () => {
return (
  <section className="appointment-container px-2">
        <Row xs={1} md={2} className="h-100">
      <Col className="d-none d-md-block">
      <img src={doctor} alt="doctor" className="img-fluid"/>
      </Col>
      <Col className="py-5">
        <p className="h4 mb-3 text-brand">APPOINTMENT</p>
        <p className="h1 text-white">Make an appointment today</p>
        <p className="text-white">ea consectetur ea consequat ex reprehenderit eu officia ipsum sunt </p>
        <Button className="gradiant-btn">Learn More</Button>
      </Col>
    </Row>
  </section>
);
};

export default Appointment;