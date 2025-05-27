// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Home, Info, Heart, Phone, User, Mail  } from 'lucide-react';
// import Logo from "../../assets/Logo.png";

// const Navbar = () => {
//   return (
//     <>
//       {/* Top bar */}
//       <div className="bg-gray-100 py-5">
//         <div className="container mx-auto px-50 flex justify-between items-center text-gray-600 text-md">
//           <div className="flex items-center space-x-4">
//           <div className="flex items-center">
//           <Phone size={16} className="mr-2" />
//             <span>+910123456789</span>
//             </div>
//             <div className="h-4 w-px bg-black mx-2"></div> {/* Thin black vertical line */}
//             <div className="flex items-center">
//             <Mail size={16} className="mr-2" />
//             <span>nasarna@gmail.com</span>
//             </div>
//           </div>
//           <Link 
//             to="/login" 
//             className="hover:text-green-600 transition-colors duration-200"
//           >
//             Login
//           </Link>
//         </div>
//       </div>

//       {/* Main navbar */}
//       <nav className="shadow-md">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex justify-between items-center">
//             {/* Logo */}
//             <Link to="/" className="flex items-center space-x-2">
//               <img 
//                 src={Logo}
//                 alt="Nasarna Logo" 
//                 className="h-12 w-auto mr-3 px-50"
//               />
//             </Link>

//             {/* Navigation Links */}
//             <div className="flex items-center space-x-8 mr-60">
//               <NavLink to="/" icon={<Home size={17} />} text="Home" />
//               <NavLink to="/about" icon={<Info size={17} />} text="About" />
//               <NavLink to="/causes" icon={<Heart size={17} />} text="Causes" />
//               <NavLink to="/contact" icon={<Phone size={17} />} text="Contact" />
//               <NavLink to="/your-details" icon={<User size={17} />} text="Your Details" />
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// const NavLink = ({ to, icon, text }) => (
//   <Link
//     to={to}
//     className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors duration-200"
//   >
//     {icon}
//     <span>{text}</span>
//   </Link>
// );

// export default Navbar;

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Heart, Phone, User, Mail } from 'lucide-react';
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const location = useLocation(); // 👈 detect route change

  useEffect(() => {
    // Check localStorage on mount and when location changes
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, [location]); // 👈 re-run when route changes (like after login/logout)

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null); // 👈 remove user from state immediately
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-gray-100 py-5">
        <div className="container mx-auto px-4 flex justify-between items-center text-gray-600 text-md">
          <div className="flex items-center space-x-4">
            <div className="flex items-center ml-30">
              <Phone size={16} className="mr-2" />
              <span>+910123456789</span>
            </div>
            <div className="h-4 w-px bg-black mx-2"></div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <span>nasarna@gmail.com</span>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4 mr-60">
            {user ? (
              <>
                <span className="text-green-600 font-semibold">{user.name}</span>
                <Link
                  to="/donate"
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors duration-300 text-sm"
                >
                  Donate Now
                </Link>
                {/* <button
                  onClick={handleLogout}
                  className="text-red-500 hover:text-red-700 transition-colors text-sm"
                >
                  Logout
                </button> */}
              </>
            ) : (
              <Link
                to="/login"
                className="hover:text-green-600 transition-colors duration-200"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={Logo}
                alt="Nasarna Logo" 
                className="h-12 w-auto ml-30"
              />
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8 mr-60">
              <NavLink to="/" icon={<Home size={17} />} text="Home" />
              <NavLink to="/about" icon={<Info size={17} />} text="About" />
              <NavLink to="/causes" icon={<Heart size={17} />} text="Causes" />
              <NavLink to="/contact" icon={<Phone size={17} />} text="Contact" />
              <NavLink to="/your-details" icon={<User size={17} />} text="Your Details" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const NavLink = ({ to, icon, text }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors duration-200"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;
