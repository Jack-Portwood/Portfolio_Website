import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="nav-link">
          About
          </a>
        </li>
        <li>
          <a hrefto="/portfolio" className="nav-link">
          Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
