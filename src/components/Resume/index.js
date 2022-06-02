import React from 'react';
import './index.css';

function Resume() {
  return (
    <div className="Resume">
      <h2>Resume</h2>
      <div className="resumeContainer"> 
      <h3>Technical Skills</h3>
      <p className="Skills">
      Javascript React Node.js Express jQuery <br/>
      MySql MongoDB SequelizeORM MongooseORM <br/>
      HTML CSS Bootstrap Materialize Handlebars <br/> 
      RESTful-APIs CRUD-functionality <br/>
      Git Heroku Agile-Methodology <br/>
      </p>
      </div>
      <div className="resumeContainer">
      <h3>Education</h3>
        <ul className="Education">
          <li>Web Development Certificate | University of Washington Full Stack Flex Bootcamp | Anticipated 6/13/2022</li>
          <li>Bachelor of Science in Athletic Training | Chapman University | 2015</li>
        </ul>
      </div>
      {/* <h3>Career</h3>
      <p>Certified Athletic Trainer | Seattle Children's Hospital | Seattle, WA | July 2015 - February 2022</p> */}
      <a className="ResumeBtn" href={require('./Resume.docx.pdf')} target="_blank">Please click here to view or download PDF </a>
    </div>
  );
}

export default Resume;
