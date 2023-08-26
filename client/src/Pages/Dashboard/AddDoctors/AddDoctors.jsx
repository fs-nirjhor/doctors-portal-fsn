import { useState } from "react";
import { Container } from "react-bootstrap";
import axios from 'axios';

const AddDoctors = () => {
  const [info, setInfo] = useState({});
  const [photo, setPhoto] = useState(null);

  const handleInfoChange = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  const handlePhotoChange = (e) => {
    const newPhoto = e.target.files[0];
    setPhoto(newPhoto);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("photo", photo);
    formData.append("name", info.name);
    formData.append("email", info.email);
    formData.append("phone", info.phone);

      try {
        const res = await axios.post("http://localhost:5000/add-doctors", formData);
        console.log(res.data)
        alert(res.data.name + ' added successfully')
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <Container>
      <h1 className="h1 my-5 text-center">Add a Doctor</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="doctor-name"
          className="form-control mb-3"
          placeholder="Doctor's Name"
          onChange={handleInfoChange}
          required
        />
        <input
          type="email"
          name="email"
          className="form-control mb-3"
          placeholder="Doctor's Email"
          onChange={handleInfoChange}
          required
        />
        <input
          type="tel"
          name="phone"
          className="form-control mb-3"
          placeholder="Doctor's mobile number"
          onChange={handleInfoChange}
          required
        />
        <input
          type="file"
          name="photo"
          className="form-control mb-3"
          placeholder="Doctors Photo"
          onChange={handlePhotoChange}
          required
        />
        <button className="btn btn-primary ms-auto d-block" type="submit">
          ADD
        </button>
      </form>
    </Container>
  );
};

export default AddDoctors;
