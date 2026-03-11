import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "../styles/navbar.css";
import logo from "../assets/logo.webp";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">

      {/* Logo */}
      <div className="logo">
        <NavLink to="/home">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Navigation Links */}
      <div className={menuOpen ? "nav-links active" : "nav-links"}>

        <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>

        <NavLink to="/automation" className={({ isActive }) => isActive ? "active" : ""}>
          Automation
        </NavLink>

        <NavLink to="/manufacturing" className={({ isActive }) => isActive ? "active" : ""}>
          Manufacturing
        </NavLink>

        <NavLink to="/fabrication" className={({ isActive }) => isActive ? "active" : ""}>
          Fabrication
        </NavLink>

        <NavLink to="/cnc-vmc" className={({ isActive }) => isActive ? "active" : ""}>
          CNC / VMC
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
          Contact Us
        </NavLink>

        {/* Search Icon */}
        <div className="search-icon">
          <FiSearch />
        </div>

        {/* Sign In */}
        <NavLink to="/login" className="signin-btn">
          Login
        </NavLink>

      </div>

    </div>
  );
}

export default Navbar;