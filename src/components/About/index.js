import './index.css';
import React from 'react';

function About() {
  return (
    <div className="About">
      <h2>About Me</h2>
      <img alt="Headshot" src={require("./Headshot.jpg")} width='40%' className='headshot'/>            
      <p>My name is Haley and I am happy to have you here, exploring my content! I currently live in Seattle, WA, where I was born and raised. I am a full-stack web developer with 6+ years of experience as a licensed healthcare professional. I would like to grow a career in the tech industry that incorporates my extensive background in Sports Medicine, healthcare, and fitness. I am interested in an ambitious and passionate role that allows me to contribute my solution-focused and innovative mindset. I am currently pursuing a web development coding certificate through the University of Washington’s full-time MERN program (anticipated graduation 6/13/2022). I have developed skills in React, Javascript, Express, MySql, MongoDB, Node.js and look forward to growing my wealth of knowledge beyond this full time program. So far I have led two group projects - one created a node.js-based platform for book lovers with CRUD routes, RESTful APIs and a Sequelize database while the other built an activity suggestion generator utilizing server-side APIs and local storage.</p>
      <br/>
      <p>Former colleagues would describe me as their go-to for problem solving, superuser of our electronic medical record, being known for my attention to detail, integrity, adaptability and leadership. I am an experienced communicator as a teacher, presenter, and patient-care provider. My thirst to always be learning, passion for excellence, comfort in a fast-paced environment, internal drive and commitment to deliver results make me the ideal candidate for a quality-focused Junior Software Developer position. I am looking for a challenging role within a company that is spirited, driven to succeed, and offers opportunities for growth.</p>
      <br/>
      <p>I am a BOC Certified Athletic Trainer (AT) and am licensed to practice in the state of Washington by the Department of Health. I graduated with my Bachelor of Science in Athletic Training from Chapman University. In February 2022 I ended an employment of over 6 years at Seattle Children's Hospital. During that time I was the head Athletic Trainer at The Bush School, lead for our CPR program, Cystic Fibrosis Exercise Specialist, and one of the first Athletic Trainers in a brand new role that brought ATs into the Orthopedics and Sports Medicine Clinic.</p>
      <br/>
      <p>My hobbies include innovation, volunteer coaching for Girls on The Run Puget Sound, country music, sports medicine, hiking, soccer, Peloton, reading, spending time with friends/family, and interior design. I am a member of ATPPS, NATA and the Gamma Phi Beta sorority.</p>
    </div>
  );
}

export default About;
