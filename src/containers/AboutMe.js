import React from 'react';
import {Parallax} from "react-parallax"
// import banner from '../banner.jpg'


const AboutMe = () => {

    //this will contain a styled card containing text 

    return (
      // <Parallax bgImage={banner}>
      <div className="aboutMe-container">
        <div className="banner"></div>
        <div className="card">
          <div className="card-front"> About Me </div>
          <div className="card-back">
            <div className="text-back-card"> Live. Laugh. Love.</div>
          </div>
        </div>
      </div>
      //  </Parallax>
    );
}

export default AboutMe;