// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../../Redux/userSlice'; // ✅ Adjust path if needed
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // ✅ Simulate a login check (you can add real auth later)
//     if (email === 'test@example.com' && password === '123456') {
//       dispatch(login({
//         name: 'Test User',
//         email: email,
//         phone: '1234567890'
//       }));

//       navigate('/');
//     } else {
//       alert('Invalid email or password');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg shadow-md w-full max-w-md p-8">
//         <h1 className="text-center text-3xl font-bold text-[#0a2472] mb-2">Sign In</h1>
//         <p className="text-center text-gray-600 mb-6">Sign in to your account</p>
        
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-600 mb-1">E-mail</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="E-mail"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
          
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
          
//           <button 
//             type="submit" 
//             className="w-full bg-[#10B981] text-white py-3 rounded-md font-medium hover:bg-[#0D9268] transition-colors duration-300"
//           >
//             LOGIN
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;




// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../../Redux/userSlice'; // ✅ Adjust path if needed
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     // Check if user already logged in
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user) {
//       navigate('/');
//     }
//   }, [navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // ✅ Simulate a login check
//     if (email === 'test@example.com' && password === '123456') {
//       const userData = {
//         name: 'Test User',
//         email: email,
//       };

//       // Dispatch to Redux
//       dispatch(login({
//         ...userData,
//         phone: '1234567890'
//       }));

//       // Save user info in localStorage
//       localStorage.setItem('user', JSON.stringify(userData));

//       // Navigate to home
//       navigate('/');
//     } else {
//       alert('Invalid email or password');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg shadow-md w-full max-w-md p-8">
//         <h1 className="text-center text-3xl font-bold text-[#0a2472] mb-2">Sign In</h1>
//         <p className="text-center text-gray-600 mb-6">Sign in to your account</p>
        
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-600 mb-1">E-mail</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="E-mail"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
          
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
          
//           <button 
//             type="submit" 
//             className="w-full bg-[#10B981] text-white py-3 rounded-md font-medium hover:bg-[#0D9268] transition-colors duration-300"
//           >
//             LOGIN
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
// src/Components/Login/LoginForm.jsx

// src/Components/Login/LoginForm.jsx

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../api/apiCalls";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast"; // Import toast library

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/"); // Redirect to home page if token exists
    }
  }, [navigate]);

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Show initial toast that will be replaced by success or error
      const toastId = toast.loading("Logging in...");
      
      await login(dispatch, { email, password });

      // Check if user exists in localStorage after login attempt
      const user = localStorage.getItem("user");
      if (user) {
        // Update the loading toast to success
        toast.success("Login successful!", { id: toastId });
        // Add a small delay before redirecting to ensure toast is visible
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        // Update the loading toast to error
        toast.error("Login failed. Please check your credentials.", { id: toastId });
      }
    } catch (error) {
      // Show error toast
      toast.error(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Toast container - renders the toast notifications */}
      <Toaster 
        position="top-right" 
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              background: '#4CAF50',
              color: 'white',
            },
          },
          error: {
            duration: 4000,
            style: {
              background: '#E53E3E',
              color: 'white',
            },
          },
        }}
      />
      
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">Sign In</h2>
        <p className="text-center text-gray-500 mb-6">Sign in to your account</p>
        <form onSubmit={handleClick} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">E-mail</label>
            <input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
            } text-white font-bold py-2 rounded-lg transition duration-300`}
          >
            {loading ? "LOGGING IN..." : "LOGIN"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

