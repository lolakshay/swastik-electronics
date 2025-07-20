import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Laptop className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ElectroStore</span>
            </div>
            <p className="text-gray-400">
              Bringing you the latest and greatest in electronics at unbeatable prices. 
              Your trusted partner for all things tech.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-blue-400 transition-colors duration-200">
                Home
              </Link>
              <Link to="/products" className="block hover:text-blue-400 transition-colors duration-200">
                Products
              </Link>
              <Link to="/about" className="block hover:text-blue-400 transition-colors duration-200">
                About Us
              </Link>
              <Link to="/contact" className="block hover:text-blue-400 transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Categories</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-blue-400 transition-colors duration-200">
                Soldering
              </a>
              <a href="#" className="block hover:text-blue-400 transition-colors duration-200">
                Sensors
              </a>
              <a href="#" className="block hover:text-blue-400 transition-colors duration-200">
                Development Boards
              </a>
              <a href="#" className="block hover:text-blue-400 transition-colors duration-200">
                Batteries
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>support@electrostore.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span>123 Tech Street, Digital City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Swastik Electronics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};