import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Navigation links data
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#F7F9FC] shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="text-2xl font-bold text-[#1C1C1C]"
            onClick={handleLinkClick}
          >
            BrainBoard
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-[#1C1C1C] hover:text-[#4A90E2] transition-colors ${
                    isActive ? 'text-[#50E3C2] underline' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/login"
              className="text-[#1C1C1C] hover:text-[#4A90E2] transition-colors"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className="px-5 py-2 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] text-white rounded-full font-medium hover:shadow-lg transition-all"
            >
              Sign Up
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1C1C1C] text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#F7F9FC] rounded-lg mt-4 overflow-hidden shadow-lg"
            >
              <div className="flex flex-col space-y-4 py-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-2 text-[#1C1C1C] hover:text-[#4A90E2] transition-colors ${
                        isActive ? 'text-[#50E3C2] underline bg-blue-50' : ''
                      }`
                    }
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <NavLink
                    to="/login"
                    className="block px-4 py-2 text-[#1C1C1C] hover:text-[#4A90E2] transition-colors"
                    onClick={handleLinkClick}
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="block mx-4 mt-2 px-5 py-2 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] text-white rounded-full font-medium text-center hover:shadow-lg transition-all"
                    onClick={handleLinkClick}
                  >
                    Sign Up
                  </NavLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;