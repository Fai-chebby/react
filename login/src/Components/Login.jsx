import React from 'react'
import '/.login.css'
import user_icon from'../Assets/Assets/person.png'
import email_icon from'../Assets/Assets/email.png'
import password_icon from'../Assets/Assets/password.png'
const  Login= () =>{
    return(

            <div className="container">
                <div className="header">
                    <div className="text">Sign Up</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={user_icon} alt=""/>
                        <input type="text"/>
                    </div>
                    <div className="input">
                        <img src={email_icon} alt=""/>
                        <input type="Email"/>
                    </div>
                    <div className="input">
                        <img src={password_icon} alt=""/>
                        <input type="Password"/>
                    </div>


                </div>
                <div className="forgot-password">Lost Password? <span>Click Here!g</span></div>
                <div className="submit-container">
                    <div className="submit">Sign Up</div>
                    <div className="submit">Login</div>
                </div>

            </div>


    )
}
export default Login