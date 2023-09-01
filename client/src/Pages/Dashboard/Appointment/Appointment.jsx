import { useState, useEffect } from "react";
import Calendar from "../Calendar/Calendar";
import AppointmentList from "../AppointmentList/AppointmentList";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { UserContext } from "../../../App";
import { useContext } from "react";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [currentUser] = useContext(UserContext);
  const onDateChange = (date) => {
    setDate(date);
  };
  const [appointment, setAppointment] = useState([]);
  useEffect(() => {
    const getAppointment = async () => {
      const appointmentDate = date.toLocaleDateString();
      try {
        const res = await axios.post(
          `http://localhost:5000/appointment-by-date`,
          { date: appointmentDate, user: currentUser }
        );
        setAppointment(res.data);
      } catch (e) {
        alert(e.message);
      }
    };
    getAppointment();
  }, [date, currentUser]);
  return (
    <main>
      <Row xs={1} md={2}>
        <Col>
          <Calendar date={date} onDateChange={onDateChange} />
        </Col>
        <Col>
          <AppointmentList appointment={appointment} />
        </Col>
      </Row>
    </main>
  );
};

export default Appointment;
