import React from "react";
import {Navlink} from "reac-router-dom";
export const   Navbar=()=>{
    return(
        <nav className='nav'>
            <NavLink  to="/" className='nav-log'>Home</NavLink >
            <ul className='nav-menu'>
                <li>
                    <NavLink to="/About">About</NavLink>
                </li>
                <li>
                    <NavLink to="/Pages">Pages</NavLink>
                </li>
                <li className='Contacts'><NavLink to="/Contacts">Contacts </NavLink></li>

            </ul>
        </nav>

    )

}
