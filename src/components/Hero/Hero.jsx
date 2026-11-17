import React, { useState, useEffect } from 'react';
import './Hero.css';
import backgroundVideo from '../../assets/vedios/Untitled design (2).mp4';
import lightbackgroundVideo from '../../assets/vedios/Untitled design (5).mp4';
import StarfieldEffect from '../Stars';

export default function Hero({ darkmode }) {
  const [src, setSrc] = useState(lightbackgroundVideo);

  useEffect(() => {
    setSrc(darkmode ? backgroundVideo : lightbackgroundVideo);
  }, [darkmode]);

  return (
    <div className="hero-container">
      <video key={src} autoPlay loop muted className="hero-video">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      {/* Other content can go here */}
    </div>
  );
}
