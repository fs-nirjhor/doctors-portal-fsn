import React from "react";
import Services from "../Services/Services";
import fluoride from "../../../images/fluoride.png" ;
import cavity from "../../../images/cavity.png" ;
import whitening from "../../../images/whitening.png" ;
import { Row } from "react-bootstrap";

const serviceData = [
  {
    title: "Fluoride Treatment",
    img: fluoride,
    text: "incididunt incididunt et deserunt et nisi incididunt exercitation incididunt cupidatat"
  },
  {
    title: "Cavity Filling",
    img: cavity,
    text: "incididunt incididunt et deserunt et nisi incididunt exercitation incididunt cupidatat"
  },
  {
    title: "Teeth Whitening",
    img: whitening,
    text: "incididunt incididunt et deserunt et nisi incididunt exercitation incididunt cupidatat"
  },
  ];

const ServiceArea = () => {
return (
  <section>
  <div className="text-center my-5">
    <h5 style={{color: "#1CC7C1"}}>OUR SERVICES</h5>
    <h2>Services We Provide</h2>
  </div>
  <Row xs={1} md={3}>
    {
      serviceData.map(service => <Services service={service} key={service.title}/>)
    }
  </Row>
  </section>
);
};

export default ServiceArea;