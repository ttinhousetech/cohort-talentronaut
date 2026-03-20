"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  
  const outerX = useSpring(mouseX, { damping: 15, stiffness: 150 });
  const outerY = useSpring(mouseY, { damping: 15, stiffness: 150 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isVisible]);

  if (!mounted) return null;

  return (
    <div className={`fixed inset-0 pointer-events-none z-[99999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <motion.div
        className="absolute w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_rgba(255,77,41,0.5)]"
        style={{
          x: cursorX,
          y: cursorY,
          left: 0,
          top: 0,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="absolute w-8 h-8 border border-accent/40 rounded-full"
        style={{
          x: outerX,
          y: outerY,
          left: 0,
          top: 0,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
