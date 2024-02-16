import React,{useState} from "react";
import {Link} from "react-router-dom";
import {click} from "@testing-library/user-event/dist/click";

function Navbar(){
    const [click,setClick]=useState()
    return(
        <div>
< nav className="navbar">
    <div className="navbar-container">
        <Link to"/" className="navbar-logo">
            BIKE<i className ="fab fa-typo3"/>
        </Link>
        <div className='menu-icon'>
            <i className={click? 'fas fa-time':"fas fa-bar"}/>
        </div>
    </div>
</nav>
        </div>
    )
}
export default Navbar