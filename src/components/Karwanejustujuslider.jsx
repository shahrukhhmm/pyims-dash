import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Sliders.css'


const Karwanejustujuslider = () => {
    const settings = {
        dots: true,
        infinite: true,  // Disable infinite looping
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      };
    
      
  const images = [
    "./imgs/WhatsApp Image 2024-07-19 at 3.48.40 PM (1).jpeg",
    "./imgs/WhatsApp Image 2024-07-19 at 3.48.40 PM.jpeg",
    "./imgs/WhatsApp Image 2024-07-19 at 3.48.41 PM (1).jpeg",
    "./imgs/WhatsApp Image 2024-07-19 at 3.48.41 PM.jpeg",
    "./imgs/WhatsApp Image 2024-07-19 at 3.48.42 PM.jpeg",
    "./imgs/WhatsApp Image 2024-07-19 at 3.48.44 PM (1).jpeg",
    "./imgs/WhatsApp Image 2024-07-19 at 3.48.44 PM.jpeg",
    './imgs/WhatsApp Image 2024-07-19 at 3.48.44 PM.jpeg',
    './imgs/WhatsApp Image 2024-07-19 at 3.48.44 PM (1).jpeg',
    './imgs/WhatsApp Image 2024-07-19 at 3.48.43 PM.jpeg',
    './imgs/WhatsApp Image 2024-07-19 at 3.48.43 PM (1).jpeg'
  ];

  return (
  <div className="container">
       <Slider {...settings}>
    {images.map((img, index) => (
      <div className='images-karwan container mt-5 py-4' key={index}> 
        <img src={img} alt={`Slide ${index + 1}`}  />
      </div>
    ))}
  </Slider>
  </div>
  )
}

export default Karwanejustujuslider;
