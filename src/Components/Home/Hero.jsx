// import React, { useState } from 'react';
// import { Play, X } from 'lucide-react';
// import HeroImage from "../../assets/Hero.webp" // Import the Hero.webp image

// function Hero() {
//   const [showVideo, setShowVideo] = useState(false);

//   const handleDonate = () => {
//     window.location.href = '/login';
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="container mx-auto px-4 mt-15 h-screen flex items-center">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           <div className="space-y-6 ml-30">
//             <h1 className="text-6xl font-bold text-blue-950">
//               Let's be Kind for{' '}
//               <span className="text-emerald-500 block mt-2">Children</span>
//             </h1>
//             <div className="flex items-center space-x-6 mt-18">
//               <button
//                 onClick={handleDonate}
//                 className="bg-emerald-500 text-white px-8 py-3 font-semibold rounded-xl hover:bg-emerald-600 transition-colors"
//               >
//                 Donate Now
//               </button>
//               <div className="flex items-center space-x-2">
//                 <button
//                   onClick={() => setShowVideo(true)}
//                   className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:text-emerald-500 transition-colors cursor-pointer"
//                 >
//                   <Play className="w-4 h-4" />
//                 </button>
//                 <span className="font-medium text-gray-700 cursor-default">Watch Our Video</span>
//               </div>
//             </div>
//           </div>

//           <div className="relative group">
//             <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-[2.5rem] blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
//             <div className="relative">
//               <div className="absolute inset-0 bg-white rounded-[2.5rem] mix-blend-overlay opacity-10"></div>
//               <img
//                 src={HeroImage} // Use the imported image
//                 alt="Children with toy box"
//                 className="rounded-[2.5rem] w-160 h-130 object-cover relative z-10 ml-20 shadow-2xl transform group-hover:scale-[1.01] transition duration-500"
//                 style={{
//                   border: '4px solid rgba(255, 255, 255, 0.2)',
//                   boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {showVideo && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//           <div className="relative w-full max-w-5xl mx-4">
//             <div className="bg-black rounded-lg overflow-hidden shadow-2xl relative">
//               <div className="aspect-video relative">
//                 <button
//                   onClick={() => setShowVideo(false)}
//                   className="absolute top-4 right-4 bg-black bg-opacity-70 text-white hover:text-emerald-500 p-2 rounded-full z-10"
//                 >
//                   <X className="w-5 h-5" aria-label="Close" />
//                 </button>
//                 <iframe
//                   className="absolute inset-0 w-full h-full"
//                   src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=1&modestbranding=1"
//                   title="Campaign Video"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
              
//               <div className="bg-black text-white p-4 border-t border-gray-800">
//                 <div className="flex items-center justify-between">
//                   <div className="flex-1">
//                     <h3 className="text-xl font-semibold truncate">Volunteer Trip To Ghana, Africa: Life Changing 30 Days</h3>
//                     <p className="text-gray-400 text-sm mt-1">15K views • 2 years ago</p>
//                   </div>
//                   <div className="flex space-x-4">
//                     <button className="text-white hover:text-emerald-500 transition-colors">
//                       <span className="sr-only">Like</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
//                       </svg>
//                     </button>
//                     <button className="text-white hover:text-emerald-500 transition-colors">
//                       <span className="sr-only">Dislike</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
//                       </svg>
//                     </button>
//                     <button className="text-white hover:text-emerald-500 transition-colors">
//                       <span className="sr-only">Share</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Hero;


import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Play, X } from 'lucide-react';
import HeroImage from "../../assets/Hero.webp";

function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const [isHoveredDonate, setIsHoveredDonate] = useState(false);
  const [isHoveredVideo, setIsHoveredVideo] = useState(false);
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleDonate = () => {
    if (currentUser) {
      navigate('/donate'); // If logged in, go to Donate Page
      window.scrollTo(0, 0); // Force scroll to top
    } else {
      navigate('/login'); // If not logged in, go to Login Page
      window.scrollTo(0, 0); // Force scroll to top
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 mt-15 h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 ml-30">
            <h1 className="text-6xl font-bold text-blue-950">
              Let's be Kind for{' '}
              <span className="text-emerald-500 block mt-2">Children</span>
            </h1>

            <div className="flex items-center space-x-6 mt-18">
              <button
                onClick={handleDonate}
                className={`bg-emerald-500 text-white px-8 py-3 font-semibold rounded-xl transition-all duration-300 ${
                  isHoveredDonate ? 'bg-emerald-600 transform scale-105' : ''
                }`}
                onMouseEnter={() => setIsHoveredDonate(true)}
                onMouseLeave={() => setIsHoveredDonate(false)}
              >
                Donate Now
              </button>

              <div 
                className="flex items-center space-x-2 group"
                onMouseEnter={() => setIsHoveredVideo(true)}
                onMouseLeave={() => setIsHoveredVideo(false)}
              >
                <span 
                  className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer ${
                    isHoveredVideo 
                      ? 'shadow-[0_0_0_8px_rgba(0,191,133,0.15)] scale-110 text-emerald-500'
                      : 'shadow-[0_0_0_4px_rgba(0,191,133,0.1)]'
                  } transition-all duration-300`}
                  onClick={() => setShowVideo(true)}
                >
                  <Play className="w-4 h-4" />
                </span>
                <span className="font-medium text-black cursor-default">Watch Our Video</span>
              </div>
            </div>
          </div>

          {/* Hero image part */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-[2.5rem] blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-[2.5rem] mix-blend-overlay opacity-10"></div>
              <img
                src={HeroImage}
                alt="Children with toy box"
                className="rounded-[2.5rem] w-160 h-130 object-cover relative z-10 ml-20 shadow-2xl transform group-hover:scale-[1.01] transition duration-500"
                style={{
                  border: '4px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal - Copied from Highlight.jsx */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-5xl mx-4">
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl relative">
              <div className="aspect-video relative">
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-4 right-4 bg-black bg-opacity-70 text-white hover:text-emerald-500 p-2 rounded-full z-10"
                >
                  <X className="w-5 h-5" aria-label="Close" />
                </button>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=1&modestbranding=1"
                  title="Campaign Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="bg-black text-white p-4 border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold truncate">Volunteer Trip To Ghana, Africa: Life Changing 30 Days</h3>
                    <p className="text-gray-400 text-sm mt-1">15K views • 2 years ago</p>
                  </div>
                  <div className="flex space-x-4">
                    <button className="text-white hover:text-emerald-500 transition-colors">
                      <span className="sr-only">Like</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                    </button>
                    <button className="text-white hover:text-emerald-500 transition-colors">
                      <span className="sr-only">Dislike</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                      </svg>
                    </button>
                    <button className="text-white hover:text-emerald-500 transition-colors">
                      <span className="sr-only">Share</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
