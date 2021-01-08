import React, { Fragment } from "react";
import NavBar from "../components/NavBar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Footer from "../components/Footer";

const MainContainer = () => {
  //MainContainer containes react router and renders Footer

  return (
    <div className="main-container">
      <Fragment>
        <NavBar />
        <div className="content">
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
