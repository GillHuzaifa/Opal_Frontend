import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectData from '../data/projects.json';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const categories = [
    { name: 'All Work', key: 'all' },
    { name: 'ERP Systems', key: 'erp' },
    { name: 'Networking', key: 'networking' },
    { name: 'Web/App', key: 'web' }
  ];

  const filteredProjects = filter === 'all' ? projectData : projectData.filter(proj => proj.categoryKey === filter);

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-flex items-center bg-[#F8FAFC] border border-gray-200 px-4 py-1.5 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mr-3" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2D4356]">Featured Projects</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-[#2D4356] tracking-tighter">Proven Impact.</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 bg-[#F8FAFC] p-2 rounded-[2.5rem] border border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  filter === cat.key ? "bg-[#FFD700] text-[#2D4356] shadow-sm scale-105" : "text-gray-400 hover:text-[#2D4356]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative rounded-[3.5rem] overflow-hidden border border-gray-50 bg-white ${project.isFeatured && filter === 'all' ? "lg:col-span-2" : ""}`}
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D4356] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                    <span className="text-[#FFD700] text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">{project.categoryDisplay}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;