import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">AgriScope</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <React.Fragment>
          <li><Link to="/monitor-field">Monitor Field</Link></li>
          <li><Link to="/crop-suggestions">Crop Suggestions</Link></li>
        </React.Fragment>
        <React.Fragment>
          <li><Link to="/data-analysis">Data Analysis</Link></li>
          <li><Link to="/field-reports">Field Reports</Link></li>
        </React.Fragment>
      </ul>
      <div className="auth-links">
        <ul>
          <>
            <li><Link to="/login" className="nav-link">Login</Link></li>
            <li><Link to="/register" className="nav-link">Register</Link></li>
          </>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
