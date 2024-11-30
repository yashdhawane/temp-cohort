import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {

  const settings = {
    
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows:false,
    fade:true
  };

  const images = [
    "/s2.jpeg",
    "/sliderimage2.jpeg",
    "/sliderimage3.jpeg",
    "/sliderimage4.jpeg"
    // Add more images as needed
  ];

  return (
    <>
    <div className="slider-container">
      <Slider {...settings}>
      {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            </div>
      ))}
      </Slider>
    </div>
    
   </>
  );
}

export default AutoPlay;
