import React,{useState} from "react";
import {Link, NavLink} from "react-router-dom"
import "./Navbar.css"
export const Navbar=()=>{
    const [ menuOpen, setMenuOpen]=useState(false)
  return(
      <nav>
          <Link to="/" classname="title">Home</Link>
          <div className="menu" onClick={()=>{ setMenuOpen(!menuOpen)}}>
              <span></span>
              <span></span>
              <span></span>

          </div>
          <ul className={ menuOpen?"open":""}>
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