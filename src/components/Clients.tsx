"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const clients = [
  {
    name: "Yugandhara",
    logo: "/images/clientlogo/yuglogo.png",
    category: "Global Conglomerate",
    description: "Leading the way in event management, sustainable agriculture, luxury products, and digital solutions, delivering excellence across global industries."
  },
  {
    name: "Vidyabhyasam",
    logo: "/images/clientlogo/vidyabhaysamlogo.png",
    category: "Education & Impact",
    description: "Vidyabhyasam is a post-school educational program that empowers underprivileged rural children with free food, academic support, and value-based learning."
  },
  {
    name: "ECS Seychelles",
    logo: "/images/clientlogo/ECSLogo.webp",
    category: "International Transportation",
    description: "Your trusted partner for international transportation, express courier services, customs brokerage, and freight solutions in Seychelles."
  },
  {
    name: "HKM Chennai",
    logo: "/images/clientlogo/iskon.png",
    category: "Spiritual & Community",
    description: "HKM Chennai is a spiritual temple promoting Krishna consciousness and community service."
  },
  {
    name: "Basil Woods Juniors",
    logo: "/images/clientlogo/bwjlogo.png",
    category: "Premium Preschool",
    description: "A values-based preschool in Thiruvanmiyur providing high-quality education and holistic development through an innovative, child-centric curriculum."
  },
  {
    name: "Parikh Renewables",
    logo: "/images/clientlogo/parikhlogo.png",
    category: "Renewable Energy",
    description: "Leading Solar EPC company in Aurangabad & Maharashtra, providing end-to-end solar solutions for industrial, commercial, and residential sectors."
  },
  {
    name: "VRP Global Partner",
    logo: "/images/clientlogo/vrplogo.png",
    category: "Versatile Solutions",
    description: "Based in Mumbai and established in 2021, VRP Global Partners is a versatile subsidiary of Switzerland’s LBA Global Partners. We provide high-quality solutions across immigration consultancy, digital marketing, and the global trade."
  }
];

export default function Clients() {
  const [activeClient, setActiveClient] = useState(clients[2]); // Default to ECS as in screenshot
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic for the logo slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveClient((current) => {
        const currentIndex = clients.indexOf(current);
        const nextIndex = (currentIndex + 1) % clients.length;
        return clients[nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clients" className="bg-black py-24 sm:py-32 relative overflow-hidden noise-bg">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="px-6 sm:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-[9px] font-black tracking-[0.4em] uppercase">Trusted Partners</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-5xl font-minion text-white mb-6 tracking-tight leading-[1.1]"
          >
            Empowering Visionary <span className="text-accent italic">Enterprises.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/40 leading-relaxed max-w-2xl font-medium"
          >
            We've partnered with industry leaders and disruptive innovators to bring their digital visions to life.
          </motion.p>
        </div>

        {/* Main Feature Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeClient.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative group lg:pr-10"
              >
                {/* Big Logo Representation / Watermark */}
                <div className="absolute -left-10 -top-10 text-[10rem] font-black text-white/[0.03] pointer-events-none select-none italic font-minion">
                  {activeClient.name.split(' ')[0]}
                </div>

                <div className="relative z-10">
                   <div className="flex items-center gap-4 mb-8">
                     <div className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-sm text-accent text-[10px] font-black tracking-[0.2em] uppercase">
                       {activeClient.category}
                     </div>
                   </div>

                   <h3 className="text-5xl sm:text-7xl font-minion text-white mb-8 tracking-tighter">
                     {activeClient.name}
                   </h3>

                   <p className="text-xl sm:text-2xl text-white/60 leading-relaxed font-medium mb-12 max-w-2xl">
                     {activeClient.description}
                   </p>

                   <div className="flex items-center gap-8">
                      <div className="flex items-center gap-3 group-hover:gap-5 transition-all cursor-pointer">
                        <span className="text-accent font-black text-xs tracking-widest uppercase">View Case Study</span>
                        <div className="w-8 h-[1px] bg-accent/40 group-hover:w-12 transition-all" />
                      </div>
                      <div className="h-8 w-[1px] bg-white/10" />
                      <div className="flex items-center gap-3">
                         <span className="text-white/20 text-[10px] font-bold tracking-widest uppercase italic">Partnered via VRP GLOBAL</span>
                      </div>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-5 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeClient.name}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="aspect-square relative flex items-center justify-center"
              >
                {/* Visual Frame */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl blur-[40px] opacity-20" />
                <div className="w-full h-full bg-[#0A0A0A] border border-white/5 rounded-3xl flex items-center justify-center p-20 shadow-2xl relative overflow-hidden group/logo">
                   {/* HUD Elements */}
                   <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-accent/40" />
                   <div className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-accent/40" />
                   
                   <div className="relative w-full h-full">
                    <Image 
                      src={activeClient.logo}
                      alt={activeClient.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain transition-all duration-700 p-8 grayscale-0"
                    />
                   </div>

                   {/* Scanning Effect */}
                   <motion.div 
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[1px] bg-accent/20 z-10 pointer-events-none"
                   />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Logo Slider / Marquee */}
        <div className="relative mt-20 group/marquee overflow-hidden py-4">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
          
          <div className="flex overflow-hidden">
            <motion.div 
              animate={{ 
                x: ["0%", "-50%"] 
              }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex items-center gap-8 px-4 min-w-max"
            >
              {/* Double the list for seamless loop */}
              {[...clients, ...clients].map((client, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveClient(client)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`
                    relative flex-shrink-0 w-56 h-32 rounded-[2rem] border transition-all duration-700
                    flex items-center justify-center p-10
                    ${activeClient.name === client.name 
                      ? 'bg-[#0A0A0A] border-accent/60 shadow-[0_0_50px_rgba(255,77,41,0.2)] bg-gradient-to-br from-accent/10 via-transparent to-transparent z-20' 
                      : 'bg-[#050505] border-white/[0.03] opacity-30 hover:opacity-100 hover:border-white/10'
                    }
                  `}
                >
                  <div className="relative w-full h-full">
                    <Image 
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className={`object-contain transition-all duration-700 ${activeClient.name === client.name ? 'scale-110 opacity-100' : 'opacity-40 group-hover:opacity-100'}`}
                    />
                  </div>
                  {activeClient.name === client.name && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-accent rounded-full shadow-[0_0_20px_rgba(255,77,41,1)]"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
