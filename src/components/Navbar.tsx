"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-black/50 backdrop-blur-xl border-b border-white/5 h-20 sm:h-24">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 flex items-center justify-between">
        {/* Brand/Logo */}
        <a href="https://www.talentronaut.in/" target="_blank" rel="noopener noreferrer">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative flex items-center justify-center">
              <Image 
                src="/images/newlogo.png" 
                alt="Talentronaut Logo" 
                width={48} 
                height={48} 
                className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-xl sm:text-2xl font-minion tracking-tighter transition-colors flex items-center">
              <span className="text-[#ec5840]">Talent</span>
              <span className="text-[#606060]">ronaut</span>
            </span>
          </motion.div>
        </a>

        {/* Navigation Links - Staggered */}
        <div className="hidden md:flex items-center gap-12">
          {[
            { name: 'Program', href: '#program' },
            { name: 'Process', href: '#process' },
            { name: "Mentors", href: '#who' },
            { name: "Clients", href: '#clients' },
            // { name: "Hired", href: '#hired' },
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
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdT3LYQ5Oin00qFBfnqIniAg1tgCILy0wbdGtSMmPlq1qb4AQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-6 py-3 sm:px-8 sm:py-4 text-[10px] font-black tracking-[0.2em] uppercase hover:bg-accent hover:text-white transition-all transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.05)] text-center"
          >
            APPLY NOW
          </a>
        </motion.div>
      </div>
    </nav>
  );
}
