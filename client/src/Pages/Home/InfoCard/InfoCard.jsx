import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const InfoCard = ({card}) => {
return (
     <Col className="my-2">
      <Card className="p-2 h-100" text="white" style={{background: card.color}}>
        <Row className="align-items-center">
        <Col xs={3} style={{fontSize: '3em'}}>
          {<card.icon/>}
        </Col>
          <Col xs={9}>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
          </Col>
        </Row>
      </Card>
      </Col>
);
};

export default InfoCard;