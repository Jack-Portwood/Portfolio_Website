import React, { Fragment } from "react";
import NavBar from "../components/NavBar/NavBar.js";
import Home from "./Home/Home.js";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio.js";
import Footer from "../components/Footer/Footer.js";

const MainContainer = () => {
  //MainContainer containes react router and renders Footer

  return (
    <div className="main-container">
      <Fragment>
        <div className="content">
          <NavBar />
          <Home />
          <AboutMe />
          <Portfolio />
        </div>
        <Footer />
      </Fragment>
    </div>
  );
};

export default MainContainer;
