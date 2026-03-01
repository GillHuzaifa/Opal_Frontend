import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe2 } from 'lucide-react';

const Contact = () => {
  const offices = [
    { city: "Lahore (HQ)", address: "30 Madina Electric Market, Shah Alam", phone: "03-111-807-807" },
    { city: "Regional Support", address: "Serving Central & Southern Clusters", email: "support@opal.com.pk" }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left: Contact Info & Reach (5 Cols) */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm"
            >
              <Globe2 size={16} className="text-[#2D4356]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2D4356]">Global Reach</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D4356] tracking-tighter leading-[0.9] mb-8 sm:mb-10">
              Let's Start Your <br />
              <span className="text-gray-300">Transformation.</span>
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#2D4356] text-[#FFD700] rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-[#FFD700] group-hover:text-[#2D4356] transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">24/7 Support Hotline</p>
                  <p className="text-lg sm:text-xl font-black text-[#2D4356]">03-111-807-807</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white text-[#2D4356] border border-gray-100 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:border-[#FFD700] transition-all">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">WhatsApp Business</p>
                  <p className="text-lg sm:text-xl font-black text-[#2D4356]">Start a Chat</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {offices.map((office, i) => (
                <div key={i} className="p-4 sm:p-6 bg-white rounded-2xl sm:rounded-3xl border border-gray-50 shadow-sm">
                  <h4 className="text-sm font-black text-[#2D4356] uppercase tracking-widest mb-3 flex items-center gap-2">
                    <MapPin size={14} className="text-[#FFD700]" /> {office.city}
                  </h4>
                  <p className="text-xs font-bold text-gray-400 leading-relaxed">{office.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Categorized Inquiry Form (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 lg:p-14 rounded-2xl sm:rounded-[3rem] lg:rounded-[4rem] shadow-2xl shadow-[#2D4356]/5 border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border-2 border-transparent focus:border-[#FFD700]/30 outline-none font-bold text-[#2D4356]" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Company Name</label>
                  <input type="text" placeholder="Enterprise Ltd." className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border-2 border-transparent focus:border-[#FFD700]/30 outline-none font-bold text-[#2D4356]" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Nature of Inquiry</label>
                <select className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border-2 border-transparent focus:border-[#FFD700]/30 outline-none font-bold text-[#2D4356] appearance-none">
                  <option>Request an Opal ERP Demo</option>
                  <option>Hardware/Infrastructure Quotation</option>
                  <option>Resident Engineer Services</option>
                  <option>IT Policy & Audit Consultation</option>
                  <option>Other General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Message Details</label>
                <textarea rows="4" placeholder="How can our ecosystem serve your business?" className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-3xl bg-[#F8FAFC] border-2 border-transparent focus:border-[#FFD700]/30 outline-none font-bold text-[#2D4356]"></textarea>
              </div>

              <button className="w-full py-4 sm:py-6 bg-[#2D4356] text-white rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-[10px] sm:text-[11px] flex items-center justify-center gap-2 sm:gap-3 hover:bg-[#FFD700] hover:text-[#2D4356] transition-all shadow-xl shadow-[#2D4356]/10">
                Submit Inquiry <Send size={18} />
              </button>
              
              <div className="flex items-center justify-center gap-4 pt-4">
                <Clock size={14} className="text-gray-300" />
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Typical response time: <span className="text-[#2D4356]">Within 2 Business Hours</span></p>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;