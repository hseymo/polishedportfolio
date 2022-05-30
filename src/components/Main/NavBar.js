import React from 'react';
import {Link} from "react-router-dom"

function NavBar( {}) {
  return (
<nav>
  <div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className='Link' to="/" >About Me</Link>
      </li>
      <li className="nav-item">
        <Link className='Link' to="/portfolio" >Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link className='Link' to="/contact" >Contact</Link>
      </li>
      <li className="nav-item">
        <Link className='Link' to="/resume" >Resume</Link>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default NavBar;
