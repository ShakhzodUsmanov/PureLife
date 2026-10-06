"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#FAF8F4] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#526071] mb-3">
            {t.faq.sectionTag}
          </div>
          <h2 className="section-title text-[#0B1B2B] mb-4">
            {t.faq.title}
          </h2>
          <p className="text-base sm:text-lg text-[#526071]">
            {t.faq.subtitle}
          </p>
        </div>

        {/* 5 Questions Accordion: Clean, large text, zero micro-category badges */}
        <div className="space-y-4">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-[28px] transition-all duration-200 border ${
                  isOpen
                    ? "bg-white border-black/10 shadow-lg shadow-stone-900/5"
                    : "bg-white/60 border-black/5 hover:border-black/15"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-6 px-7 sm:px-9 text-left flex items-center justify-between gap-6 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-lg sm:text-xl text-[#0B1B2B] leading-snug">
                    {item.q}
                  </span>

                  <span
                    className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center transition-colors ${
                      isOpen ? "bg-[#0B1B2B] text-white" : "bg-stone-100 text-[#526071]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 sm:px-9 pb-7 text-base sm:text-lg text-[#526071] leading-relaxed border-t border-black/5 pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
