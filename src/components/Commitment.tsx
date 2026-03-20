"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const options = [
  {
    id: "maximum",
    title: "Maximum Commitment",
    hours: "12 hours/day",
    description: "This is my only priority",
    price: "$1,200",
    badge: "ALL IN"
  },
  {
    id: "fully-dedicated",
    title: "Fully Dedicated",
    hours: "10 hours/day",
    description: "Treating this as primary focus",
    price: "$800"
  },
  {
    id: "serious",
    title: "Serious",
    hours: "8 hours/day",
    description: "Ready to invest and commit daily",
    price: "$500"
  },
  {
    id: "getting-started",
    title: "Getting Started",
    hours: "6 hours/day",
    description: "Committed to the process",
    price: "$300"
  },
  {
    id: "cant-invest",
    title: "Can't invest financially right now",
    description: "but can commit 8+ hours/day fully — reach out directly and let's talk.",
    isContact: true
  }
];

export default function Commitment() {
  const [selected, setSelected] = useState(options[0].id);

  return (
    <section className="bg-black py-24 sm:py-32 border-t border-white/5">
      <div className="px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block"
          >
            COMMITMENT
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-minion text-white mb-8 tracking-tight"
          >
            How Committed Are You?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 leading-relaxed"
          >
            We build with every founder willing to invest and commit. Select the option 
            that honestly reflects where you are right now — and we'll get to work.
          </motion.p>
        </div>

        {/* Selection List */}
        <div className="max-w-4xl space-y-3">
          {options.map((option, index) => {
            const isSelected = selected === option.id;
            return (
              <motion.button
                key={option.id}
                onClick={() => setSelected(option.id)}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`
                  w-full text-left p-6 sm:p-8 flex items-start sm:items-center gap-4 sm:gap-6 transition-all duration-300 relative overflow-hidden group
                  ${isSelected ? 'bg-accent text-white' : 'bg-white/[0.03] text-white/60 hover:bg-white/[0.06] border border-white/5'}
                `}
              >
                {/* Custom Radio Icon */}
                <div className={`
                  w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors mt-1 sm:mt-0
                  ${isSelected ? 'border-white' : 'border-white/20 group-hover:border-white/40'}
                `}>
                  {isSelected && (
                    <motion.div 
                      layoutId="radio-dot"
                      className="w-2.5 h-2.5 rounded-full bg-white" 
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-y-4 sm:gap-4">
                  <div className="pr-4">
                    <h3 className={`text-lg sm:text-xl font-bold ${isSelected ? 'text-white' : 'text-white'}`}>
                      {option.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-2 gap-y-1 mt-2 sm:mt-1">
                      {option.hours && (
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-white/80' : 'text-white/30'}`}>
                            {option.hours}
                          </span>
                          <span className={`${isSelected ? 'text-white/40' : 'text-white/10'} hidden sm:inline`}>•</span>
                        </div>
                      )}
                      <p className={`text-xs sm:text-sm leading-relaxed ${isSelected ? 'text-white/70' : 'text-white/40'}`}>
                        {option.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 border-t border-white/10 sm:border-0 pt-4 sm:pt-0 mt-2 sm:mt-0">
                    {option.badge && (
                      <span className="text-[9px] font-black tracking-widest bg-white/20 px-2 py-1 rounded-sm">
                        {option.badge}
                      </span>
                    )}
                    {option.price && (
                      <span className="text-xl sm:text-2xl font-minion font-bold tracking-tight">
                        {option.price}
                      </span>
                    )}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Footer Text */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-sm text-white/30 max-w-4xl italic"
        >
          Exact program fees are confirmed during your pitch call based on the scope of your project. 
          We keep it founder-friendly. Questions before applying? Reach out directly.
        </motion.p>
      </div>
    </section>
  );
}
