import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DashboardCalendar = ({date, onDateChange}) => {
return (
  <div>
     <Calendar
            onChange={onDateChange}
            value={date}
            className="border-0 shadow-md rounded py-3 w-100 overflow-scroll"
          />
  </div>
);
};

export default DashboardCalendar;