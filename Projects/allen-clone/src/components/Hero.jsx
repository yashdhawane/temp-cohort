import React, { useState, useEffect } from 'react';
import { Button } from "@material-tailwind/react";
import AutoPlay from './AutoPlay';


const slides = [
  {
    image: "/api/placeholder/400/320",
    title: "Study. Learn. Benchmark.",
    subtitle: "With the brightest minds in India"
  },
  {
    image: "/api/placeholder/400/320",
    title: "Experience. Excel. Achieve.",
    subtitle: "Join the legacy of success"
  },
  {
    image: "/api/placeholder/400/320",
    title: "Dream. Prepare. Succeed.",
    subtitle: "Your journey to excellence starts here"
  },
  {
    image: "/api/placeholder/400/320",
    title: "Learn. Grow. Lead.",
    subtitle: "Shape your future with us"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
   <>
    <div className="container mx-auto">
      <div className="column-3 py-4 flex justify-center">
        <img src='/herobanner1.png' alt='hero' className='w-3/4'/>
      </div>
    </div>
    
   {/* <div class="container mx-auto px-4">
    <div class="flex flex-wrap justify-between">
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
            <h1 className='text-6xl font-medium'>Your Dream.<br/>
            Our Expertise</h1>
            <h2 className='text-xl'>What brings you to us today?</h2>
            <Button variant="outlined" size="sm">
                NEET
              </Button>
              <Button variant="outlined" size="sm">
                JEE
              </Button>
              <Button variant="outlined" size="sm">
                Grade 6-10
              </Button>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <AutoPlay/>

        </div>
        
    </div>
</div> */}

<div className="container mx-auto px-6 py-12 bg-gradient-to-br from-blue-600 to-indigo-900 text-white rounded-lg shadow-lg text-center">
      <div className="flex flex-wrap justify-around">
        {/* Left Column */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Your Dream.
            <br />
            <span className="text-yellow-300">Our Expertise</span>
          </h1>
          <h2 className="text-lg md:text-2xl font-medium mb-8">
            What brings you to us today?
          </h2>
          <div className="flex justify-center gap-4">
            <button className="bg-yellow-300 text-blue-800 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-yellow-400 transition duration-200">
              NEET
            </button>
            <button className="bg-yellow-300 text-blue-800 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-yellow-400 transition duration-200">
              JEE
            </button>
            <button className="bg-yellow-300 text-blue-800 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-yellow-400 transition duration-200">
              Grade 6-10
            </button>
          </div>
        </div>

        {/* Right Column - Autoplay Slider */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-6">
          <AutoPlay />
        </div>
      </div>
    </div>

    
    </>
  
  );
};

export default HeroSection;
