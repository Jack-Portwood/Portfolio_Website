import React, { Fragment } from 'react';
import Projects from '../components/Projects'

const Portfolio = () => {

    //This will container each indivdual project like a list

    return (
        <div className="portfolio-container">
          <h1>Porfilio containter</h1>
          <Projects />
        </div>
    );
}

export default Portfolio;