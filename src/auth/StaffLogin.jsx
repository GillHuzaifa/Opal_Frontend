import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft, Lock } from 'lucide-react';

const StaffLogin = ({ onLoginSuccess, onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSuccess();
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 selection:bg-[#FFD700] selection:text-[#2D4356]">
      <div className="absolute top-6 left-6 cursor-pointer text-[#2D4356] flex items-center gap-2 hover:text-[#FFD700] transition-colors" onClick={onBack}>
        <ArrowLeft size={20} /> <span className="text-xs font-black uppercase tracking-widest">Back to Site</span>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white p-8 sm:p-10 rounded-[2rem] shadow-2xl shadow-[#2D4356]/5 border border-gray-100 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-[#2D4356]"></div>
        
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-[#2D4356] rounded-2xl flex items-center justify-center text-[#FFD700] shadow-lg">
            <Shield size={32} />
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-[#2D4356] tracking-tight mb-2">Staff Access</h2>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Internal Control Panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Work Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="staff@opal.com.pk" 
              className="w-full px-5 py-4 rounded-xl bg-[#F8FAFC] border-2 border-transparent focus:border-[#FFD700]/30 outline-none font-bold text-[#2D4356]" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              className="w-full px-5 py-4 rounded-xl bg-[#F8FAFC] border-2 border-transparent focus:border-[#FFD700]/30 outline-none font-bold text-[#2D4356]" 
            />
          </div>

          <button type="submit" className="w-full py-4 bg-[#2D4356] text-white rounded-xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 hover:bg-[#FFD700] hover:text-[#2D4356] transition-all shadow-xl shadow-[#2D4356]/10 mt-4">
            Authorize Login <Lock size={16} />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default StaffLogin;
