"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const criteria = [
  "You have a startup idea you believe in but haven't built anything yet",
  "You've been stuck in planning or \"almost ready\" mode for too long",
  "You want to move fast but don't have a full technical team to do it",
  "You're willing to commit real time and real resources to making this work",
  "You want to walk away with investor-ready assets, not just an MVP",
  "You're a solo founder or a small team — both are completely welcome"
];

export default function WhoItsFor() {
  return (
    <section id="who" className="bg-black py-24 sm:py-32 border-t border-white/5">
      <div className="px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block"
          >
            WHO IT'S FOR
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-minion text-white mb-8 tracking-tight"
          >
            You're Exactly Who We're Looking For If...
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 leading-relaxed"
          >
            We work with driven founders from anywhere in the world who are genuinely 
            ready to move. If any of the following sounds like you, apply today.
          </motion.p>
        </div>

        {/* Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {criteria.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-6 p-8 bg-white/[0.02] border-l-2 border-accent/30 hover:border-accent transition-colors group"
            >
              <Check className="w-5 h-5 text-accent shrink-0 mt-1 opacity-60 group-hover:opacity-100 transition-opacity" />
              <p className="text-white/60 group-hover:text-white transition-colors leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <p className="text-accent italic text-lg sm:text-xl font-minion tracking-wide">
            If you read that list and thought "that's me" — stop waiting and apply now.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
