import React, { Fragment } from "react";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
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
          <Switch className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutMe} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
          <Footer/>
        </Fragment>
      </Router>
    </div>
  );
};

export default MainContainer;
