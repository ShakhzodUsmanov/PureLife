"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDown, Send, Sparkles } from "lucide-react";

export interface ScentTheme {
  id: "alpine" | "lavender" | "bloom";
  name: string;
  nameRu: string;
  accent: string;
  softBg: string;
  subBg: string;
  deep: string;
  image: string;
  notes: string;
  telegramText: string;
}

export const SCENTS: ScentTheme[] = [
  {
    id: "alpine",
    name: "Alpine Fresh",
    nameRu: "Альпийская свежесть",
    accent: "#1E9BFF",
    softBg: "#DFF3FF",
    subBg: "#EDF8FF",
    deep: "#0369A1",
    image: "/images/products/alpine-fresh-gel.jpg",
    notes: "Ледниковый озон, горный бриз и чистота белого белья",
    telegramText: "Здравствуйте! Хочу заказать гель PureLife Alpine Fresh 4 кг",
  },
  {
    id: "lavender",
    name: "Lavender Dream",
    nameRu: "Лавандовый сон",
    accent: "#8B5CF6",
    softBg: "#EEE7FF",
    subBg: "#F5F0FF",
    deep: "#6D28D9",
    image: "/images/products/lavender-dream-gel.jpg",
    notes: "Прованская лаванда, вечерний уют и мягкость постели",
    telegramText: "Здравствуйте! Хочу заказать гель PureLife Lavender Dream 4 кг",
  },
  {
    id: "bloom",
    name: "Floral Bloom",
    nameRu: "Цветочное цветение",
    accent: "#FF4F9A",
    softBg: "#FFE6F0",
    subBg: "#FFF2F7",
    deep: "#BE185D",
    image: "/images/products/floral-bloom-gel.jpg",
    notes: "Магнолия, пион и защита цвета ярких вещей",
    telegramText: "Здравствуйте! Хочу заказать гель PureLife Floral Bloom 4 кг",
  },
];

interface HeroProps {
  onExploreProducts: () => void;
}

export default function Hero({ onExploreProducts }: HeroProps) {
  const { t } = useLanguage();
  const [activeScent, setActiveScent] = useState<ScentTheme>(SCENTS[0]);

  const handleSelectScent = (scent: ScentTheme) => {
    setActiveScent(scent);
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty("--scent-accent", scent.accent);
      document.documentElement.style.setProperty("--scent-soft", scent.softBg);
    }
  };

  const currentHeadlineAccent = t.hero.titlePart2[activeScent.id];

  return (
    <section
      id="hero"
      className="relative min-h-screen-svh flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden transition-colors duration-700"
      style={{
        backgroundColor: activeScent.subBg,
      }}
    >
      {/* Dynamic ambient organic aura in background */}
      <motion.div
        key={activeScent.id + "-bg"}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] rounded-full pointer-events-none -z-10 blur-3xl opacity-75"
        style={{
          background: `radial-gradient(circle, ${activeScent.softBg} 0%, rgba(250,248,244,0) 70%)`,
        }}
      />

      {/* Floating SVG bubbles/droplets with light animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-5">
        <svg
          className="absolute top-1/4 left-[8%] w-12 h-12 opacity-40 animate-float-slow"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="46" stroke={activeScent.accent} strokeWidth="3" fill="white" fillOpacity="0.3" />
          <path d="M35 32 Q45 22 55 25" stroke="white" strokeWidth="5" strokeLinecap="round" />
        </svg>

        <svg
          className="absolute top-2/3 left-[15%] w-8 h-8 opacity-35 animate-drift"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="45" stroke={activeScent.accent} strokeWidth="4" fill="white" fillOpacity="0.4" />
        </svg>

        <svg
          className="absolute top-1/5 right-[12%] w-16 h-16 opacity-35 animate-float-slow"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="46" stroke={activeScent.accent} strokeWidth="3" fill="white" fillOpacity="0.3" />
          <path d="M30 30 Q45 20 60 26" stroke="white" strokeWidth="6" strokeLinecap="round" />
        </svg>

        <svg
          className="absolute bottom-1/4 right-[8%] w-10 h-10 opacity-40 animate-drift"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="45" stroke={activeScent.accent} strokeWidth="4" fill="white" fillOpacity="0.4" />
        </svg>
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">
            
            {/* Scent Mood Pill indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/60 shadow-xs mb-8 transition-colors duration-300">
              <span
                className="w-2.5 h-2.5 rounded-full transition-colors duration-500"
                style={{ backgroundColor: activeScent.accent }}
              />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                {t.hero.badge}
              </span>
            </div>

            {/* Giant Headline with Character */}
            <h1 className="hero-title text-[#0B1B2B] mb-8">
              {t.hero.titlePart1}{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeScent.id + "-" + currentHeadlineAccent}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="inline-block italic transition-colors duration-500 underline decoration-wavy decoration-2"
                  style={{
                    color: activeScent.accent,
                    textDecorationColor: `${activeScent.accent}40`,
                  }}
                >
                  {currentHeadlineAccent}
                </motion.span>
              </AnimatePresence>
            </h1>

            {/* Subtitle - Exactly one clear statement */}
            <p className="text-lg sm:text-xl text-[#526071] font-normal leading-relaxed max-w-xl mb-10">
              {t.hero.subtitle}
            </p>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                id="hero-choose-scent-btn"
                onClick={onExploreProducts}
                className="btn-capsule btn-scent shadow-xl text-base px-9 py-4.5"
                style={{
                  backgroundColor: activeScent.accent,
                }}
              >
                <span>{t.hero.ctaChoose}</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href={`https://t.me/purelife_uz?text=${encodeURIComponent(activeScent.telegramText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-capsule bg-white/90 hover:bg-white text-[#0B1B2B] border border-slate-200/80 shadow-xs text-base px-6 py-4.5 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#1E9BFF]" />
                <span>{t.hero.ctaTelegram}</span>
              </a>
            </div>

            {/* Active Scent Notes Note */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 w-full max-w-lg flex items-center gap-3 text-sm text-[#526071]">
              <Sparkles className="w-4 h-4 shrink-0" style={{ color: activeScent.accent }} />
              <p className="line-clamp-1">
                <span className="font-bold text-[#0B1B2B]">{activeScent.nameRu}:</span> {activeScent.notes}
              </p>
            </div>
          </div>

          {/* Right Column: Hero Unboxed Packshot & Sensory Scent Switcher */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-4 lg:pt-0">
            
            {/* The Unboxed Packshot Stage */}
            <div className="relative w-full max-w-md h-[420px] sm:h-[500px] flex items-center justify-center">
              
              {/* Natural Floor Shadow */}
              <div className="bottle-floor-shadow" />

              {/* Animate Packshot Crossfade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScent.id}
                  initial={{ opacity: 0, scale: 0.94, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full flex items-center justify-center select-none"
                >
                  <Image
                    src={activeScent.image}
                    alt={`PureLife Liquid Gel 4 кг — ${activeScent.name}`}
                    fill
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 480px"
                    className="object-contain drop-shadow-xl hover:scale-[1.02] transition-transform duration-500"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Interactive Scent Switcher Bar */}
            <div className="mt-6 w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl p-2 border border-slate-200/80 shadow-lg shadow-slate-900/5">
              <div className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest py-1.5">
                {t.hero.switchLabel}
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {SCENTS.map((scent) => {
                  const isSelected = activeScent.id === scent.id;
                  return (
                    <button
                      key={scent.id}
                      type="button"
                      id={`scent-btn-${scent.id}`}
                      onClick={() => handleSelectScent(scent)}
                      className={`relative flex flex-col items-center justify-center py-2.5 px-2 rounded-2xl transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "bg-slate-900 text-white shadow-md"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span
                          className="w-3 h-3 rounded-full shrink-0"
                          style={{ backgroundColor: scent.accent }}
                        />
                        <span className="text-xs font-extrabold truncate">
                          {scent.name.split(" ")[0]}
                        </span>
                      </div>
                      <span
                        className={`text-[11px] truncate ${
                          isSelected ? "text-slate-300" : "text-slate-400"
                        }`}
                      >
                        {scent.name.split(" ")[1] || "Gel"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Subtle Marquee Strip at bottom of Hero */}
      <div className="w-full mt-10 border-y border-slate-200/60 bg-white/60 backdrop-blur-xs py-3 overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap text-xs font-extrabold tracking-widest uppercase text-[#526071]">
          {[1, 2, 3, 4].map((i) => (
            <span key={i} className="mx-6 flex items-center gap-6">
              {t.hero.marquee.map((item, idx) => (
                <span key={idx} className="flex items-center gap-6">
                  <span>{item}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
