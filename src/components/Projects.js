import React from "react";
// import banner from '../banner.jpg'

const Projects = ({ item }) => {
  return (
    <div className="projects-wrapper">
      <div className="item-left">
        <div className="project-title">{item.title}</div>
        <div className="project-descrption">{item.description} </div>
      </div>
      <div className="item-centre">
        <div className="project-stack">
          Stack:
          {item.framework}
          {item.language}
          {item.runTimEnv}
          <div className="project-github">{item.github}</div>
          <div className="project-type">{item.projectType}</div>
        </div>
      </div>
      <div className="item-right">
        <img className="project-img" alt="for project" src={item.image} />
      </div>
    </div>
  );
};

export default Projects;
