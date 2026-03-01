import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, ShieldCheck, Code2, Network, UserCog } from 'lucide-react';

const Team = () => {
  const departments = [
    { name: "Executive Leadership", icon: <ShieldCheck size={16} /> },
    { name: "ERP Development", icon: <Code2 size={16} /> },
    { name: "Network Infrastructure", icon: <Network size={16} /> },
    { name: "Client Success", icon: <UserCog size={16} /> },
  ];

  const leaders = [
    {
      name: "M. Qaiser Izhar",
      role: "Founder & CEO",
      desc: "25+ years of expertise in industrial automation and enterprise architecture.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400", // Placeholder
    },
    {
      name: "Sheikh Faisal Izhar",
      role: "Co-Founder & Director",
      desc: "Specializing in hardware infrastructure and large-scale networking solutions.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400", // Placeholder
    }
  ];

  return (
    <section id="team" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-16 lg:mb-20 gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-2 bg-[#F8FAFC] border border-gray-100 px-4 py-1.5 rounded-full mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2D4356]">Human Capital</span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-[#2D4356] tracking-tighter leading-[1.1]">
              The Experts Behind <br />
              <span className="text-gray-300">The Ecosystem.</span>
            </h2>
          </div>
        </div>

        {/* Departments Quick Bar */}
        <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 mb-12 sm:mb-16">
          {departments.map((dept, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-3 bg-[#F8FAFC] border border-gray-100 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl">
              <span className="text-[#FFD700]">{dept.icon}</span>
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#2D4356]">{dept.name}</span>
            </div>
          ))}
        </div>

        {/* Leadership Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {leaders.map((person, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative bg-[#F8FAFC] rounded-2xl lg:rounded-[3.5rem] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-10 border border-gray-50 overflow-hidden"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 shrink-0 rounded-2xl lg:rounded-[2.5rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 shadow-2xl">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="relative z-10">
                <p className="text-[#FFD700] text-[10px] font-black uppercase tracking-[0.3em] mb-2">{person.role}</p>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#2D4356] mb-3 sm:mb-4 tracking-tight">{person.name}</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed mb-4 sm:mb-6">
                  {person.desc}
                </p>
                <div className="flex gap-4">
                  <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#2D4356] hover:bg-[#2D4356] hover:text-white transition-all">
                    <Linkedin size={18} />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#2D4356] hover:bg-[#2D4356] hover:text-white transition-all">
                    <Mail size={18} />
                  </button>
                </div>
              </div>

              {/* Decorative Background Accent */}
              <div className="absolute -bottom-10 -right-10 text-[10rem] font-black text-[#2D4356]/[0.02] select-none pointer-events-none">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 p-6 sm:p-8 lg:p-12 bg-[#2D4356] rounded-2xl lg:rounded-[3rem] text-center">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2 uppercase tracking-widest">Join the Engineering Elite</h3>
          <p className="text-gray-400 text-sm max-w-lg sm:max-w-xl mx-auto mb-6 sm:mb-8 font-medium">We are always looking for senior ERP developers and infrastructure specialists to join our 25-year mission.</p>
          <button className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFD700] border-b-2 border-[#FFD700] pb-1 hover:text-white hover:border-white transition-all">
            View Career Openings
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;