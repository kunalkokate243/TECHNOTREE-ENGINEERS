import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "../styles/navbar.css";
import logo from "../assets/logo.webp";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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

        <NavLink to="/home">Home</NavLink>
        <NavLink to="/automation">Automation</NavLink>
        <NavLink to="/manufacturing">Manufacturing</NavLink>
        <NavLink to="/fabrication">Fabrication</NavLink>
        <NavLink to="/cnc-vmc">CNC / VMC</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>

      </div>

    </div>
  );
}

export default Navbar;