import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Truck, Utensils, Wheat, BarChart4, Landmark } from 'lucide-react';

const industries = [
  {
    name: "Textiles & Apparel",
    desc: "End-to-end spinning, weaving, and garments management with integrated export documentation.",
    icon: <Factory size={32} />,
    stats: "15+ Mills Powered",
    tags: ["Yarn Tracking", "Export Docs", "Dyeing Logic"]
  },
  {
    name: "FMCG & Distribution",
    desc: "Real-time secondary sales tracking, van selling automation, and multi-warehouse synchronization.",
    icon: <Truck size={32} />,
    stats: "50k+ Daily Invoices",
    tags: ["SFA Integration", "Batch Tracking", "Route Plan"]
  },
  {
    name: "Dairy & Livestock",
    desc: "Specialized HerdPro module for animal health, milk yield analytics, and feed management.",
    icon: <Wheat size={32} />,
    stats: "20+ Mega Farms",
    tags: ["Yield Analysis", "Health Logs", "Feed ERP"]
  },
  {
    name: "Restaurants & Retail",
    desc: "Centralized kitchen management, recipe costing, and real-time cloud POS for multi-chain outlets.",
    icon: <Utensils size={32} />,
    stats: "100+ Outlets",
    tags: ["Recipe Costing", "Live POS", "Inventory"]
  },
  {
    name: "Trading & Logistics",
    desc: "Advanced WMS with FIFO/LIFO valuation and integrated financial ledger for high-volume trading.",
    icon: <BarChart4 size={32} />,
    stats: "Secure Logistics",
    tags: ["WMS Control", "LC Management", "Valuation"]
  },
  {
    name: "Agriculture & Farms",
    desc: "Farm-to-market traceability and procurement systems for large scale agricultural enterprises.",
    icon: <Landmark size={32} />,
    stats: "Legacy Tech",
    tags: ["Procurement", "Farm Mapping", "Traceability"]
  }
];

const Industries = () => {
  return (
    <section id="industries" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-2 bg-[#F8FAFC] border border-gray-100 px-4 py-1.5 rounded-full mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2D4356]">Vertical Dominance</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-[#2D4356] tracking-tighter leading-[1.1]">
              Domain Expertise in <br />
              <span className="text-gray-300">Pakistan's Core Sectors.</span>
            </h2>
          </div>
          <div className="hidden lg:block">
            <p className="text-gray-400 font-bold text-sm uppercase tracking-widest text-right">
              25 Years <br /> <span className="text-[#2D4356]">Field Experience</span>
            </p>
          </div>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[450px] overflow-hidden rounded-[3rem] border border-gray-100 bg-[#F8FAFC]"
            >
              {/* Card Content */}
              <div className="p-10 h-full flex flex-col justify-between relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <div>
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#2D4356] shadow-sm mb-8 group-hover:bg-[#2D4356] group-hover:text-[#FFD700] transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black text-[#2D4356] mb-4 tracking-tight">{item.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-black uppercase tracking-tighter px-3 py-1 bg-white border border-gray-50 rounded-md text-[#2D4356]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-200/50 flex justify-between items-center">
                    <span className="text-[10px] font-black text-[#FFD700] uppercase tracking-widest">{item.stats}</span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#2D4356] opacity-0 group-hover:opacity-100 transition-all">
                      →
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Background Text */}
              <span className="absolute bottom-[-20px] right-[-20px] text-9xl font-black text-gray-200/20 select-none pointer-events-none group-hover:text-[#FFD700]/5 transition-colors">
                {i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;