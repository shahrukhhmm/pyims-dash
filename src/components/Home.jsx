import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import TournamentSlider from './Tournaments/TournamentSlider';
import SliderComponent from './SliderComponent';
import Hero from './Hero/Hero';
import axios from 'axios';
import StarfieldEffect from './Stars';

const Home = ({darkMode,setDarkMode}) => {
  





  // const [theme, setTheme] = useState('light');

  // useEffect(() => {
  //   document.body.className = theme; // Apply the theme to the body
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  // };

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* <div className="toggle-button">
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div> */}
      <Hero darkmode={darkMode} />
      <div className="top mt-5">
        <SliderComponent />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 '>
            <div className='heading mt-5 py-4'>
              <h1 className={classNames('text-center', )}>
                Our Partners
              </h1>
        
            </div>
          </div>
        </div>
        
      </div>
     <div>
      </div> 
      <TournamentSlider />
      <Footer />
    </>
  );
}

export default Home;
