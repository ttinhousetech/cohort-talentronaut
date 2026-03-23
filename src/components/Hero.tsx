"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useMemo } from "react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-black flex flex-col pt-32 sm:pt-40 lg:pt-48 overflow-hidden group/hero noise-bg"
    >
      {/* Immersive Shutter Entrance Effect */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-[100] flex items-center justify-center pointer-events-none"
          >
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              className="h-[1px] bg-accent/50"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Light Portal Backdrop */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000 opacity-20 group-hover/hero:opacity-40"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,77,41,0.2) 0%, transparent 50%)`
        }}
      />

      {/* Moving Technical Grid - Parallax Layer */}
      <motion.div 
        style={{ 
          x: (mousePos.x - 50) * -0.2, 
          y: (mousePos.y - 50) * -0.2 
        }}
        className="absolute inset-0 opacity-[0.07] [mask-image:radial-gradient(white,transparent_75%)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(1500px)_rotateX(65deg)_translateY(-150px)_scale(2.5)]" />
      </motion.div>

      {/* Main Content Container */}
      <div className="flex-1 px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-20">
        {/* Left Content - Enhanced Entrance */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-fit flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12 shadow-[0_0_30px_rgba(255,77,41,0.1)]"
          >
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-accent animate-ping" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/90">
              SECURE YOUR SLOT • COHORT 2.0
            </span>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,8vw,5.5rem)] font-minion leading-[0.95] text-white max-w-4xl tracking-tight"
            >
              <span className="block mb-2 opacity-90 group-hover/hero:opacity-100 transition-opacity">Launch Your</span>
              <span className="relative inline-block text-accent italic">
                Vision in 11 Days.
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="mt-12 max-w-xl text-lg sm:text-xl leading-relaxed text-white/50 font-medium"
          >
            <p>
              Don't build in isolation. We provide the 
              <span className="text-white/80"> design, strategy, and technical firepower </span>
              to materialize your idea at world-class speed.
            </p>
            <div className="mt-6 flex items-center gap-4 text-accent/80 font-bold uppercase tracking-widest text-[10px]">
              <div className="h-[1px] w-8 bg-accent/30" />
              Materializing Ideas Since 2024
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
            className="mt-16 flex flex-col sm:flex-row gap-8"
          >
            <a 
              href="https://forms.gle/xtfZ7jUtbDcZXCz56"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#fff] text-black px-12 py-5 font-bold text-sm tracking-[0.2em] uppercase transition-all hover:bg-accent hover:text-white shadow-[0_0_50px_rgba(255,255,255,0.1)] active:scale-95 w-full sm:w-fit overflow-hidden text-center"
            >
              <span className="relative z-10 font-black">APPLY NOW</span>
              <div className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
            </a>
            {/* <button className="relative px-12 py-5 text-white/80 font-bold text-sm tracking-[0.2em] uppercase group overflow-hidden border border-white/10 hover:border-white/40 transition-all active:scale-95 flex items-center gap-4 justify-center">
              <span className="relative z-10">THE PROCESS</span>
              <motion.div 
                whileHover={{ width: "100%" }}
                className="absolute inset-0 bg-white/5 w-0 transition-all duration-500"
              />
            </button> */}
          </motion.div>
        </div>

        {/* Right Content - Full Screen Space Hub Animation */}
        <div className="hidden lg:flex relative h-[650px] items-center justify-center perspective-[2500px]">
          <LaunchAnimation mousePos={mousePos} />
        </div>
      </div>

      {/* Bottom Interface Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-7xl mx-auto px-0 sm:px-8 mt-16 sm:mt-24 pb-16 relative z-30"
      >
        {[
          { category: "ACTIVE", label: "GLOBAL APPLICATIONS", color: "text-accent" },
          { category: "11", label: "DAYS TO LAUNCH", color: "text-accent" },
          { category: "24/7", label: "EXPERT SPRINTING", color: "text-accent" },
          { category: "V2.0", label: "CURRENT VERSION", color: "text-accent" },
        ].map((stat, i) => (
          <Stat key={i} {...stat} index={i} />
        ))}
      </motion.div>
    </section>
  );
}

function LaunchAnimation({ mousePos }: { mousePos: { x: number; y: number } }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particles = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      left: `${-250 + Math.random() * 500}px`,
      top: `${-300 + Math.random() * 600}px`,
      delay: Math.random() * 5,
      duration: 1.5 + Math.random() * 3,
      color: i % 5 === 0 ? "#ff4d29" : "#ffffff"
    }));
  }, []);

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center scale-125"
      style={{
        transform: `perspective(2000px) rotateY(${(mousePos.x - 50) * 0.15}deg) rotateX(${(mousePos.y - 50) * -0.15}deg)`
      }}
    >
      {/* Central Core Sphere - Energy Pulse */}
      <motion.div 
        animate={{ 
          scale: [1, 1.08, 1],
          boxShadow: [
            "0 0 60px rgba(255,77,41,0.2)",
            "0 0 120px rgba(255,77,41,0.4)", 
            "0 0 60px rgba(255,77,41,0.2)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-64 h-64 rounded-full border-[2px] border-accent/40 bg-black/40 backdrop-blur-2xl flex items-center justify-center relative z-20 group cursor-pointer"
      >
        <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_15s_linear_infinite]" />
        <div className="absolute inset-4 rounded-full border border-accent/20 animate-[spin_10s_linear_infinite_reverse]" />
        
        <div className="flex flex-col items-center">
          <span className="text-6xl font-minion text-accent italic tracking-tighter drop-shadow-[0_0_20px_rgba(255,77,41,0.8)]">MVP</span>
          <span className="text-[10px] font-black tracking-[0.3em] text-white/30 mt-2">CORE CORE_ENG</span>
        </div>

        {/* Dynamic Scan Line */}
        <motion.div 
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-4 right-4 h-[1px] bg-accent/60 z-30 opacity-50 shadow-[0_0_15px_rgba(255,77,41,1)]" 
        />
      </motion.div>

      {/* Multilayered Advanced Projections */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ rotate: [0, 360 * (i%2===0?1:-1)] }}
          transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
          className="absolute rounded-full border-[1px] border-white/[0.05]"
          style={{ width: `${400 + i * 140}px`, height: `${400 + i * 140}px` }}
        >
          {i > 0 && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-accent/40" />
          )}
        </motion.div>
      ))}

      {/* High-Fidelity Data Nodes */}
      <FloatingModule label="BRAND IDENTITY" delay={0} x="-220px" y="-180px" />
      <FloatingModule label="GO-TO-MARKET" delay={1} x="240px" y="-100px" />
      <FloatingModule label="DECK DESIGN" delay={2} x="-250px" y="180px" />
      <FloatingModule label="TECH STACK" delay={3} x="200px" y="220px" />

      {/* Global Particles / Speed Stars - Client Side Only */}
      {mounted && particles.map((p: any, i: number) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            y: [-300, 300],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0]
          }}
          transition={{ 
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay
          }}
          style={{
            left: p.left,
            top: p.top,
            backgroundColor: p.color
          }}
          className="absolute w-[2px] h-[2px] rounded-full pointer-events-none blur-[1px]"
        />
      ))}

      {/* Geometric Connecting Lines - Pulse */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        <motion.circle 
          cx="50%" cy="50%" r="320" 
          fill="none" stroke="white" strokeWidth="0.5" 
          strokeDasharray="5,15"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

function FloatingModule({ label, delay, x, y }: { label: string; delay: number; x: string; y: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        x: [x, (parseInt(x) + 15) + "px", x],
        y: [y, (parseInt(y) - 20) + "px", y]
      }}
      transition={{ 
        opacity: { duration: 1.5, delay: delay * 0.5 },
        x: { duration: 12 + delay, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 15 + delay, repeat: Infinity, ease: "easeInOut" }
      }}
      className="absolute px-5 py-3 border border-white/20 bg-black/60 backdrop-blur-xl rounded-sm z-30 flex items-center gap-3 group transition-all hover:border-accent/40"
    >
      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
      <span className="text-[11px] font-black text-white/50 group-hover:text-white transition-colors tracking-[0.3em] font-sans">{label}</span>
    </motion.div>
  );
}

function Stat({ category, label, index, color }: { category: string; label: string; index: number; color?: string }) {
  const containerClasses = `
    relative flex flex-col items-center justify-center py-12 px-6
    bg-[#050505]/60 border border-white/[0.08] rounded-[24px]
    group/stat overflow-hidden transition-all duration-500 
    hover:bg-[#0a0a0a]/80 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(255,77,41,0.15)]
    backdrop-blur-xl h-full
  `;

  return (
    <div className={containerClasses}>
      {/* Background Reflection Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-700 ease-out" />
      
      {/* Subtle Corner/Edge Accents */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500" />

      <motion.span 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className={`text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] font-minion ${color || 'text-white'} mb-3 sm:mb-5 tracking-tight relative z-10 drop-shadow-2xl group-hover/stat:scale-105 transition-transform duration-500 leading-none`}
        style={{
          textShadow: "0 0 40px rgba(255, 77, 41, 0.4)",
        }}
      >
        {category}
      </motion.span>
      <span className="text-[9px] sm:text-[11px] font-black tracking-[0.2em] sm:tracking-[0.4em] text-white/50 text-center uppercase relative z-10 group-hover/stat:text-white/90 transition-colors duration-300">
        {label}
      </span>
      
      {/* Interactive Line Pulse */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-accent w-0 group-hover/stat:w-1/2 transition-all duration-700 shadow-[0_0_10px_rgba(255,77,41,0.8)] rounded-full" />
    </div>
  );
}
