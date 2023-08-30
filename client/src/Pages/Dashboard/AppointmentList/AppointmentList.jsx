

const AppointmentList = ({appointment}) => {
  
return (
  <div>
    <h1>Total Appointment: {appointment.length}</h1>
    {appointment.map((item) => (<p key={item._id}>{item.name} - {item.email}</p>))}
  </div>
);
};

export default AppointmentList;