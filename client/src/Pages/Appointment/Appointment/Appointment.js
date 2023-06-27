import React, {useState} from "react";
import { Container } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
console.log(date.toDateString());
return (
  <div>
  <Container >
    <AppointmentHeader date={date} setDate={setDate}/>
    <Footer/>
  </Container>
  </div>
);
};

export default Appointment;