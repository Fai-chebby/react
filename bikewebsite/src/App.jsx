import {useState} from "react";
import Background from "./Background/Background";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";

const App=()=>{
    let heroData=[
        {text1:"Dive into", text2:"where you love"},
        {text1:"Indulge", text2:"Your passion"},
        {text1:"Give into", text2:"Your passion"},
    ]
    const [heroCount,setHeroCount]=useState(2);
    const [playStatus,setPlayStatus]=useState(false);
    return(
        <div>
<Background playStatus={playStatus} heroCount={heroCount}/>
            <Navbar/>
            <Hero setPlaySatus={setPlayStatus}
                  HeroData={heroData[heroCount]}
                  setHeroEvent={setHeroCount}
                  playStatus={playStatus}
            />

        </div>
    )
}
export default App