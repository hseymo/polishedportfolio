import './index.css';
import React from 'react';

function About() {
  return (
    <div className="About">
      <h2>About Me</h2>
      <img alt="Headshot" src={require("./Headshot.jpg")} width='40%' className='headshot'/>            
      <p>Welcome, I am very happy to have you here! My name is Haley and I live in Seattle, WA (born and raised). I am a full-stack developer and currently work at Skillstorm as a Talent Developer. I am passionate about accelerating opportunity and upskilling talent in technology. I teach full-stack development and SAP. I work with both entry-level developers and veterans (through the VetTec program). Some technologies that I train include SAP Basis, Java, JavaScript, React, MySQL, MongoDB, AWS. Daily responsibilities include learning new technologies, developing lesson plans, demoing code, creating assignments/exams/projects, interviewing candidates, and answering questions. In June 2022 I obtained my web development certificate through University of Washington’s full-time MERN program. I thrive in ambitious and passionate roles that allow me to contribute my solution-focused and innovative mindset.</p>
      <br/>
      <p>Please visit my portfolio section to find samples of my work. Please note that not all projects are currently live hosted. Please reach out if you would like to see more! I am currently working on building a React app for Athletic Trainers to track their injury evaluations, assessments, treatment plans, and progress notes. I am looking for open-source and volunteer projects to contribute to - let me know if you'd like to collaborate!</p> 
      <br/>
      <p>Prior to learning software development, I worked in healthcare as an Athletic Trainer for 6+ years. I am a BOC Certified Athletic Trainer and am licensed to practice in the state of Washington by the Department of Health. I graduated with my Bachelor of Science in Athletic Training from Chapman University. In February 2022 I ended employment of over 6 years at Seattle Children's Hospital. During that time I was the head Athletic Trainer at The Bush School, lead for our CPR program, Cystic Fibrosis Exercise Specialist, and one of the first Athletic Trainers in a brand new role that brought Athletic Trainers into the Orthopedics and Sports Medicine Clinic. I would love to grow my career in tech in a way that incorporates my extensive background in Sports Medicine, healthcare, and fitness!</p> 
      <br/>
      <p>Former colleagues would describe me as their go-to for problem solving, superuser of our electronic medical record, being known for my attention to detail, integrity, adaptability and leadership. I am an experienced communicator as a teacher, presenter, and patient-care provider. I love teaching and mentoring because the satisfaction of empowering someone and setting them up to succeed is priceless! My thirst to always be learning, passion for excellence, comfort in a fast-paced environment, internal drive and commitment to deliver results propel me forward. I enjoy challenging roles within companies that are spirited, driven to succeed, and offer opportunities for mentorship and growth.</p>
      <br/>
      <p>My hobbies include innovation, volunteer coaching for Girls on The Run Puget Sound, country music, sports medicine, hiking, soccer, Peloton (@SeymourSpeed), reading, spending time with friends/family, HGTV and interior design. I am a member of ATPPS, NATA and the Gamma Phi Beta sorority. Please reach out via my contact form, <a href="https://www.linkedin.com/in/haley-seymour-lat-atc-a5b01052/" class="specialLink tooltip">LinkedIn,<span class="tooltiptext">Click me!</span></a> or <a href='mailto:haleycseymour@comcast.net' class="specialLink tooltip">email<span class="tooltiptext">Click me!</span></a> to connect!</p>
      <div id='snowshoepic'>
        <img alt="Mt Rainer" src={require("./snowPic.png")} width='60%' className='snowPhoto'/>
        <figcaption>Snowshoeing at Mt. Rainier, February 2022</figcaption>
      </div>
      <div className='bottom'>
      <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="haley-seymour-lat-atc-a5b01052" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/haley-seymour-lat-atc-a5b01052?trk=profile-badge"></a></div>
    </div>
    </div>
  );
}

export default About;
