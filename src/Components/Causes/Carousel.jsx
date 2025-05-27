// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import CauseCard from './CauseCard';

// // Import your local image
// import caroImage from "../../assets/Caro.png";

// const CardCarousel = () => {
//   const causes = [
//     {
//       id: 1,
//       title: 'Establish School for Poor Children',
//       image: caroImage,
//       raised: 59089,
//       goal: 120000,
//       percentRaised: 49.2,
//     },
//     {
//       id: 2,
//       title: 'Pallavi Heart Defect Treatment',
//       image: caroImage,
//       raised: 222000,
//       goal: 98000,
//       percentRaised: 80,
//     },
//     {
//       id: 3,
//       title: 'Providing Healthy Food for the Children',
//       image: caroImage,
//       raised: 7666,
//       goal: 300000,
//       percentRaised: 50.6,
//     },
//     {
//       id: 4,
//       title: 'Manages Cloths For All Childern',
//       image: caroImage,
//       raised: 153000,
//       goal: 500000,
//       percentRaised: 40.6,
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const autoPlayRef = useRef(null);

//   const prevSlide = () => {
//     if (isTransitioning) return;
    
//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? causes.length - 1 : prevIndex - 1
//     );
    
//     setTimeout(() => setIsTransitioning(false), 500);
//   };

//   const nextSlide = () => {
//     if (isTransitioning) return;
    
//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) => 
//       prevIndex === causes.length - 1 ? 0 : prevIndex + 1
//     );
    
//     setTimeout(() => setIsTransitioning(false), 500);
//   };

//   useEffect(() => {
//     const play = () => {
//       autoPlayRef.current = window.setTimeout(nextSlide, 5000);
//     };

//     play();

//     return () => {
//       if (autoPlayRef.current) {
//         clearTimeout(autoPlayRef.current);
//       }
//     };
//   }, [currentIndex, isTransitioning]);

//   const handleMouseEnter = () => {
//     if (autoPlayRef.current) {
//       clearTimeout(autoPlayRef.current);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (autoPlayRef.current) {
//       clearTimeout(autoPlayRef.current);
//     }
//     autoPlayRef.current = window.setTimeout(nextSlide, 5000);
//   };

//   // Calculate which items to display
//   const getVisibleItems = () => {
//     const visibleItems = [];
//     const totalItems = causes.length;
    
//     for (let i = 0; i < 3; i++) {
//       // Calculate the index of each visible card
//       let index = (currentIndex + i) % totalItems;
//       visibleItems.push(causes[index]);
//     }
    
//     return visibleItems;
//   };

//   return (
//     <div className="flex justify-center items-center w-full py-8 px-16 relative">
//       {/* Left arrow button placed outside - with updated hover effect */}
//       <button 
//         onClick={prevSlide} 
//         className="h-12 w-12 ml-25 rounded border border-cyan-400 bg-white flex items-center justify-center hover:bg-cyan-400 hover:border-cyan-400 transition-all duration-200 absolute left-8 group"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors duration-200" />
//       </button>
      
//       <div 
//         className="w-full max-w-6xl overflow-hidden"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className="flex gap-0.5 justify-center">
//           {getVisibleItems().map((cause) => (
//             <div 
//               key={cause.id} 
//               className="w-86 h-105 flex-shrink-0 transition-all duration-500"
//             >
//               <CauseCard 
//                 title={cause.title}
//                 image={cause.image}
//                 raised={cause.raised}
//                 goal={cause.goal}
//                 percentRaised={cause.percentRaised}
//                 progressBarStyle={{ marginTop: '30px' }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* Right arrow button placed outside - with updated hover effect */}
//       <button 
//         onClick={nextSlide} 
//         className="h-12 w-12 mr-25 rounded border border-cyan-400 bg-white flex items-center justify-center hover:bg-cyan-400 hover:border-cyan-400 transition-all duration-200 absolute right-8 group"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors duration-200" />
//       </button>
//     </div>
//   );
// };

// export default CardCarousel;

// import React, { useState, useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import CauseCard from './CauseCard';

// const CardCarousel = () => {
//   const causes = useSelector((state) => state.cause.causes); // 👈 Get causes from Redux
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const autoPlayRef = useRef(null);

//   const prevSlide = () => {
//     if (isTransitioning) return;

//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? causes.length - 1 : prevIndex - 1
//     );

//     setTimeout(() => setIsTransitioning(false), 500);
//   };

//   const nextSlide = () => {
//     if (isTransitioning) return;

//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) =>
//       prevIndex === causes.length - 1 ? 0 : prevIndex + 1
//     );

//     setTimeout(() => setIsTransitioning(false), 500);
//   };

//   useEffect(() => {
//     const play = () => {
//       autoPlayRef.current = window.setTimeout(nextSlide, 5000);
//     };

//     play();

//     return () => {
//       if (autoPlayRef.current) {
//         clearTimeout(autoPlayRef.current);
//       }
//     };
//   }, [currentIndex, isTransitioning]);

//   const handleMouseEnter = () => {
//     if (autoPlayRef.current) {
//       clearTimeout(autoPlayRef.current);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (autoPlayRef.current) {
//       clearTimeout(autoPlayRef.current);
//     }
//     autoPlayRef.current = window.setTimeout(nextSlide, 5000);
//   };

//   const getVisibleItems = () => {
//     const visibleItems = [];
//     const totalItems = causes.length;

//     for (let i = 0; i < 3; i++) {
//       let index = (currentIndex + i) % totalItems;
//       visibleItems.push(causes[index]);
//     }

//     return visibleItems;
//   };

//   return (
//     <div className="flex justify-center items-center w-full py-8 px-16 relative">
//       <button
//         onClick={prevSlide}
//         className="h-12 w-12 ml-25 rounded border border-cyan-400 bg-white flex items-center justify-center hover:bg-cyan-400 hover:border-cyan-400 transition-all duration-200 absolute left-8 group"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors duration-200" />
//       </button>

//       <div
//         className="w-full max-w-6xl overflow-hidden"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className="flex gap-0.5 justify-center">
//           {getVisibleItems().map((cause) => (
//             <div
//               key={cause.id}
//               className="w-86 h-105 flex-shrink-0 transition-all duration-500"
//             >
//               <CauseCard
//                 name={cause.name}
//                 image={cause.image}
//                 raised={cause.raised}
//                 goal={cause.goal}
//                 percentRaised={cause.percentRaised}
//                 progressBarStyle={{ marginTop: '30px' }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <button
//         onClick={nextSlide}
//         className="h-12 w-12 mr-25 rounded border border-cyan-400 bg-white flex items-center justify-center hover:bg-cyan-400 hover:border-cyan-400 transition-all duration-200 absolute right-8 group"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors duration-200" />
//       </button>
//     </div>
//   );
// };

// export default CardCarousel;

// import React, { useState, useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import CauseCard from './CauseCard';

// const CardCarousel = () => {
//   const causes = useSelector((state) => state.cause.causes); // 👈 Get causes from Redux
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const autoPlayRef = useRef(null);

//   const prevSlide = () => {
//     if (isTransitioning || !causes?.length) return;

//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? causes.length - 1 : prevIndex - 1
//     );

//     setTimeout(() => setIsTransitioning(false), 500);
//   };

//   const nextSlide = () => {
//     if (isTransitioning || !causes?.length) return;

//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) =>
//       prevIndex === causes.length - 1 ? 0 : prevIndex + 1
//     );

//     setTimeout(() => setIsTransitioning(false), 500);
//   };

//   useEffect(() => {
//     if (!causes?.length) return; // ✅ Don't autoplay if no causes

//     const play = () => {
//       autoPlayRef.current = window.setTimeout(nextSlide, 5000);
//     };

//     play();

//     return () => {
//       if (autoPlayRef.current) {
//         clearTimeout(autoPlayRef.current);
//       }
//     };
//   }, [currentIndex, isTransitioning, causes]);

//   const handleMouseEnter = () => {
//     if (autoPlayRef.current) {
//       clearTimeout(autoPlayRef.current);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (autoPlayRef.current) {
//       clearTimeout(autoPlayRef.current);
//     }
//     autoPlayRef.current = window.setTimeout(nextSlide, 5000);
//   };

//   const getVisibleItems = () => {
//     if (!causes || causes.length === 0) {
//       return []; // ✅ Always return array safely
//     }

//     const visibleItems = [];
//     const totalItems = causes.length;

//     for (let i = 0; i < 3; i++) {
//       let index = (currentIndex + i) % totalItems;
//       const cause = causes[index];
//       if (cause) { // ✅ Check if cause exists
//         visibleItems.push(cause);
//       }
//     }

//     return visibleItems;
//   };

//   return (
//     <div className="flex justify-center items-center w-full py-8 px-16 relative">
//       <button
//         onClick={prevSlide}
//         className="h-12 w-12 ml-25 rounded border border-cyan-400 bg-white flex items-center justify-center hover:bg-cyan-400 hover:border-cyan-400 transition-all duration-200 absolute left-8 group"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors duration-200" />
//       </button>

//       <div
//         className="w-full max-w-6xl overflow-hidden"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className="flex gap-0.5 justify-center">
//           {getVisibleItems().map((cause, index) =>
//             cause ? ( // ✅ Check cause
//               <div
//                 key={cause.id || index}
//                 className="w-86 h-105 flex-shrink-0 transition-all duration-500"
//               >
//                 <CauseCard
//                   name={cause.name || cause.title || "Untitled"} // ✅ Safely fallback
//                   image={cause.image}
//                   raised={cause.raised || 0}
//                   goal={cause.goal || 0}
//                   percentRaised={cause.percentRaised || 0}
//                   progressBarStyle={{ marginTop: '30px' }}
//                 />
//               </div>
//             ) : null
//           )}
//         </div>
//       </div>

//       <button
//         onClick={nextSlide}
//         className="h-12 w-12 mr-25 rounded border border-cyan-400 bg-white flex items-center justify-center hover:bg-cyan-400 hover:border-cyan-400 transition-all duration-200 absolute right-8 group"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors duration-200" />
//       </button>
//     </div>
//   );
// };

// export default CardCarousel;


import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getCauses } from '../../api/apiCalls';
import CauseCard from './CauseCard';

const CardCarousel = () => {
  const causes = useSelector((state) => state.cause.causes);
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef(null);
  const slideRef = useRef(null);

  // Check if we need to reset position when component mounts
  useEffect(() => {
    const shouldReset = sessionStorage.getItem('resetPagePosition');
    if (shouldReset === 'true') {
      // Reset to top of page
      window.scrollTo(0, 0);
      // Reset carousel position
      setCurrentIndex(0);
      // Clear the flag
      sessionStorage.removeItem('resetPagePosition');
    }
  }, []);

  // Modified to move only 1 card at a time
  const moveSlides = (direction) => {
    if (isTransitioning || !causes?.length) return;

    setIsTransitioning(true);

    if (direction === 'prev') {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        if (newIndex < 0) {
          return causes.length - 1;
        }
        return newIndex;
      });
    } else {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex >= causes.length) {
          return 0;
        }
        return newIndex;
      });
    }

    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => moveSlides('prev');
  const nextSlide = () => moveSlides('next');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getCauses(dispatch);
      } catch (error) {
        console.error("Error fetching causes:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (!causes?.length) return;

    const play = () => {
      autoPlayRef.current = window.setTimeout(nextSlide, 5000);
    };

    play();

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex, isTransitioning, causes]);

  const handleMouseEnter = () => {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
    }
    autoPlayRef.current = window.setTimeout(nextSlide, 5000);
  };

  // Calculate which cards to display
  const getVisibleCards = () => {
    if (!causes || causes.length === 0) {
      return [];
    }

    // Ensure we always have enough cards to display
    const paddedCauses = [...causes];
    while (paddedCauses.length < 5) {
      paddedCauses.push({
        name: "Coming Soon",
        image: null,
        raised: 0,
        goal: 1000,
        _id: `placeholder-${paddedCauses.length}`
      });
    }

    // Get 3 visible cards starting from currentIndex
    const visibleCards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % paddedCauses.length;
      visibleCards.push(paddedCauses[index]);
    }

    return visibleCards;
  };

  if (!causes || causes.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-64">
        <p className="text-gray-500">Loading causes...</p>
      </div>
    );
  }

  const visibleCards = getVisibleCards();

  return (
    <div className="flex justify-center items-center w-full py-8 px-4 md:px-16 relative h-96 md:h-120">
      {/* Next button (left arrow) */}
      <button
        onClick={nextSlide}
        className="h-10 w-10 md:h-12 md:w-12 rounded border border-cyan-400 bg-white flex items-center justify-center hover:bg-cyan-400 hover:border-cyan-400 transition-all duration-200 absolute left-2 md:left-8 group z-10"
        aria-label="Next slide"
        disabled={isTransitioning}
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover:text-white transition-colors duration-200" />
      </button>

      {/* Carousel slides */}
      <div
        className="w-full max-w-6xl overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={slideRef}
          className="transition-transform duration-500 ease-in-out flex justify-center w-full"
        >
          {visibleCards.map((cause, index) => (
            <div
              key={cause._id || `slide-${index}`}
              className="w-1/3 px-2"
            >
              <CauseCard
                name={cause.name || cause.title || "Untitled"}
                image={cause.image}
                raised={cause.raised || 0}
                goal={cause.goal || 0}
                percentRaised={calculatePercent(cause.raised, cause.goal)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Previous button (right arrow) */}
      <button
        onClick={prevSlide}
        className="h-10 w-10 md:h-12 md:w-12 rounded border border-cyan-400 bg-white flex items-center justify-center hover:bg-cyan-400 hover:border-cyan-400 transition-all duration-200 absolute right-2 md:right-8 group z-10"
        aria-label="Previous slide"
        disabled={isTransitioning}
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover:text-white transition-colors duration-200" />
      </button>
    </div>
  );
};

// Helper function
const calculatePercent = (raised, goal) => {
  if (!goal || goal === 0) return 0;
  return (raised / goal) * 100;
};

export default CardCarousel;


