import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";


function BookingModal({ isOpen, closeModal, booking, date }) {
  const { name, time } = booking;
  const isoDate = date.toISOString().substring(0, 10);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    data.service = booking.name;
    data.date = date.toLocaleDateString();
    data.created = new Date();
  const url = "http://localhost:5000/add-appointment";
  try {
    const res = await axios.post(url, data);
    if (res.data) {
      alert("Appointment Booked on " + isoDate);
      closeModal();
    }
  } catch (e) {
    alert(e.message);
  }
  };
  
  return (
    <>
      <Modal show={isOpen} onHide={closeModal} centered>
        <Modal.Header className="border-0" closeButton />
        <Modal.Title className="text-brand text-center mb-3">
          {name}
        </Modal.Title>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Select
                {...register("time", { value: time })}
                required
                disabled
              >
                <option value={time}>{time}</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="name"
                required
                placeholder="Your Name"
                {...register("name", {
                  required: true,
                  pattern: /^[A-Za-z\s]+$/i,
                })}
              />
              {errors.username && (
                <Form.Text className="small text-danger ms-3 mt-2">
                  Please enter your real Name
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                {...register("phone", { required: true, pattern: /^[0-9]*$/i })}
              />
              {errors.phone && (
                <Form.Text className="small text-danger ms-3 mt-2">
                  Please enter a valid Phone Number
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                required
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+\.\S+$/,
                })}
              />
              {errors.email && (
                <Form.Text className="small text-danger ms-3 mt-2">
                  Please enter a valid Email Address
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="date"
                required
                defaultValue={isoDate}
                disabled
                {...register("date", {
                  value: isoDate })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Row xs={3}>
                <Col>
                  <Form.Select
                    aria-label="Gender selection"
                    name="gender"
                    required
                    {...register("gender", { required: true })}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Control
                    type="number"
                    name="age"
                    placeholder="Age"
                    required
                    {...register("age", { required: true })}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="number"
                    name="weight"
                    placeholder="Weight"
                    required
                    {...register("weight", { required: true })}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Button type="submit" className="gradiant-btn ms-auto d-block w-25">
              SEND
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookingModal;