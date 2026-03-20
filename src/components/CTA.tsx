"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-accent py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-black/5 blur-3xl" />
      </div>

      <div className="px-8 max-w-4xl mx-auto text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/80 text-[10px] font-bold tracking-[0.4em] uppercase mb-8 block"
        >
          APPLY NOW
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-minion text-white tracking-tight leading-none mb-4">
            Open for Founders
          </h2>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-minion text-white italic tracking-tight mb-10">
            Worldwide. No Limits.
          </p>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/90 text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-medium"
        >
          Every week you wait is a week someone else is already building. 
          Applications are open globally — if you're willing to commit, 
          we're ready to build with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link 
            href="/apply"
            className="inline-block bg-white text-accent px-10 py-5 font-bold text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 w-full sm:w-fit"
          >
            APPLY FOR COHORT 2.0
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <span className="text-white/40 text-xs tracking-widest font-mono">
            www.talentronaut.com
          </span>
        </motion.div>
      </div>
    </section>
  );
}
