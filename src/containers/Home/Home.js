import React from 'react';
import './Home.scss'
import image from '../../images/LogoB.png'

//displays logo at top of page

const Home = () => {

    return (
      <div className="home-container" id="home-container">
        <img src={image} className="logo" alt="Jack Portwood Logo" />
      </div>
    );
}

export default Home;