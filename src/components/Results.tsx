"use client";

import { motion } from "framer-motion";

export default function Results() {
  return (
    <section className="bg-black py-24 sm:py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent border-[40px] border-accent/20 rounded-full blur-[120px] opacity-10 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-5 translate-y-1/2 -translate-x-1/4" />

      <div className="px-8 max-w-7xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block mx-auto"
          >
            FROM OUR FOUNDERS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-minion text-white mb-8 tracking-tight"
          >
            Results That Speak for Themselves
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 leading-relaxed mx-auto max-w-2xl text-center"
          >
            Cohort 2.0 is currently in progress. The founders selected are building right now — 
            and their results will be shared here the moment they launch. Apply today and let 
            your story be the first one told on this page.
          </motion.p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <ResultCard 
            title="Live"
            description="Cohort 2.0 in progress — founders are building right now"
            delay={0.3}
          />
          <ResultCard 
            title="You?"
            description="Apply and let your MVP & story be the first published here"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

function ResultCard({ title, description, delay }: { title: string; description: string; delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-10 sm:p-12 bg-white/[0.03] border border-white/5 text-left group hover:bg-white/[0.05] transition-all duration-500"
    >
      <h3 className="text-4xl font-minion text-accent mb-6">
        {title}
      </h3>
      <p className="text-white/40 leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}
