import React, { useState, useRef } from 'react';
import { Play, X } from 'lucide-react';
import videoFile from '../../assets/VideoSection/Video.mp4';

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto px-4 my-12 mt-33">
      {/* Video Container with Top Border */}
      <div className="relative w-full bg-emerald-500 pt-2 rounded-t-md">

        <div className="relative bg-black w-full overflow-hidden">
          {/* Close Button */}
          {/* 
          <button 
            className="absolute top-2 right-2 z-10 bg-white/80 rounded-full p-1 hover:bg-white transition-colors"
            onClick={handleClose}
          >
            <X size={20} className="text-gray-800" />
          </button> 
          */}

          <video
            ref={videoRef}
            src={videoFile}
            className="w-full h-auto"
            onClick={handlePlayClick}
            onEnded={() => setIsPlaying(false)}
            poster="/path-to-thumbnail-if-needed.jpg"
          />

          {/* Play Button Overlay */}
          {!isPlaying && (
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20"
              onClick={handlePlayClick}
            >
              <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm transition-transform hover:scale-110">
                <Play size={28} className="text-emerald-500 ml-1" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Text Below Video */}
      <div className="text-center mt-8 space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-[#0a2472]">See what we do for the </span>
          <span className="text-emerald-500">poor people</span>
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-emerald-500">and the children</span>
        </h2>
      </div>
    </div>
  );
};

export default Video;
