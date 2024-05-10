import './App.css';
import HeroSection from "./Data/Pages/HeroSection";
import {Route,Routes} from "react-router-dom";

function App() {
  return (
      <Routes>
   <Route path="/" element={<HeroSection/>}/>


      </Routes>
  );
}

export default App;
