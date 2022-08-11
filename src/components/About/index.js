import './index.css';
import React from 'react';

function About() {
  return (
    <div className="About">
      <h2>About Me</h2>
      <img alt="Headshot" src={require("./Headshot.jpg")} width='40%' className='headshot'/>            
      <p>Welcome, I am very happy to have you here! My name is Haley and I currently live in Seattle, WA (born and raised). I am a full-stack developer with 6+ years of experience in healthcare as an Athletic Trainer. I recently obtained my web development certificate through University of Washington’s full-time MERN program. I have enjoyed developing skills in React, Javascript, Express, MySql, MongoDB, and Node.js, and look forward to growing my wealth of knowledge! I am interested in an ambitious and passionate role that allows me to contribute my solution-focused and innovative mindset.</p>
      <br/>
      <p>Please visit my portfolio section to find samples of my work. Throughout class I led three teams of classmates in creation of apps: a React app with a MySql server that allows users to set and track self-care goals, a Node.js and Handlebars platform for book lovers to interact with full CRUD functionality and RESTful routes, and a front-end app that features an activity generator using two third-party APIs and a journal using local storage. I am now looking for open-source and volunteer projects to contribute to - please reach out if you'd like to collaborate!</p> 
      <br/>
      <p>I am a BOC Certified Athletic Trainer and am licensed to practice in the state of Washington by the Department of Health. I graduated with my Bachelor of Science in Athletic Training from Chapman University. In February 2022 I ended employment of over 6 years at Seattle Children's Hospital. During that time I was the head Athletic Trainer at The Bush School, lead for our CPR program, Cystic Fibrosis Exercise Specialist, and one of the first Athletic Trainers in a brand new role that brought Athletic Trainers into the Orthopedics and Sports Medicine Clinic.</p> 
      <br/>
      <p>For the last few years of my career as an Athletic Trainer, I found I was most excited and fulfilled when working on projects that allowed me to exercise creative and analytical thinking. While the foundation of my career was providing patient care, I loved the aspects of my job that allowed me to problem solve, innovate, and challenged me to learn! As an organization we transitioned to a new electronic medical record software and I found myself intrigued - spending my hours on and off the clock exploring and learning the software. Around the same time, I also found myself reading books on tech, Web3 and blockchain. My interest in Tech piqued and I decided to become a part of the future! After researching careers that are in line with my skills and passion, I found coding to be a perfect fit for me and began taking Javascript and Python classes online (thank you Codecademy and Coursera) in January 2021. Now that I have gained knowledge and experience, I would love to grow my career in tech in a way that incorporates my extensive background in Sports Medicine, healthcare, and fitness!</p>
      <br/>
      <p>Former colleagues would describe me as their go-to for problem solving, superuser of our electronic medical record, being known for my attention to detail, integrity, adaptability and leadership. I am an experienced communicator as a teacher, presenter, and patient-care provider. I love teaching and mentoring because the satisfaction of empowering someone and setting them up to succeed is priceless! My thirst to always be learning, passion for excellence, comfort in a fast-paced environment, internal drive and commitment to deliver results make me the ideal candidate for a quality-focused Software Developer position. I am looking for a challenging role within a company that is spirited, driven to succeed, and offers opportunities for mentorship and growth.</p>
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
