import About from "./component/About";
import Home from "./component/Home";
import {Routes,Route} from 'react-router-dom'
import Navbar from "./navbars/Navbar";
import './App.css'
import Portfolio from "./component/Portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    
    <div className="App">
       <Navbar/>
      <Routes>
       <Route  path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/portfolio" element={<Portfolio/>}/>
      </Routes>
     
    
    </div>
    
  );
}

export default App;
