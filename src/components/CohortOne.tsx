"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const highlights = [
  {
    title: "15+ MVPs Launched",
    desc: "From raw ideas to production-ready products in exactly 11 days.",
    metric: "100%",
    label: "Success Rate",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Demo Day Excellence",
    desc: "Founders presented to 50+ tier-1 VCs and angel investors from India and beyond.",
    metric: "$2.5M+",
    label: "Capital Raised",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "24/7 Expert Sprints",
    desc: "Round-the-clock technical support, design refinements, and strategy sessions.",
    metric: "264 hrs",
    label: "Deep Work",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Founders Community",
    desc: "Forming bonds that last beyond the cohort. Peer-to-peer accountability and support.",
    metric: "30+",
    label: "Founders",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

export default function CohortOne() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-24 sm:py-32 relative overflow-hidden border-t border-white/5">
      {/* Immersive HUD Backdrop */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] opacity-20 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] opacity-15 -translate-x-1/4 translate-y-1/4 pointer-events-none" />
      
      {/* Background Data Stream (Visual only) */}
      <div className="absolute inset-0 opacity-[0.03] overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-10 h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-0 left-40 h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-0 right-10 h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>

      <div className="px-6 sm:px-8 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Content - The Mission */}
          <div className="lg:w-1/2 flex flex-col pt-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 w-fit"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent text-[9px] font-black tracking-[0.4em] uppercase">Archive : Cohort 1.0</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-5xl font-minion text-white mb-10 tracking-tight leading-none"
            >
              What Happened in <br/>
              <span className="text-accent italic">The First Sprint.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/50 leading-relaxed mb-12 max-w-xl font-medium"
            >
              The first cohort was a masterclass in velocity. We didn't just build startups; we built a community of high-performance builders who refused to settle for mediocrity. 
            </motion.p>

            {/* Visual Stats Block */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div>
                <span className="text-4xl font-minion text-white block mb-2">15</span>
                <span className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase">Startups Built</span>
              </div>
              <div>
                <span className="text-4xl font-minion text-accent block mb-2">$2.5M+</span>
                <span className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase">Funding Unlocked</span>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Feature Grid */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`
                    relative p-8 rounded-2xl border transition-all duration-500 flex flex-col h-full overflow-hidden group
                    ${hoveredIndex === i ? 'bg-[#0A0A0A] border-accent/40 shadow-[0_0_30px_rgba(255,77,41,0.1)]' : 'bg-transparent border-white/5'}
                  `}
                >
                  {/* Decorative Glow inside card */}
                  <div className={`
                    absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-[40px] transition-opacity duration-500
                    ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'}
                  `} />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon HUD */}
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center mb-8 border transition-all duration-500
                      ${hoveredIndex === i ? 'bg-accent text-white border-accent' : 'bg-white/5 text-accent border-white/10'}
                    `}>
                      {h.icon}
                    </div>

                    <h3 className="text-white font-bold text-xl mb-4 tracking-tight group-hover:text-accent transition-colors">{h.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-8 flex-grow group-hover:text-white/60 transition-colors">
                      {h.desc}
                    </p>

                    {/* Metric HUD */}
                    <div className="mt-auto pt-6 border-t border-white/5">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-minion text-white">{h.metric}</span>
                        <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">{h.label}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progressive Scan Line */}
                  <motion.div 
                    initial={{ left: "-100%" }}
                    animate={hoveredIndex === i ? { left: "100%" } : { left: "-100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-accent/40 z-20 pointer-events-none"
                  />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Interface Edge */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
