import React from 'react';
import { Search, MoreVertical, Building2, ShieldCheck } from 'lucide-react';

const ClientManager = () => {
  const clients = [
    { name: "ABC Textile Mills", id: "OP-2401", industry: "Textiles", plan: "Gold SLA", status: "Active" },
    { name: "Global FMCG Ltd", id: "OP-2398", industry: "FMCG", plan: "Platinum", status: "Active" },
    { name: "Punjab Dairy Farms", id: "OP-2410", industry: "Dairy", plan: "Silver", status: "Onboarding" },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-black text-white tracking-tighter">Client Directory</h2>
      <div className="bg-[#1E293B] rounded-3xl overflow-hidden border border-slate-800">
        <table className="w-full text-left">
          <thead className="bg-slate-900/50 border-b border-slate-800">
            <tr>
              {["Client Name", "SLA Plan", "Industry", "Status", ""].map(h => (
                <th key={h} className="px-8 py-5 text-[10px] font-black uppercase text-slate-500 tracking-widest">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {clients.map((client, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-[#FFD700] border border-slate-800"><Building2 size={18}/></div>
                    <div>
                      <p className="text-sm font-black text-white">{client.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold">{client.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <ShieldCheck size={14} className="text-[#FFD700]" /> {client.plan}
                  </span>
                </td>
                <td className="px-8 py-6 text-xs text-slate-400 font-bold">{client.industry}</td>
                <td className="px-8 py-6">
                  <span className="px-3 py-1 bg-green-500/10 text-green-500 text-[9px] font-black uppercase rounded-lg border border-green-500/20">{client.status}</span>
                </td>
                <td className="px-8 py-6 text-right"><MoreVertical size={16} className="text-slate-600"/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientManager;