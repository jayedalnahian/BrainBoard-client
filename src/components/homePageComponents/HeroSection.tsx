import React from 'react';
import { motion } from 'framer-motion';
import { FaTasks, FaCalendarAlt, FaChartPie } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  // Animation variants for the floating cards
  const cardVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Background blob animation variants
  const blobVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section className=" bg-[#F7F9FC] overflow-hidden relative">
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] opacity-20 rounded-full blur-3xl"
        variants={blobVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#50E3C2] to-[#4A90E2] opacity-15 rounded-full blur-3xl"
        variants={blobVariants}
        animate="animate"
      />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight mb-6">
              Organize Your Student Life Smarter
            </h1>
            <p className="text-lg md:text-xl text-[#4B4B4B] mb-8 max-w-lg mx-auto lg:mx-0">
              All-in-one platform for tasks, expenses, notes, and study planning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #4A90E2, #50E3C2)' }}
              >
                Get Started Free
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#4A90E2] text-[#4A90E2] rounded-full font-semibold hover:bg-[#4A90E2] hover:text-white transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Task List Card */}
            <motion.div
              variants={cardVariants}
              animate="animate"
              className="absolute top-0 left-10 md:left-20 w-64 bg-white p-6 rounded-2xl shadow-xl z-30"
              style={{ transformOrigin: 'center' }}
            >
              <div className="flex items-center mb-4">
                <FaTasks className="text-[#4A90E2] mr-2" />
                <h3 className="font-semibold text-[#1C1C1C]">Tasks</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-4 h-4 border border-[#4A90E2] rounded mr-2"></div>
                  <span className="text-sm">Complete math homework</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 border border-[#4A90E2] rounded mr-2"></div>
                  <span className="text-sm">Study for physics test</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 border border-gray-300 rounded mr-2"></div>
                  <span className="text-sm text-gray-400">Write essay</span>
                </div>
              </div>
            </motion.div>

            {/* Calendar Preview Card */}
            <motion.div
              variants={cardVariants}
              animate="animate"
              className="absolute top-32 right-10 md:right-20 w-56 bg-white p-6 rounded-2xl shadow-xl z-20"
              style={{ transformOrigin: 'center', animationDelay: '2s' }}
            >
              <div className="flex items-center mb-4">
                <FaCalendarAlt className="text-[#F5A623] mr-2" />
                <h3 className="font-semibold text-[#1C1C1C]">Calendar</h3>
              </div>
              <div className="grid grid-cols-7 gap-1 text-xs">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                  <div key={index} className="text-center text-gray-500">{day}</div>
                ))}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <div
                    key={day}
                    className={`text-center p-1 rounded-full ${
                      day === 15 ? 'bg-[#4A90E2] text-white' : 'text-gray-700'
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Expense Chart Card */}
            <motion.div
              variants={cardVariants}
              animate="animate"
              className="absolute top-64 left-20 md:left-32 w-60 bg-white p-6 rounded-2xl shadow-xl z-10"
              style={{ transformOrigin: 'center', animationDelay: '4s' }}
            >
              <div className="flex items-center mb-4">
                <FaChartPie className="text-[#50E3C2] mr-2" />
                <h3 className="font-semibold text-[#1C1C1C]">Expenses</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Food</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-[#4A90E2] h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Books</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-[#50E3C2] h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Transport</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-[#F5A623] h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Container for relative positioning */}
            <div className="w-80 h-96 opacity-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;