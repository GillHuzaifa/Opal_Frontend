import React from 'react';
import { ArrowLeft, BellRing, Sparkles, Smartphone, BarChart3, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const Updates = ({ onBack }) => {
  const updates = [
    {
      version: "V8.2",
      date: "August 2026",
      title: "Legacy Meets Cloud Intelligence",
      tag: "Major Release",
      desc: "Our most powerful ERP kernel ever, featuring real-time AI resource forecasting and native mobile support. This release fundamentally upgrades the underlying engine of Opal ERP to support unprecedented scale.",
      features: [
        { icon: <Sparkles size={16} />, text: "AI Resource Forecasting Module" },
        { icon: <Smartphone size={16} />, text: "Native iOS and Android Support" },
        { icon: <BarChart3 size={16} />, text: "Advanced Drill-Down Analytics Dashboard" },
        { icon: <Cloud size={16} />, text: "Hybrid-Cloud Synchronization" }
      ]
    },
    {
      version: "V8.1.5",
      date: "July 2026",
      title: "Enhanced Security & Compliance",
      tag: "Security Patch",
      desc: "Comprehensive upgrade to our encryption protocols and compliance reporting tools to meet the latest ISO 27001 standards.",
      features: [
        { icon: <Cloud size={16} />, text: "End-to-End Database Encryption" },
        { icon: <Sparkles size={16} />, text: "Automated Audit Trails" }
      ]
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-[#2D4356] hover:text-[#FFD700] transition-colors mb-12"
        >
          <ArrowLeft size={16} /> <span className="text-[10px] font-black uppercase tracking-widest">Back to Home</span>
        </button>

        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 bg-[#FFD700]/10 px-4 py-1.5 rounded-full mb-6"
          >
            <BellRing size={12} className="text-[#FFD700]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2D4356]">System Updates</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-black text-[#2D4356] tracking-tighter leading-none mb-6"
          >
            What's New <br />
            <span className="text-gray-300 italic">in Opal.</span>
          </motion.h1>
        </div>

        <div className="space-y-12">
          {updates.map((update, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-6">
                <div>
                  <h3 className="text-2xl font-black text-[#2D4356] tracking-tight">{update.title}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs font-bold text-[#FFD700] bg-[#FFD700]/10 px-3 py-1 rounded-lg">
                      {update.version}
                    </span>
                    <span className="text-xs font-bold text-gray-400">
                      {update.date}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D4356] bg-[#F8FAFC] px-4 py-2 rounded-full self-start sm:self-auto">
                  {update.tag}
                </span>
              </div>
              
              <p className="text-gray-500 font-medium leading-relaxed mb-8">
                {update.desc}
              </p>

              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Key Highlights</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {update.features.map((feat, j) => (
                    <div key={j} className="flex items-center gap-3 bg-[#F8FAFC] p-4 rounded-xl">
                      <div className="text-[#FFD700]">{feat.icon}</div>
                      <span className="text-sm font-bold text-[#2D4356]">{feat.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Updates;
