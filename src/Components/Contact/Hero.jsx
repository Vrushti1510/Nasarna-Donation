import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full">
    
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-10"></div>
      
      {/* Main content */}
      <div className="bg-[#000000B3] h-87 flex flex-col items-center justify-center relative z-20">
        <h1 className="text-white text-3xl md:text-4xl font-bold mt-8">
          Contact Us
        </h1>
        
        <div className="mt-3 flex items-center text-lg">
          <Link 
            to="/" 
            className="text-white hover:text-emerald-500 transition-all duration-300"
          >
            Home
          </Link>
          <span className="mx-2 text-white">/</span>
          <span className="text-emerald-500 font-medium">Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;