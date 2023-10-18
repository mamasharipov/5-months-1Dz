import React from "react";
import "./Navbar.css"; // Создай файл Navbar.css для стилей навбара

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#">Here is logo</a>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#">About us</a>
        </li>
        <li className="nav-item">
          <a href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a href="#">News</a>
        </li>
        <li className="nav-item">
          <a href="#">Services</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
