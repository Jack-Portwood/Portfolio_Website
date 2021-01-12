import React from "react";
import { Parallax } from "react-parallax";
import banner from "../banner.jpg";

const AboutMe = () => {
  //this will contain a styled card containing text

  return (
    <Parallax
      className="parallax-container"
      bgImage={banner}
      strength={100}
      blur={{ min: -10, max: 10 }}
    >
      <div className="aboutMe-container" id="aboutMe-container">
        <div className="card">
          <div className="card-front">
            <div className="text-front-card"> About Me</div>
          </div>

          <div className="card-back">
            <div className="text-back-card">
              The continuous learning and changing landscape brought me to
              software development. <br /> It's a challange. <br /> Which I am
              enjoying.
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default AboutMe;
