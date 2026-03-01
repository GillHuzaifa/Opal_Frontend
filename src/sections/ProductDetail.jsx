import React from 'react';
import { CheckCircle2, Cpu, Globe, Shield, Zap, ArrowLeft } from 'lucide-react';

const ProductDetail = ({ product, onBack }) => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#2D4356] mb-12 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Ecosystem
        </button>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#FFD700]" />
              <span className="text-[#FFD700] text-xs font-black uppercase tracking-[0.4em]">{product.category}</span>
            </div>
            <h1 className="text-6xl font-black text-[#2D4356] tracking-tighter mb-8 leading-none">
              {product.name}
            </h1>
            <p className="text-xl text-gray-500 font-medium mb-12 leading-relaxed">
              {product.longDesc}
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {product.features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="text-[#FFD700] shrink-0" size={20} />
                  <p className="text-sm font-bold text-[#2D4356] uppercase tracking-tight">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Specs Card */}
          <div className="bg-[#2D4356] rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-8 italic">Technical Specifications</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                  <Cpu className="text-[#FFD700]" />
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-400">Deployment</p>
                    <p className="text-sm font-bold">On-Premise / Hybrid Cloud</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                  <Globe className="text-[#FFD700]" />
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-400">Integration</p>
                    <p className="text-sm font-bold">Full API & SAP/Oracle Bridge</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Shield className="text-[#FFD700]" />
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-400">Security</p>
                    <p className="text-sm font-bold">ISO 27001 Certified Standards</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-12 bg-[#FFD700] text-[#2D4356] py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all">
                Request Technical Demo
              </button>
            </div>
            {/* Decorative Icon */}
            <Zap size={200} className="absolute -bottom-10 -right-10 text-white/[0.03] rotate-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;