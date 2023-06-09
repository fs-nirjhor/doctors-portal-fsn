import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";
import people1 from "../../../images/people1.png";
import people2 from "../../../images/people2.png";
import people3 from "../../../images/people3.png";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const testimonialData = [
  {
    name: "Winson Harry",
    address: "California",
    photo: people1,
    comment:
      "Enim ipsum est veniam magna aliquip ex fugiat culpa minim. Enim ipsum est veniam magna aliquip ex fugiat culpa minim.",
  },
  {
    name: "John Doe",
    address: "Washington",
    photo: people2,
    comment:
      "Enim ipsum est veniam magna aliquip ex fugiat culpa minim. Enim ipsum est veniam magna aliquip ex fugiat culpa minim.",
  },
  {
    name: "Devid Jim",
    address: "London",
    photo: people3,
    comment:
      "Enim ipsum est veniam magna aliquip ex fugiat culpa minim. Enim ipsum est veniam magna aliquip ex fugiat culpa minim.",
  },
];

const Testimonial = () => {
  return (
    <section className="my-5 px-2">
      <Row className="align-items-center">
        <Col xs={8}>
          <p style={{ color: "#1CC7C1" }} className="h4 mb-3">
            TESTIMONIAL
          </p>
          <p className="h1">What's Our Patients Says</p>
        </Col>
        <Col
          xs={4}
          className="text-info text-opacity-25 text-end"
          style={{ fontSize: "100px" }}
        >
          <FaQuoteLeft />
        </Col>
      </Row>
      <Row xs={1} md={3}>
        {testimonialData.map((testimonial) => (
          <TestimonialCard testimonial={testimonial} key={testimonial.name} />
        ))}
      </Row>
    </section>
  );
};

export default Testimonial;
