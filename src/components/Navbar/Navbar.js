import React, { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Navbar.css";
import logo from "../../assets/images/icons/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    "Men",
    "Women",
    "Kids",
    "Beauty",
    "Home & Living",
    "Electronics",
    "Offers",
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar-wrapper">
        
        {/* TOP NAVBAR */}
        <div className="navbar-top">

          {/* LOGO */}
          <Link to="/" className="logo">
            <img src={logo} alt="Fashion Store" />
          </Link>

          {/* SEARCH */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
            />

            <button>
              <FaSearch />
            </button>
          </div>

          {/* RIGHT ICONS */}
          <div className="nav-icons">

            <Link to="/login" className="nav-icon">
              <FaUser />
              <span>Login</span>
            </Link>

            <Link to="/wishlist" className="nav-icon">
              <FaHeart />
              <span>Wishlist</span>
            </Link>

            <Link to="/cart" className="nav-icon cart-icon">
              <FaShoppingCart />
              <span>Cart</span>

              <div className="cart-badge">2</div>
            </Link>

            {/* MOBILE BUTTON */}
            <button
              className="mobile-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>
        </div>

        {/* BOTTOM NAVBAR */}
        <div className="navbar-bottom">

          <Link to="/categories" className="category-link">
            <FaBars />
            <span>Categories</span>
          </Link>

          {categories.map((item, index) => (
            <Link
              key={index}
              to={`/category/${item.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {item}
            </Link>
          ))}

        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>

        <Link to="/categories" onClick={closeMenu}>
          Categories
        </Link>

        {categories.map((item, index) => (
          <Link
            key={index}
            to={`/category/${item.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={closeMenu}
          >
            {item}
          </Link>
        ))}

        <Link to="/login" onClick={closeMenu}>
          Login
        </Link>

        <Link to="/wishlist" onClick={closeMenu}>
          Wishlist
        </Link>

        <Link to="/cart" onClick={closeMenu}>
          Cart
        </Link>

        <Link to="/register" onClick={closeMenu}>
          Register
        </Link>

      </div>
    </>
  );
};

export default Navbar;