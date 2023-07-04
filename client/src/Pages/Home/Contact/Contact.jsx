import React from "react";
import appointment from "../../../images/appointment.png";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section
      className="my-5 py-3 text-center"
      style={{
        backgroundImage: `url(${appointment})`,
        backgroundSize: "cover",
      }}
    >
      <p className="text-brand h3 mb-3">
        CONTACT
      </p>
      <p className="text-white h1 mb-5">Always Connect With Us</p>
      <Form className="mx-auto w-75">
        <Form.Control
          type="email"
          placeholder="Email Address*"
          className="mb-3"
        />
        <Form.Control type="text" placeholder="Subject*" className="mb-3" />
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Your Message*"
          className="mb-3"
        />
        <Button className="gradiant-btn">Submit</Button>
      </Form>
    </section>
  );
};

export default Contact;
