import React from 'react';
import {NavLink} from "react-router-dom"

function NavBar( {}) {
  return (
<nav>
  <div>
    <ul className="navbar-nav">
      <li className="nav-item AboutLi">
        <NavLink className={({ isActive }) => (isActive ? "LinkActive" : "Link")} to="/" >About Me</NavLink>
      </li>
      <li className="nav-item PortfolioLi">
        <NavLink className={({ isActive }) => (isActive ? "LinkActive" : "Link")} to="/portfolio" >Portfolio</NavLink>
      </li>
      <li className="nav-item ContactLi">
        <NavLink className={({ isActive }) => (isActive ? "LinkActive" : "Link")} to="/contact" >Contact</NavLink>
      </li>
      <li className="nav-item ResumeLi">
        <NavLink className={({ isActive }) => (isActive ? "LinkActive" : "Link")} to="/resume" >Resume</NavLink>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default NavBar;
