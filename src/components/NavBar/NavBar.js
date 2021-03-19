import React,{useState} from "react";
import "./NavBar.scss";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false)
  

  //Started to build out function for hamburger might need its own component
  //   function handleTogle() { 
  //   setIsOpen({ isOpen: !setIsOpen})
  // }


  return (
    <nav className="navbar">
      <ul className={isOpen ? "show-nav" : "nav-links"}>
        <li>
          <HashLink smooth to="#home-container" className="nav-link">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#aboutMe-container" className="nav-link">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#portfolio-container" className="nav-link">
            Projects
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;



