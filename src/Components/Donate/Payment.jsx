import React, { useState } from 'react';
import { CreditCard, MapPin, Phone } from 'lucide-react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Payment Method Selection */}
      <h1 className="text-3xl font-bold text-[#0a2159] mb-6 text-center">Choose Your Payment Method</h1>
      
      <div className="flex justify-center gap-16 mb-8">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            className="form-radio h-5 w-5 text-[#0a2159]"
            checked={paymentMethod === 'online'}
            onChange={() => handlePaymentMethodChange('online')}
          />
          <span className="ml-2 text-lg text-gray-700">Online Donation</span>
        </label>
        
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            className="form-radio h-5 w-5 text-[#0a2159]"
            checked={paymentMethod === 'offline'}
            onChange={() => handlePaymentMethodChange('offline')}
          />
          <span className="ml-2 text-lg text-gray-700">Offline Donation</span>
        </label>
      </div>

      {/* Online Payment Form */}
      {paymentMethod === 'online' && (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 transition-all duration-300">
          <h2 className="text-2xl font-bold text-[#0a2159] mb-6">Card Payment Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="cardName">
                Card Holder Name
              </label>
              <input
                type="text"
                id="cardName"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter name"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter card number"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="cvv">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter CVV"
                maxLength="4"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="expireDate">
                Expire Date
              </label>
              <input
                type="text"
                id="expireDate"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="MM/YY"
                maxLength="5"
              />
            </div>
          </div>
        </div>
      )}

      {/* Offline Donation Instructions */}
      {paymentMethod === 'offline' && (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 transition-all duration-300">
          <h2 className="text-2xl font-bold text-[#0a2159] mb-6">Offline Donation Instructions</h2>
          
          <p className="text-gray-600 mb-6">
            If you would like to donate offline, you can choose one of the following methods:
          </p>
          
          <div className="border rounded-lg mb-6">
            <div className="bg-[#4ade80] text-white py-3 px-4 rounded-t-lg">
              <h3 className="text-xl font-semibold">Donation Methods</h3>
            </div>
            
            <div className="p-4 bg-white rounded-b-lg">
              <div className="mb-4">
                <p className="font-semibold text-gray-800">Bank Transfer:</p>
                <p className="text-gray-600 ml-4">Please transfer your donation to the following bank account:</p>
                <p className="text-gray-600 ml-4">Account Number: XXXXXXXX</p>
                <p className="text-gray-600 ml-4">Bank Name: Your Bank Name</p>
                <p className="text-gray-600 ml-4">IFSC Code: XXXXXXXXXX</p>
              </div>
              
              <div className="mb-4">
                <p className="font-semibold text-gray-800">Cheque:</p>
                <p className="text-gray-600 ml-4">
                  Make your cheque payable to <span className="font-medium">Nasarna Children Trust</span> and mail it to <span className="font-medium">Rudramicon Ahmedabad</span>.
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-gray-800">Cash Donation:</p>
                <p className="text-gray-600 ml-4">You can drop off cash donations at our office at the following address:</p>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg mb-6">
            <div className="bg-[#4ade80] text-white py-3 px-4 rounded-t-lg">
              <h3 className="text-xl font-semibold">Office Address</h3>
            </div>
            
            <div className="p-4 bg-white rounded-b-lg">
              <div className="flex items-start mb-2">
                <MapPin className="text-gray-600 mt-1 flex-shrink-0" size={18} />
                <p className="ml-2 text-gray-700">Rudram Icon, Room 506, Near Silver Oak University, Ahmedabad, 78001</p>
              </div>
              
              <p className="mb-2 ml-6">
                You can find us on <a href="https://maps.google.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Google Maps</a>.
              </p>
              
              <div className="flex items-center">
                <Phone className="text-gray-600 flex-shrink-0" size={18} />
                <p className="ml-2 text-gray-700">Phone Number: (123) 456-7890</p>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-700 italic">Thank you for your generous contribution!</p>
        </div>
      )}

      {/* Donate Button */}
      <div className="flex justify-center">
        <button 
          className="bg-[#4ade80] hover:bg-[#3dc76f] text-white font-bold py-3 px-8 mr-137 rounded-md transition-colors duration-300 shadow-sm text-lg"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Payment;