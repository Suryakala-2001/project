import React from "react";
import logo from "C:/Users/Suryakala/OneDrive/Desktop/project2/mall/src/images/bg1.jpg";
import { Link, Outlet } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div className="bg">
      <div className="navbar">
        <nav className="nav">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <center><p> SHOPPING MALL</p>
          <sub>Shopping is cheaper than therapy.</sub></center>
          
          <div className="links">
            
            <Link to="/home" className="link">
              Home
            </Link>
            <Link to="/mall" className="link">
              Malls
            </Link>
            
          </div>
        </nav>
      </div>

      <Outlet />
    </div>
  );
};

export default Nav;