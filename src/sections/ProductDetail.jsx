import React, { useState } from 'react';
import { CheckCircle2, Cpu, Globe, Shield, Zap, ArrowLeft, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetail = ({ product, onBack }) => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', phone: '', email: '', message: '' });

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    const subject = `Technical Demo Request for ${product.name}`;
    const body = `Name: ${formData.name}%0D%0ACompany: ${formData.company}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = `mailto:opalpakistan@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    setShowDemoForm(false);
  };
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#2D4356] mb-12 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Ecosystem
        </button>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#FFD700]" />
              <span className="text-[#FFD700] text-xs font-black uppercase tracking-[0.4em]">{product.category}</span>
            </div>
            <h1 className="text-6xl font-black text-[#2D4356] tracking-tighter mb-8 leading-none">
              {product.name}
            </h1>
            <p className="text-xl text-gray-500 font-medium mb-12 leading-relaxed">
              {product.longDesc}
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {product.features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="text-[#FFD700] shrink-0" size={20} />
                  <p className="text-sm font-bold text-[#2D4356] uppercase tracking-tight">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Specs Card */}
          <div className="bg-[#2D4356] rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-8 italic">Technical Specifications</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                  <Cpu className="text-[#FFD700]" />
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-400">Deployment</p>
                    <p className="text-sm font-bold">On-Premise / Hybrid Cloud</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                  <Globe className="text-[#FFD700]" />
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-400">Integration</p>
                    <p className="text-sm font-bold">Full API & SAP/Oracle Bridge</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Shield className="text-[#FFD700]" />
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-400">Security</p>
                    <p className="text-sm font-bold">ISO 27001 Certified Standards</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setShowDemoForm(true)}
                className="w-full mt-12 bg-[#FFD700] text-[#2D4356] py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all"
              >
                Request Technical Demo
              </button>
            </div>
            {/* Decorative Icon */}
            <Zap size={200} className="absolute -bottom-10 -right-10 text-white/[0.03] rotate-12" />
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <AnimatePresence>
        {showDemoForm && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#2D4356]/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[2rem] w-full max-w-lg overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setShowDemoForm(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-[#2D4356] transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="p-8 sm:p-10">
                <h3 className="text-2xl font-black text-[#2D4356] tracking-tight mb-2">Request Demo</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">{product.name}</p>
                
                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Name</label>
                      <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border-2 border-transparent focus:border-[#FFD700]/30 outline-none font-bold text-[#2D4356]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Company</label>
                      <input required type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border-2 border-transparent focus:border-[#FFD700]/30 outline-none font-bold text-[#2D4356]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Phone</label>
                      <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border-2 border-transparent focus:border-[#FFD700]/30 outline-none font-bold text-[#2D4356]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Email</label>
                      <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border-2 border-transparent focus:border-[#FFD700]/30 outline-none font-bold text-[#2D4356]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Message (Optional)</label>
                    <textarea rows="3" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border-2 border-transparent focus:border-[#FFD700]/30 outline-none font-bold text-[#2D4356] resize-none"></textarea>
                  </div>
                  
                  <button type="submit" className="w-full mt-4 bg-[#2D4356] text-white py-4 rounded-xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 hover:bg-[#FFD700] hover:text-[#2D4356] transition-all">
                    Submit Request <Send size={14} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ProductDetail;