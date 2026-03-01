import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Plus, Clock, 
  AlertCircle, CheckCircle2, MoreVertical, Paperclip 
} from 'lucide-react';

const Tickets = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const tickets = [
    { id: "TK-8842", subject: "Payroll calculation mismatch in HRPro", module: "Opal HRPro", priority: "High", status: "Open", assigned: "Zubair A.", due: "2h 15m" },
    { id: "TK-8839", subject: "WMS Scanner connectivity issue", module: "Opal WMS", priority: "Medium", status: "In Progress", assigned: "Irfan K.", due: "5h 40m" },
    { id: "TK-8835", subject: "Monthly Ledger Report taking too long", module: "Opal ERP", priority: "Low", status: "Resolved", assigned: "Sajid M.", due: "SLA Met" },
  ];

  const getPriorityStyle = (p) => {
    if (p === 'High') return 'text-red-600 bg-red-50 border-red-100';
    if (p === 'Medium') return 'text-orange-600 bg-orange-50 border-orange-100';
    return 'text-blue-600 bg-blue-50 border-blue-100';
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#2D4356] tracking-tighter">Support Tickets</h1>
          <p className="text-gray-400 text-sm font-medium">Manage and track your technical assistance requests.</p>
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="bg-[#2D4356] text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#FFD700] hover:text-[#2D4356] transition-all shadow-lg shadow-[#2D4356]/10"
        >
          <Plus size={16} /> New Ticket
        </button>
      </div>

      {/* Filters & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 flex flex-wrap gap-4 items-center">
        <div className="flex-grow flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
          <Search size={18} className="text-gray-400" />
          <input type="text" placeholder="Search by ID or Subject..." className="bg-transparent outline-none text-sm w-full font-medium" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-gray-500 hover:text-[#2D4356]">
          <Filter size={16} /> Filters
        </button>
      </div>

      {/* Tickets Grid */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {["Ticket No", "Subject & Module", "Priority", "Status", "Assigned", "SLA Due", ""].map((head) => (
                <th key={head} className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {tickets.map((ticket, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-8 py-6">
                  <span className="text-xs font-black text-[#2D4356]">{ticket.id}</span>
                </td>
                <td className="px-8 py-6">
                  <p className="text-xs font-bold text-[#2D4356]">{ticket.subject}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-tighter">{ticket.module}</p>
                </td>
                <td className="px-8 py-6">
                  <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase border ${getPriorityStyle(ticket.priority)}`}>
                    {ticket.priority}
                  </span>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${ticket.status === 'Open' ? 'bg-orange-500' : ticket.status === 'Resolved' ? 'bg-green-500' : 'bg-blue-500'}`} />
                    <span className="text-xs font-bold text-[#2D4356]">{ticket.status}</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <p className="text-xs font-bold text-gray-500">{ticket.assigned}</p>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock size={12} />
                    <span className="text-[10px] font-black">{ticket.due}</span>
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <button className="p-2 hover:bg-white rounded-lg transition-colors"><MoreVertical size={16} className="text-gray-300" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CREATE TICKET MODAL (Simplified Overlay) */}
      {showCreateModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-[#2D4356]/60 backdrop-blur-sm" onClick={() => setShowCreateModal(false)} />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white w-full max-w-2xl rounded-[3rem] p-10 md:p-14 relative z-[210] shadow-2xl"
          >
            <h3 className="text-2xl font-black text-[#2D4356] mb-2 tracking-tighter">Create New Ticket</h3>
            <p className="text-sm text-gray-400 mb-8">Provide details about the issue to get support.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Product Module</label>
                  <select className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#FFD700]/30 outline-none font-bold text-xs">
                    <option>Opal ERP</option>
                    <option>Opal HRPro</option>
                    <option>Opal HerdPro</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Priority</label>
                  <select className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#FFD700]/30 outline-none font-bold text-xs">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Subject</label>
                <input type="text" placeholder="Brief summary of the issue" className="w-full px-5 py-4 rounded-2xl bg-gray-50 outline-none font-bold text-xs" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Description</label>
                <textarea rows="4" className="w-full px-5 py-4 rounded-3xl bg-gray-50 outline-none font-bold text-xs" placeholder="Describe the steps to reproduce the error..."></textarea>
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <button type="button" className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#2D4356]">
                  <Paperclip size={16} /> Attach Files
                </button>
                <div className="flex gap-4">
                  <button type="button" onClick={() => setShowCreateModal(false)} className="px-6 py-4 text-xs font-black uppercase tracking-widest text-gray-400">Cancel</button>
                  <button className="bg-[#2D4356] text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-[#FFD700] hover:text-[#2D4356] transition-all shadow-lg">Submit Ticket</button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Tickets;