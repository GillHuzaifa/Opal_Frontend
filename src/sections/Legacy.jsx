import React from 'react';
import { motion } from 'framer-motion';
import { History, ShieldCheck, Target, Users2 } from 'lucide-react';

const Legacy = () => {
  const milestones = [
    { year: "2000", event: "Founded by Mr. Muhammad Qaiser Izhar & Sheikh Faisal Izhar." },
    { year: "2008", event: "Opal ERP ecosystem reaches 50+ enterprise deployments." },
    { year: "2015", event: "Expansion into Cloud Infrastructure and Managed IT Services." },
    { year: "2025", event: "Celebrating 25 years as Pakistan's leading IT transformation partner." }
  ];

  return (
    <section id="legacy" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: The Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[#F8FAFC] border border-gray-100 px-4 py-1.5 rounded-full mb-8">
              <History size={16} className="text-[#FFD700]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2D4356]">Our Heritage</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-[#2D4356] tracking-tighter leading-[1.1] mb-6 sm:mb-8">
              A Legacy of <br />
              <span className="text-gray-300">Transformation.</span>
            </h2>

            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 font-medium">
              Since 2000, OPAL Technologies (IzharSoft) has been at the forefront of Pakistan's digital evolution. 
              Founded by real brothers <span className="text-[#2D4356] font-bold">Mr. Muhammad Qaiser Izhar</span> and 
              <span className="text-[#2D4356] font-bold"> Sheikh Faisal Izhar</span>, we have built a reputation 
              for delivering mature, high-scale enterprise ecosystems that stand the test of time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="p-6 bg-[#F8FAFC] rounded-3xl border border-gray-50">
                <Target className="text-[#FFD700] mb-4" />
                <h4 className="text-sm font-black text-[#2D4356] uppercase tracking-widest mb-2">Our Mission</h4>
                <p className="text-[11px] text-gray-400 font-bold leading-relaxed">Modernizing Pakistan's core industries through reliable IT architecture.</p>
              </div>
              <div className="p-6 bg-[#F8FAFC] rounded-3xl border border-gray-50">
                <Users2 className="text-[#FFD700] mb-4" />
                <h4 className="text-sm font-black text-[#2D4356] uppercase tracking-widest mb-2">Our People</h4>
                <p className="text-[11px] text-gray-400 font-bold leading-relaxed">A team of experts dedicated to 24/7 resident engineering and support.</p>
              </div>
            </div>
          </motion.div>

          {/* Right: The Timeline Visual */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-100 hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-0 md:pl-20 group"
                >
                  {/* Dot on the line */}
                  <div className="absolute left-[30px] top-2 w-4 h-4 rounded-full bg-white border-4 border-[#FFD700] hidden md:block z-10 group-hover:scale-125 transition-transform" />
                  
                  <div className="bg-[#F8FAFC] p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-[2.5rem] border border-gray-50 group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                    <span className="text-2xl sm:text-3xl font-black text-[#FFD700] mb-2 block">{m.year}</span>
                    <p className="text-sm font-bold text-[#2D4356] leading-relaxed">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Founders Accent Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="mt-8 sm:mt-12 md:ml-20 bg-[#2D4356] p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-[2.5rem] text-white flex items-center gap-4 sm:gap-6 shadow-2xl"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                <ShieldCheck className="text-[#FFD700]" size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFD700] mb-1">Founder Guarantee</p>
                <p className="text-sm font-medium leading-relaxed italic">"Our commitment to quality is personal. Every deployment is a reflection of our 25-year family name."</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Legacy;