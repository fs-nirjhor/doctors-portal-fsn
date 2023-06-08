import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import treatment from "../../../images/treatment.png" ;

const Terms = () => {
return (
    <Row xs={1} md={2} className="align-items-center my-5">
      <Col >
      <img src={treatment} alt="treatment" className="img-fluid p-2"/>
      </Col>
      <Col >
        <p className="h2">Exceptional Dental Care, on Your Terms</p>
        <p className="text-secondary">ea consectetur ea consequat ex reprehenderit eu officia ipsum sunt consequat ullamco proident adipisicing mollit ad aliquip mollit id ex irure nostrud eu esse officia</p>
        <Button className="gradiant-btn">Learn More</Button>
      </Col>
    </Row>
);
};

export default Terms;