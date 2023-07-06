import React, {useState, useEffect, createContext} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "./firebase.init";

export const UserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState("loading");
  useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if(user){
            setCurrentUser(user);
            }
            else{
            setCurrentUser({})
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])
  return (
    <UserContext.Provider value={[    currentUser, setCurrentUser]}>
   <BrowserRouter >
      <Routes >
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route element={<PrivateRoute/>}>
         <Route path="/appointment" element={<Appointment/>}/>
          </Route>
      </Routes>
   </BrowserRouter>
    </UserContext.Provider>
    );
}

export default App;