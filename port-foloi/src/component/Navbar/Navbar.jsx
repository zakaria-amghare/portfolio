import React from "react";
import "./Navbar.css"; // Assuming you have a CSS file for styling
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Zaki-chan</h1>
      <ul className="nav-links">
        <li>About me </li>
        <li>projects</li>
        <li>Skills</li>   
        <li>Contact</li>
        <li>Resume</li>
      </ul>
      <div className="connect-with-me">connect with me 😊</div>
    </div>
  );
};

export default Navbar;
