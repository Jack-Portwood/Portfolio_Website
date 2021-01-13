import React, { useState } from "react";
import projectData from "../projectData";
import Projects from "../components/Projects";
import { Parallax } from "react-parallax";
import image from "../images/banner2.jpg";

const Portfolio = () => {
  //This will container each indivdual project like a list

  const [portfolioData, setPortfolioData] = useState(projectData);

  const data = portfolioData.map((item) => {
    return <Projects key={item.id} item={item} />;
  });

  return (
    <Parallax
      className="protfolio-parallax"
      bgImage={image}
      strength={-100}
    >
      <div className="portfolio-container" id="portfolio-container">
        {data}
      </div>
    </Parallax>
  );
};

export default Portfolio;
