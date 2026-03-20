"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    name: "Alex Rivers",
    startup: "Vesper AI",
    photo: "/testimonials/founder1.png",
    quote: "The most efficient accelerator experience. We went from prototype to first revenue in weeks.",
    metricValue: "$50k+",
    metricLabel: "MRR in 3 months"
  },
  {
    name: "Sarah Chen",
    startup: "Bloom Health",
    photo: "/testimonials/founder2.png",
    quote: "The network and design-first approach helped us secure our seed round and stand out.",
    metricValue: "$1.2M",
    metricLabel: "Raised Seed Round"
  },
  {
    name: "Marcus Thorne",
    startup: "Nexus Labs",
    photo: "/testimonials/founder3.png",
    quote: "Unmatched mentorship. The speed of execution within the cohort is contagious.",
    metricValue: "10k+",
    metricLabel: "Active Monthly Users"
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
      if (window.innerWidth < 768) {
        const index = Math.round(container.scrollLeft / container.offsetWidth);
        setActiveIndex(index);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-black py-24 sm:py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent border-[40px] border-accent/20 rounded-full blur-[120px] opacity-10 -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-5 translate-y-1/2 translate-x-1/4" />

      <div className="px-6 sm:px-8 max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 sm:mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block mx-auto text-center"
          >
            Social Proof
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-3xl font-minion text-white mb-8 tracking-tight text-center"
          >
            Real Founders. Real Results.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 leading-relaxed mx-auto max-w-2xl text-center"
          >
            See how founders from our previous cohorts are scaling their startups with speed and impact.
          </motion.p>
        </div>

        {/* Responsive Testimonial Container */}
        <div className="relative group">
          {/* Main Grid / Slider */}
          <div 
            ref={containerRef}
            className="
              grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto
              overflow-x-auto snap-x snap-mandatory scrollbar-hide
              flex md:grid
            "
          >
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-full md:min-w-0 snap-center px-2 sm:px-0">
                <TestimonialCard data={t} delay={0.2 + i * 0.1} />
              </div>
            ))}
          </div>

          {/* Mobile Dot Indicators */}
          <div className="flex md:hidden justify-center items-center gap-2 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  containerRef.current?.scrollTo({
                    left: i * containerRef.current.offsetWidth,
                    behavior: "smooth"
                  });
                }}
                className={`
                  h-1.5 transition-all duration-300 rounded-full
                  ${activeIndex === i ? 'w-8 bg-accent' : 'w-2 bg-white/10'}
                `}
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
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="p-8 sm:p-10 bg-white/[0.04] border border-white/10 relative group overflow-hidden flex flex-col h-full hover:bg-white/[0.07] hover:border-accent/30 transition-all duration-500 rounded-sm"
    >
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

      <div className="space-y-8 relative z-10 flex flex-col h-full">
        {/* Founder Profile - Top */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20 shrink-0 shadow-xl">
            <Image 
              src={data.photo} 
              alt={data.name} 
              width={56} 
              height={56} 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="flex-grow">
            <h4 className="text-white font-medium text-lg">{data.name}</h4>
            <p className="text-accent text-[10px] font-black uppercase tracking-[0.2em]">{data.startup}</p>
          </div>
        </div>

        {/* Quote - Middle */}
        <div className="flex-grow py-4 italic text-white/80 leading-relaxed text-sm lg:text-base">
          "{data.quote}"
        </div>

        {/* Result Metric - Bottom */}
        <div className="pt-8 border-t border-white/10 mt-auto">
          <div className="flex flex-col">
            <span className="text-4xl lg:text-5xl font-minion text-accent mb-1 drop-shadow-[0_0_15px_rgba(255,77,41,0.3)]">{data.metricValue}</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">{data.metricLabel}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
