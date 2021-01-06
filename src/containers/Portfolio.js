import React, { useState } from "react";
import Projects from "../components/Projects";

const Portfolio = () => {
  //This will container each indivdual project like a list

  const projectsData = [
    {
      id: 1,
      title: "Scroller",
      description: "Text",
      stack: "Img",
      img: "nice Image",
    },
    {
      id: 2,
      title: "NYE Countdonw",
      description: "Text",
      stack: "Img",
      img: "nice Image",
    },
    {
      id: 3,
      title: "Got Dogs Fetch Request",
      description: "Text",
      stack: "Img",
      img: "nice Image",
    },
  ];

  const [portfolioData, setPortfolioData] = useState(projectsData);

  const data = portfolioData.map((item) => {
    return <Projects key={item.id} item={item} />;
  });

  return (
    <div className="portfolio-container">
      <h1>Porfilio containter</h1>
      {data}
    </div>
  );
};

export default Portfolio;
