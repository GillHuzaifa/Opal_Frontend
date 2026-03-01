import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  { name: "Small Business", price: "30", features: ["Free Hosting", "Free Domain", "24/7 Support", "Free SSL Certificate", "2 Staff Accounts"], recommended: false },
  { name: "Mid-Size Business", price: "65", features: ["Free Hosting", "Free Domain", "24/7 Support", "Free SSL Certificate", "5 Staff Accounts", "With POS Integration"], recommended: true },
  { name: "Large Business", price: "90", features: ["Free Hosting", "Free Domain", "24/7 Support", "Free SSL Certificate", "15 Staff Accounts", "24hr POS Support"], recommended: false }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center bg-[#F8FAFC] border border-gray-200 px-5 py-2 rounded-xl mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mr-3" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2D4356]">Scaling Your Growth</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-[#2D4356] tracking-tighter">Simple, Transparent.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative p-12 rounded-[3.5rem] border transition-all duration-500 ${
                plan.recommended ? "bg-[#2D4356] text-white shadow-2xl z-10 py-20" : "bg-[#F8FAFC] text-[#2D4356] border-gray-100"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFD700] text-[#2D4356] text-[10px] font-black px-8 py-2.5 rounded-full uppercase tracking-[0.2em] shadow-md">
                  Most Popular
                </div>
              )}
              <div className="mb-12 text-center">
                <h3 className={`text-[10px] font-black uppercase tracking-[0.3em] mb-6 ${plan.recommended ? 'text-[#FFD700]' : 'text-gray-400'}`}>{plan.name}</h3>
                <div className="flex justify-center items-baseline gap-1">
                  <span className="text-2xl font-bold">$</span>
                  <span className="text-7xl font-black tracking-tighter">{plan.price}</span>
                  <span className="text-sm opacity-40">/mo</span>
                </div>
              </div>
              <ul className="space-y-5 mb-12">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-medium">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.recommended ? "bg-[#FFD700] text-black" : "bg-green-100 text-green-600"}`}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className={plan.recommended ? "text-gray-300" : "text-gray-500"}>{f}</span>
                  </li>
                ))}
              </ul>
              <motion.button whileHover={{ scale: 1.02 }} className={`w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all ${
                plan.recommended ? "bg-[#FFD700] text-[#2D4356] hover:bg-white" : "bg-[#2D4356] text-white hover:bg-[#FFD700] hover:text-[#2D4356]"
              }`}>Activate Plan</motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;