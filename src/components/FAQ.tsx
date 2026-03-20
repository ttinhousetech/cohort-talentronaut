"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this only for tech startups?",
    answer: "Not at all. We work with any idea that can be shaped into a functional MVP — whether that's a software product, a service platform, a marketplace, or something in between. If it solves a real problem, we can help you build it."
  },
  {
    question: "Do I need a co-founder or a team to apply?",
    answer: "No. Solo founders apply and get selected every cohort. During the program, our product, design, and strategy team fills in the gaps so you're never working alone."
  },
  {
    question: "What happens if I'm not selected?",
    answer: "Every applicant hears back from us — that's a promise. If you're not shortlisted, you receive a clear update. If you make it to the pitch call but aren't selected, we share honest feedback on why. We respect your time and your effort."
  },
  {
    question: "Can I apply if I'm based outside India?",
    answer: "Yes. The entire program runs remotely and we actively welcome international founders from anywhere in the world. Location is not a factor in selection. Your idea and your commitment are."
  },
  {
    question: "What exactly is an MVP — what will I have at the end?",
    answer: "An MVP is a real, working product — not a wireframe, not a mockup, not a slide deck. By the end of the sprint, you will have something you can actually put in front of users and get real feedback from. It is built to demonstrate your core value proposition and nothing more."
  },
  {
    question: "How long does the full program run beyond the MVP sprint?",
    answer: "The MVP itself is built in 9 to 11 days. The full program — including your pitch deck, branding, GTM strategy, and mentorship sessions — runs in parallel over 2 to 3 weeks total. Your exact timeline will be confirmed during onboarding after selection."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-black py-24 sm:py-32 border-t border-white/5">
      <div className="px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block"
          >
            QUESTIONS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-minion text-white mb-8 tracking-tight"
          >
            Things Founders Always Ask
          </motion.h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl space-y-0">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-t border-white/10"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-10 flex items-start gap-6 text-left group transition-all"
      >
        <span className="text-accent font-bold text-lg mt-0.5 shrink-0">Q</span>
        <div className="flex-1 flex items-center justify-between gap-4">
          <h3 className={`text-xl sm:text-2xl font-bold transition-colors ${isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
            {question}
          </h3>
          <ChevronDown className={`w-5 h-5 text-white/20 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent/50' : 'group-hover:text-white/40'}`} />
        </div>
      </button>
      
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pb-10 pl-6 sm:pl-[3.25rem] pr-8">
          <p className="text-base sm:text-lg text-white/40 leading-relaxed max-w-3xl">
            {answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
