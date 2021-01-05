import React from "react";
import NavBar from '../components/NavBar'
import Home from "./Home"
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Footer from "../components/Footer";

const MainContainer = () => {
  //MainContainer containes react router and renders Footer

  return (
    <div className ="main-container">
      <NavBar/>
      <Home />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default MainContainer;
