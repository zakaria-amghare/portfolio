import React from "react";
import "./Navbar.css"; // Assuming you have a CSS file for styling
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Zaki-chan</h1>
      <ul className="nav-links">
        <a href="#hero-section">
        <li>About me </li>
        </a>
        <li>projects</li>
        <li>Skills</li>   
        <li>Contact</li>
        <li>Resume</li>
      </ul>
      <a href="#connect-with-me">
      <div className="connect-with-me" >connect with me 😊</div>
      </a>
    </div>
  );
};

export default Navbar;
