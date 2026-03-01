import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, Users, Milk, Warehouse, 
  BarChart3, ShoppingCart, Smartphone, Globe 
} from 'lucide-react';

const products = [
  {
    name: "Opal ERP",
    tagline: "The Core Ecosystem",
    desc: "Complete enterprise management for Textiles, FMCG, and Manufacturing.",
    icon: <Layers size={24} />,
    features: ["Finance & Ledger", "Supply Chain", "Production Planning"]
  },
  {
    name: "Opal HRPro",
    tagline: "Human Capital",
    desc: "End-to-end Payroll, Attendance, and Performance management.",
    icon: <Users size={24} />,
    features: ["Auto-Payroll", "Biometric Integration", "Leave Portal"]
  },
  {
    name: "Opal HerdPro",
    tagline: "Livestock Intelligence",
    desc: "Specialized dairy and livestock management for large-scale farms.",
    icon: <Milk size={24} />,
    features: ["Health Tracking", "Yield Analytics", "Feed Management"]
  },
  {
    name: "Opal WMS",
    tagline: "Logistics Control",
    desc: "Precision warehouse management for trading and distribution.",
    icon: <Warehouse size={24} />,
    features: ["Stock Valuation", "Multi-Location", "QR/Barcode"]
  },
  {
    name: "Opal BI",
    tagline: "Decision Intelligence",
    desc: "Advanced analytics and real-time dashboards for executives.",
    icon: <BarChart3 size={24} />,
    features: ["Predictive Trends", "Custom KPIs", "Mobile Reports"]
  },
  {
    name: "Opal POS",
    tagline: "Retail Excellence",
    desc: "Point of Sale for restaurants, pharmacy, and retail chains.",
    icon: <ShoppingCart size={24} />,
    features: ["Cloud Sync", "Loyalty Programs", "Fiscal Integration"]
  },
  {
    name: "Opal CRM/SFA",
    tagline: "Sales Force",
    desc: "Empower your sales team with field automation and lead tracking.",
    icon: <Smartphone size={24} />,
    features: ["GPS Tracking", "Order Booking", "Visit Logs"]
  },
  {
    name: "Opal Cloud",
    tagline: "Digital Backbone",
    desc: "Private and public cloud hosting with 99.9% uptime for ERP.",
    icon: <Globe size={24} />,
    features: ["Auto-Backups", "Threat Protection", "High Availability"]
  }
];

const Products = () => {
  return (
    <section id="products" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-8 h-1 bg-[#FFD700] rounded-full" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2D4356]">
              Opal Product Ecosystem
            </span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-[#2D4356] leading-[1.1] tracking-tighter">
            Mature Enterprise Solutions <br />
            <span className="text-gray-300 font-bold">Refined Over Decades.</span>
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-x-6 lg:gap-y-12">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              {/* Card Container */}
              <div className="bg-[#F8FAFC] border border-gray-100 p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-[2.5rem] h-full transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-[#2D4356]/5 hover:-translate-y-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-xl lg:rounded-2xl flex items-center justify-center text-[#2D4356] shadow-sm mb-4 sm:mb-6 lg:mb-8 group-hover:bg-[#FFD700] group-hover:text-[#2D4356] transition-all">
                  {product.icon}
                </div>
                
                <p className="text-[10px] font-black text-[#FFD700] uppercase tracking-widest mb-2">
                  {product.tagline}
                </p>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-[#2D4356] mb-3 sm:mb-4 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 sm:mb-6 lg:mb-8 font-medium">
                  {product.desc}
                </p>

                {/* Feature Tags - The "High Density" element */}
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="bg-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[8px] sm:text-[9px] font-bold text-[#2D4356] border border-gray-50 uppercase tracking-tighter">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;