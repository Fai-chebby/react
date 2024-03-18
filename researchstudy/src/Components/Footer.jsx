import React from "react";
import './footer.css'
const Footer=()=>{
    return(
        <div className="footer">
            <div className="wrapper">
                { /* <div className="flex-container">
                <div className="box one"></div>
                <div className="box two"></div>
                <div className="box three"></div>

            </div>*/}
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>State</li>
                    </ul>
                    <ul className="social">
                        <li>Instagram</li>
                        <li>Facebook</li>

                    </ul>
                </nav>

            </div>
        </div>
    )
}
export default Footer;