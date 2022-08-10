import React from 'react';
import './index.css';

function Resume() {
  return (
    <div className="Resume">
      <h2>Resume</h2>
      <a className="ResumeBtn" href={require('./Resume.docx.pdf')} target="_blank">Please click here to view or download PDF </a>
      <div className='format'>
      <div className="resumeContainer"> 
      <h3>Technical Skills</h3>
      <ul className="Skills">
        <div className='Column'>
        <li>Javascript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Handlebars</li>
        <li>jQuery</li>
        <li>MySql</li>
        <li>MongoDB</li>
        <li>SequelizeORM</li>
        <li>MongooseODM</li>
        </div>
        <div className='Column'>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>Materialize</li>
        <li>RESTful-APIs</li>
        <li>CRUD-functionality</li>
        <li>Git</li>
        <li>Heroku</li>
        <li>Agile-Methodology</li> 
        <li>PWAs</li>
        </div>
      </ul>
      </div>
      <div className="resumeContainer">
      <h3>Education</h3>
        <div className="Education">
          <div className='item firstitem'>
          <p>Web Development Certificate</p>
          <p>University of Washington Full Stack Flex Bootcamp</p>
          <p>June 2022</p>
          </div>
          <div className='item'>
          <p>Bachelor of Science in Athletic Training</p> 
          <p>Chapman University</p>
          <p>May 2015</p>
          </div>
        </div>
      </div>
      </div>
      {/* <h3>Career</h3>
      <p>Certified Athletic Trainer | Seattle Children's Hospital | Seattle, WA | July 2015 - February 2022</p> */}
    </div>
  );
}

export default Resume;
