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
          <Link to="/about" className="nav-link">
          About
          </Link>
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
