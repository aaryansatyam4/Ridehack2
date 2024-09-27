import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header>
      <div className="logo">
        <span><h1>BEAST</h1></span>
      </div>
      <nav ref={navRef}>
        <div className="nav-item">
          <a href="#Home" onClick={closeNavbar}>Home</a>
        </div>
        <div className="nav-item">
          <a href="#Aboutus" onClick={closeNavbar}>About Us</a>
        </div>
        <div className="nav-item">
          <a href="#Services" onClick={closeNavbar}>Services</a>
        </div>
        <div className="nav-item">
          <a href="#Plans" onClick={closeNavbar}>Plans</a>
        </div>
        <div className="nav-item">
          <a href="#Plans" onClick={closeNavbar}>Shop</a>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
