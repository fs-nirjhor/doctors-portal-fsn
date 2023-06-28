import React from "react";
import BookingData from "../../../data/BookingData";
import BookingCard from "../BookingCard/BookingCard";
import { Row } from "react-bootstrap";

const AppointmentBooking = ({ date }) => {
  return (
    <div className="my-5">
      <p className="h4 text-brand my-3 text-center">
        Available Appointments on {date.toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <Row xs={1} md={3}>
      {
        BookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}/>)
      }
      </Row>
    </div>
  );
};

export default AppointmentBooking;
