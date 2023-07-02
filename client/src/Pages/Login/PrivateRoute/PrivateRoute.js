import { Navigate, Outlet, useLocation } from "react-router-dom";


const PrivateRoute = ({isAllowed}) => {
	const location = useLocation();
if (isAllowed) {
	return <Outlet/>
} 
	return <Navigate to="/login" state ={{from: location}}/>
};

export default PrivateRoute;