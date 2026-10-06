"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS_GELS, PRODUCTS_POWDERS, ProductItem } from "@/data/products";
import { Send, Info, Droplets, Layers, X, ShieldCheck } from "lucide-react";

interface ProductShowcaseProps {
  onQuickView?: (product: ProductItem) => void;
  onOrder?: (product: ProductItem, selectedWeight?: string) => void;
}

export default function ProductShowcase({}: ProductShowcaseProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"gels" | "powders">("gels");
  const [selectedProductDetails, setSelectedProductDetails] = useState<ProductItem | null>(null);

  // Selected weight for powders
  const [powderWeights, setPowderWeights] = useState<Record<string, string>>({
    "powder-new-line": "1 кг",
    "powder-classic": "900 г",
  });

  const getTelegramLink = (product: ProductItem, weight?: string) => {
    const text = `Здравствуйте! Хочу заказать ${product.name} (${product.scentOrLine})${
      weight ? `, вес ${weight}` : " 4 кг"
    }. Подскажите стоимость и наличие.`;
    return `https://t.me/purelife_uz?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="products" className="py-24 sm:py-32 bg-[#FAF8F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#526071] mb-3">
              {t.products.sectionTag}
            </div>
            <h2 className="section-title text-[#0B1B2B] max-w-2xl">
              {t.products.title}
            </h2>
          </div>

          {/* Simple Tab Switcher */}
          <div className="inline-flex p-1.5 rounded-full bg-stone-200/70 border border-stone-300/60 self-start md:self-auto">
            <button
              type="button"
              id="showcase-tab-gels"
              onClick={() => setActiveTab("gels")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "gels"
                  ? "bg-[#0B1B2B] text-white shadow-sm"
                  : "text-[#526071] hover:text-[#0B1B2B]"
              }`}
            >
              <Droplets className="w-4 h-4" />
              <span>{t.products.tabGels}</span>
            </button>

            <button
              type="button"
              id="showcase-tab-powders"
              onClick={() => setActiveTab("powders")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "powders"
                  ? "bg-[#0B1B2B] text-white shadow-sm"
                  : "text-[#526071] hover:text-[#0B1B2B]"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{t.products.tabPowders}</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: GELS — FULL WIDTH SENSORY SCENES */}
        {/* ========================================================================= */}
        {activeTab === "gels" && (
          <div className="space-y-12 sm:space-y-20">
            {PRODUCTS_GELS.map((gel, index) => {
              const isEven = index % 2 === 1; // Alternating layout
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

              return (
                <div
                  key={gel.id}
                  className="rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 lg:p-16 transition-all duration-500 overflow-hidden relative"
                  style={{ backgroundColor: scentBg }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    
                    {/* Left or Right Content Block */}
                    <div
                      className={`lg:col-span-7 flex flex-col items-start ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      {/* Scent Number / Index */}
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

                      {/* Short Description */}
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
                            {t.products.washesCount}
                          </div>
                        </div>

                        <div>
                          <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B] font-display">
                            {gel.specs.temperatureRange.split("–")[0]}
                          </div>
                          <div className="text-xs sm:text-sm text-[#0B1B2B]/70 font-semibold mt-0.5">
                            {t.products.tempActivation}
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
                          <span>{t.products.orderTelegram}</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => setSelectedProductDetails(gel)}
                          className="btn-capsule bg-white/90 hover:bg-white text-[#0B1B2B] border border-black/10 flex items-center gap-2 shadow-xs cursor-pointer"
                        >
                          <Info className="w-4 h-4 text-[#526071]" />
                          <span>{t.products.compositionBtn}</span>
                        </button>
                      </div>
                    </div>

                    {/* Packshot Column */}
                    <div
                      className={`lg:col-span-5 relative flex items-center justify-center ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[380px] sm:h-[460px] flex items-center justify-center">
                        <div className="bottle-floor-shadow" />

                        <Image
                          src={gel.image}
                          alt={`${gel.name} — ${gel.scentOrLine}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 450px"
                          className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500 select-none"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: POWDERS */}
        {/* ========================================================================= */}
        {activeTab === "powders" && (
          <div className="space-y-12 sm:space-y-20">
            {PRODUCTS_POWDERS.map((powder, index) => {
              const isEven = index % 2 === 1;
              const powderBg = powder.id === "powder-new-line" ? "#E6FBF2" : "#EBF5FB";
              const currentWeight = powderWeights[powder.id] || "1 кг";

              return (
                <div
                  key={powder.id}
                  className="rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 lg:p-16 transition-all duration-500 overflow-hidden relative"
                  style={{ backgroundColor: powderBg }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    
                    <div
                      className={`lg:col-span-7 flex flex-col items-start ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0B1B2B]/70 mb-4">
                        Линейка порошков • PureLife Powder
                      </div>

                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B2B] font-display leading-[1.08] mb-4">
                        {powder.name}
                      </h3>

                      <p className="text-base sm:text-lg text-[#0B1B2B]/85 font-normal leading-relaxed mb-6 max-w-xl">
                        {powder.subtitle}
                      </p>

                      {/* Weight Selector */}
                      <div className="mb-8">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#0B1B2B]/60 mb-2.5">
                          {t.products.packFormat}
                        </div>
                        <div className="flex items-center gap-2">
                          {(powder.id === "powder-new-line"
                            ? ["1 кг", "400 г"]
                            : ["900 г", "300 г"]
                          ).map((w) => {
                            const isSelected = currentWeight === w;
                            return (
                              <button
                                key={w}
                                type="button"
                                onClick={() =>
                                  setPowderWeights((prev) => ({
                                    ...prev,
                                    [powder.id]: w,
                                  }))
                                }
                                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer ${
                                  isSelected
                                    ? "bg-[#0B1B2B] text-white shadow-sm"
                                    : "bg-white/80 text-[#0B1B2B] hover:bg-white"
                                }`}
                              >
                                {w}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* 2 Clear Highlights */}
                      <div className="grid grid-cols-2 gap-4 w-full max-w-lg mb-8 pt-6 border-t border-[#0B1B2B]/10">
                        <div>
                          <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B] font-display">
                            30°C–90°C
                          </div>
                          <div className="text-xs sm:text-sm text-[#0B1B2B]/70 font-semibold mt-0.5">
                            температурный диапазон
                          </div>
                        </div>

                        <div>
                          <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B] font-display">
                            0%
                          </div>
                          <div className="text-xs sm:text-sm text-[#0B1B2B]/70 font-semibold mt-0.5">
                            хлора и токсичных примесей
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                        <a
                          href={getTelegramLink(powder, currentWeight)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-capsule bg-[#0B1B2B] text-white shadow-md hover:bg-[#162E47] flex items-center gap-2"
                        >
                          <Send className="w-4 h-4 text-[#1E9BFF]" />
                          <span>Заказать {currentWeight} в Telegram</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => setSelectedProductDetails(powder)}
                          className="btn-capsule bg-white/90 hover:bg-white text-[#0B1B2B] border border-black/10 flex items-center gap-2 shadow-xs cursor-pointer"
                        >
                          <Info className="w-4 h-4 text-[#526071]" />
                          <span>{t.products.compositionBtn}</span>
                        </button>
                      </div>
                    </div>

                    <div
                      className={`lg:col-span-5 relative flex items-center justify-center ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[380px] sm:h-[460px] flex items-center justify-center">
                        <div className="bottle-floor-shadow" />
                        <Image
                          src={powder.image}
                          alt={`${powder.name} — Стиральный порошок`}
                          fill
                          sizes="(max-width: 768px) 100vw, 420px"
                          className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500 select-none"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Slide-over / Modal for Composition & Dosage */}
      <AnimatePresence>
        {selectedProductDetails && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-white rounded-[32px] p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                type="button"
                onClick={() => setSelectedProductDetails(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
                aria-label="Закрыть"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {selectedProductDetails.categoryName}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0B1B2B] mb-2">
                {selectedProductDetails.name} — {selectedProductDetails.scentOrLine}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-8">
                {selectedProductDetails.subtitle}
              </p>

              <div className="space-y-6 text-sm text-[#0B1B2B]">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-1.5">
                    Активные компоненты
                  </div>
                  <div>{selectedProductDetails.composition.activeAgents}</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-1.5">
                    Энзимный комплекс
                  </div>
                  <div>{selectedProductDetails.composition.enzymes}</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-1.5">
                    Ароматическая композиция
                  </div>
                  <div>{selectedProductDetails.composition.fragrance}</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-1.5">
                    Полный состав (INCI)
                  </div>
                  <div className="text-xs font-mono text-slate-600 leading-relaxed">
                    {selectedProductDetails.composition.fullInci}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-900 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong>Безопасность:</strong> 0% хлора, без фосфатов, смывается за 1 цикл полоскания.
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                <a
                  href={getTelegramLink(selectedProductDetails)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-capsule btn-ink text-sm px-6 py-3.5 flex items-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#1E9BFF]" />
                  <span>{t.products.orderTelegram}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
