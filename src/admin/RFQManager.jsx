import React from 'react';
import { FileText, Send, Clock, ExternalLink } from 'lucide-react';

const RFQManager = () => {
  const rfqs = [
    { id: "RFQ-2026-042", client: "ABC Textile Mills", item: "5x Dell R740 Servers", date: "Today", status: "Pending Quote" },
    { id: "RFQ-2026-041", client: "Lucky Textile", item: "Opal WMS License", date: "Yesterday", status: "Drafting" },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-black text-white tracking-tighter">Quotation Pipeline</h2>
      <div className="grid gap-4">
        {rfqs.map((rfq, i) => (
          <div key={i} className="bg-[#1E293B] p-6 rounded-3xl border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-slate-400 border border-slate-800"><FileText size={20}/></div>
              <div>
                <p className="text-[10px] font-black text-[#FFD700] uppercase tracking-widest">{rfq.id}</p>
                <p className="text-lg font-black text-white">{rfq.client}</p>
                <p className="text-xs text-slate-500 font-bold">{rfq.item}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-500 uppercase">Received</p>
                <p className="text-xs font-bold text-white">{rfq.date}</p>
              </div>
              <button className="bg-slate-800 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border border-slate-700 hover:bg-[#FFD700] hover:text-[#0F172A] transition-all flex items-center gap-2">
                Generate Quote <Send size={14}/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RFQManager;