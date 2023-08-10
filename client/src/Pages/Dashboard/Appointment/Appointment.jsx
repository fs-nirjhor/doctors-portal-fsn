import {useState,useEffect} from "react";
import Calendar from "../Calendar/Calendar";
import AppointmentList from "../AppointmentList/AppointmentList" ;
import { Row, Col} from "react-bootstrap";
import axios from "axios";


const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const onDateChange = (date) => {
    setDate(date);
  };
  const [appointment, setAppointment] = useState([]);
  useEffect(() => {
    const getAppointment = async () => {
     const appointmentDate = date.toLocaleDateString();
      try {
      const res = await axios.get(`http://localhost:5000/appointment-by-date?date=${appointmentDate}`);
      setAppointment(res.data);
  } catch (e) {
    alert(e.message);
  }
    };
    getAppointment();
  }, [date]);
return (
  <main>
    <Row xs={1} md={2}>
      <Col><Calendar date={date} onDateChange={onDateChange}/></Col>
      <Col><AppointmentList appointment={appointment}/></Col>
    </Row>
  </main>
);
};

export default Appointment;