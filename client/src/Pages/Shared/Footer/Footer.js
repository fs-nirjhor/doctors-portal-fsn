import React from "react";
import footerBg from "../../../images/footer.png";
import { Row, Col, Button } from "react-bootstrap";
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="mt-5 py-3 "
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
      }}
    >
      <Row xs={2} md={4}>
        <Col>
          <p className="mt-5">Emergency Dental Care</p>
          <p>Check Up</p>
          <p>Treatment of Personal Diseases</p>
          <p>Tooth Extraction</p>
          <p>Check Up</p>
        </Col>
        <Col>
          <p className="text-brand h5 my-3">Service</p>
          <p>Emergency Dental Care</p>
          <p>Check Up</p>
          <p>Treatment of Personal Diseases</p>
          <p>Tooth Extraction</p>
          <p>Check Up</p>
          <p>Check Up</p>
          <p>Check Up</p>
        </Col>
        <Col>
          <p className="text-brand h5 my-3">Oral Health</p>
          <p>Emergency Dental Care</p>
          <p>Check Up</p>
          <p>Treatment of Personal Diseases</p>
          <p>Tooth Extraction</p>
          <p>Check Up</p>
          <p>Check Up</p>
          <p>Check Up</p>
        </Col>
        <Col>
          <p className="text-brand h5 my-3">Our Address</p>
          <p className="mb-3">New York - 101010 Hudson Yards</p>
          <p>
            <FaFacebookF className="social-icon" />
            <FaGooglePlusG className="social-icon" />
            <FaTwitter className="social-icon" />
          </p>
          <p className="mt-5">Call Now</p>
          <Button className="gradiant-btn">+8801726-156804</Button>
        </Col>
      </Row>
      <p className="text-center small my-3">
        Copyright {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
