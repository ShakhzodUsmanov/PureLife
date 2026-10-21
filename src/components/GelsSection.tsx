"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS_GELS, ProductItem } from "@/data/products";
import { Send, Info, Droplets } from "lucide-react";

interface GelsSectionProps {
  onSelectComposition: (product: ProductItem) => void;
}

export default function GelsSection({ onSelectComposition }: GelsSectionProps) {
  const { t } = useLanguage();
  const [gelSides, setGelSides] = useState<Record<string, "front" | "back">>({});

  const getTelegramLink = (product: ProductItem) => {
    const text = `Здравствуйте! Хочу заказать ${product.name} (${product.scentOrLine}) 4 кг. Подскажите стоимость и наличие.`;
    return `https://t.me/purelife_uz?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="gels" className="py-24 sm:py-32 bg-[#FAF8F4] relative scroll-mt-20">
      {/* Anchor for backwards compatibility */}
      <div id="products" className="absolute -top-24 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1E9BFF] mb-3 bg-[#1E9BFF]/10 px-3.5 py-1.5 rounded-full">
              <Droplets className="w-3.5 h-3.5" />
              <span>{t.gels?.sectionTag || "Коллекция гелей • PureLife Liquid Gel"}</span>
            </div>
            <h2 className="section-title text-[#0B1B2B] max-w-3xl">
              {t.gels?.title || "Ультраконцентрированные гели для стирки 4 кг"}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#526071] max-w-2xl font-normal leading-relaxed">
              {t.gels?.subtitle ||
                "Чистота, созданная для уюта и мягкости. До 80 стирок в одной бутыли с защитой волокон от 30°C."}
            </p>
          </div>
        </div>

        {/* Gels List: Full-Width Sensory Cards */}
        <div className="space-y-12 sm:space-y-20">
          {PRODUCTS_GELS.map((gel, index) => {
            const isEven = index % 2 === 1;
            const scentBg =
              gel.id === "gel-alpine-fresh"
                ? "#DFF3FF"
                : gel.id === "gel-lavender-dream"
                ? "#EEE7FF"
                : "#FFE6F0";

            const scentThemeColor =
              gel.id === "gel-alpine-fresh"
                ? "#1E9BFF"
                : gel.id === "gel-lavender-dream"
                ? "#8B5CF6"
                : "#FF4F9A";

            const currentSide = gelSides[gel.id] || "front";
            const currentImage =
              currentSide === "back" && gel.imageBack ? gel.imageBack : gel.image;

            return (
              <div
                key={gel.id}
                className="rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 lg:p-16 transition-all duration-500 overflow-hidden relative shadow-xs"
                style={{ backgroundColor: scentBg }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Text & Specs Column */}
                  <div
                    className={`lg:col-span-7 flex flex-col items-start ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* Scent Index & Name */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0B1B2B]/70 mb-4">
                      <span>0{index + 1}</span>
                      <span>/</span>
                      <span>{gel.scentOrLine}</span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B2B] font-display leading-[1.08] mb-6">
                      {gel.id === "gel-alpine-fresh" && "Кристальная чистота белых и светлых вещей"}
                      {gel.id === "gel-lavender-dream" && "Вечерний уют и мягкость постельного белья"}
                      {gel.id === "gel-floral-bloom" && "Защита цвета и нежный весенний букет"}
                    </h3>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-[#0B1B2B]/85 font-normal leading-relaxed mb-8 max-w-xl">
                      {gel.subtitle}. Мягкие биоразлагаемые ПАВ и комплекс энзимов бережно расщепляют пятна уже при 30°C.
                    </p>

                    {/* 2 Clear Highlights */}
                    <div className="grid grid-cols-2 gap-4 w-full max-w-lg mb-10 pt-6 border-t border-[#0B1B2B]/10">
                      <div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B] font-display">
                          ~80
                        </div>
                        <div className="text-xs sm:text-sm text-[#0B1B2B]/70 font-semibold mt-0.5">
                          {t.gels?.washesCount || t.products?.washesCount || "стирок в бутыли 4 кг"}
                        </div>
                      </div>

                      <div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B] font-display">
                          от 30°C
                        </div>
                        <div className="text-xs sm:text-sm text-[#0B1B2B]/70 font-semibold mt-0.5">
                          {t.gels?.tempActivation || t.products?.tempActivation || "температура активации"}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons: Telegram + Состав */}
                    <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                      <a
                        href={getTelegramLink(gel)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-capsule text-white shadow-md hover:shadow-lg flex items-center gap-2"
                        style={{ backgroundColor: scentThemeColor }}
                      >
                        <Send className="w-4 h-4" />
                        <span>{t.gels?.orderTelegram || t.products?.orderTelegram || "Заказать в Telegram"}</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => onSelectComposition(gel)}
                        className="btn-capsule bg-white/90 hover:bg-white text-[#0B1B2B] border border-black/10 flex items-center gap-2 shadow-xs cursor-pointer"
                      >
                        <Info className="w-4 h-4 text-[#526071]" />
                        <span>{t.gels?.compositionBtn || t.products?.compositionBtn || "Состав и дозировка"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Packshot Column with Front/Back Toggle */}
                  <div
                    className={`lg:col-span-5 relative flex flex-col items-center justify-center ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[380px] sm:h-[460px] flex items-center justify-center">
                      <div className="bottle-floor-shadow" />

                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${gel.id}-${currentSide}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.25 }}
                          className="relative w-full h-full flex items-center justify-center select-none"
                        >
                          <Image
                            src={currentImage}
                            alt={`${gel.name} — ${gel.scentOrLine} (${
                              currentSide === "back"
                                ? t.gels?.viewBack || t.products?.viewBack || "Сзади"
                                : t.gels?.viewFront || t.products?.viewFront || "Спереди"
                            })`}
                            fill
                            sizes="(max-width: 768px) 100vw, 450px"
                            className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500 select-none"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Front / Back Toggle Buttons */}
                    {gel.imageBack && (
                      <div className="mt-3 z-10 inline-flex items-center bg-white/90 backdrop-blur-md rounded-full p-1 border border-black/5 shadow-xs">
                        <button
                          type="button"
                          onClick={() => setGelSides((prev) => ({ ...prev, [gel.id]: "front" }))}
                          className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                            currentSide === "front"
                              ? "bg-[#0B1B2B] text-white shadow-xs"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          {t.gels?.viewFront || t.products?.viewFront || "Спереди"}
                        </button>
                        <button
                          type="button"
                          onClick={() => setGelSides((prev) => ({ ...prev, [gel.id]: "back" }))}
                          className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                            currentSide === "back"
                              ? "bg-[#0B1B2B] text-white shadow-xs"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          {t.gels?.viewBack || t.products?.viewBack || "Сзади"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
