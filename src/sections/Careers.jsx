import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Rocket, Zap, Heart, MapPin, Briefcase, Clock, Send, Code, Terminal, Server } from 'lucide-react';

const Careers = ({ onBack }) => {
  const jobs = [
    {
      title: "Senior Full Stack Engineer",
      dept: "Engineering",
      location: "Lahore (HQ) / Hybrid",
      type: "Full-Time",
      icon: <Code size={24} />
    },
    {
      title: "DevOps & Infrastructure Specialist",
      dept: "Cloud & Ops",
      location: "Remote",
      type: "Full-Time",
      icon: <Server size={24} />
    },
    {
      title: "ERP Implementation Consultant",
      dept: "Client Success",
      location: "Lahore (HQ)",
      type: "Full-Time",
      icon: <Terminal size={24} />
    }
  ];

  const perks = [
    { icon: <Heart />, title: "Premium Healthcare", desc: "Comprehensive coverage for you and your family." },
    { icon: <Rocket />, title: "Continuous Growth", desc: "Generous learning budget for courses and conferences." },
    { icon: <Zap />, title: "Latest Tech Stack", desc: "Work with the best tools and top-tier equipment." },
    { icon: <Briefcase />, title: "Flexible Work", desc: "Hybrid and remote options designed for work-life harmony." }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-[#2D4356] hover:text-[#FFD700] transition-colors mb-12"
        >
          <ArrowLeft size={16} /> <span className="text-[10px] font-black uppercase tracking-widest">Back to Home</span>
        </button>

        {/* Hero Section */}
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#2D4356] tracking-tighter leading-[0.9] mb-6"
          >
            Build the Future <br />
            <span className="text-[#FFD700]">of Enterprise.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 font-medium max-w-2xl"
          >
            Join a mission-driven team dedicated to revolutionizing how businesses operate. 
            We are looking for passionate problem solvers to help us scale the next generation of ERP solutions.
          </motion.p>
        </div>

        {/* Perks Grid */}
        <div className="mb-32">
          <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8">Why Join Opal?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 bg-[#F8FAFC] text-[#2D4356] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FFD700] group-hover:text-[#2D4356] transition-colors">
                  {perk.icon}
                </div>
                <h4 className="text-sm font-black text-[#2D4356] uppercase tracking-widest mb-3">{perk.title}</h4>
                <p className="text-xs font-bold text-gray-400 leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div>
          <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8">Open Positions</h3>
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className="hidden sm:flex w-16 h-16 bg-[#2D4356] text-[#FFD700] rounded-2xl items-center justify-center shrink-0 shadow-lg">
                    {job.icon}
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black text-[#2D4356] tracking-tight mb-3">{job.title}</h4>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#2D4356] bg-[#F8FAFC] px-3 py-1.5 rounded-lg">
                        <Briefcase size={12} /> {job.dept}
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg">
                        <MapPin size={12} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg">
                        <Clock size={12} /> {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <a 
                  href={`mailto:careers@opal.com.pk?subject=Application for ${job.title}`}
                  className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-[#2D4356] text-white px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-[#FFD700] hover:text-[#2D4356] transition-all shadow-lg active:scale-95 shrink-0"
                >
                  Apply Now <Send size={14} />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-[#2D4356] rounded-[2rem] text-center border border-white/10 shadow-2xl">
            <h4 className="text-lg font-black text-white mb-2">Don't see a fit?</h4>
            <p className="text-sm font-bold text-gray-400 mb-6">We're always looking for exceptional talent. Send us your resume.</p>
            <a 
              href="mailto:careers@opal.com.pk?subject=General Application"
              className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#2D4356] px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg active:scale-95"
            >
              Submit General Application <Send size={14} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Careers;
