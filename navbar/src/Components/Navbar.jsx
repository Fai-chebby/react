import React from "react";
import {Link, NavLink} from "react-router-dom"
import "./Navbar.css"
export const Navbar=()=>{
  return(
      <nav>
          <Link to="/" classname="title">Home</Link>
          <ul>
              <li>
                  <NavLink to='/about'>About</NavLink>
              </li>
              <li> <NavLink to='/link'>Contact</NavLink></li>
              <li><NavLink to='/signUp'>SignUp</NavLink></li>
              <li><NavLink to='/login'>Login</NavLink></li>
          </ul>
      </nav>
  )
};