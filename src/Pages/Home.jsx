import React from 'react';
import { useSelector } from 'react-redux';
import Hero from '../Components/Home/Hero';
import Mission from '../Components/Home/Mission';
import Highlight from '../Components/Home/Highlight';
import Causes from '../Components/Home/Causes';

const Home = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <Hero />
      <Mission />
      <Highlight />
      <Causes />

      {/* 👇 Show user info and Donate Now button if logged in */}
      {/* {user && (
        <div className="flex justify-between items-center bg-gray-100 p-4 mt-6 rounded shadow">
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>{user.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>👤</span>
              <span>{user.name}</span>
            </div>
          </div>
          <button className="bg-green-500 text-white font-bold px-4 py-2 rounded">
            Donate Now
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Home;
