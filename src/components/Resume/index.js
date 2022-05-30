import React from 'react';

function Resume() {
  return (
    <div className="Resume">
      <h2>Resume</h2>
      <a className="ResumeBtn" href={require('./ResumePDF.pdf')}>Please click here to view or download PDF </a>
    </div>
  );
}

export default Resume;
