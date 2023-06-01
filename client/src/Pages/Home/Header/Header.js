import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import HeaderMain from "../HeaderMain/HeaderMain";
import "./Header.css";

const Header = () => {
return (
  <section className="header-container">
    <NavigationBar/>
    <HeaderMain/>
  </section>
);
};

export default Header;