import React, { useState } from 'react';
import './Navbar.css';
import { IoFastFoodOutline } from "react-icons/io5";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineShoppingBag, MdOutlineLogin } from "react-icons/md";

function Navbar({ cartItemCount }) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="logo">
        <p>FiguEats <IoFastFoodOutline /></p>
      </div>
      <input type="checkbox" id='check' />
      <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <div className="nav-links">
          <ul>
            <li><a href="/" className='active'>Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/how-it-works">How It Works</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
          <div className="btn-mobile"><a href="/signin"><MdOutlineLogin /> Sign in</a></div> {/* Sign in button for mobile */}
          <label htmlFor="check" className='close-menu' onClick={toggleMenu}><FaTimes /></label>
        </div>
        <label htmlFor="check" className='open-menu' onClick={toggleMenu}><FaBars /></label>
        <div className="icons">
          <div className="search-container">
            {isSearchActive && (
              <input type="text" placeholder='Search for item' className="search-input" />
            )}
            <a href="#" className="search-icon" onClick={handleSearchClick}>
              <FaSearch id='search' />
            </a>
          </div>
          <a href="/cart" className="cart-icon">
            <MdOutlineShoppingBag className='bag' />
            {cartItemCount > 0 && (
              <div className="cart-notification">
                {cartItemCount}
              </div>
            )}
          </a>
          <div className="btn-desktop"><a href="/signin"><MdOutlineLogin /> Sign in</a></div> {/* Sign in button for desktop */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
