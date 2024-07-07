import React, { useState } from "react";
import { StyledNavbar, NavbarLink } from "./StyledNavbar";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavbar>
      <div className="navbar">
        <div className="navbar_left">
          <h2 className="navbar_brand">Covid ID</h2>
          <div className="navbar_toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes style={{ color: "#EF476F" }} /> : <FaBars />}
          </div>
        </div>

        <div className={`navbar_right ${isOpen ? "show" : ""}`}>
          <ul className="navbar_list">
            <li
              className={`navbar_item ${
                location.pathname === "/" ? "active" : ""
              }`}>
              <NavbarLink to="/" onClick={toggleMenu}>
                Global
              </NavbarLink>
            </li>
            <li
              className={`navbar_item ${
                location.pathname === "/covid/indonesia" ? "active" : ""
              }`}>
              <NavbarLink to="/covid/indonesia" onClick={toggleMenu}>
                Indonesia
              </NavbarLink>
            </li>
            <li
              className={`navbar_item ${
                location.pathname === "/covid/provinsi" ? "active" : ""
              }`}>
              <NavbarLink to="/covid/provinsi" onClick={toggleMenu}>
                Provinsi
              </NavbarLink>
            </li>
            <li
              className={`navbar_item ${
                location.pathname === "/covid/about" ? "active" : ""
              }`}>
              <NavbarLink to="/covid/about" onClick={toggleMenu}>
                About
              </NavbarLink>
            </li>
          </ul>
        </div>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
