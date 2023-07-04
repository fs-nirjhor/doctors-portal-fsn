import React from "react";
import doctor from "../../../images/doctor-small.png";
import { Row } from "react-bootstrap";
import DoctorsCard from "../DoctorsCard/DoctorsCard";

const doctorsData = [
  {
    name: "Dr. Caudi",
    phone: "+8801968-297678",
    photo: doctor,
  },
  {
    name: "Dr. James",
    phone: "+8801743-205675",
    photo: doctor,
  },
  {
    name: "Dr. Devid",
    phone: "+8801853-215328",
    photo: doctor,
  },
];

const Doctors = () => {
  return (
    <section className="my-5">
      <p className="h3 mb-3 text-center text-brand">
        OUR DOCTORS
      </p>
      <Row xs={1} md={3}>
      {
        doctorsData.map(doctor => <DoctorsCard doctor={doctor} key={doctor.name}/>)
      }
      </Row>
    </section>
  );
};

export default Doctors;
