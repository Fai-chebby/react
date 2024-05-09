import React from "react";
import MePic from "../pics/me .jpeg"
import "./HeroSection.css";
export default function HeroSection(){
    return(
        <div id="HeroSection" className="Hero--section">
         <div className="Hero--section--box">
             <div className="Hero--section--content">
                 <p className="title"> Hey 🤗 I'm Chebby</p>
                 <h4 className="title--sub"> Loved & Graced</h4>
                 <h1 className="title--des">
                     <span className="color"> UI & UX</span>{""}<br/>
                     <span>Graphic</span> <br/><span>Developer</span>

                 </h1>
                 <p className="desc">Learning is part of me.<br/><span> But coding is fun👩‍💻</span></p>

             </div>
             <button className=" btn-primary">Be In Touch</button>

         </div>
            <div className="image">
                <img  className="pic"  src={MePic} width="600px" height="600px" alt="Me coding"/>
            </div>

        </div>
    );
}