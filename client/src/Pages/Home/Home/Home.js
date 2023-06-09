import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import ServiceArea from "../ServiceArea/ServiceArea";
import Terms from "../Terms/Terms";
import Appointment from "../Appointment/Appointment";
import Testimonial from "../Testimonial/Testimonial";
import Blog from "../Blog/Blog";
import Doctors from "../Doctors/Doctors";


const Home = () => {
return (
  <main>
    <Header/>
    <Container >
      <ServiceArea/>
      <Terms/>
      <Appointment/>
      <Testimonial/>
      <Blog/>
      <Doctors/>
    </Container>
  </main>
);
};

export default Home;