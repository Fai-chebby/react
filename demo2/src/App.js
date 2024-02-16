
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <>
        <Router>
            <Navbar>
            </Navbar>
            <switch>
<Route path="/" exact/>
            </switch>
        </Router>
    </>
  );
}

export default App;
