"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-black/50 backdrop-blur-xl border-b border-white/5 h-20 sm:h-24">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 flex items-center justify-between">
        {/* Brand/Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden bg-white/5 rounded-sm border border-white/10 flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" 
            />
            <Image 
              src="/images/newlogo.png" 
              alt="Talentronaut Logo" 
              width={32} 
              height={32} 
              className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 object-contain transition-transform group-hover:scale-110"
            />
          </div>
          <span className="text-xl sm:text-2xl font-minion text-white tracking-tighter group-hover:text-accent transition-colors">
            Talentronaut
          </span>
        </motion.div>

        {/* Navigation Links - Staggered */}
        <div className="hidden md:flex items-center gap-12">
          {[
            { name: 'Program', href: '#program' },
            { name: 'Process', href: '#process' },
            { name: "Mentors", href: '#who' },
            { name: 'FAQ', href: '#faq' }
          ].map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i + 0.5 }}
              className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 hover:text-accent transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <button className="bg-white text-black px-6 py-3 sm:px-8 sm:py-4 text-[10px] font-black tracking-[0.2em] uppercase hover:bg-accent hover:text-white transition-all transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            APPLY NOW
          </button>
        </motion.div>
      </div>
    </nav>
  );
}
