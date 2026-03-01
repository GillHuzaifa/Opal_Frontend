import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, AlertCircle, RefreshCcw } from 'lucide-react';

const Dashboard = () => {
  const kpis = [
    { label: "Open Tickets", value: "04", icon: <AlertCircle className="text-orange-500" />, color: "border-orange-100" },
    { label: "In Progress", value: "02", icon: <RefreshCcw className="text-blue-500" />, color: "border-blue-100" },
    { label: "Resolved (Month)", value: "18", icon: <CheckCircle2 className="text-green-500" />, color: "border-green-100" },
    { label: "Pending Quotes", value: "01", icon: <Clock className="text-purple-500" />, color: "border-purple-100" },
  ];

  return (
    <div className="space-y-10">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-black text-[#2D4356] tracking-tighter">Client Dashboard</h1>
        <p className="text-gray-400 text-sm font-medium">Welcome back, ABC Textile Mills. Here is your operational overview.</p>
      </div>

      {/* KPI GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className={`bg-white p-8 rounded-3xl border ${kpi.color} shadow-sm`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-gray-50 rounded-xl">{kpi.icon}</div>
              <span className="text-3xl font-black text-[#2D4356]">{kpi.value}</span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{kpi.label}</p>
          </motion.div>
        ))}
      </div>

      {/* ACTIVE SLA MODULE */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#2D4356] rounded-[2.5rem] p-10 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="bg-[#FFD700] text-[#2D4356] px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">Active Plan: Gold SLA</span>
                <h3 className="text-2xl font-black mt-4">Software Maintenance SLA</h3>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-400 uppercase font-black">Expires</p>
                <p className="text-lg font-bold">Dec 2026</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-black mb-2">Response Time</p>
                <p className="text-xl font-bold">Within 2 Hours</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-black mb-2">Resolution Time</p>
                <p className="text-xl font-bold">Within 24 Hours</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 text-[12rem] font-black text-white/[0.03] select-none pointer-events-none">SLA</div>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-gray-100 p-10">
          <h3 className="text-xl font-black text-[#2D4356] mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {[
              { title: "Ticket #OP-102 Resolved", time: "2 hours ago", type: "success" },
              { title: "Quote #RFQ-99 Generated", time: "5 hours ago", type: "info" },
              { title: "Support Note Added", time: "Yesterday", type: "info" },
            ].map((activity, i) => (
              <div key={i} className="flex gap-4">
                <div className={`w-2 h-2 rounded-full mt-1.5 ${activity.type === 'success' ? 'bg-green-500' : 'bg-blue-500'}`} />
                <div>
                  <p className="text-xs font-bold text-[#2D4356]">{activity.title}</p>
                  <p className="text-[10px] text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;