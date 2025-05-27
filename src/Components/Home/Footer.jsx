import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import footer from "../../assets/Footer.png";

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="bg-[#062265] text-white">
      {/* Subscription Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Follow us For further information</h2>
          <form onSubmit={handleSubscribe} className="max-w-xl mx-auto">
            <div className="flex bg-white rounded-full overflow-hidden w-110 ml-17 mt-10">
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow py-3 px-5 text-black focus:outline-none text-lg"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 transition-colors duration-300 text-white text-lg py-3 px-8"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4 ml-30">
              <img src={footer} alt="Nasarna Logo" className="w-47 h-13 mr-2" />
            </div>
            <p className="text-gray-300 mb-6 ml-30">
              Build and Earn with your online store with lots of cool and exclusive wpo-features
            </p>
            <div className="flex space-x-2 ml-30">
              <a
                href="#"
                className="w-10 h-10  flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10  flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10  flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10  flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
                aria-label="Google Plus"
              >
                <span className="text-xl font-bold">G+</span>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="md:pl-30">
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="hover:text-green-500 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/causes"
                  className="hover:text-green-500 transition-colors duration-300"
                >
                  Our Causes
                </a>
              </li>
              <li>
                <a
                  href="/causes"
                  className="hover:text-green-500 transition-colors duration-300"
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-green-500 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:pl-0">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-4">
              online store with lots of cool and exclusive wpo-features
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="shrink-0 mt-1" size={20} />
                <span>RudramIcon Ahemdabad, Gujarat</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="shrink-0" size={20} />
                <span>+00012345678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="shrink-0" size={20} />
                <span>nasarna@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6 bg-[#011B58]">
        <div className="container mx-auto px-4 text-center ">
          <p>© 2020 Nasarna. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;