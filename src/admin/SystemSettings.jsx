import React from 'react';
import { Database, Lock, Globe, Bell } from 'lucide-react';

const SystemSettings = () => {
  return (
    <div className="max-w-4xl space-y-10">
      <h2 className="text-3xl font-black text-white tracking-tighter italic uppercase">Global Settings</h2>
      
      <div className="grid gap-8">
        {[
          { label: "Portal Maintenance Mode", desc: "Temporarily disable client portal access for maintenance.", icon: <Database />, toggle: true },
          { label: "Two-Factor Auth (Clients)", desc: "Enforce OTP verification for all client logins.", icon: <Lock />, toggle: true },
          { label: "Audit Log Retention", desc: "Store detailed internal logs for up to 365 days.", icon: <Globe />, toggle: false },
        ].map((setting, i) => (
          <div key={i} className="flex items-center justify-between p-8 bg-[#1E293B] rounded-[2.5rem] border border-slate-800">
            <div className="flex items-center gap-6">
              <div className="text-[#FFD700] p-4 bg-slate-900 rounded-2xl border border-slate-800">{setting.icon}</div>
              <div>
                <p className="text-sm font-black text-white uppercase">{setting.label}</p>
                <p className="text-xs text-slate-500 font-medium">{setting.desc}</p>
              </div>
            </div>
            <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${setting.toggle ? 'bg-[#FFD700]' : 'bg-slate-700'}`}>
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${setting.toggle ? 'translate-x-6' : 'translate-x-0'}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemSettings;