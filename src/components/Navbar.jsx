import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Shield, Globe, Lock, ArrowRight } from 'lucide-react';

const Navbar = ({ onPortalClick, onAdminClick, onProductSelect, onHomeClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  // Scroll Listener for Glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productLinks = [
    { id: 'erp', name: 'Opal ERP', desc: 'Core Enterprise Resource Planning' },
    { id: 'hrpro', name: 'Opal HRPro', desc: 'Advanced Human Capital Mgmt' },
    { id: 'wms', name: 'Opal WMS', desc: 'Warehouse & Logistics Control' },
    { id: 'herdpro', name: 'Opal HerdPro', desc: 'Livestock & Dairy ERP' },
  ];

  const navLinks = [
    { name: 'Legacy', href: '#legacy' },
    { name: 'Industries', href: '#industries' },
    { name: 'Team', href: '#team' },
    { name: 'Support', href: '#contact' },
  ];

  const handleScrollLink = (e, href) => {
    e.preventDefault();
    onHomeClick(); // Reset to main view if we are on a product page
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={onHomeClick}
        >
          <div className="w-10 h-10 bg-[#2D4356] rounded-xl flex items-center justify-center text-[#FFD700] shadow-lg group-hover:bg-[#FFD700] group-hover:text-[#2D4356] transition-colors">
            <Shield size={22} fill="currentColor" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-[#2D4356] tracking-tighter leading-none uppercase">OPAL</span>
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-400 leading-none mt-1">IzharSoft Legacy</span>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          
          {/* DYNAMIC PRODUCTS DROPDOWN */}
          <div 
            className="relative" 
            onMouseEnter={() => setShowProducts(true)} 
            onMouseLeave={() => setShowProducts(false)}
          >
            <button className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-[#2D4356] hover:text-[#FFD700] transition-colors">
              Products <ChevronDown size={14} className={`transition-transform duration-300 ${showProducts ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {showProducts && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full -left-10 mt-2 w-[320px] bg-white border border-gray-100 shadow-2xl rounded-[2.5rem] p-4 overflow-hidden"
                >
                  <div className="space-y-1">
                    {productLinks.map((prod) => (
                      <button 
                        key={prod.id} 
                        onClick={() => { onProductSelect(prod.id); setShowProducts(false); }}
                        className="w-full text-left block p-4 rounded-2xl hover:bg-gray-50 transition-all group/item"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[10px] font-black text-[#2D4356] group-hover/item:text-[#FFD700] transition-colors uppercase tracking-widest">
                              {prod.name}
                            </p>
                            <p className="text-[9px] text-gray-400 font-bold mt-0.5 group-hover/item:text-gray-500">
                              {prod.desc}
                            </p>
                          </div>
                          <ArrowRight size={14} className="text-[#FFD700] opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScrollLink(e, link.href)}
              className="text-[11px] font-black uppercase tracking-widest text-[#2D4356] hover:text-[#FFD700] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA AREA - DUAL ACCESS */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4">
          <button 
            onClick={onAdminClick}
            className="flex items-center gap-2 border-2 border-[#2D4356]/10 text-[#2D4356] px-3 xl:px-5 py-3 rounded-xl text-[9px] xl:text-[10px] font-black uppercase tracking-widest hover:bg-[#2D4356] hover:text-white transition-all active:scale-95"
          >
            <Shield size={12} /> Staff Access
          </button>

          <button 
            onClick={onPortalClick}
            className="flex items-center gap-2 bg-[#2D4356] text-white px-4 xl:px-6 py-3 rounded-xl text-[9px] xl:text-[10px] font-black uppercase tracking-widest hover:bg-[#FFD700] hover:text-[#2D4356] transition-all shadow-xl shadow-[#2D4356]/10 border border-transparent active:scale-95"
          >
            <Lock size={12} /> Client Portal
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="lg:hidden text-[#2D4356] p-1" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 sm:px-6 py-8 sm:py-10 space-y-4 sm:space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleScrollLink(e, link.href)}
                  className="block text-lg sm:text-xl font-black text-[#2D4356] uppercase tracking-tighter"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-gray-50" />
              <div className="space-y-4">
                <button onClick={onAdminClick} className="w-full border-2 border-[#2D4356] py-3 sm:py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] sm:text-xs">
                  Staff Login
                </button>
                <button onClick={onPortalClick} className="w-full bg-[#2D4356] text-white py-3 sm:py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] sm:text-xs shadow-lg">
                  Client Portal
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;