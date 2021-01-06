import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Footer from "../components/Footer";

const MainContainer = () => {
  //MainContainer containes react router and renders Footer

  return (
    <div className="main-container">
      <Router>
        <Fragment>
          <NavBar />
          <div className="content">
            <Home />
            <Portfolio />
          </div>
          <Switch>
            <Route path="/about" component={AboutMe} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
};

export default MainContainer;
