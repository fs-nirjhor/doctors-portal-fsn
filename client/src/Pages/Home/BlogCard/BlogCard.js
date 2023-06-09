import React from "react";
import { Col, Row, Card } from "react-bootstrap";

const BlogCard = ({ blog }) => {
  const { name, photo, date, title, text } = blog;
  return (
    <Col className="my-3">
      <Card className="h-100">
        <Card.Body>
          <Row className="text-align-center">
            <Col xs={4}>
              <img src={photo} alt="people" className="img-fluid" />
            </Col>
            <Col xs={8}>
              <p style={{ color: "#1CC7C1" }} className="h6">
                {name}
              </p>
              <p className="small">{date}</p>
            </Col>
          </Row>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogCard;
