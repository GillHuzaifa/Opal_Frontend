import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
      title: "Next-Gen Enterprise Architecture",
      subtitle: "Powering the Industry for over 25 Years with Opal ERP."
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000",
      title: "Intelligent Supply Chain",
      subtitle: "Opal WMS: Precision logistics for the modern global market."
    },
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000",
      title: "Industrial Automation",
      subtitle: "Real-time control systems for Textile, FMCG, and beyond."
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
      title: "Data-Driven Leadership",
      subtitle: "Actionable insights through Opal BI and Analytics."
    },
    {
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000",
      title: "Expert Human Capital",
      subtitle: "Managed by Opal HRPro: The backbone of your workforce."
    }
  ];

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); // Changes every 6 seconds
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0F172A]">
      {/* BACKGROUND SLIDES */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/40 to-transparent z-10" />
          <img 
            src={slides[currentIndex].image} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT LAYER */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center">
        <motion.div
          key={`content-${currentIndex}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[#FFD700]" />
            <span className="text-[#FFD700] text-xs font-black uppercase tracking-[0.5em]">Global Standards</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-6 sm:mb-8">
            {slides[currentIndex].title.split(' ').slice(0, -1).join(' ')} <br />
            <span className="text-[#FFD700]">{slides[currentIndex].title.split(' ').pop()}</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl font-medium max-w-lg sm:max-w-xl mb-8 sm:mb-12 leading-relaxed">
            {slides[currentIndex].subtitle}
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button className="bg-[#FFD700] text-[#0F172A] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-xs sm:text-sm flex items-center gap-2 sm:gap-3 hover:bg-white transition-all group">
              Explore Ecosystem <ArrowRight size={14} className="sm:size-16 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* MANUAL NAVIGATION ARROWS */}
      <div className="absolute inset-0 z-30 flex items-center justify-between px-4 sm:px-6 pointer-events-none">
        <button 
          onClick={handlePrev}
          className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-black/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-[#0F172A] transition-all pointer-events-auto"
        >
          <ChevronLeft size={18} className="sm:size-24" />
        </button>
        <button 
          onClick={handleNext}
          className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-black/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-[#0F172A] transition-all pointer-events-auto"
        >
          <ChevronRight size={18} className="sm:size-24" />
        </button>
      </div>

      {/* SLIDE INDICATORS (DOTS) */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`transition-all duration-500 rounded-full ${
              currentIndex === i ? 'w-8 h-2 sm:w-12 bg-[#FFD700]' : 'w-2 h-2 bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;