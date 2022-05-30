import React from 'react';
import {Link} from "react-router-dom"

function NavBar( {}) {
  return (
<nav className="navbar navbarExpandLg navbarLight bgLight">
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" >About</Link>
      </li>
      <li className="nav-item">
        <Link to="/portfolio" >Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" >Contact</Link>
      </li>
      <li className="nav-item">
        <Link to="/resume" >Resume</Link>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default NavBar;
