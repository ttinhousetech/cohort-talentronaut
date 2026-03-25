"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const hiredLogos = [
  { name: "Deloitte", logo: "/images/hiredlogo/Deloitte-Logo.png" },
  { name: "ADP", logo: "/images/hiredlogo/adpcompanylogo.png" },
  { name: "Oracle", logo: "/images/hiredlogo/oraclelogo.png" },
  { name: "Spheregen", logo: "/images/hiredlogo/spheregenlogo.png" },
  { name: "Valiance", logo: "/images/hiredlogo/valiancelogo.png" },
  { name: "Inorg Global", logo: "/images/hiredlogo/inorg-global.png" },
  { name: "V4C AI", logo: "/images/hiredlogo/v4cai.png" },
  { name: "University of Houston", logo: "/images/hiredlogo/univeristyofhostan-logo.png" },
  { name: "Elastic Teams", logo: "/images/hiredlogo/elasticteamslgoo.webp" },
  { name: "Penguine Apps", logo: "/images/hiredlogo/penguineappsloog.png" },
];

export default function Hired() {
  return (
    <section id="hired" className="bg-black py-24 sm:py-32 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="px-8 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-[9px] font-black tracking-[0.4em] uppercase">Talent Trajectory</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-minion text-white mb-6 tracking-tight"
          >
            Where Our Alumni <span className="text-accent italic">Make an Impact.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/40 max-w-2xl font-medium"
          >
            Graduates and talent from Talentronaut have been recruited by world-class 
            organizations and disruptive startups globally.
          </motion.p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {hiredLogos.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative h-40 bg-[#0A0A0A] border border-white/[0.05] rounded-[2rem] flex flex-col items-center justify-center p-6 hover:border-accent/30 transition-all duration-500 overflow-hidden"
            >
              {/* Internal Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Background spotlight for the logo to ensure visibility */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/10 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Logo Container with visibility boost - White Badge Style */}
              <div className="relative w-full h-20 mb-4 flex items-center justify-center p-4 rounded-xl bg-white shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 overflow-hidden">
                <Image 
                  src={item.logo}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 33vw, 20vw"
                  className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="flex flex-col items-center">
                 <span className="text-[9px] font-black tracking-[0.3em] text-white/30 uppercase group-hover:text-accent transition-colors duration-300">
                  RECRUITED BY
                 </span>
                 <span className="text-[11px] font-bold tracking-[0.1em] text-white/10 uppercase group-hover:text-white/90 transition-colors duration-300 mt-1">
                  {item.name}
                 </span>
              </div>

              {/* HUD Accents */}
              <div className="absolute top-4 right-4 w-4 h-[1px] bg-white/0 group-hover:bg-accent/40 transition-all" />
              <div className="absolute top-4 right-4 h-4 w-[1px] bg-white/0 group-hover:bg-accent/40 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
