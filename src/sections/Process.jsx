import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { title: "Discovery", desc: "We dive deep into your business logic and technical needs." },
  { title: "Strategic Design", desc: "Drafting the architecture for ERP or Networking hubs." },
  { title: "Precision Build", desc: "Development of AI agents and scalable web layers." },
  { title: "Optimization", desc: "Rigorous testing and seamless deployment." }
];

const Process = () => {
  return (
    <section id="process" className="py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center bg-white border border-gray-200 px-5 py-2 rounded-xl mb-6 shadow-sm"
          >
            <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-3" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2D4356]">Operational Workflow</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-[#2D4356] tracking-tighter">How We Deliver.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-0" />

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 relative group z-10"
            >
              <span className="absolute -top-10 -left-2 text-[10rem] font-black text-[#F1F5F9] select-none pointer-events-none -z-10">
                0{i + 1}
              </span>

              <div className="w-12 h-12 bg-[#2D4356] text-white rounded-2xl flex items-center justify-center font-black text-sm mb-8 transition-colors duration-500 group-hover:bg-[#FFD700] group-hover:text-[#2D4356]">
                {i + 1}
              </div>

              <h3 className="text-xl font-black text-[#2D4356] mb-4 tracking-tight">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;