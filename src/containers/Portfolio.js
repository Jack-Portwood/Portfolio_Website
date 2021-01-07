import React, { useState } from "react";
import projectData from '../projectData'
import Projects from "../components/Projects";
// import banner from '../banner.jpg'

const Portfolio = () => {
  //This will container each indivdual project like a list

  

  const [portfolioData, setPortfolioData] = useState(projectData);

  const data = portfolioData.map((item) => {
    return <Projects key={item.id} item={item} />;
  });

  return (
      <div className="portfolio-container">
        {data}
      </div>
  );
};

export default Portfolio;
