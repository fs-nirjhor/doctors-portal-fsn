import {useState,useEffect} from "react";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "../Calendar/Calendar";
import AppointmentList from "../AppointmentList/AppointmentList" ;
import { Row, Col} from "react-bootstrap";
import axios from "axios";


const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [appointment, setAppointment] = useState([]);
  const onDateChange = (date) => {
    setDate(date);
  };
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
    <Row >
      <Col xs={2}><Sidebar/></Col>
      <Col xs={5}><Calendar date={date} onDateChange={onDateChange}/></Col>
      <Col xs={5}><AppointmentList appointment={appointment}/></Col>
    </Row>
  </main>
);
};

export default Dashboard;