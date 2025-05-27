import React, { useState } from 'react';

const Form = () => {
  const [donation, setDonation] = useState('');
  const [message, setMessage] = useState('');

  const handleDonationChange = (e) => {
    // Allow only numbers and decimal point
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setDonation(value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process donation submission
    console.log('Donation amount:', donation);
    console.log('Message:', message);
    // Here you would typically call an API to process the donation
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#0a2463]">
        Make a Donation
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#0a2463]">
            Your Donation
          </h2>
          <input
            type="text"
            value={donation}
            onChange={handleDonationChange}
            placeholder="Enter Donation Amount"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#0a2463]">
            Message
          </h2>
          <textarea
            value={message}
            onChange={handleMessageChange}
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#0a2463] text-white py-3 px-8 rounded-md font-medium hover:bg-[#0d2d76] transition-colors duration-300"
          >
            Submit Donation
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default Form;