import React from 'react';
import { 
  ShieldAlert, 
  Users, 
  BarChart3, 
  Settings, 
  MessageSquare, 
  FileCheck, 
  LifeBuoy, 
  LogOut,
  Bell, 
  Search
} from 'lucide-react';

// Destructure activeMenu and setActiveMenu from props
const AdminLayout = ({ children, onLogout, activeMenu, setActiveMenu }) => {

  const adminMenu = [
    { id: 'overview', label: 'Admin Overview', icon: <BarChart3 size={18} /> },
    { id: 'tickets', label: 'Global Tickets', icon: <LifeBuoy size={18} /> },
    { id: 'rfqs', label: 'RFQ & Quotes', icon: <FileCheck size={18} /> },
    { id: 'clients', label: 'Client Management', icon: <Users size={18} /> },
    { id: 'sla', label: 'SLA Rule Setup', icon: <ShieldAlert size={18} /> },
    { id: 'settings', label: 'System Settings', icon: <Settings size={18} /> },
  ];

  return (
    <div className="flex h-screen bg-[#0F172A] text-slate-200 font-sans">
      <aside className="w-72 bg-[#1E293B] border-r border-slate-800 flex flex-col">
        <div className="p-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FFD700] rounded-lg flex items-center justify-center text-[#0F172A] font-black italic">O</div>
            <div>
              <span className="text-xl font-black tracking-tighter text-white uppercase">OPAL Admin</span>
              <p className="text-[9px] font-bold text-[#FFD700] uppercase tracking-widest">Internal Control</p>
            </div>
          </div>
        </div>

        <nav className="flex-grow p-4 space-y-2">
          {adminMenu.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)} // FIX: Triggers state change in App.jsx
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all text-[11px] font-black uppercase tracking-widest ${
                activeMenu === item.id 
                ? 'bg-[#FFD700] text-[#0F172A] shadow-lg shadow-[#FFD700]/10' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        <div className="p-6 bg-slate-900/50 border-t border-slate-800">
          <div onClick={onLogout} className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700">
                <Users size={20} className="text-slate-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Qaiser Izhar</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase">Super Admin</p>
              </div>
            </div>
            <LogOut size={16} className="text-slate-600 group-hover:text-red-400 transition-colors" />
          </div>
        </div>
      </aside>

      <main className="flex-grow flex flex-col overflow-hidden">
        <header className="h-20 bg-[#1E293B]/50 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-10">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            Current Module: <span className="text-white">{adminMenu.find(m => m.id === activeMenu)?.label}</span>
          </h2>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
              <ShieldAlert size={14} />
              <span className="text-[10px] font-black uppercase tracking-tighter">3 SLA Breaches</span>
            </div>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-12 bg-[#0F172A]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;