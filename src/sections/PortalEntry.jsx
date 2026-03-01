import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, ArrowRight, Globe, Zap } from 'lucide-react';

const PortalEntry = ({ onPortalClick, onAdminClick }) => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl border-x border-gray-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#F8FAFC] border border-gray-100 px-4 py-1.5 rounded-full mb-6"
          >
            <Zap size={12} className="text-[#FFD700]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2D4356]">Ecosystem Gateways</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-[#2D4356] tracking-tighter leading-none">
            Secure Access <br />
            <span className="text-gray-300 italic text-4xl md:text-6xl">For Every Stakeholder.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* CLIENT PORTAL CARD */}
          <motion.div 
            whileHover={{ y: -10 }}
            onClick={onPortalClick}
            className="group relative bg-[#2D4356] rounded-[4rem] p-12 text-white cursor-pointer overflow-hidden shadow-2xl shadow-[#2D4356]/20 transition-all"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-[1.5rem] flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#FFD700] group-hover:text-[#2D4356] transition-colors">
                <Lock size={28} />
              </div>
              <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter leading-none">
                Client <br />Ecosystem
              </h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed mb-10 max-w-[280px]">
                Real-time ticket tracking, asset management, and direct RFQ generation for our valued partners.
              </p>
              <div className="flex items-center gap-3 text-[#FFD700] text-[10px] font-black uppercase tracking-[0.3em]">
                Enter Secure Portal <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
            {/* Background Decorative Icon */}
            <Globe size={240} className="absolute -bottom-10 -right-10 text-white/[0.03] rotate-12" />
          </motion.div>

          {/* ADMIN/STAFF CARD */}
          <motion.div 
            whileHover={{ y: -10 }}
            onClick={onAdminClick}
            className="group relative bg-white rounded-[4rem] p-12 text-[#2D4356] cursor-pointer overflow-hidden border-2 border-[#2D4356]/5 hover:border-[#2D4356]/20 transition-all shadow-xl shadow-gray-100"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#2D4356]/5 rounded-[1.5rem] flex items-center justify-center mb-8 border border-[#2D4356]/5 group-hover:bg-[#2D4356] group-hover:text-white transition-colors">
                <Shield size={28} />
              </div>
              <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter leading-none">
                Staff <br />Command
              </h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed mb-10 max-w-[280px]">
                Internal engine for SLA monitoring, engineer assignments, and global system configurations.
              </p>
              <div className="flex items-center gap-3 text-[#2D4356] text-[10px] font-black uppercase tracking-[0.3em]">
                Internal Staff Login <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
            {/* Background Decorative Icon */}
            <Shield size={240} className="absolute -bottom-10 -right-10 text-[#2D4356]/[0.02] -rotate-12" />
          </motion.div>

        </div>

        {/* System Trust Badge */}
        <div className="mt-20 flex flex-col items-center">
          <div className="flex items-center gap-6 opacity-30 grayscale contrast-125 mb-4">
            <div className="h-[1px] w-20 bg-gray-400" />
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-gray-500 whitespace-nowrap">ISO 27001 Certified Infrastructure</span>
            <div className="h-[1px] w-20 bg-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalEntry;