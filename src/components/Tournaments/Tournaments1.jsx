import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import SliderComponent from '../SliderComponent';
import TournamentSlider from './TournamentSlider';
import './Common.css';
import backgroundVideo from '../../assets/vedios/physics.mp4'; // Adjust the path as needed

const Tournaments1 = () => {
  return (
    <div>
      <Navbar />
      <div className="tournament1">
        <div className="video-background">
          <video autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="overlay text-center">
                <h1>Welcome TO IYPT</h1>
                <p className="mt-5">
                  The premier platform for young naturalists in Pakistan to showcase their skills and compete with peers from around the world. Pakistan Young Physics Tournament is an annual international scientific competition for the students of age 12-16 years with a keen interest in the physics. The PYPT/IYPT typically brings together young scientists from different schools and countries to collaborate, compete, and solve complex problems in various fields of Physics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <SliderComponent />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading mt-5 py-4">
              <h1 className="text-white text-center">Our Partners</h1>
            </div>
          </div>
        </div>
      </div>
      <TournamentSlider />
      <Footer />
    </div>
  );
};

export default Tournaments1;
