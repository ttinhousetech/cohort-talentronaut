"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  {
    name: "Yugandhara",
    logo: "/images/clientlogo/yuglogo.png",
    link: "https://www.yugandhara.com/"
  },
  {
    name: "Vidyabhyasam",
    logo: "/images/clientlogo/vidyabhaysamlogo.png",
    link: "https://vidyabhyasam.org/"
  },
  {
    name: "ECS Seychelles",
    logo: "/images/clientlogo/ECSLogo.webp",
    link: "https://ecs.sc/"
  },
  {
    name: "Avenza",
    logo: "/images/newlogo/avenzalogo.png",
    link: "https://store.avenza.com/?srsltid=AfmBOorT5IL8eBFr128OCDQCnqPLBBFi6nwuvLMv-ViwraRDEENMkHJG"
  },
  {
    name: "Kylro",
    logo: "/images/newlogo/kylrologo.png",
    link: "https://klyro.co.in/?srsltid=AfmBOopTEtNFtCmLQw1NgKRQYoECTRXPFVHBwef5lRjR81rBMUUqfnwT"
  },
  {
    name: "Nexora",
    logo: "/images/newlogo/nexoralogo.png",
    link: "https://www.nexora.com/"
  },
  {
    name: "Trevix",
    logo: "/images/newlogo/trevixlogo.png",
    link: "https://www.trevixsystems.com/"
  },
  {
    name: "Zyra",
    logo: "/images/newlogo/zyralogo.png",
    link: "https://www.thezyra.in/"
  },
  {
    name: "DROR",
    logo: null,
    link: "#"
  },
  {
    name: "Parikh Renewables",
    logo: "/images/clientlogo/parikhlogo.png",
    link: "https://www.parikhrenewable.com/"
  },
  {
    name: "VRP Global Partner",
    logo: "/images/clientlogo/vrplogo.png",
    link: "#"
  }
];

export default function Clients() {
  return (
    <section id="clients" className="bg-black py-16 relative overflow-hidden noise-bg">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 rounded-full blur-[150px] pointer-events-none opacity-20" />
      
      <div className="px-6 max-w-7xl mx-auto relative z-10">
        {/* Small Heading */}
        <div className="flex flex-col items-center justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4"
          >
            <div className="w-1 h-1 rounded-full bg-accent" />
            <span className="text-accent text-[8px] font-black tracking-[0.4em] uppercase">Network</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase italic font-outfit"
          >
            Trusted by Visionary Startups
          </motion.h2>
        </div>

        {/* Logo Slider / Marquee */}
        <div className="relative group/marquee overflow-hidden">
          {/* Fading gradients on edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
          
          <div className="flex overflow-hidden">
            <motion.div 
              animate={{ 
                x: ["0%", "-50%"] 
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex items-center gap-12 px-4 min-w-max"
            >
              {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
                <a
                  key={i}
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex-shrink-0 w-44 h-20 flex items-center justify-center opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-500 z-20 cursor-pointer"
                >
                  <div className="relative w-full h-full p-4 flex items-center justify-center">
                    {client.logo ? (
                      <Image 
                        src={client.logo}
                        alt={client.name}
                        fill
                        sizes="200px"
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-white font-minion text-4xl tracking-tighter whitespace-nowrap">
                        {client.name}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
