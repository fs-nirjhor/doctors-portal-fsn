import React from "react";
import "./Header.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import HeaderMain from "../HeaderMain/HeaderMain";
import BuisnessInfo from "../BuisnessInfo/BuisnessInfo";

const Header = () => {
return (
  <header>
  <section className="header-container">
    <NavigationBar/>
    <HeaderMain/>
  </section>
  <BuisnessInfo/>
  </header>
);
};

export default Header;