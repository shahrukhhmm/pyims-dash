import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Tournaments1 from './components/Tournaments/Tournaments1';
import Tournaments2 from './components/Tournaments/Tournaments2';
import Tournaments3 from './components/Tournaments/Tournaments3';
import Tournaments4 from './components/Tournaments/Tournaments4';
import Tournaments5 from './components/Tournaments/Tournaments5';
import Tournaments6 from './components/Tournaments/Tournaments6';
import Tournaments7 from './components/Tournaments/Tournaments7';
import Tournaments8 from './components/Tournaments/Tournaments8';
import Tournaments9 from './components/Tournaments/Tournaments9';
import Program2 from './components/Tournaments/Program2';
import ICRP from './components/Programs/ICRP';
 
import Community from './components/Navbar/Community';
import Blogs from './components/Navbar/Blogs';
import Signin from './components/Navbar/Signin';
import Signup from './components/Navbar/Signup';
 import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/about" element={<About />} />
        <Route path='/IYPT' element={<Tournaments1/>}/>
        <Route path='/IYNT' element={<Tournaments2/>}/>
        <Route path='/ICHTO' element={<Tournaments3/>}/>
        <Route path='/IYBT' element={<Tournaments4/>}/>
        <Route path='/IYMS' element={<Tournaments5/>}/>
        <Route path='/IYMT' element={<Tournaments5/>}/>
        <Route path='/IYET' element={<Tournaments6/>}/>
        <Route path='/WEC' element={<Tournaments7/>}/>
        <Route path='/WYCD' element={<Tournaments8/>}/>
        <Route path='/program2' element={<Program2/>}/>
      
        <Route path='/ICRP' element={<ICRP/>}/>
        {/* <Route path='/signin' element={<Signin darkmode={darkMode} setdarkmode={setDarkMode} />}/>
        <Route path='/signup' element={<Signup darkmode={darkMode} setdarkmode={setDarkMode}/>}/> */}
        
         
        <Route path='/communitys' element={<Community darkMode={darkMode}setDarkMode={setDarkMode}/>}/>
        <Route path='/blogs' element={<Blogs darkmode={darkMode} setdarkmode={setDarkMode}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
