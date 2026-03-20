"use client";

import { motion } from "framer-motion";

const programFeatures = [
  {
    number: "01",
    tag: "DEVELOPMENT",
    title: "Rapid MVP Development",
    description: "Your idea becomes a real, working product in 9 to 11 days. Not a mockup. Not a prototype. A functional MVP you can put in front of real users and investors immediately after the sprint ends."
  },
  {
    number: "02",
    tag: "BRAND",
    title: "Pitch Deck & Branding Assets",
    description: "You'll walk out with a professionally designed pitch deck and brand identity. No DIY slides. No generic templates. Assets built for your specific business to impress investors and customers alike."
  },
  {
    number: "03",
    tag: "STRATEGY",
    title: "Go-To-Market Strategy",
    description: "A GTM strategy that maps your product to its first customers — channels, messaging, positioning, and a launch plan. Built specifically for your startup, not copy-pasted from a playbook."
  },
  {
    number: "04",
    tag: "MENTORSHIP",
    title: "Mentorship & Product Validation",
    description: "Before you build the wrong thing, we help you validate the right one. We stress-test your idea, sharpen your business model, and confirm there's a real market behind what you're building."
  }
];

export default function Program() {
  return (
    <section id="program" className="bg-black py-24 sm:py-32 border-t border-white/5">
      <div className="px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block"
          >
            THE PROGRAM
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-minion text-white mb-8 tracking-tight"
          >
            Everything You Need to Launch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 leading-relaxed"
          >
            Being selected into Cohort 2.0 means you're not doing this alone. From day one, 
            our team works alongside you — building, strategizing, and launching together. 
            Here's exactly what every selected startup receives.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {programFeatures.map((feature, index) => (
            <FeatureCard 
              key={index}
              {...feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ number, tag, title, description, index }: any) {
  // Balanced borders for 2x2 grid on mobile and 1x4 on desktop
  const borderClasses = `
    border-white/10 p-8 sm:p-12 transition-all duration-500 hover:bg-white/[0.04] group relative overflow-hidden
    ${index === 0 ? 'md:border-r border-b' : ''}
    ${index === 1 ? 'border-b' : ''}
    ${index === 2 ? 'md:border-r border-b md:border-b-0' : ''}
  `;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className={borderClasses}
    >
      {/* Interactive Glow Element */}
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <span className="text-[10px] font-black tracking-[0.4em] text-accent mb-12 block">
          {number} — {tag}
        </span>
        <h3 className="text-3xl sm:text-4xl font-minion text-white mb-6 group-hover:text-accent transition-colors duration-500">
          {title}
        </h3>
        <p className="text-white/40 group-hover:text-white/60 transition-colors duration-500 leading-relaxed max-w-sm">
          {description}
        </p>
      </div>

      <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
        <span className="text-8xl font-minion text-white italic">{number}</span>
      </div>
    </motion.div>
  );
}
