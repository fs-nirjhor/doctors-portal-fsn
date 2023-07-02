import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { Form, Row, Col, Button } from "react-bootstrap";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    boxShadow: "10px 10px 10px lightgray",
  },
};

Modal.setAppElement("#root");

function AppointmentModal({ isOpen, closeModal, booking, date }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    closeModal();
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p className="h4 text-brand text-center">{booking.name}</p>
        <p className="text-center small">
          On{" "}
          {date.toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
            weekday: "short",
          })}
        </p>
        <form className="px-md-5" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            {...register("name", { required: true, pattern: /^[A-Za-z\s]+$/i })}
          />
           {errors.name && <p className="small text-danger ms-3 mt-2">Please enter your real Name</p>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="tel"
            name="phone"
            placeholder="Phone Number"
            {...register("phone", { required: true, pattern: /^[0-9]*$/i })}
          />
           {errors.phone && <p className="small text-danger ms-3 mt-2">Please enter a valid Phone Number</p>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="email" 
            name="email"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
          />
           {errors.email && <p className="small text-danger ms-3 mt-2" >Please enter a valid Email Address</p>}
        </Form.Group>
          <Row xs={3} className="mb-3">
            <Col>
        <Form.Group>
              <Form.Select
                aria-label="Gender select"
                name="gender"
                required
                {...register("gender", {required: true})}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </Form.Select>
        </Form.Group>
            </Col>
            <Col>
        <Form.Group>
              <Form.Control
                type="number"
                name="age"
                placeholder="Your Age"
                {...register("age", { required: true, pattern: /^[0-9]*$/i })}
              />
              {errors.age && <p className="small text-danger ms-3 mt-2">Please enter your age</p>}
        </Form.Group>
            </Col>
            <Col>
        <Form.Group>
              <Form.Control
                type="number"
                name="weight"
                placeholder="Weight"
                {...register("weight", {
                  required: true,
                  pattern: /^[0-9]*$/i,
                })}
              />
               {errors.email && <p className="small text-danger ms-3 mt-2" >Please enter your weight</p>}
        </Form.Group>
            </Col>
          </Row>
          <Button
            className="gradiant-btn ms-auto mt-3 w-25 d-block"
            type="submit"
          >
            SEND
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export default AppointmentModal;
