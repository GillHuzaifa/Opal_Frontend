import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Users, Ticket, CheckCircle, TrendingUp } from 'lucide-react';

const AdminOverview = () => {
  const stats = [
    { label: "Global Active Tickets", value: "142", trend: "+12", icon: <Ticket className="text-blue-400" /> },
    { label: "Online Clients", value: "24", trend: "Stable", icon: <Users className="text-green-400" /> },
    { label: "Avg. Resolution Time", value: "4.2h", trend: "-0.5h", icon: <Activity className="text-[#FFD700]" /> },
    { label: "SLA Success Rate", value: "99.2%", trend: "+0.1%", icon: <CheckCircle className="text-purple-400" /> },
  ];

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">System Pulse</h2>
          <p className="text-slate-500 text-sm font-medium mt-1 uppercase tracking-widest">Real-time operational health across all verticals.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#1E293B] p-6 rounded-[2rem] border border-slate-800 shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">{stat.icon}</div>
              <span className="text-[10px] font-black text-slate-500 uppercase">{stat.trend}</span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{stat.label}</p>
            <p className="text-3xl font-black text-white tracking-tighter">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#1E293B] p-10 rounded-[3rem] border border-slate-800 h-64 flex items-center justify-center relative overflow-hidden group">
        <div className="text-center z-10">
          <TrendingUp size={48} className="text-[#FFD700] mx-auto mb-4 opacity-20 group-hover:opacity-100 transition-opacity" />
          <p className="text-sm font-black text-white uppercase tracking-widest">Monthly Growth Trend</p>
          <p className="text-[10px] text-slate-500 uppercase mt-2">Historical data visualization active</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/5 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default AdminOverview;