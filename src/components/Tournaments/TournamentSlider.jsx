import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Common.css'


const TournamentSlider = () => {
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
    "./imgs/img3.png",
    "./imgs/img4.png",
    "./imgs/img5.png",
    "./imgs/img6.png",
    "./imgs/img7.png",
    "./imgs/img8.png",
    "./imgs/img3.png",
    "./imgs/img4.png",
    "./imgs/img5.png",
    "./imgs/img6.png",
    "./imgs/img7.png",
    "./imgs/img8.png"
  ];

  return (
  <div className="container">
       <Slider {...settings}>
    {images.map((img, index) => (
      <div className='images container mt-5 py-4' key={index}> 
        <img src={img} alt={`Slide ${index + 1}`}  />
      </div>
    ))}
  </Slider>
  </div>
  )
}

export default TournamentSlider
