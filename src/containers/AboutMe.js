import React from "react";
import { Parallax } from "react-parallax";
import banner from "../banner.jpg";

const AboutMe = () => {
  //this will contain a styled card containing text

  return (
    <Parallax
      className="parallax-container"
      bgImage={banner}
      strength={500}
      blur={{ min: -1, max: 1 }}
    >
      <div className="aboutMe-container">
        <div className="card">
          <div className="card-front">
            <div className="text-front-card"> About Me</div>
          </div>

          <div className="card-back">
            <div className="text-back-card"> Live. Laugh. Love.</div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default AboutMe;
