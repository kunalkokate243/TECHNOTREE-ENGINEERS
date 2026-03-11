import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.webp";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">

      <div className="logo">
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      {/* Hamburger */}
      <div 
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Nav Links */}
      <div className={menuOpen ? "nav-links active" : "nav-links"}>
        <Link to="/home">Home</Link>
        <Link to="/automation">Automation</Link>
        <Link to="/manufacturing">Manufacturing</Link>
        <Link to="/fabrication">Fabrication</Link>
        <Link to="/cnc-vmc">CNC / VMC</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

    </div>
  );
}

export default Navbar;