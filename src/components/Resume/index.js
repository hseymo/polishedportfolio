import React from 'react';

function Resume() {
  return (
    <div className="Resume">
      <h2>Resume</h2>
      <h3>Technical Skills</h3>
      <p className="Skills">
      Javascript React Node.js Express jQuery <br/>
      MySql MongoDB / Sequelize and Mongoose ORM <br/>
      HTML CSS Bootstrap Materialize Handlebars <br/> 
      RESTful APIs CRUD functionality <br/>
      Git Heroku Agile Methodology <br/>
      </p>
      <h3>Education</h3>
        <ul className="Education">
          <li>Web Development Certificate | University of Washington Full Stack Flex Bootcamp | Anticipated 6/13/2022</li>
          <li>Bachelor of Science | Chapman University | 2015</li>
        </ul>
      {/* <h3>Career</h3>
      <p>Certified Athletic Trainer | Seattle Children's Hospital | Seattle, WA | July 2015 - February 2022</p> */}
      <a className="ResumeBtn" href={require('./ResumePDF.pdf')}>Please click here to view or download PDF </a>
    </div>
  );
}

export default Resume;
