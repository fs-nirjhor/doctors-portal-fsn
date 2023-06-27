import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Appointment/Appointment/Appointment";

function App() {
  return (
   <BrowserRouter >
      <Routes >
         <Route path="/" element={<Home/>}/>
         <Route path="/appointment" element={<Appointment/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
