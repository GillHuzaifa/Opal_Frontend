import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, Search, Monitor, ShieldCheck, 
  Cpu, HardDrive, Zap, AlertTriangle 
} from 'lucide-react';

const Assets = () => {
  const assetData = [
    { id: "AST-4022", name: "Dell PowerEdge R740", type: "Server", serial: "XJ-9920-LP", site: "Main Data Center", status: "In Warranty", tag: "Hardware" },
    { id: "AST-1055", name: "Opal ERP Core License", type: "License", serial: "OP-ERP-2026-X", site: "Corporate HQ", status: "Active", tag: "Software" },
    { id: "AST-8821", name: "Fortinet FG-100F", type: "Firewall", serial: "FT-0091-SN", site: "Branch Office 01", status: "Expiring Soon", tag: "Infra" },
    { id: "AST-3021", name: "Zebra ZT411 Printer", type: "Peripheral", serial: "ZB-4412-MK", site: "Warehouse A", status: "In Warranty", tag: "Hardware" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-[#2D4356] tracking-tighter">My Assets</h1>
          <p className="text-gray-400 text-sm font-medium">Inventory of your hardware, licenses, and infrastructure.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white border border-gray-100 p-3 rounded-xl shadow-sm text-gray-400 hover:text-[#2D4356]">
            <Plus size={20} />
          </button>
        </div>
      </div>

      {/* Asset Stats Quick Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Assets", value: "24", icon: <Cpu size={14}/> },
          { label: "In Warranty", value: "18", icon: <ShieldCheck size={14}/> },
          { label: "Expiring Soon", value: "02", icon: <AlertTriangle size={14}/> },
          { label: "Critical Support", value: "01", icon: <Zap size={14}/> },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
            <div className="p-2 bg-gray-50 rounded-lg text-[#2D4356]">{stat.icon}</div>
            <div>
              <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">{stat.label}</p>
              <p className="text-lg font-black text-[#2D4356] leading-none">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 flex gap-4">
        <div className="flex-grow flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl">
          <Search size={18} className="text-gray-400" />
          <input type="text" placeholder="Search by Serial or Name..." className="bg-transparent outline-none text-sm w-full font-medium" />
        </div>
      </div>

      {/* Asset Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assetData.map((asset, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-[#2D4356] group-hover:bg-[#FFD700] transition-colors">
                  {asset.type === 'Server' ? <HardDrive size={24}/> : <Monitor size={24}/>}
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#2D4356] tracking-tight">{asset.name}</h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{asset.id} • {asset.tag}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${
                asset.status === 'In Warranty' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
              }`}>
                {asset.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-3 bg-gray-50 rounded-xl">
                <p className="text-[8px] font-black text-gray-400 uppercase mb-1">Serial Number</p>
                <p className="text-xs font-bold text-[#2D4356]">{asset.serial}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl">
                <p className="text-[8px] font-black text-gray-400 uppercase mb-1">Site Location</p>
                <p className="text-xs font-bold text-[#2D4356]">{asset.site}</p>
              </div>
            </div>

            <button className="w-full py-4 bg-[#2D4356] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#FFD700] hover:text-[#2D4356] transition-all">
              <Plus size={14} /> Create Ticket for this Asset
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Assets;