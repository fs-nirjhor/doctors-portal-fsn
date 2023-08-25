import { Outlet } from "react-router-dom";
import {useState,useEffect} from "react";
import Sidebar from "../Sidebar/Sidebar";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import { Row, Col} from "react-bootstrap";
import axios from "axios";


const Dashboard = () => {
 
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