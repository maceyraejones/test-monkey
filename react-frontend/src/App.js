
import './App.css';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
// add compnonets

import AddCart from "./screen/AddCart"
// import Cards  from "./components/Cards";
import Home from "./screen/Home"
function App() {
  return <div>
   <Router>




<main>

             <Routes>
             <Route path="/" element ={<Home/>}/>
       
            <Route path="/AddCart" element ={<AddCart/>}/>
    
             </Routes>
             
           </main>
           </Router>
    </div>
  
}

export default App;
