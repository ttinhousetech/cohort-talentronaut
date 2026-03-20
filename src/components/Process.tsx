"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Apply",
    description: "Fill out our application form in about five minutes. Tell us your idea, who you are, and how serious you are about building. That's it."
  },
  {
    number: "02",
    title: "Get Shortlisted",
    description: "Our team personally reviews every application within 3 to 5 business days. Whether you make it or not, you will hear back from us. No ghosting."
  },
  {
    number: "03",
    title: "Pitch Call",
    description: "If shortlisted, you'll be invited to a 30-minute video call with our product team. Walk us through your vision, your market, and your plan. We ask the hard questions now so investors don't have to later."
  },
  {
    number: "04",
    title: "Final Selection",
    description: "Results are shared the same day as your pitch call. Selected founders are notified immediately. No week-long waits. No ambiguity."
  },
  {
    number: "05",
    title: "Build, Launch & Grow",
    description: "You're in. The sprint begins. Over the next 9 to 11 days, your idea becomes a product. By the end, you have an MVP, a pitch deck, a GTM strategy, and a clear path forward.",
    highlight: true
  }
];

export default function Process() {
  return (
    <section id="process" className="bg-black py-24 sm:py-32 border-t border-white/5">
      <div className="px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block"
          >
            THE PROCESS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-minion text-white mb-8 tracking-tight"
          >
            Simple. Fast. No Guessing.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 leading-relaxed"
          >
            We designed the process to be as straightforward as the program itself. 
            From the moment you apply to the day you launch, here's exactly what happens — and when.
          </motion.p>
        </div>

        {/* Steps List */}
        <div className="space-y-0 max-w-5xl">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                group relative border-t border-white/10 py-12 px-2 transition-all duration-500
                ${step.highlight ? 'bg-white/[0.02] border-b border-white/10' : ''}
                hover:bg-white/[0.03]
              `}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-20">
                {/* Step Number */}
                <div className="flex items-center gap-3 shrink-0 pt-1">
                  <span className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase whitespace-nowrap">
                    STEP {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 transition-colors group-hover:text-accent">
                    {step.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Subtle hover decorations */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
