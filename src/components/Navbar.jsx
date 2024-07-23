import React from "react";
import logo from "../assets/Zenith-removebg-preview.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="line"></div>
      <img className="logo" src={logo} alt="Logo" />
      <div className="line"></div>
    </div>
  );
}

export default Navbar;
