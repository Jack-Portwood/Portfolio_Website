import React from "react";
import LogoB from "../LogoB.png";
const Footer = () => {
  //This will preasent Logo and socail media links

  return (
    <div className="footer-container">
      <div className="social-media">
        <i class="fab fa-linkedin-in"></i>
        <img src={LogoB} className="logoB" alt="Jack Portwood Logo" />

        <i class="fab fa-github"></i>
      </div>
    </div>
  );
};

export default Footer;
