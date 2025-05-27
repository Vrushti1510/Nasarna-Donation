// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { X } from 'lucide-react';
// // Import your local image
// import highlightImage from "../../assets/Highlight.png";

// const Highlight = () => {
//   const [isHoveredDonate, setIsHoveredDonate] = useState(false);
//   const [isHoveredVideo, setIsHoveredVideo] = useState(false);
//   const [showVideo, setShowVideo] = useState(false);
//   const navigate = useNavigate();

//   const handleDonateClick = () => {
//     navigate('/login');
//   };

//   const handleVideoClick = () => {
//     setShowVideo(true);
//   };

//   return (
//     <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//         {/* Left Column - Text Content */}
//         <div className="pr-0 lg:pr-8">
//           <div className="text-[#00bf85] text-lg font-medium tracking-wide mb-3 ml-34">What We Do?</div>
          
//           <h2 className="text-[#0a2463] text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2] mb-6 ml-34">
//             We Are In A Mission To Help The Helpless
//           </h2>
          
//           <p className="text-[#5a6372] text-lg mb-4 leading-[1.8] ml-34">
//             Countless children and families lack access to basic needs like clean
//             water, nutritious food, education, and healthcare. Together, we can
//             bring hope, change lives, and create a brighter future for those in
//             need. Join us in making a difference today.
//           </p>
          
//           <p className="text-[#5a6372] text-lg mb-10 leading-[1.8] ml-34">
//             Thing embarrassing hidden in the middle of text. All the Lorem Ipsum
//             generators on the Internet tend to repeat predefined chunks as
//             necessary,
//           </p>
          
//           <div className="flex flex-wrap gap-6 items-center ml-34">
//             {/* Donate Now Button with darker hover effect */}
//             <button 
//               onClick={handleDonateClick}
//               className={`px-8 py-3.5 text-white text-md font-bold rounded-md transition-all duration-300 cursor-pointer ${
//                 isHoveredDonate 
//                   ? 'bg-[#009e6e] transform scale-105' 
//                   : 'bg-[#00bf85]'
//               }`}
//               onMouseEnter={() => setIsHoveredDonate(true)}
//               onMouseLeave={() => setIsHoveredDonate(false)}
//             >
//               Donate Now
//             </button>
            
//             {/* Watch Video Button with improved shadow and triangle */}
//             <div 
//               className="flex items-center gap-4 group"
//               onMouseEnter={() => setIsHoveredVideo(true)}
//               onMouseLeave={() => setIsHoveredVideo(false)}
//             >
//               <span 
//                 className={`w-14 h-14 rounded-full bg-white flex items-center cursor-pointer justify-center shadow-lg ${
//                   isHoveredVideo 
//                     ? 'shadow-[0_0_0_12px_rgba(0,191,133,0.15)] scale-110'
//                     : 'shadow-[0_0_0_8px_rgba(0,191,133,0.1)]'
//                 } transition-all duration-300`}
//                 onClick={handleVideoClick}
//               >
//                 <span className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[12px] border-l-[#00bf85] border-b-[7px] border-b-transparent ml-1"></span>
//               </span>
//               <span className={`text-black text-md font-medium transition-all duration-300 select-none ${
//                 isHoveredVideo ? 'text-[#00bf85]' : ''
//               }`}>Watch Our Video</span>
//             </div>
//           </div>
//         </div>
        
//         {/* Right Column - Single Image with Dotted Background */}
//         <div className="relative">
//           {/* Dotted Background Pattern Top Right */}
//           <div className="absolute top-0 right-0 w-3/4 h-3/4 z-0">
//             <div className="w-full h-full grid grid-cols-10 gap-2">
//               {[...Array(100)].map((_, i) => (
//                 <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#00bf85] opacity-20"></div>
//               ))}
//             </div>
//           </div>
          
//           {/* Main Image - Using your single highlight image */}
//           <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
//             <img 
//               src={highlightImage} 
//               alt="Children supporting charity" 
//               className="w-full h-full object-cover"
//             />
//           </div>
          
//           {/* Dotted Background Pattern Bottom Right
//           <div className="absolute bottom-0 right-0 w-1/2 h-1/2 z-0">
//             <div className="w-full h-full grid grid-cols-8 gap-2">
//               {[...Array(64)].map((_, i) => (
//                 <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#00bf85] opacity-20"></div>
//               ))}
//             </div>
//           </div> */}
//         </div>
//       </div>

//       {/* Video Modal - Similar to the one in Hero component */}
//       {showVideo && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//           <div className="relative w-full max-w-5xl mx-4">
//             <div className="bg-black rounded-lg overflow-hidden shadow-2xl relative">
//               <div className="aspect-video relative">
//                 <button
//                   onClick={() => setShowVideo(false)}
//                   className="absolute top-4 right-4 bg-black bg-opacity-70 text-white hover:text-[#00bf85] p-2 rounded-full z-10"
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
//                     <button className="text-white hover:text-[#00bf85] transition-colors">
//                       <span className="sr-only">Like</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
//                       </svg>
//                     </button>
//                     <button className="text-white hover:text-[#00bf85] transition-colors">
//                       <span className="sr-only">Dislike</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
//                       </svg>
//                     </button>
//                     <button className="text-white hover:text-[#00bf85] transition-colors">
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
// };

// export default Highlight;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import highlightImage from "../../assets/Highlight.png";

const Highlight = () => {
  const [isHoveredDonate, setIsHoveredDonate] = useState(false);
  const [isHoveredVideo, setIsHoveredVideo] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  // Updated handleDonateClick function
  const handleDonateClick = () => {
    const user = localStorage.getItem('user'); // Check if token exists
    if (user) {
      navigate('/donate'); // Redirect to donate page
      window.scrollTo(0, 0); // Added this line to force scroll to top
    } else {
      navigate('/login'); // Redirect to login page
      window.scrollTo(0, 0); // Added this line to force scroll to top
    }
  };
  
  const handleVideoClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text Content */}
        <div className="pr-0 lg:pr-8">
          <div className="text-[#00bf85] text-lg font-medium tracking-wide mb-3 ml-34">What We Do?</div>
          
          <h2 className="text-[#0a2463] text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2] mb-6 ml-34">
            We Are In A Mission To Help The Helpless
          </h2>
          
          <p className="text-[#5a6372] text-lg mb-4 leading-[1.8] ml-34">
            Countless children and families lack access to basic needs like clean
            water, nutritious food, education, and healthcare. Together, we can
            bring hope, change lives, and create a brighter future for those in
            need. Join us in making a difference today.
          </p>
          
          <p className="text-[#5a6372] text-lg mb-10 leading-[1.8] ml-34">
            Thing embarrassing hidden in the middle of text. All the Lorem Ipsum
            generators on the Internet tend to repeat predefined chunks as
            necessary,
          </p>
          
          <div className="flex flex-wrap gap-6 items-center ml-34">
            {/* Donate Now Button */}
            <button 
              onClick={handleDonateClick}
              className={`px-8 py-3.5 text-white text-md font-bold rounded-md transition-all duration-300 cursor-pointer ${
                isHoveredDonate 
                  ? 'bg-[#009e6e] transform scale-105' 
                  : 'bg-[#00bf85]'
              }`}
              onMouseEnter={() => setIsHoveredDonate(true)}
              onMouseLeave={() => setIsHoveredDonate(false)}
            >
              Donate Now
            </button>
            
            {/* Watch Video Button */}
            <div 
              className="flex items-center gap-4 group"
              onMouseEnter={() => setIsHoveredVideo(true)}
              onMouseLeave={() => setIsHoveredVideo(false)}
            >
              <span 
                className={`w-14 h-14 rounded-full bg-white flex items-center cursor-pointer justify-center shadow-lg ${
                  isHoveredVideo 
                    ? 'shadow-[0_0_0_12px_rgba(0,191,133,0.15)] scale-110'
                    : 'shadow-[0_0_0_8px_rgba(0,191,133,0.1)]'
                } transition-all duration-300`}
                onClick={handleVideoClick}
              >
                <span className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[12px] border-l-[#00bf85] border-b-[7px] border-b-transparent ml-1"></span>
              </span>
              <span className={`text-black text-md font-medium transition-all duration-300 select-none ${
                isHoveredVideo ? 'text-[#00bf85]' : ''
              }`}>Watch Our Video</span>
            </div>
          </div>
        </div>
        
        {/* Right Column - Image */}
        <div className="relative">
          <div className="absolute top-0 right-0 w-3/4 h-3/4 z-0">
            <div className="w-full h-full grid grid-cols-10 gap-2">
              {[...Array(100)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#00bf85] opacity-20"></div>
              ))}
            </div>
          </div>

          <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
            <img 
              src={highlightImage} 
              alt="Children supporting charity" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-5xl mx-4">
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl relative">
              <div className="aspect-video relative">
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-4 right-4 bg-black bg-opacity-70 text-white hover:text-[#00bf85] p-2 rounded-full z-10"
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
                    <button className="text-white hover:text-[#00bf85] transition-colors">
                      <span className="sr-only">Like</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                    </button>
                    <button className="text-white hover:text-[#00bf85] transition-colors">
                      <span className="sr-only">Dislike</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                      </svg>
                    </button>
                    <button className="text-white hover:text-[#00bf85] transition-colors">
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
};

export default Highlight;
