import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart, FaSearch } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ onSearch }) { // Accepting onSearch as a prop
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const closeNavbar = () => {
    navRef.current.classList.remove('responsive_nav');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (query) {
      onSearch(query); // Call the onSearch prop with the search query
    }
  };

  return (
    <header>
      <div className="logo">
        <span><h1>BEAST</h1></span>
      </div>

      <nav ref={navRef} className="nav-items">
        <div className="nav-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeNavbar}>
            Home
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/aboutus" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeNavbar}>
            About Us
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeNavbar}>
            Services
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/plan" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeNavbar}>
            Plans
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/shop" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeNavbar}>
            Shop
          </NavLink>
        </div>
      </nav>

      {/* Search Bar */}
      <form className="search-form" onSubmit={handleSearch}>
        <input 
          type="text" 
          name="search" 
          placeholder="Search products..." 
          className="search-input"
        />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </form>

      {/* Cart Button */}
      <div className="cart-btn">
        <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeNavbar}>
          <FaShoppingCart /> Cart
        </NavLink>
      </div>

      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaTimes />
      </button>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
