import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ArrowLeft, UserPlus, LogIn } from 'lucide-react';

const ClientAuth = ({ onAuthSuccess, onBack }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuthSuccess();
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 selection:bg-[#FFD700] selection:text-[#2D4356]">
      <div className="absolute top-6 left-6 cursor-pointer text-[#2D4356] flex items-center gap-2 hover:text-[#FFD700] transition-colors" onClick={onBack}>
        <ArrowLeft size={20} /> <span className="text-xs font-black uppercase tracking-widest">Back to Site</span>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white p-8 sm:p-10 rounded-[2rem] shadow-2xl shadow-[#2D4356]/5 border border-gray-100 relative overflow-hidden"
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#F8FAFC] border border-gray-100 rounded-2xl flex items-center justify-center text-[#2D4356] shadow-sm">
            <Lock size={32} />
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-[#2D4356] tracking-tight mb-2">Client Portal</h2>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            {isLogin ? 'Welcome back' : 'Create an account'}
          </p>
        </div>

        {/* Toggle */}
        <div className="flex p-1 bg-[#F8FAFC] rounded-xl mb-8">
          <button 
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${isLogin ? 'bg-white text-[#2D4356] shadow-sm' : 'text-gray-400 hover:text-[#2D4356]'}`}
          >
            Login
          </button>
          <button 
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${!isLogin ? 'bg-white text-[#2D4356] shadow-sm' : 'text-gray-400 hover:text-[#2D4356]'}`}
          >
            Sign Up
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.form 
            key={isLogin ? 'login' : 'signup'}
            initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit} 
            className="space-y-4"
          >
            {!isLogin && (
              <>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                  <input type="text" required placeholder="John Doe" className="w-full px-5 py-4 rounded-xl bg-[#F8FAFC] border-2 border-transparent focus:border-[#FFD700]/30 outline-none font-bold text-[#2D4356]" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Company Name</label>
                  <input type="text" required placeholder="Acme Corp" className="w-full px-5 py-4 rounded-xl bg-[#F8FAFC] border-2 border-transparent focus:border-[#FFD700]/30 outline-none font-bold text-[#2D4356]" />
                </div>
              </>
            )}

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
              <input type="email" required placeholder="client@example.com" className="w-full px-5 py-4 rounded-xl bg-[#F8FAFC] border-2 border-transparent focus:border-[#FFD700]/30 outline-none font-bold text-[#2D4356]" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Password</label>
              <input type="password" required placeholder="••••••••" className="w-full px-5 py-4 rounded-xl bg-[#F8FAFC] border-2 border-transparent focus:border-[#FFD700]/30 outline-none font-bold text-[#2D4356]" />
            </div>

            <button type="submit" className="w-full py-4 bg-[#2D4356] text-white rounded-xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 hover:bg-[#FFD700] hover:text-[#2D4356] transition-all shadow-xl shadow-[#2D4356]/10 mt-6">
              {isLogin ? 'Access Portal' : 'Create Account'} {isLogin ? <LogIn size={16} /> : <UserPlus size={16} />}
            </button>
          </motion.form>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ClientAuth;
