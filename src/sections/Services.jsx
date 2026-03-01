import React from 'react';
import { motion } from 'framer-motion';
// All icons must be PascalCase (Capitalized)
import { 
  Server, 
  ShieldAlert, 
  HardDrive, 
  UserCheck, 
  CloudCog, 
  FileSearch 
} from 'lucide-react';

const services = [
  {
    title: "IT Infrastructure & Networking",
    desc: "Complete passive and active networking solutions, including fiber optics and secure server room setups.",
    icon: <Server size={24} />,
    features: ["Hardware Procurement", "Fortinet/Cisco Config", "Data Center Build"]
  },
  {
    title: "Cloud & Managed Hosting",
    desc: "Seamless migration of Opal ERP to private or public clouds (Azure/AWS) with automated backup cycles.",
    icon: <CloudCog size={24} />,
    features: ["Disaster Recovery", "24/7 Monitoring", "Hybrid Cloud"]
  },
  {
    title: "Resident Engineer Services",
    desc: "On-site dedicated IT professionals to manage your daily operations and ERP maintenance.",
    icon: <UserCheck size={24} />,
    features: ["On-Site Support", "Immediate Resolution", "System Health"]
  },
  {
    title: "IT Policy & Audit",
    desc: "Comprehensive compliance audits and IT policy drafting to ensure data security and SOP adherence.",
    icon: <FileSearch size={24} />,
    features: ["Compliance Check", "Security Audit", "SOP Development"]
  },
  {
    title: "Hardware & Surveillance",
    desc: "Supply and installation of high-end servers, workstations, and Hikvision surveillance ecosystems.",
    icon: <HardDrive size={24} />, // Fixed: Used HardDrive (Capitalized)
    features: ["Enterprise Servers", "IP Surveillance", "Biometrics"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 bg-white border border-gray-100 px-5 py-2 rounded-xl mb-6 shadow-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#2D4356]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2D4356]">Technical Service Layers</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-[#2D4356] tracking-tighter">
            More Than Just <span className="text-gray-300">Software.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Main Service - Large Dark Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-[#2D4356] rounded-[3rem] p-12 text-white relative overflow-hidden group shadow-2xl"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Server className="text-[#FFD700]" />
              </div>
              <h3 className="text-3xl font-black mb-4">Infrastructure & Hardware</h3>
              <p className="text-gray-400 max-w-md mb-10 font-medium">
                We don't just provide the ERP; we provide the backbone it runs on. From enterprise servers to secure networking.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Tier-1 Servers", "Fiber Optics", "Cisco Networking"].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Background Decorative Element */}
            <div className="absolute -bottom-10 -right-10 text-[15rem] font-black text-white/[0.03] select-none pointer-events-none">
              INFRA
            </div>
          </motion.div>

          {/* Secondary Services */}
          {services.slice(1).map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-white border border-gray-100 p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-12 h-12 bg-[#F8FAFC] rounded-xl flex items-center justify-center text-[#2D4356] mb-6 group-hover:bg-[#FFD700] transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-black text-[#2D4356] mb-3">{service.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed font-medium mb-6 line-clamp-2">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.slice(0, 2).map(f => (
                  <span key={f} className="text-[8px] font-black uppercase text-gray-400 border border-gray-100 px-2 py-1 rounded">
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;