import React from "react";

const Projects = ({ item }) => {
  return (
    <article className="project-item">
      <div className="item-left">
        <div className="project-title">{item.title}</div>
        <div className="project-descrption">{item.description} </div>
      </div>
      <div className="item-centre">
         <div className="project-stack">{item.stack}</div>
         <div className="project-github">{item.github}</div>
      </div>
      <div className="item-right">
         <div className="project-img">{item.img} </div>
      </div>
    </article>
  );
};

export default Projects;
