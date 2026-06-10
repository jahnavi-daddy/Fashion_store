import React, { useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import logo from "../../assets/images/icons/logo.png";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="Fashion Store" />
          </div>

          {/* Navigation Links */}
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">Shop</a></li>
            <li><a href="/">Categories</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>

          {/* Search */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search products, brands and more..."
            />
            <button>
              <FaSearch />
            </button>
          </div>

          {/* Actions */}
          <div className="nav-actions">

            <a href="/" className="icon-item">
              <FaUser />
              <span>Login</span>
            </a>

            <a href="/" className="icon-item">
              <FaHeart />
              <span>Wishlist</span>
            </a>

            <a href="/" className="icon-item cart">
              <FaShoppingCart />
              <span>Cart</span>
              <div className="badge">2</div>
            </a>

            <button
              className="mobile-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="/">Home</a>
        <a href="/">Shop</a>
        <a href="/">Categories</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Login</a>
        <a href="/">Register</a>

        <div className="mobile-search">
          <input type="text" placeholder="Search..." />
          <button>
            <FaSearch />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;