import React from "react";
import "./index.css";

function Resume() {
  return (
    <div className="Resume">
      <h2>Resume</h2>
      <a
        className="ResumeBtn"
        href={require("./Resume.docx.pdf")}
        target="_blank"
      >
        Please click here to view or download PDF{" "}
      </a>
      <div className="format">
        <div className="resumeContainer">
          <h3>Certifications</h3>
          <div className="Certs">
            <div className="item firstitem">
              <p>AWS Certified Cloud Practitioner</p>
              <p>Amazon Web Services</p>
              <p>February 2023</p>
            </div>
            <br />
            <div className="item firstitem">
              <p>Oracle Certified Associate, Java 8</p>
              <p>Oracle</p>
              <p>November 2022</p>
            </div>
            <br />
            <div className="item">
              <p>Oracle Certified Foundations Associate, Java</p>
              <p>Oracle</p>
              <p>November 2022</p>
            </div>
          </div>
        </div>
        <div className="resumeContainer">
          <h3>Technical Skills</h3>
          <ul className="Skills">
            <div className="Column">
              <li>Javascript</li>
              <li>Java</li>
              <li>Object-Oriented <br/> Programming (OOP)</li>
              <li>React</li>
              <li>Redux</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>jQuery</li>
              <li>SQL/MySql</li>
              <li>NoSQL/MongoDB</li>
              <li>ORM/ODMs</li>
              <li>RESTful APIs</li>
            </div>
            <div className="Column">
              <li>AWS</li>
              <li>Heroku</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Spring</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Materialize</li>
              <li>Git/Version Control</li>
              <li>Agile Methodology</li>
              <li>Unit Testing</li>
              <li>SAP</li>
            </div>
          </ul>
        </div>
        <div className="resumeContainer">
          <h3>Education</h3>
          <div className="Education">
            <div className="item firstitem">
              <p>Web Development Certificate</p>
              <p>University of Washington Full Stack Flex Bootcamp</p>
              <p>June 2022</p>
            </div>
            <br/>
            <div className="item">
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
