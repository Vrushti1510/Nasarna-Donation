// import React from 'react';

// const CauseCard = ({
//   title,
//   image,
//   raised,
//   goal,
//   percentRaised,
// }) => {
//   const formatCurrency = (amount) => {
//     return `₹${amount.toLocaleString('en-IN')}`;
//   };

//   const displayPercent = Math.min(percentRaised, 100);
  
//   let progressColor = 'bg-emerald-400';
//   if (percentRaised > 100) {
//     progressColor = 'bg-blue-500';
//   } else if (percentRaised < 5) {
//     progressColor = 'bg-rose-500';
//   }

//   return (
//     <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg mx-2">
//       <div className="h-48 overflow-hidden">
//         <img 
//           src={image} 
//           alt={title} 
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="p-5">
//         <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
        
//         <div className="relative w-full h-2 bg-gray-200 rounded-full mb-2">
//           <div 
//             className={`absolute top-0 left-0 h-2 rounded-full ${progressColor}`}
//             style={{ width: `${displayPercent}%` }}
//           ></div>
//           <span 
//             className={`absolute -top-6 text-xs font-semibold ${progressColor} px-1.5 py-0.5 rounded-md text-white`}
//             style={{ 
//               left: `${Math.min(Math.max(displayPercent - 5, 0), 95)}%`,
//             }}
//           >
//             {percentRaised.toFixed(1)}%
//           </span>
//         </div>
        
//         <div className="flex justify-between text-sm my-4">
//           <div>
//             <span className="text-gray-600 font-medium">Raised: </span>
//             <span className="font-semibold">{formatCurrency(raised)}</span>
//           </div>
//           <div>
//             <span className="text-gray-600 font-medium">Goal: </span>
//             <span className="font-semibold">{formatCurrency(goal)}</span>
//           </div>
//         </div>
        
//         <div className="mt-4 flex justify-between">
//           <button className="text-blue-700 font-medium hover:text-blue-900 transition-colors">
//             Learn More
//           </button>
//           <button className="text-blue-700 font-medium hover:text-blue-900 transition-colors">
//             Login to donate
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CauseCard;

// import React from 'react';

// const CauseCard = ({
//   name,
//   image,
//   raised,
//   goal,
//   percentRaised,
//   progressBarStyle, // 👈 added
// }) => {

//   const formatCurrency = (amount) => `₹${amount.toLocaleString('en-IN')}`;

//   const displayPercent = Math.min(percentRaised, 100);
  
//   let progressColor = 'bg-emerald-400';
//   if (percentRaised > 100) {
//     progressColor = 'bg-blue-500';
//   } else if (percentRaised < 5) {
//     progressColor = 'bg-rose-500';
//   }

//   return (
//     <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg mx-2">
//       <div className="h-48 overflow-hidden">
//         <img src={image} alt={name} className="w-full h-full object-cover" />
//       </div>
//       <div className="p-5">
//         <h3 className="text-xl font-bold text-blue-900 mb-3">{name}</h3>

//         {/* 👇 progress bar with optional margin style */}
//         <div 
//           className="relative w-full h-2 bg-gray-200 rounded-full mb-2"
//           style={progressBarStyle} 
//         >
//           <div 
//             className={`absolute top-0 left-0 h-2 rounded-full ${progressColor}`}
//             style={{ width: `${displayPercent}%` }}
//           ></div>
//           <span 
//             className={`absolute -top-6 text-xs font-semibold ${progressColor} px-1.5 py-0.5 rounded-md text-white`}
//             style={{ left: `${Math.min(Math.max(displayPercent - 5, 0), 95)}%` }}
//           >
//             {percentRaised.toFixed(1)}%
//           </span>
//         </div>

//         <div className="flex justify-between text-sm my-4">
//           <div>
//             <span className="text-gray-600 font-medium">Raised: </span>
//             <span className="font-semibold">{formatCurrency(raised)}</span>
//           </div>
//           <div>
//             <span className="text-gray-600 font-medium">Goal: </span>
//             <span className="font-semibold">{formatCurrency(goal)}</span>
//           </div>
//         </div>

//         <div className="mt-4 flex justify-between">
//           <button className="text-blue-700 font-medium hover:text-blue-900 transition-colors">
//             Learn More
//           </button>
//           <button className="text-blue-700 font-medium hover:text-blue-900 transition-colors">
//             Login to donate
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CauseCard;


// import React from 'react';
// import CaroImage from '../../assets/Caro.png';   // 👈 Correct import

// const CauseCard = ({
//   name,
//   image,
//   raised,
//   goal,
//   percentRaised,
//   progressBarStyle,
// }) => {
//   const formatCurrency = (amount) => `₹${amount.toLocaleString('en-IN')}`;
//   const displayPercent = Math.min(percentRaised, 100);

//   let progressColor = 'bg-emerald-400';
//   if (percentRaised > 100) {
//     progressColor = 'bg-blue-500';
//   } else if (percentRaised < 5) {
//     progressColor = 'bg-rose-500';
//   }

//   return (
//     <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg mx-2">
//       <div className="h-48 overflow-hidden">
//         {/* 👇 Use default CaroImage if image is missing */}
//         <img
//           src={image || CaroImage}
//           alt={name}
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="p-5">
//         <h3 className="text-xl font-bold text-blue-900 mb-3">{name}</h3>

//         <div 
//           className="relative w-full h-2 bg-gray-200 rounded-full mb-2"
//           style={progressBarStyle}
//         >
//           <div 
//             className={`absolute top-0 left-0 h-2 rounded-full ${progressColor}`}
//             style={{ width: `${displayPercent}%` }}
//           ></div>
//           <span 
//             className={`absolute -top-6 text-xs font-semibold ${progressColor} px-1.5 py-0.5 rounded-md text-white`}
//             style={{ left: `${Math.min(Math.max(displayPercent - 5, 0), 95)}%` }}
//           >
//             {percentRaised.toFixed(1)}%
//           </span>
//         </div>

//         <div className="flex justify-between text-sm my-4">
//           <div>
//             <span className="text-gray-600 font-medium">Raised: </span>
//             <span className="font-semibold">{formatCurrency(raised)}</span>
//           </div>
//           <div>
//             <span className="text-gray-600 font-medium">Goal: </span>
//             <span className="font-semibold">{formatCurrency(goal)}</span>
//           </div>
//         </div>

//         <div className="mt-4 flex justify-between">
//           <button className="text-blue-700 font-medium hover:text-blue-900 transition-colors">
//             Learn More
//           </button>
//           <button className="text-blue-700 font-medium hover:text-blue-900 transition-colors">
//             Login to donate
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CauseCard;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import CaroImage from '../../assets/Caro.png';

const CauseCard = ({
  name,
  image,
  raised,
  goal,
  percentRaised,
}) => {
  const navigate = useNavigate();

  const formatCurrency = (amount) => {
    if (typeof amount !== 'number') return '₹0';
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const displayPercent = Math.min(percentRaised, 100); // Ensure it doesn't go over 100%

  let progressColor = 'bg-emerald-400';
  if (percentRaised > 100) {
    progressColor = 'bg-blue-500'; // Surpassed goal
  } else if (percentRaised < 5) {
    progressColor = 'bg-rose-500'; // Very low progress
  }

  // Navigation handlers with returnToTop flag
  const handleLearnMore = () => {
    // Set flag in sessionStorage to indicate that we should reset the page
    sessionStorage.setItem('resetPagePosition', 'true');
    navigate('/'); // Redirect to home page
    window.scrollTo(0, 0); // Added this line to force scroll to top
  };

  const handleDonate = () => {
    // Set flag in sessionStorage to indicate that we should reset the page
    sessionStorage.setItem('resetPagePosition', 'true');
    navigate('/donate'); // Redirect to donate page
    window.scrollTo(0, 0); // Added this line to force scroll to top
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105 h-80 md:h-96">
      {/* Image Section */}
      <div className="h-40 md:h-48 overflow-hidden">
        <img
          src={image || CaroImage}
          alt={name || 'Cause Image'}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 line-clamp-2">
          {name || 'Untitled Cause'}
        </h3>

        {/* Progress Bar Section */}
        <div
          className="relative w-full h-2 bg-gray-200 rounded-full mb-6 mt-2"
        >
          <div
            className={`absolute top-0 left-0 h-2 rounded-full ${progressColor}`}
            style={{ width: `${displayPercent}%` }}
          ></div>
          <span
            className={`absolute -top-6 text-xs font-semibold ${progressColor} px-1.5 py-0.5 rounded-md text-white`}
            style={{ left: `${Math.min(Math.max(displayPercent - 5, 0), 95)}%` }}
          >
            {percentRaised.toFixed(1)}%
          </span>
        </div>

        {/* Raised & Goal Section */}
        <div className="flex justify-between text-sm my-2">
          <div>
            <span className="text-gray-600 font-medium">Raised: </span>
            <span className="font-semibold">{formatCurrency(raised)}</span>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Goal: </span>
            <span className="font-semibold">{formatCurrency(goal)}</span>
          </div>
        </div>

        {/* Buttons Section - Push to bottom using margin-top-auto */}
        <div className="mt-auto flex justify-between pt-2">
          <button 
            className="px-3 py-1 text-sm text-white cursor-pointer bg-cyan-500 rounded-md hover:bg-cyan-600 transition-colors"
            onClick={handleLearnMore}
          >
            Learn More
          </button>
          <button 
            className="px-3 py-1 text-sm text-white cursor-pointer bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            onClick={handleDonate}
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CauseCard;



