import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed with email:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-[#F7F9FC] text-[#4B4B4B] py-12 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-gray-200">
          {/* Brand Area */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-2">BrainBoard</h2>
            <p className="max-w-xs">Smart companion for every student.</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-bold text-[#1C1C1C] mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#4A90E2] transition-colors">Home</a></li>
              <li><a href="/features" className="hover:text-[#4A90E2] transition-colors">Features</a></li>
              <li><a href="/how-it-works" className="hover:text-[#4A90E2] transition-colors">How It Works</a></li>
              <li><a href="/pricing" className="hover:text-[#4A90E2] transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#1C1C1C] mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-[#4A90E2] transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-[#4A90E2] transition-colors">Contact</a></li>
              <li><a href="/blog" className="hover:text-[#4A90E2] transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#1C1C1C] mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="hover:text-[#4A90E2] transition-colors">FAQ</a></li>
              <li><a href="/help" className="hover:text-[#4A90E2] transition-colors">Help Center</a></li>
              <li><a href="/legal" className="hover:text-[#4A90E2] transition-colors">Terms & Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Middle Section */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Newsletter Subscription */}
          <div className="flex-1 max-w-md">
            <h3 className="font-bold text-[#1C1C1C] mb-2">Stay updated with BrainBoard</h3>
            <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
              />
              <button
                type="submit"
                className="bg-[#F5A623] text-white px-4 py-2 rounded-lg hover:bg-[#e0951a] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a 
              href="#" 
              className="text-[#50E3C2] hover:text-[#4A90E2] transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="#" 
              className="text-[#50E3C2] hover:text-[#4A90E2] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="#" 
              className="text-[#50E3C2] hover:text-[#4A90E2] transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-200">
          <p className="text-sm text-gray-500">© 2025 BrainBoard. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/terms" className="text-sm text-gray-500 hover:text-[#4A90E2] transition-colors">
              Terms of Service
            </a>
            <a href="/privacy" className="text-sm text-gray-500 hover:text-[#4A90E2] transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;