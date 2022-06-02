import React from 'react';
import './index.css';
import Project from './Project';
const imgBooklastic =require ("./assets/Booklastic.png");
const imgTechBlog =require ("./assets/MVC.png");
const imgActivityGenerator =require ("./assets/Activity.png");
const imgeCommerce =require ("./assets/eCommerce.png");
const imgEmployeeTracker =require ("./assets/Employee.png");
const imgWeatherDashboard =require ("./assets/Weather.png");
const imgSocialNetwork =require ("./assets/socialNetwork.png")

function Portfolio() {
  return (
    <div className="Portfolio">
      <h2>Portfolio</h2>

    <div className='container'>
      <Project 
      name="Booklastic" 
      deployed="https://fathomless-bastion-58602.herokuapp.com/" 
      github="https://github.com/hseymo/booklastic-blog-place" 
      image={imgBooklastic}
      code="Node.js | MySql | Sequelize | Socket.io | Bootstrap"
      description="A Node.js-based platform for book lovers to bond. Come write a review or find your next book inspiration! My roles in this group project include MySql models, Sequelize ORM, RESTful API routing, front-end Javascript, Handlebars, Bootstrap modals and error handling. Check out the Socket.io instant chat feature!"
      />
      <Project 
      name="Activity Generator" 
      deployed="https://hseymo.github.io/Activity-Generator/" 
      github="https://github.com/hseymo/Activity-Generator" 
      image={imgActivityGenerator}
      code="Javascript | jQuery | Materialize | Third Party APIs | Local Storage"
      description="A Materialize-interfaced activity suggestion generator that utilizes Wikipedia and Bored APIs! My responsibilities include fetch requests with query parameters, Javascript for click handlers, DOM manipulation with dynamically created elements, HTML, local storage, Kanban oversight and Git Administrator."
      />
      <Project 
      name="Tech Blog" 
      deployed="https://glacial-caverns-70702.herokuapp.com/" 
      github="https://github.com/hseymo/MVC-tech-blog" 
      image={imgTechBlog}
      code="Node.js | MySql | Sequelize | RESTful | MVC | Handlebars"
      description="A Node.js blog site that utilizes RESTful API routes and full CRUD functionality to allow tech lovers to share ideas and interact! Features a MySql database, Sequelize ORM, bCrypt encryption, protected routes, express-sessions and connect-session-sequelize, environmental variables, Handlebars and MVC framework."
      />
      <Project 
      name="eCommerce Back End" 
      deployed="https://peaceful-lake-44963.herokuapp.com/" 
      github="https://github.com/hseymo/eCommerce-Back-End" 
      image={imgeCommerce}
      code="MySql | Sequelize | Express"
      description="A backend API for an eCommerce site to organize retail. This project configures an API through Express.js and utilizes Sequelize to interact with a MySql database. Check out the video on Github to see it in action!"
      />
      <Project 
      name="Employee Tracker" 
      deployed="" 
      github="https://github.com/hseymo/Employee-Tracker" 
      image={imgEmployeeTracker}
      code="Node.js | Inquirer | MySql"
      description="A Node.js and Inquirer tracking system that allows a business ower to track their employee information! Information is stored in a MySql database and contains three tables with multiple connecting relationships."
      />
      <Project 
      name="Social Network API" 
      deployed="" 
      github="https://github.com/hseymo/Social-Network-API" 
      image={imgSocialNetwork}
      code="Javascript | MongoDB | Mongoose ORM | Moment.js"
      description="The goal of this project is to build an API for a social network that allows users interact. This API is built using NoSQL database (MongoDB) and ORM (Mongoose) with RESTful routing and full CRUD functionality. Checkout the video on GitHub to view it in action!"
      />
      <Project 
      name="Weather Dashboard" 
      deployed="https://hseymo.github.io/Weather-Dashboard/" 
      github="https://github.com/hseymo/Weather-Dashboard" 
      image={imgWeatherDashboard}
      code="Javascript | jQuery | Bootstrap | Open Weather API"
      description="This Weather Dashboard aims to provide travelers with the weather outlook for different cities so that they can plan their trip. Utilizing the Open Weather Map API and Moment.js, data is fetched and displayed!"
      />
      </div>
    </div>
  );
}

export default Portfolio;

// <Project 
// name="" 
// deployed="" 
// github="" 
// image={}
// code=""
// description=""
// />
