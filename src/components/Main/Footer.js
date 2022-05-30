import React from 'react';

function Footer() {

  const phoneCall = () => {
    alert('Please call me at 206-422-0810!')
  }
  return (
        <footer className="Footer">
            <address>
                <a href="#"><img alt="phone logo" src={require('./assets/Phone.png')} width='50' onClick={phoneCall}/></a>
                <a href="mailto:haleycseymour@comcast.net"><img alt="email logo" src={require('./assets/Email.png')} width='50'/></a>
                <a href="https://github.com/hseymo" target="_blank"><img alt="Github logo" src={require('./assets/GitHubLogo.png')} width='50'/></a>
                <a href="https://www.linkedin.com/in/haley-seymour-lat-atc-a5b01052/" target="_blank"><img alt="LinkedIn logo" src={require('./assets/LinkedInLogo.png')} width='50'/></a>
            </address>
        </footer>
  );
}

export default Footer;
