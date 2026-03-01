import React from 'react';
import { Shield, Clock, AlertOctagon, Settings2 } from 'lucide-react';

const SLARules = () => {
  const rules = [
    { level: "Critical", respond: "30 Mins", resolve: "4 Hours", escalation: "Senior Engineer + CEO" },
    { level: "High", respond: "1 Hour", resolve: "8 Hours", escalation: "Lead Developer" },
    { level: "Standard", respond: "4 Hours", resolve: "48 Hours", escalation: "Support Desk" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-black text-white tracking-tighter italic uppercase">SLA Engine</h2>
        <button className="bg-[#FFD700] text-[#0F172A] px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
          <Settings2 size={16} /> Update Rules
        </button>
      </div>

      <div className="grid gap-6">
        {rules.map((rule, i) => (
          <div key={i} className="bg-[#1E293B] p-8 rounded-[2.5rem] border border-slate-800 flex items-center justify-between group hover:border-[#FFD700]/30 transition-all">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-red-400 border border-slate-800 group-hover:bg-red-500 group-hover:text-white transition-colors">
                <AlertOctagon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-black text-white uppercase italic">{rule.level} Priority</h3>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Escalation path: {rule.escalation}</p>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-500 uppercase">Response SLA</p>
                <p className="text-sm font-black text-white">{rule.respond}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-500 uppercase">Resolution SLA</p>
                <p className="text-sm font-black text-white">{rule.resolve}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SLARules;