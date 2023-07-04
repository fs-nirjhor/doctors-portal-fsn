import React from "react";
import "./Header.css";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import HeaderMain from "../HeaderMain/HeaderMain";
import BuisnessInfo from "../BuisnessInfo/BuisnessInfo";

const Header = () => {
return (
  <header>
  <section className="header-container">
    <NavigationBar bw="text-bw"/>
    <HeaderMain/>
  </section>
  <BuisnessInfo/>
  </header>
);
};

export default Header;