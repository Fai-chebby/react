import { useEffect, useState } from "react";
import Background from "./Background/Background";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";

const App = () => {
    let heroData = [
        { text1: "Dive into", text2: "where you love" },
        { text1: "Indulge", text2: "Your passion" },
        { text1: "Give into", text2: "Your passion" },
    ];

    const [heroCount, setHeroCount] = useState(0); // Initialize heroCount to 0 instead of 2
    const [playStatus, setPlayStatus] = useState(false);

    useEffect(() => {
        setInterval(() => {
            // Increment heroCount cyclically
            setHeroCount((count) => (count + 1) );
        }, 5000);
    }, []); // Ensure this effect runs only once by providing an empty dependency array

    return (
        <div>
            <Background playStatus={playStatus} heroCount={heroCount} />
            <Navbar />
            <Hero
                setPlayStatus={setPlayStatus}
                heroData={heroData[heroCount]} // Access correct heroData using heroCount
                setHeroEvent={setHeroCount}
                playStatus={playStatus}
            />
        </div>
    );
};

export default App;
