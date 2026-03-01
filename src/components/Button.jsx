import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "relative overflow-hidden font-black text-xs uppercase tracking-widest rounded-2xl transition-all duration-300";
  
  const variants = {
    primary: "bg-[#FFD700] text-black hover:bg-[#2D4356] hover:text-white",
    outline: "border-2 border-[#2D4356] text-[#2D4356] hover:bg-[#2D4356] hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 px-8 py-4 block">
        {children}
      </span>
    </motion.button>
  );
};

export default Button;