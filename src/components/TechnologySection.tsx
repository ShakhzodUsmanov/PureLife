"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, ThermometerSnowflake, Droplets, CheckCircle2 } from "lucide-react";

export default function TechnologySection() {
  const { t } = useLanguage();

  const items = [
    {
      stat: t.why.item1.stat,
      title: t.why.item1.title,
      desc: t.why.item1.desc,
      bg: "bg-[#DFF3FF]/50",
      accent: "#1E9BFF",
    },
    {
      stat: t.why.item2.stat,
      title: t.why.item2.title,
      desc: t.why.item2.desc,
      bg: "bg-[#EEE7FF]/50",
      accent: "#8B5CF6",
    },
    {
      stat: t.why.item3.stat,
      title: t.why.item3.title,
      desc: t.why.item3.desc,
      bg: "bg-[#FFE6F0]/50",
      accent: "#FF4F9A",
    },
  ];

  return (
    <section id="technology" className="py-24 sm:py-32 bg-[#FAF8F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading: Pure and confident */}
        <div className="max-w-2xl mb-16 sm:mb-24">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#526071] mb-3">
            {t.why.sectionTag}
          </div>
          <h2 className="section-title text-[#0B1B2B]">
            {t.why.title}
          </h2>
        </div>

        {/* 3 Bold Statements Grid: Large typography, asymmetric whitespace, no icons in boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-[36px] p-8 sm:p-10 flex flex-col justify-between border border-black/5 hover:-translate-y-1.5 transition-transform duration-300 ${item.bg}`}
            >
              <div>
                {/* Big Stat / Word */}
                <div
                  className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
                  style={{ color: item.accent }}
                >
                  {item.stat}
                </div>

                {/* Clear Headline */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0B1B2B] leading-tight mb-4">
                  {item.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="text-base sm:text-lg text-[#526071] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Verified Fact Footnote */}
              <div className="pt-8 mt-8 border-t border-black/10 flex items-center gap-2 text-xs font-bold text-[#0B1B2B]/75 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: item.accent }} />
                <span>Проверенное свойство формулы</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
