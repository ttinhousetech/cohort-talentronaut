"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    name: "Rohan Mathur",
    startup: "FinFlow",
    photo: "/testimonials/rohan.png",
    quote: "Building in India is hard, but with the cohort's support, we reached $50k MRR faster than I ever thought possible.",
    metricValue: "$50k+",
    metricLabel: "MRR in 3 months",
    batch: "Cohort 1.0"
  },
  {
    name: "Ananya Iyer",
    startup: "HealthSync",
    photo: "/testimonials/ananya.png",
    quote: "The design-first approach really helped us stand out in the competitive health-tech space in India.",
    metricValue: "$1.5M",
    metricLabel: "Raised Seed Round",
    batch: "Cohort 1.0"
  },
  {
    name: "Vikram Singh",
    startup: "LogiSmart",
    photo: "/testimonials/vikram.png",
    quote: "Speed is everything. We pivoted and found product-market fit in just 11 days. Simply insane.",
    metricValue: "25k+",
    metricLabel: "Active Monthly Users",
    batch: "Cohort 2.0"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle mobile swipe/scroll detection to update dots
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const width = container.offsetWidth;
      // Account for gap (10px * 4 units in Tailwind is 40px)
      const gap = 40; 
      const index = Math.round(scrollLeft / (width + (window.innerWidth < 768 ? gap : 0)));
      
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <section className="bg-black py-24 sm:py-32 border-t border-white/5 relative overflow-hidden">
      {/* Immersive Background Atmosphere */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/20 border-accent/10 rounded-full blur-[150px] opacity-10 -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] opacity-5 translate-y-1/2 translate-x-1/4" />
      
      {/* Technical Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none opacity-20 [mask-image:radial-gradient(black,transparent_80%)]" />

      <div className="px-6 sm:px-8 max-w-7xl mx-auto relative z-10">
        {/* Section Header - Elevated */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-[9px] font-black tracking-[0.4em] uppercase">Social Proof</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-5xl font-minion text-white mb-10 tracking-tight leading-[1.1]"
          >
            Real Founders. <span className="text-accent italic">Real Scale.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-lg text-white/40 leading-relaxed mx-auto max-w-2xl font-medium"
          >
            Our alumni are building market-shifting companies at world-class speed.
            These aren't just success stories—they're benchmarks.
          </motion.p>
        </div>

        {/* Responsive Testimonial Container */}
        <div className="relative group/container">
          {/* Main Grid / Slider - Enhanced Depth */}
          <div 
            ref={containerRef}
            className="flex md:grid flex-nowrap md:grid-cols-3 gap-6 sm:gap-10 max-w-6xl mx-auto overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-4 sm:px-0"
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-[85vw] sm:w-[400px] md:w-auto snap-center shrink-0">
                <TestimonialCard data={t} delay={0.2 + i * 0.1} />
              </div>
            ))}
          </div>

          {/* Mobile Scroll Indicators */}
          <div className="flex md:hidden justify-center items-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-accent" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ data, delay }: { data: typeof testimonials[0], delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="group relative p-1 leading-none rounded-2xl h-full flex flex-col"
    >
      {/* Outer Glow Effect on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-b from-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur" />
      
      <div className="relative p-10 bg-[#0A0A0A] border border-white/5 rounded-2xl flex flex-col h-full overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-accent/5 rounded-full blur-[60px] group-hover:bg-accent/10 transition-colors" />

        {/* Card Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Founder Profile - Advanced Header */}
          <div className="flex items-start justify-between mb-10">
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-tr from-accent/40 to-white/10 rounded-full opacity-20 group-hover:opacity-100 transition-opacity blur-[8px]" />
                <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 relative z-10 bg-black">
                  <Image 
                    src={data.photo} 
                    alt={data.name} 
                    fill
                    sizes="64px"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <h4 className="text-white font-bold text-xl tracking-tight leading-none mb-1">{data.name}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-accent text-[8px] font-black uppercase tracking-[0.2em]">{data.startup}</span>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-white/30 text-[8px] font-bold tracking-widest">{data.batch}</span>
                </div>
              </div>
            </div>
            {/* Visual Indicator of Authenticity */}
            <div className="text-white/5 group-hover:text-accent/20 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01705C7.91248 16 7.01705 16.8954 7.01705 18V21H4.01705C2.91248 21 2.01705 20.1046 2.01705 19V5C2.01705 3.89543 2.91248 3 4.01705 3H20.017C21.1216 3 22.017 3.89543 22.017 5V19C22.017 20.1046 21.1216 21 20.017 21H14.017Z" fillOpacity="0.1" />
              </svg>
            </div>
          </div>

          {/* Quote - Enhanced Legibility */}
          <div className="flex-grow py-4">
            <div className="relative">
              <span className="absolute -top-6 -left-4 text-6xl font-serif text-white/[0.03] pointer-events-none">"</span>
              <p className="text-white/70 leading-relaxed font-medium text-lg italic tracking-tight relative z-10">
                {data.quote}
              </p>
            </div>
          </div>

          {/* Result Metric - HUD Style Footer */}
          <div className="pt-10 mt-auto">
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-accent/20 transition-all duration-500 relative overflow-hidden">
               {/* Particle Sparkle on Hover */}
               <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
               
              <div className="flex flex-col relative z-20">
                <span className="text-[10px] font-black tracking-[0.5em] text-white/30 uppercase mb-3 block group-hover:text-accent/60 transition-colors">Performance Metric</span>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl lg:text-5xl font-minion text-white tracking-tighter group-hover:text-accent transition-colors duration-500">{data.metricValue}</span>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/20">{data.metricLabel}</span>
                </div>
              </div>
              
              {/* Animated HUD Corner */}
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-accent/20 group-hover:border-accent/60 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
