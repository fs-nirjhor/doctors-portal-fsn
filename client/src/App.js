import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
   <BrowserRouter >
      <Routes >
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route element={<PrivateRoute/>}>
         <Route path="/appointment" element={<Appointment/>}/>
          </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
