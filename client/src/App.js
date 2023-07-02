import React, {useState, createContext} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedUser, setLoggedUser] = useState({});
  console.log(loggedUser, !!loggedUser.email);
  return (
    <UserContext.Provider value={[    loggedUser, setLoggedUser]}>
   <BrowserRouter >
      <Routes >
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route element={<PrivateRoute isAllowed={!!loggedUser.email}/>}>
         <Route path="/appointment" element={<Appointment/>}/>
          </Route>
      </Routes>
   </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
