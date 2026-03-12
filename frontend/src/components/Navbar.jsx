import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";
import logo from "../assets/logo.webp";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Scroll hide/show navbar
  useEffect(() => {

    let lastScrollY = window.scrollY;

    const handleScroll = () => {

      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowNavbar(false); // scroll down → hide
      } else {
        setShowNavbar(true); // scroll up → show
      }

      lastScrollY = window.scrollY;

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {menuOpen && (
        <div
          className={styles.menuOverlay}
          onClick={toggleMenu}
        ></div>
      )}

      <header
        className={`${styles.navbar} ${showNavbar ? styles.show : styles.hide
          }`}
      >

        {/* Logo */}
        <div className={styles.logo}>
          <NavLink to="/">
            <img src={logo} alt="Company Logo" />
          </NavLink>
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""
            }`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav
          className={`${styles.navLinks} ${menuOpen ? styles.menuActive : ""
            }`}
        >

          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/automation">Automation</NavLink>
          <NavLink to="/manufacturing">Manufacturing</NavLink>
          <NavLink to="/fabrication">Fabrication</NavLink>
          <NavLink to="/cnc-vmc">CNC / VMC</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>

        </nav>

      </header>
    </>
  );
}

export default Navbar;