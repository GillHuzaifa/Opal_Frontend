import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Book, FileText, PlayCircle, 
  HelpCircle, ChevronRight, ArrowUpRight 
} from 'lucide-react';

const KnowledgeBase = () => {
  const categories = [
    { title: "Opal ERP Core", icon: <Book className="text-blue-500" />, articles: 24, desc: "Finance, Ledger, and Supply Chain manuals." },
    { title: "HRPro & Payroll", icon: <FileText className="text-orange-500" />, articles: 18, desc: "Payroll cycles, Biometric setup, and Tax rules." },
    { title: "Technical Support", icon: <HelpCircle className="text-green-500" />, articles: 12, desc: "Server connectivity and hardware troubleshooting." },
    { title: "Video Tutorials", icon: <PlayCircle className="text-purple-500" />, articles: 15, desc: "Visual walkthroughs of the ERP ecosystem." },
  ];

  const popularArticles = [
    "How to generate Monthly Sales Tax Reports",
    "Setting up new users in Opal ERP",
    "Troubleshooting WMS Scanner connectivity",
    "Integrating HRPro with ZKTeco devices",
  ];

  return (
    <div className="space-y-12">
      {/* Search Header */}
      <div className="bg-[#2D4356] rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6">
            How can we <span className="text-[#FFD700]">help you?</span>
          </h1>
          <div className="relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#FFD700] transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search for manuals, guides, or error codes..." 
              className="w-full bg-white/10 border border-white/20 text-white rounded-2xl py-5 pl-16 pr-6 outline-none focus:bg-white focus:text-[#2D4356] transition-all font-bold text-sm"
            />
          </div>
        </div>
        {/* Decorative Background Icon */}
        <Book className="absolute -bottom-10 -right-10 text-white/[0.03] w-64 h-64 pointer-events-none" />
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className="w-14 h-14 bg-[#F8FAFC] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FFD700]/10 transition-colors">
              {cat.icon}
            </div>
            <h3 className="text-lg font-black text-[#2D4356] mb-2">{cat.title}</h3>
            <p className="text-xs text-gray-400 font-medium mb-6 leading-relaxed">{cat.desc}</p>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#FFD700]">{cat.articles} Articles</span>
          </motion.div>
        ))}
      </div>

      {/* Articles & CTA Split */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-black text-[#2D4356] tracking-tight">Popular Guides</h3>
          <div className="grid gap-3">
            {popularArticles.map((article, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-white border border-gray-50 rounded-2xl hover:border-[#FFD700]/30 cursor-pointer group transition-all">
                <span className="text-xs font-bold text-[#2D4356] group-hover:text-[#FFD700] transition-colors">{article}</span>
                <ChevronRight size={16} className="text-gray-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Still Need Help Box */}
        <div className="bg-[#F8FAFC] border border-gray-100 p-10 rounded-[3rem] text-center flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
            <HelpCircle className="text-[#2D4356]" size={32} />
          </div>
          <h3 className="text-xl font-black text-[#2D4356] mb-2">Still need help?</h3>
          <p className="text-xs text-gray-400 font-medium mb-8">If you can't find the answer in our documentation, our engineers are ready to assist.</p>
          <button className="w-full py-4 bg-[#2D4356] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#FFD700] hover:text-[#2D4356] transition-all">
            Create Support Ticket <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;