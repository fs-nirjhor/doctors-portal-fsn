
const Sidebar = () => {
return (
  <div className="gradiant-bg d-flex flex-md-column justify-content-around flex-wrap h-100">
    <a className="text-decoration-none text-white p-2" href="/">Dashboard</a>
    <a className="text-decoration-none text-white p-2" href="/appointment">Appointment</a>
    <a className="text-decoration-none text-white p-2" href="/patients">Patients</a>
    <a className="text-decoration-none text-white p-2" href="/prescription">Prescription</a>
    <a className="text-decoration-none text-white p-2" href="/add-doctor">Add Doctors</a>
    <a className="text-decoration-none text-white p-2" href="/settings">Settings</a>
  </div>
);
};

export default Sidebar;