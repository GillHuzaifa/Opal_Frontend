import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 80 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => motionValue.set(value), 400);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => setDisplayValue(Math.floor(latest)));
  }, [springValue]);

  return <span ref={ref}>{displayValue}</span>;
};

const Stats = () => {
  return (
    <section id="stats" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 text-[25rem] font-black text-[#F8FAFC] select-none -z-0 translate-x-1/4 -translate-y-1/4 pointer-events-none">
        15
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
          {[
            { label: "Solutions Delivered", value: 250, suffix: "+" },
            { label: "System Uptime", value: 100, suffix: "%" },
            { label: "AI & ERP Experts", value: 45, suffix: "" },
            { label: "Tech Experience", value: 15, suffix: " Yrs" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group flex flex-col items-center lg:items-start"
            >
              <div className="text-6xl md:text-7xl font-black text-[#2D4356] mb-4 tabular-nums">
                <Counter value={stat.value} /><span className="text-[#FFD700]">{stat.suffix}</span>
              </div>
              <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[#2D4356] opacity-40 group-hover:opacity-100 transition-opacity">
                {stat.label}
              </p>
              <div className="h-1 w-8 bg-[#FFD700] mt-4 rounded-full transition-all duration-500 group-hover:w-16" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;