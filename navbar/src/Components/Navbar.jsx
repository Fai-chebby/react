import React from "react";
import {Link} from "react-router-dom"
export const Navbar=()=>{
  return(
      <nav>
          <ul>
              <li>
                  <Link to='/about'>About</Link>
              </li>
              <li> <Link to='/link'>Contact</Link></li>
              <li><Link to='/sign up'>Sign Up</Link></li>
              <li><Link to='/login'>Login</Link></li>
          </ul>
      </nav>
  )
};