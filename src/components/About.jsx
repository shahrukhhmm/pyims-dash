import React from 'react';
import Navbar from './Navbar/Navbar';
import SliderComponent from './SliderComponent';
import Hero from "../components/Hero/Hero"
import Footer from "./Footer/Footer"
const About = () => {
  const videoSrc = '../assets/vedios/brainmodel.mp4'; // Replace with your video source

  return (
    <div>
      <Navbar />
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: '0', // Ensure video is behind other elements
          }}

        >

        </video>
    <Hero/>
        {/* <div style={{ position: 'relative', zIndex: '1', width: '100%', height: '100%' }}>
          <SliderComponent />
        </div> */}

        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '2', // Ensure text overlay is on top
            textAlign: 'center',
            padding: '4rem 1rem',
          }}
        >
          <style>
            {`
              @keyframes slideIn {
                0% {
                  transform: translateX(100%);
                  opacity: 0;
                }
                100% {
                  transform: translateX(0);
                  opacity: 1;
                }
              }
            `}
          </style>
          <h1
            style={{
              animation: 'slideIn 1s ease-out',
              fontSize: '2rem',
              fontWeight: 'bold',
              color: 'lightblue',
              marginBottom: '1rem',
            }}
          >
            About Us
          </h1>
          <p
            style={{
              animation: 'slideIn 2s ease-out',
              fontSize: '1rem',
              color: 'lightblue',
              maxWidth: '65ch',
              margin: '0 1rem',
            }}
          >
            At Pakistan Young Innovative Minds, we believe that the future of our country lies in the hands of its young people, and that by empowering them with the skills, resources, and networks they need, we can create a better, more innovative Pakistan for all.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
