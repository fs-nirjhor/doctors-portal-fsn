import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from './../../../App';

const Sidebar = () => {
  const [isDoctor, setIsDoctor] = useState(false);
  const [currentUser] = useContext(UserContext)
  useEffect(() => {
    (async () => {
      const validity = await axios.post("http://localhost:5000/isDoctor", currentUser);
      setIsDoctor(validity.data);
    })().catch(error => alert(error.message));
  }, [currentUser]);
  return (
    <div className="gradiant-bg d-flex flex-md-column justify-content-center h-100">
      <a className="text-decoration-none text-white p-2" href="/dashboard">
        Dashboard
      </a>
      <div
        className={`d-flex flex-md-column justify-content-around flex-wrap ${
          isDoctor ? "d-block" : "d-none"
        }`}
      >
        <a className="text-decoration-none text-white p-2" href="/appointment">
          Appointment
        </a>
        <a className="text-decoration-none text-white p-2" href="/patients">
          Patients
        </a>
        <a className="text-decoration-none text-white p-2" href="/prescription">
          Prescription
        </a>
        <a
          className="text-decoration-none text-white p-2"
          href="dashboard/add-doctor"
        >
          Add Doctors
        </a>
        <a className="text-decoration-none text-white p-2" href="/settings">
          Settings
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
