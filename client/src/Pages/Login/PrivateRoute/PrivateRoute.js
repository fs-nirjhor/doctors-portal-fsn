import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { auth } from "../../../firebase.init.js";

const PrivateRoute = () => {
  const location = useLocation();
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthenticated(user);
    });

    return () => unsubscribe();
  }, []);

  if (authenticated === null) {
    return <div className="d-flex justify-content-center align-items-center vh-100" >
    <Spinner animation="border" style={{fontSize: "50vw"}}/>
    </div>
  }

  return (
    <>
      {authenticated ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} />
      )}
    </>
  );
};

export default PrivateRoute;
