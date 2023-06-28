import React, {useState} from "react";
import { Container } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AppointmentBooking from "../AppointmentBooking/AppointmentBooking";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
return (
  <div className="mb-5">
  <Container >
    <AppointmentHeader date={date} setDate={setDate}/>
    <AppointmentBooking date={date}/>
    <Footer/>
  </Container>
  </div>
);
};

export default Appointment;