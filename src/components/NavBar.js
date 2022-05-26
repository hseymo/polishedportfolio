import React from 'react';

function NavBar( {currentPage, handlePageChange }) {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} href="#About" onClick={() => handlePageChange('About')}>About Me</a>
      </li>
      <li className="nav-item">
        <a className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} href="#Portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
      </li>
      <li className="nav-item">
        <a className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} href="#Contact" onClick={() => handlePageChange('Contact')}>Contact</a>
      </li>
      <li className="nav-item">
        <a className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} href="#Resume" onClick={() => handlePageChange('Resume')}>Resume</a>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default NavBar;
