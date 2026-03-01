import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, PieChart, TrendingUp, AlertTriangle, 
  CheckCircle, Clock, Download, Filter 
} from 'lucide-react';

const Reports = () => {
  const stats = [
    { label: "Avg. Response Time", value: "1.2h", trend: "-15%", icon: <Clock className="text-blue-500" /> },
    { label: "SLA Compliance", value: "98.4%", trend: "+2.1%", icon: <CheckCircle className="text-green-500" /> },
    { label: "SLA Breaches", value: "01", trend: "0%", icon: <AlertTriangle className="text-red-500" /> },
    { label: "Active Requests", value: "12", trend: "+4", icon: <TrendingUp className="text-purple-500" /> },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#2D4356] tracking-tighter">Performance Analytics</h1>
          <p className="text-gray-400 text-sm font-medium">Monitor your support efficiency and SLA compliance metrics.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-xl bg-white text-xs font-bold text-gray-500 hover:text-[#2D4356]">
            <Filter size={16} /> Last 30 Days
          </button>
          <button className="flex items-center gap-2 bg-[#2D4356] text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#FFD700] hover:text-[#2D4356] transition-all">
            <Download size={16} /> Export PDF
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-gray-50 rounded-xl">{stat.icon}</div>
              <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${
                stat.trend.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
              }`}>
                {stat.trend}
              </span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{stat.label}</p>
            <p className="text-2xl font-black text-[#2D4356]">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Chart Placeholders - Using Styled Containers */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Ticket Volume Trend */}
        <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-black text-[#2D4356] tracking-tight flex items-center gap-3">
              <BarChart3 size={20} className="text-[#FFD700]" /> Ticket Volume
            </h3>
          </div>
          <div className="h-64 flex items-end gap-4 px-4">
            {[40, 70, 45, 90, 65, 80, 50].map((height, i) => (
              <div key={i} className="flex-grow flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-[#F8FAFC] rounded-t-xl group relative overflow-hidden" 
                  style={{ height: '100%' }}
                >
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    className="absolute bottom-0 w-full bg-[#2D4356] group-hover:bg-[#FFD700] transition-colors rounded-t-xl"
                  />
                </div>
                <span className="text-[9px] font-black text-gray-400 uppercase">W{i+1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Distribution by Category */}
        <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
          <h3 className="text-xl font-black text-[#2D4356] tracking-tight mb-8 flex items-center gap-3">
            <PieChart size={20} className="text-[#FFD700]" /> Category Distribution
          </h3>
          <div className="space-y-6">
            {[
              { label: "Opal ERP", percent: 45, color: "bg-[#2D4356]" },
              { label: "HRPro / Payroll", percent: 30, color: "bg-[#FFD700]" },
              { label: "Infrastructure", percent: 15, color: "bg-gray-300" },
              { label: "Others", percent: 10, color: "bg-gray-100" },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span className="text-gray-400">{item.label}</span>
                  <span className="text-[#2D4356]">{item.percent}%</span>
                </div>
                <div className="h-2 bg-gray-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percent}%` }}
                    className={`h-full ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SLA Breach Alert Section */}
      <div className="bg-[#2D4356] rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-black mb-2">SLA Performance Warning</h3>
          <p className="text-gray-400 text-sm font-medium max-w-md">You have 1 unresolved ticket nearing its SLA breach limit. Our senior engineers have been notified for escalation.</p>
        </div>
        <button className="relative z-10 bg-[#FFD700] text-[#2D4356] px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all">
          View Critical Ticket
        </button>
        <AlertTriangle size={150} className="absolute -right-10 -bottom-10 text-white/[0.03] pointer-events-none" />
      </div>
    </div>
  );
};

export default Reports;