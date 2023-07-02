import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

function BookingModal({ isOpen, closeModal, booking, date }) {
  const { name, time } = booking;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    closeModal();
  };
  const dateString = date.toISOString().substring(0, 10);
  return (
    <>
      <Modal show={isOpen} onHide={closeModal} centered>
        <Modal.Header className="border-0" closeButton />
          <Modal.Title className="text-brand text-center mb-3">{name}</Modal.Title>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Select {...register("time", { value: time })} required disabled>
                <option value={time}>{time}</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="username"
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
