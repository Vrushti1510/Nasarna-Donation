// // src/Pages/YourDetails.jsx

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../Redux/userSlice';
// import { useNavigate } from 'react-router-dom';

// const YourDetails = () => {
//   const currentUser = useSelector((state) => state.user.currentUser); // ✅ Correct way to access user
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   console.log(currentUser); // You can now see full user object here

//   const handleLogout = () => {
//     const confirmLogout = window.confirm("Are you sure you want to logout?");
//     if (confirmLogout) {
//       dispatch(logout());
//       navigate('/'); // Redirect to Home page
//     }
//   };

//   return (
//     <div className="p-8 ml-23">
//       <h1 className="text-4xl font-bold text-center text-[#062265] mb-8">Your Details</h1>

//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Left Profile Card */}
//         <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center w-full md:w-1/4">
//           <div className="bg-gradient-to-r from-green-300 to-blue-300 rounded-full p-6 mb-4">
//             <div className="text-white text-4xl">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//               </svg>
//             </div>
//           </div>

//           <h2 className="text-2xl font-bold text-[#062265] mb-2">
//             {currentUser?.name || "-"}
//           </h2>

//           <p className="text-gray-600 mb-6">
//             Donor at Nasarna Helping Hand
//           </p>

//           <button
//             onClick={handleLogout}
//             className="border border-blue-500 text-blue-500 hover:bg-blue-100 px-6 py-2 rounded-md transition"
//           >
//             Logout
//           </button>
//         </div>

//         {/* Right Details Card */}
//         <div className="bg-white rounded-lg shadow-md w-full md:w-2/3">

//           {/* My Account header */}
//           <div className="bg-green-500 text-[#062265] font-bold text-xl p-4 rounded-t-md shadow-inner border-b border-green-600">
//             My Account
//           </div>

//           {/* Donor Information */}
//           <div className="p-6 border-b">
//             <h4 className="text-[#6C757D] mb-4">Donor Information</h4>

//             <div className="flex flex-col md:flex-row justify-between">
//               <div className="mb-4 md:mb-0">
//                 <p className="text-[#333333] font-semibold">Full Name:</p>
//                 <p className="text-[#777777]">{currentUser?.name || "Ricky Kumar"}</p>
//               </div>

//               <div>
//                 <p className="text-gray-700 font-semibold">Email ID:</p>
//                 <p className="text-gray-600">{currentUser?.email || "ricky@gmail.com"}</p>
//               </div>
//             </div>
//           </div>

//           {/* Contact Information */}
//           <div className="p-6">
//             <h4 className="text-[#6C757D] mb-4">Contact Information</h4>

//             <div className="mb-4">
//               <p className="text-[#333333] font-semibold">Address:</p>
//               <p className="text-[#777777]">{currentUser?.address || "123 MG Road"}</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div>
//                 <p className="text-[#333333] font-semibold">City:</p>
//                 <p className="text-[#777777]">{currentUser?.city || "Mumbai"}</p>
//               </div>

//               <div>
//                 <p className="text-[#333333] font-semibold">Phone:</p>
//                 <p className="text-[#777777]">{currentUser?.phone || "9876543210"}</p>
//               </div>

//               <div>
//                 <p className="text-[#333333] font-semibold">Pin Code:</p>
//                 <p className="text-[#777777]">{currentUser?.pin || "400001"}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YourDetails;
// src/Pages/YourDetails.jsx

// // src/pages/YourDetails.jsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const YourDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleLogout = () => {
    toast.info(
      <div>
        <p className="font-medium text-gray-800 mb-2">Are you sure you want to logout?</p>
        <div className="flex justify-end gap-2 mt-2">
          <button
            onClick={performLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
          >
            Logout
          </button>
          <button
            onClick={() => toast.dismiss()}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded-md text-sm"
          >
            Cancel
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        closeButton: false,
      }
    );
  };

  const performLogout = () => {
    try {
      toast.dismiss();
      dispatch(logout());
  
      // Small delay before navigation
      setTimeout(() => {
        navigate('/');
        window.scrollTo(0, 0);
      }, 10); // wait 0 milliseconds
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed. Please try again.");
    }
  };
  
  

  useEffect(() => {
    if (!currentUser) {
      navigate("/login", { replace: true });
    }
  }, [currentUser, navigate]);
  
  

  return (
    <>
      <ToastContainer />
      <div className="p-8 ml-23">
        <h1 className="text-4xl font-bold text-center text-[#062265] mb-8">Your Details</h1>

        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Left Profile Card */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center w-full md:w-1/4">
            <div className="bg-gradient-to-r from-green-300 to-blue-300 rounded-full p-6 mb-4">
              <div className="text-white text-4xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#062265] mb-2">
              {currentUser?.name || "-"}
            </h2>

            <p className="text-gray-600 mb-6">
              Donor at Nasarna Helping Hand
            </p>

            <button
              onClick={handleLogout}
              className="border border-blue-500 text-blue-500 hover:bg-blue-100 px-6 py-2 rounded-md transition"
            >
              Logout
            </button>
          </div>

          {/* Right Details Card */}
          <div className="bg-white rounded-lg shadow-md w-full md:w-2/3">
            
            {/* My Account Header */}
            <div className="bg-green-500 text-[#062265] font-bold text-xl p-4 rounded-t-md shadow-inner border-b border-green-600">
              My Account
            </div>

            {/* Donor Information */}
            <div className="p-6 border-b">
              <h4 className="text-[#6C757D] mb-4">Donor Information</h4>

              <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-4 md:mb-0">
                  <p className="text-[#333333] font-semibold">Full Name:</p>
                  <p className="text-[#777777]">{currentUser?.name || "N/A"}</p>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold">Email ID:</p>
                  <p className="text-gray-600">{currentUser?.email || "N/A"}</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-6">
              <h4 className="text-[#6C757D] mb-4">Contact Information</h4>

              <div className="mb-4">
                <p className="text-[#333333] font-semibold">Address:</p>
                <p className="text-[#777777]">{currentUser?.address || "N/A"}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-[#333333] font-semibold">City:</p>
                  <p className="text-[#777777]">{currentUser?.city || "N/A"}</p>
                </div>

                <div>
                  <p className="text-[#333333] font-semibold">Phone:</p>
                  <p className="text-[#777777]">{currentUser?.phone || "N/A"}</p>
                </div>

                <div>
                  <p className="text-[#333333] font-semibold">Pin Code:</p>
                  <p className="text-[#777777]">{currentUser?.pin || "N/A"}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default YourDetails;
