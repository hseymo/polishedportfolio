import React from 'react';
import './index.css';

function Portfolio() {
  return (
    <div className="Portfolio">
      <h2>Portfolio</h2>
      <div className="portfolioCard">
      <img className="orbitImage" src={require("./assets/Booklastic.png")} width="50%"/>
      </div>
    </div>
  );
}

export default Portfolio;
