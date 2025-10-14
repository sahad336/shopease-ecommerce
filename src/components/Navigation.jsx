import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../styles/navigation.module.css";
import { CartContext } from "../context/CartContext";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/CategorySlice";
import { HiMenu, HiX } from "react-icons/hi"; // menu icons

function Navigation() {
  const { cart } = useContext(CartContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    navigate("/products");
    setMenuOpen(false); // close menu after click
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.navContainer}>
        <div className={styles.title}>ShopEase.in</div>

        {/* Hamburger Icon */}
        <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </div>

        {/* Menu Items */}
        <ul className={`${styles.navItems} ${menuOpen ? styles.active : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
              onClick={() => setMenuOpen(false)}
            >
              <i className="bi bi-person-circle"></i> Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
              onClick={() => setMenuOpen(false)}
            >
              Products
            </NavLink>
          </li>
          <li className={styles.dropdownWrapper}>
            <div className={styles.link}>
              Categories ▼
              <ul className={styles.dropdown}>
                <li onClick={() => handleCategoryClick("all")}>All</li>
                <li onClick={() => handleCategoryClick("electronics")}>Electronics</li>
                <li onClick={() => handleCategoryClick("jewelery")}>Jewelry</li>
                <li onClick={() => handleCategoryClick("men's clothing")}>Men's Clothing</li>
                <li onClick={() => handleCategoryClick("women's clothing")}>Women's Clothing</li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
              onClick={() => setMenuOpen(false)}
            >
              🛒 Cart ({cart.length})
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
