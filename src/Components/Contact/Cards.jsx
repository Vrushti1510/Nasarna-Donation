import React from 'react';
import { Globe, Mail, Headphones } from 'lucide-react';

const Cards = () => {
  const contactCards = [
    {
      icon: <Globe size={56} />,
      bgColor: 'bg-blue-200',
      title: 'Office Address',
      info: '506 NS, Ahmedabad',
    },
    {
      icon: <Mail size={56} />,
      bgColor: 'bg-red-200',
      title: 'Official Mail',
      info: 'info@nasarna.com',
    },
    {
      icon: <Headphones size={56} />,
      bgColor: 'bg-purple-200',
      title: 'Official Phone',
      info: '+91 256-987-239',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-10 px-4">
      {contactCards.map((card, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-md p-8 w-90 mb-20 max-w-sm"
        >
          <h2 className="text-[#2d3a6d] text-2xl font-semibold mb-6">{card.info}</h2>
          
          <div className="flex items-center">
            <div className={`${card.bgColor} w-20 h-20 rounded-full flex items-center justify-center mr-4`}>
              {card.icon}
            </div>
            <p className="text-[#6a717f] text-xl font-medium">{card.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;