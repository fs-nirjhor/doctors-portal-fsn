import React from "react";
import { Container, Row } from "react-bootstrap";
import InfoCard from "../InfoCard/InfoCard";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiPhoneCall, FiClock } from 'react-icons/fi';


const BuisnessInfo = () => {
  const cardInfo = [
    {
      title: "Opening hours",
      text: "9am - 8pm",
      icon: FiClock,
      color: "#1CC7C1"
    },
    {
      title: "Our location",
      text: "Khulna, Bangladesh",
      icon: FaMapMarkerAlt,
      color: "#3B4155"
    },
    {
      title: "Contact us",
      text: "01822002200",
      icon: FiPhoneCall,
      color: "#1CC7C1"
    }
    ] ;
return (
  <Container className="info-container">
    <Row xs={1} md={3}>
    {
      cardInfo.map(card => <InfoCard card={card} key={card.title}/>)
    }
    </Row>
  </Container>
);
};

export default BuisnessInfo;