import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { UserContext } from "../../../App";

const PrivateRoute = () => {
  const [currentUser] = useContext(UserContext);
  const location = useLocation();

  if (currentUser === 'loading') {
    return (
    <div className="d-flex justify-content-center align-items-center vh-100" >
    <Spinner animation="border" style={{fontSize: "50vw"}}/>
    </div>
    );
  }
  if (currentUser.email) {
    return <Outlet/>
  }
  return <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;
