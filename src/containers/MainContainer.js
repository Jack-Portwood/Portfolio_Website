import React, { Fragment } from 'react';
import AboutMe from './AboutMe';
import Protfolio from './Protfolio';
import Footer from '../Footer'

const MainContainer = () => {

    //MainContainer containes react router and renders Footer

    return (
      <Fragment>
        <h1>Hello from MainContainer</h1>
        <AboutMe/>
        <Protfolio/>
        <Footer/>
      </Fragment>
    );


}

export default MainContainer;