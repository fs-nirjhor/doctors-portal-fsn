import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import DoctorsCard from "../DoctorsCard/DoctorsCard";
import { useState } from "react";
import axios from "axios";


const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:5000/doctors");
      setDoctors(res.data);
      console.log(res.data)
    })().catch((error) => alert(error.message));
  }, []);

  return (
    <section className="my-5">
      <p className="h3 mb-3 text-center text-brand">OUR DOCTORS</p>
      <Row xs={1} md={3}>
        {doctors.map((doctor) => (
          <DoctorsCard doctor={doctor} key={doctor._id} />
        ))}
      </Row>
    </section>
  );
};

export default Doctors;
