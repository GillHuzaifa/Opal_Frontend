import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, Shield, Building2, BellRing, 
  Mail, MapPin, Trash2, Power 
} from 'lucide-react';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('team');

  const teamMembers = [
    { name: "Ahmed Khan", email: "ahmed@abctextiles.com", role: "Super Admin", status: "Active" },
    { name: "Sara Malik", email: "sara@abctextiles.com", role: "Finance (Quotes)", status: "Active" },
    { name: "Irfan Ali", email: "irfan@abctextiles.com", role: "IT Support", status: "Inactive" },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black text-[#2D4356] tracking-tighter">Portal Settings</h1>
        <p className="text-gray-400 text-sm font-medium">Manage your company profile, security, and team access.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Settings Navigation */}
        <aside className="lg:w-64 space-y-2">
          {[
            { id: 'profile', label: 'Company Profile', icon: <Building2 size={18}/> },
            { id: 'team', label: 'User Management', icon: <UserPlus size={18}/> },
            { id: 'security', label: 'Security & Access', icon: <Shield size={18}/> },
            { id: 'notifications', label: 'Notifications', icon: <BellRing size={18}/> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeSection === item.id 
                ? 'bg-[#2D4356] text-white shadow-lg shadow-[#2D4356]/20' 
                : 'text-gray-400 hover:bg-white border border-transparent hover:border-gray-100'
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </aside>

        {/* Settings Content Area */}
        <div className="flex-grow space-y-8">
          
          {/* USER MANAGEMENT SECTION */}
          {activeSection === 'team' && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-xl font-black text-[#2D4356]">Team Members</h3>
                  <button className="bg-[#FFD700] text-[#2D4356] px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <UserPlus size={16} /> Invite Staff
                  </button>
                </div>

                <div className="divide-y divide-gray-50">
                  {teamMembers.map((member, i) => (
                    <div key={i} className="py-6 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#F8FAFC] rounded-2xl flex items-center justify-center font-black text-[#2D4356]">
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-black text-[#2D4356]">{member.name}</p>
                          <p className="text-xs text-gray-400 font-medium">{member.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-10">
                        <div className="text-right">
                          <p className="text-[9px] font-black text-gray-400 uppercase mb-1">Role</p>
                          <span className="text-xs font-bold text-[#2D4356]">{member.role}</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-3 bg-gray-50 text-gray-400 hover:text-red-500 rounded-xl transition-colors">
                            <Power size={16} />
                          </button>
                          <button className="p-3 bg-gray-50 text-gray-400 hover:text-red-500 rounded-xl transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROLE PERMISSIONS MODULE */}
              <div className="bg-[#2D4356] p-10 rounded-[3rem] text-white overflow-hidden relative">
                <div className="relative z-10">
                  <h3 className="text-xl font-black mb-6">Quick Role Definitions</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                      <p className="text-[#FFD700] text-[10px] font-black uppercase tracking-widest mb-2">Finance Role</p>
                      <p className="text-xs text-gray-400">Can view and approve hardware/software quotations and RFQs.</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                      <p className="text-[#FFD700] text-[10px] font-black uppercase tracking-widest mb-2">Support Role</p>
                      <p className="text-xs text-gray-400">Can raise tickets, view assets, and browse the knowledge base.</p>
                    </div>
                  </div>
                </div>
                <Shield size={120} className="absolute -right-8 -bottom-8 text-white/[0.03] pointer-events-none" />
              </div>
            </motion.div>
          )}

          {/* COMPANY PROFILE SECTION (Placeholders) */}
          {activeSection === 'profile' && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-10 rounded-[3rem] border border-gray-100 space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Company Name</label>
                  <input type="text" defaultValue="ABC Textile Mills Ltd." className="w-full px-6 py-4 rounded-2xl bg-gray-50 font-bold text-sm text-[#2D4356]" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Main Industry</label>
                  <input type="text" defaultValue="Textiles & Apparel" className="w-full px-6 py-4 rounded-2xl bg-gray-50 font-bold text-sm text-[#2D4356]" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Registered Address</label>
                <div className="flex gap-4">
                  <div className="flex-grow bg-gray-50 p-6 rounded-2xl border border-transparent">
                    <p className="text-sm font-bold text-[#2D4356]">Plot 44, Industrial Estate, Phase II, Lahore.</p>
                  </div>
                  <button className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 text-gray-400">
                    <MapPin size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Settings;