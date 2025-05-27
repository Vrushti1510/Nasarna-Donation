import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import  store from './Redux/Store'; // ✅ Add this
import Navbar from './Components/Home/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Causes from './Pages/Causes';
import Contact from './Pages/Contact';
import YourDetails from './Pages/YourDetails';
import Login from './Pages/Login';
import Donate from './Pages/Donate';
import Footer from './Components/Home/Footer';

function AppContent() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === '/login';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/your-details" element={<YourDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path='/donate' element={<Donate />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}> {/* ✅ Wrap here */}
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}

export default App;