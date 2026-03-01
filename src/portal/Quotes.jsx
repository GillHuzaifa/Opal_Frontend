import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FilePlus, FileText, Download, CheckCircle, 
  Clock, HardDrive, Cpu, Cloud, UserCog, ShieldCheck 
} from 'lucide-react';

const Quotes = () => {
  const [activeTab, setActiveTab] = useState('Hardware');

  const categories = [
    { id: 'Hardware', icon: <HardDrive size={18} /> },
    { id: 'Software', icon: <Cpu size={18} /> },
    { id: 'Infra', icon: <ShieldCheck size={18} /> },
    { id: 'Cloud', icon: <Cloud size={18} /> },
    { id: 'Resident', icon: <UserCog size={18} /> },
  ];

  const existingQuotes = [
    { rfq: "RFQ-2026-041", type: "Hardware", status: "Quote Sent", amount: "PKR 450,000", date: "Feb 02, 2026", validity: "7 Days" },
    { rfq: "RFQ-2026-038", type: "Software", status: "Approved", amount: "PKR 120,000", date: "Jan 28, 2026", validity: "Expired" },
    { rfq: "RFQ-2026-035", type: "Cloud", status: "Pending", amount: "TBD", date: "Jan 25, 2026", validity: "N/A" },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-[#2D4356] tracking-tighter">Requests & Quotes</h1>
          <p className="text-gray-400 text-sm font-medium">Generate RFQs and manage quotations for your enterprise needs.</p>
        </div>
        <div className="bg-white px-6 py-3 rounded-2xl border border-gray-100 flex items-center gap-3 shadow-sm">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Next RFQ No:</span>
          <span className="text-sm font-black text-[#2D4356]">RFQ-2026-042</span>
        </div>
      </div>

      {/* NEW REQUEST BUILDER */}
      <div className="bg-white rounded-[3rem] border border-gray-100 overflow-hidden shadow-sm">
        <div className="flex border-b border-gray-50 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-3 px-8 py-6 text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                activeTab === cat.id 
                ? 'bg-[#F8FAFC] text-[#2D4356] border-b-2 border-[#FFD700]' 
                : 'text-gray-400 hover:bg-gray-50'
              }`}
            >
              {cat.icon} {cat.id}
            </button>
          ))}
        </div>

        <div className="p-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2 space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Item Description & Specifications</label>
              <textarea 
                rows="3" 
                placeholder={`Details for your ${activeTab} request...`}
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#FFD700]/30 outline-none font-bold text-xs"
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Quantity / Scale</label>
              <input type="text" placeholder="e.g. 5 Units / 50 Users" className="w-full px-6 py-4 rounded-2xl bg-gray-50 outline-none font-bold text-xs" />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-[#2D4356] text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-[#FFD700] hover:text-[#2D4356] transition-all">
              <FilePlus size={16} /> Generate RFQ No.
            </button>
          </div>
        </div>
      </div>

      {/* MY REQUESTS LIST */}
      <div className="space-y-6">
        <h3 className="text-xl font-black text-[#2D4356] tracking-tight">Active Quotations</h3>
        <div className="grid gap-4">
          {existingQuotes.map((q, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-[2rem] border border-gray-100 flex flex-wrap items-center justify-between gap-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-[#2D4356]">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="text-xs font-black text-[#2D4356]">{q.rfq}</p>
                  <p className="text-[10px] text-gray-400 uppercase font-black">{q.type} • Requested on {q.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-10">
                <div className="text-center md:text-left">
                  <p className="text-[9px] font-black text-gray-400 uppercase mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    {q.status === 'Approved' ? <CheckCircle size={14} className="text-green-500" /> : <Clock size={14} className="text-orange-500" />}
                    <span className="text-xs font-bold text-[#2D4356]">{q.status}</span>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <p className="text-[9px] font-black text-gray-400 uppercase mb-1">Quote Amount</p>
                  <p className="text-xs font-black text-[#2D4356]">{q.amount}</p>
                </div>

                <div className="flex gap-2">
                  {q.status === 'Quote Sent' && (
                    <button className="p-3 bg-gray-50 hover:bg-[#FFD700] rounded-xl text-[#2D4356] transition-colors shadow-sm">
                      <Download size={16} />
                    </button>
                  )}
                  <button className="px-5 py-3 bg-[#F8FAFC] text-[9px] font-black uppercase text-[#2D4356] rounded-xl border border-gray-100">
                    View Detail
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quotes;