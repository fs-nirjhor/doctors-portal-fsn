import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import ServiceArea from "../ServiceArea/ServiceArea";
import Terms from "../Terms/Terms";
import Appointment from "../Appointment/Appointment";


const Home = () => {
return (
  <main>
    <Header/>
    <Container >
      <ServiceArea/>
      <Terms/>
      <Appointment/>
    </Container>
  </main>
);
};

export default Home;