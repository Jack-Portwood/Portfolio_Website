import React from "react";
import LogoB from "../LogoB.png";
const Footer = () => {
  //This will preasent Logo and socail media links

  return (
    <div className="footer-container">
      <div className="social-media">
        <a
          className="social-link"
          href="https://www.linkedin.com/in/jack-portwood/"
        >
          <i class="fab fa-linkedin-in fa-3x"></i>
        </a>
        <img src={LogoB} className="logoB" alt="Jack Portwood Logo" />
        <a className="social-link" href="https://github.com/Jack-Portwood">
          <i class="fab fa-github fa-3x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
