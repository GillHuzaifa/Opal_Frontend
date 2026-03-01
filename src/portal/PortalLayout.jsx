import React from 'react';
import { 
  LayoutDashboard, Ticket, FileText, Package, 
  BookOpen, PieChart, Settings, Bell, Search, Plus, LogOut 
} from 'lucide-react';

// Ensure activeTab and setActiveTab are destructured from props
const PortalLayout = ({ children, activeTab, setActiveTab, onLogout }) => {

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'tickets', label: 'Tickets', icon: <Ticket size={20} /> },
    { id: 'quotes', label: 'Requests & Quotes', icon: <FileText size={20} /> },
    { id: 'assets', label: 'My Assets', icon: <Package size={20} /> },
    { id: 'kb', label: 'Knowledge Base', icon: <BookOpen size={20} /> },
    { id: 'reports', label: 'Reports', icon: <PieChart size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <aside className="w-64 bg-[#2D4356] text-white flex flex-col">
        <div className="p-8">
          <span className="text-2xl font-black tracking-tighter">OPAL</span>
          <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Portal v1.0</p>
        </div>

        <nav className="flex-grow px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)} // THIS IS THE FIX
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-[10px] font-black uppercase tracking-[0.1em] ${
                activeTab === item.id 
                ? 'bg-[#FFD700] text-[#2D4356] shadow-lg' 
                : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center text-[#2D4356] font-black">AI</div>
            <div>
              <p className="text-[11px] font-bold">ABC Textile Mills</p>
              <button 
                onClick={onLogout}
                className="text-[9px] text-gray-400 flex items-center gap-1 hover:text-red-400 transition-colors"
              >
                <LogOut size={10} /> Logout
              </button>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-grow flex flex-col overflow-hidden">
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-10">
          <h2 className="text-sm font-black uppercase tracking-widest text-[#2D4356]">
            {menuItems.find(m => m.id === activeTab)?.label}
          </h2>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 bg-[#2D4356] text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-[#FFD700] hover:text-[#2D4356] transition-all">
              <Plus size={14} /> Create Ticket
            </button>
            <div className="relative">
              <Bell size={20} className="text-gray-400" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </div>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-10 bg-[#F8FAFC]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default PortalLayout;