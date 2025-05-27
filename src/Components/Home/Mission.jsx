import React from 'react';
import { Droplets, Apple, GraduationCap, Heart } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl flex flex-col items-center text-center transform hover:-translate-y-1 hover:scale-105 transition duration-300 mx-auto max-w-sm w-full h-76">
      <div className="bg-[#10ca8e] w-17 h-17 rounded-full flex items-center justify-center mb-6 shadow-md">
        {icon}
      </div>
      <h3 className="text-[#0a2472] text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed max-w-xs">{description}</p>
    </div>
  );
};

const Mission = () => {
  const services = [
    {
      icon: <Droplets size={32} color="white" strokeWidth={2} />,
      title: "Clean Water",
      description: "Every child deserves access to safe water and better health, a cause we deeply support."
    },
    {
      icon: <Apple size={32} color="white" strokeWidth={2} />,
      title: "Healthy Food",
      description: "Every child deserves nutritious meals for a brighter, healthier future—join us in making a difference."
    },
    {
      icon: <GraduationCap size={32} color="white" strokeWidth={2} />,
      title: "Pure Education",
      description: "Every child deserves quality education to unlock their true potential—support the cause today."
    },
    {
      icon: <Heart size={32} color="white" strokeWidth={2} />,
      title: "Medical Facilities",
      description: "Every child deserves access to essential healthcare for a healthier, happier future—help us make it happen."
    }
  ];

  return (
    <section className="relative">
      {/* Tilted background at the top */}
      <div className="absolute top-0 left-0 w-full h-40 bg-[#f5fbff] transform -skew-y-2 origin-left z-0"></div>
      
      {/* Main content section */}
      <div className="relative bg-[#f5fbff] py-24 z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-[#10ca8e] text-xl font-semibold mb-4">What We Do?</h2>
            <h1 className="text-[#0a2472] text-4xl md:text-4xl font-bold leading-tight">
              We Are In A Mission To Help<br />The Helpless
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Straight line at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-[#f5fbff] z-0"></div>
    </section>
  );
};

export default Mission;