import React from 'react';
import {Parallax} from "react-parallax"
import banner from '../banner.jpg'


const AboutMe = () => {

    //this will contain a styled card containing text 

    return (
      <Parallax bgImage={banner} strength={500} blur={{ min: -1, max: 3 }}>
        <div className="aboutMe-container">
          <div className="card">
            <div className="card-front"> About Me </div>
            <div className="card-back">
              <div className="text-back-card"> Live. Laugh. Love.</div>
            </div>
          </div>
        </div>
      </Parallax>
    );
}

export default AboutMe;