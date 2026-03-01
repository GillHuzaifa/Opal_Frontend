import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, MessageSquare, Clock, 
  ChevronRight, ArrowUpRight, Shield 
} from 'lucide-react';

const TicketAssignment = () => {
  const unassignedTickets = [
    { id: "TK-8910", client: "Lucky Textile Mills", module: "Opal ERP", priority: "Urgent", time: "12m ago", sla: "1h 48m left" },
    { id: "TK-8908", client: "Al-Karam Studio", module: "Opal HRPro", priority: "Medium", time: "45m ago", sla: "3h 15m left" },
  ];

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tighter">Global Queue</h1>
          <p className="text-slate-500 text-sm font-medium mt-2">Manage ticket distribution and internal engineer assignments.</p>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Load</p>
            <p className="text-xl font-black text-[#FFD700]">88% Capacity</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* TICKET QUEUE */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6">Pending Assignment</h3>
          {unassignedTickets.map((ticket, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 5 }}
              className="bg-[#1E293B] border border-slate-800 p-8 rounded-[2rem] flex flex-wrap items-center justify-between gap-6 group"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-[#FFD700] border border-slate-800">
                  <Shield size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-black text-white">{ticket.id}</span>
                    <span className="px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-[9px] font-black text-red-500 uppercase">{ticket.priority}</span>
                  </div>
                  <p className="text-lg font-black text-white group-hover:text-[#FFD700] transition-colors">{ticket.client}</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{ticket.module} • Received {ticket.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="text-right">
                  <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Response Due</p>
                  <div className="flex items-center gap-2 text-red-400">
                    <Clock size={12} />
                    <span className="text-xs font-bold">{ticket.sla}</span>
                  </div>
                </div>
                <button className="bg-[#FFD700] text-[#0F172A] px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-white transition-all">
                  <UserPlus size={16} /> Assign Engineer
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* INTERNAL SIDEBAR (Worklog/SLA Rules) */}
        <div className="space-y-6">
          <div className="bg-[#1E293B] p-8 rounded-[2.5rem] border border-slate-800">
            <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6">Internal Worklog</h3>
            <div className="space-y-6">
              {[
                { tech: "Zubair A.", task: "Debugging SQL Trigger", time: "1h 20m" },
                { tech: "Irfan K.", task: "Server Migration", time: "4h 05m" }
              ].map((log, i) => (
                <div key={i} className="flex justify-between items-center border-b border-slate-800 pb-4">
                  <div>
                    <p className="text-xs font-bold text-white">{log.tech}</p>
                    <p className="text-[10px] text-slate-500">{log.task}</p>
                  </div>
                  <span className="text-[10px] font-black text-[#FFD700]">{log.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-sm font-black text-white uppercase tracking-widest mb-4">SLA Rules</h3>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-6">Current rule: Auto-escalate to Senior Developer if 'High' priority ticket is not acknowledged within 30 mins.</p>
              <button className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFD700] flex items-center gap-2">
                Configure Rules <ArrowUpRight size={14} />
              </button>
            </div>
            <Shield size={80} className="absolute -right-4 -bottom-4 text-white/[0.02]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketAssignment;