import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Megaphone, ArrowRight, BellRing } from 'lucide-react';

const AnnouncementModal = () => {
  const [isVisible, setIsVisible] = useState(false);

// Replace the old useEffect with this one:
useEffect(() => {
  // We removed the localStorage check so it triggers every refresh
  const timer = setTimeout(() => setIsVisible(true), 1500);
  return () => clearTimeout(timer);
}, []);

// And update the close function to NOT save to storage:
const closePortal = () => {
  setIsVisible(false);
  // localStorage.setItem('opal_announcement_seen', 'true'); // Comment this out
};

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          {/* Backdrop Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePortal}
            className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white rounded-[3.5rem] p-10 md:p-14 max-w-2xl w-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] overflow-hidden"
          >
            {/* Design Element */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFD700] rounded-bl-[6rem] opacity-5 pointer-events-none" />
            
            <button 
              onClick={closePortal} 
              className="absolute top-10 right-10 text-gray-300 hover:text-[#2D4356] transition-colors p-2 hover:bg-gray-50 rounded-full"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#F8FAFC] border border-gray-100 rounded-[2rem] flex items-center justify-center text-[#FFD700] mb-10 shadow-sm relative">
                <Megaphone size={32} />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#FFD700]"></span>
                </span>
              </div>
              
              <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 px-4 py-1 rounded-full mb-6">
                <BellRing size={12} className="text-[#FFD700]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2D4356]">Corporate Update</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-[#2D4356] tracking-tighter leading-[1.1] mb-6">
                Legacy Meets <br />
                <span className="text-gray-300 italic">Cloud Intelligence.</span>
              </h2>

              <p className="text-gray-500 font-medium mb-12 leading-relaxed max-w-md text-sm md:text-base">
                Opal V8.2 is now deploying globally. Our most powerful ERP kernel ever, featuring real-time AI resource forecasting and native mobile support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <button 
                  onClick={closePortal}
                  className="flex-[2] bg-[#2D4356] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-[#FFD700] hover:text-[#2D4356] transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#2D4356]/20"
                >
                  Explore Update <ArrowRight size={16} />
                </button>
                <button 
                  onClick={closePortal} 
                  className="flex-1 border border-gray-200 text-gray-400 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-gray-50 transition-all hover:text-gray-600"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementModal;