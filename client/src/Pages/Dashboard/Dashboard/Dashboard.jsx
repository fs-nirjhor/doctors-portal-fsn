import { Outlet } from "react-router-dom";
import {useState,useEffect} from "react";
import Sidebar from "../Sidebar/Sidebar";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import { Row, Col} from "react-bootstrap";
import axios from "axios";


const Dashboard = () => {
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
  <NavigationBar/>
    <Row >
      <Col xs={12} md={2}> <Sidebar/> </Col>
      <Col xs={12} md={10}> <Outlet/> </Col>
    </Row>
  </main>
);
};

export default Dashboard;