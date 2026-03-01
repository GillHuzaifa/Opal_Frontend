import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: "Client 1", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Client 2", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Client 3", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Client 4", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Client 5", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Sony_logo.svg" },
  { name: "Client 6", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H&M-Logo.svg" },
];

const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-white border-y border-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#F8FAFC] border border-gray-100 px-4 py-1.5 rounded-full mb-6"
          >
            <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-3" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2D4356]">
              Trusted Partnerships
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-[#2D4356] tracking-tighter"
          >
            Powering Industry <span className="text-gray-300">Leaders.</span>
          </motion.h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex justify-center group"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-8 md:h-10 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;