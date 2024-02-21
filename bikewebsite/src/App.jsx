import {useState} from "react";
import Background from "./Background/Background";

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
        </div>
    )
}
export default App