import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Sliders.css'

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,  // Disable infinite looping
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
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
    "./imgs/about1.jpeg",
    "./imgs/about2.jpeg",
    "./imgs/about3.jpeg",
    "./imgs/about4.jpeg",
    "./imgs/about5.jpeg",
    "./imgs/about6.jpeg",
    "./imgs/about7.jpeg",
    "./imgs/about1.jpeg",
    "./imgs/about2.jpeg",
    "./imgs/about3.jpeg",
    "./imgs/about4.jpeg",
    "./imgs/about5.jpeg",
    "./imgs/about6.jpeg",
    "./imgs/about7.jpeg"
  ];

  return (
 <div className="container">
      <Slider {...settings}>
      {images.map((img, index) => (
        <div className='image container' key={index}> 
          <img src={img} alt={`Slide ${index + 1}`}  />
        </div>
      ))}
    </Slider>
 </div>
  );
};

export default SliderComponent;
