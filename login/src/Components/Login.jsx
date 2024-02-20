import React from 'react'
import './login.css';

import user_icon from'../Assets/Assets/person.png'
import email_icon from'../Assets/Assets/email.png'
import password_icon from'../Assets/Assets/password.png'
const  Login= () =>{
    const [action,setAction]=useState("Sign Up")
    return(

            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={user_icon} alt=""/>
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div className="input">
                        <img src={email_icon} alt=""/>
                        <input type="Email" placeholder="Email"/>
                    </div>
                    <div className="input">
                        <img src={password_icon} alt=""/>
                        <input type="Password" placeholder="Password"/>
                    </div>


                </div>
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
                <div className="submit-container">
                    <div className="submit">Sign Up</div>
                    <div className="submit">Login</div>
                </div>

            </div>


    )
}
export default Login