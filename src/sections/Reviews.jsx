import React from 'react';
import { Quote, Star } from 'lucide-react';

const Reviews = () => {
  const testimonials = [
    {
      company: "Indus Textiles",
      author: "Farhan Ahmed",
      role: "Operations Director",
      text: "Switching to Opal ERP transformed our production floors. We saw a 22% increase in efficiency within the first quarter.",
      logo: "IT"
    },
    {
      company: "Global FMCG Group",
      author: "Sarah Khalid",
      role: "Logistics Manager",
      text: "The Opal WMS integration is flawless. Our inventory accuracy is now at 99.9%, which was impossible with our previous vendor.",
      logo: "GF"
    }
  ];

  return (
    <section className="py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <div className="flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-6 w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2D4356]">Validation</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-[#2D4356] tracking-tighter leading-none">
              Trusted by the <br /> <span className="text-gray-300">Industrial Giants.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              <Quote className="absolute -top-4 -left-4 w-32 h-32 text-gray-50 opacity-[0.05]" />
              
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#FFD700" className="text-[#FFD700]" />)}
              </div>

              <p className="text-xl text-[#2D4356] font-medium leading-relaxed mb-10 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-5 pt-8 border-t border-gray-50">
                <div className="w-14 h-14 bg-[#2D4356] rounded-2xl flex items-center justify-center text-[#FFD700] font-black text-xl">
                  {t.logo}
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#2D4356] uppercase tracking-widest">{t.author}</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{t.role} — {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;