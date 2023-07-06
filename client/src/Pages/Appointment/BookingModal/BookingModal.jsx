import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

function BookingModal({ isOpen, closeModal, booking, date }) {
  const { name, time } = booking;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.service = booking.name;
    data.createdDate = new Date();
    fetch(`http://localhost:5000/add-appointment`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error.message));
    closeModal();
  };
  const dateString = date.toISOString().substring(0, 10);
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
                name="username"
                required
                placeholder="Your Name"
                {...register("username", {
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
                defaultValue={dateString}
                {...register("date", {
                  value: dateString,
                })}
                disabled
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
