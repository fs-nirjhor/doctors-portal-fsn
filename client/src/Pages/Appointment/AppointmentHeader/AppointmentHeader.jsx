import React from "react";
import "./AppointmentHeader.css";
import chair from "../../../images/chair.png";
import { Container, Row, Col } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";

const AppointmentHeader = ({date,setDate}) => {
  return (
    <Container className="appointment-header pb-5">
      <NavigationBar />
      <Row className="mt-5 align-items-center" xs={1} md={2}>
        <Col className="pb-5">
          <p className="h2 fw-bold text-center mb-3">Appointment</p>
          <Calendar
            onChange={setDate}
            value={date}
            className="border-0 shadow-lg rounded p-3"
          />
        </Col>
        <Col>
          <img className="img-fluid" src={chair} alt="chair" />
        </Col>
      </Row>
    </Container>
  );
};

export default AppointmentHeader;
