import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#2D4356] text-white py-20 overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          
          <div className="md:col-span-1">
            <div className="text-3xl font-black mb-6">OPAL<span className="text-[#FFD700]">.</span></div>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Leading the digital frontier in Pakistan with expert ERP, AI integrations, and networking infrastructure.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFD700] mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              {['About', 'Services', 'Portfolio', 'Careers'].map(item => (
                <li key={item}><a href="#" className="hover:text-[#FFD700] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFD700] mb-8">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              {['ERP Systems', 'Networking', 'Agentic AI', 'Web Dev'].map(item => (
                <li key={item}><a href="#" className="hover:text-[#FFD700] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFD700] mb-8">Newsletter</h4>
            <p className="text-xs text-gray-400 mb-6">Subscribe for the latest tech updates.</p>
            <div className="flex gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/10">
              <input type="text" placeholder="Email" className="bg-transparent border-none outline-none px-4 text-sm w-full" />
              <button className="bg-[#FFD700] text-black p-2.5 rounded-xl hover:scale-105 transition-transform">
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.div>
              </button>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-gray-500">
          <p>© 2026 Opal Pakistan Redesign by Huzaifa</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;