"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS_POWDERS, ProductItem } from "@/data/products";
import { Send, Info, Sparkles } from "lucide-react";

interface PowdersSectionProps {
  onSelectComposition: (product: ProductItem) => void;
}

export default function PowdersSection({ onSelectComposition }: PowdersSectionProps) {
  const { t } = useLanguage();

  // Selected weight for powders
  const [powderWeights, setPowderWeights] = useState<Record<string, string>>({
    "powder-new-line": "1 кг",
    "powder-classic": "900 г",
  });

  const getTelegramLink = (product: ProductItem, weight?: string) => {
    const text = `Здравствуйте! Хочу заказать ${product.name} (${product.scentOrLine})${
      weight ? `, вес ${weight}` : ""
    }. Подскажите стоимость и наличие.`;
    return `https://t.me/purelife_uz?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="powders" className="py-24 sm:py-32 bg-[#FAF8F4] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#10B981] mb-3 bg-[#10B981]/10 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.powders?.sectionTag || "Линейка порошков • PureLife Powder"}</span>
            </div>
            <h2 className="section-title text-[#0B1B2B] max-w-3xl">
              {t.powders?.title || "Стиральные порошки PureLife с активными гранулами"}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#526071] max-w-2xl font-normal leading-relaxed">
              {t.powders?.subtitle ||
                "Специальная грануляция Activ Granules для быстрого расщепления сложных пятен, сияющей белизны и защиты цвета."}
            </p>
          </div>
        </div>

        {/* Powders List: Full-Width Sensory Cards */}
        <div className="space-y-12 sm:space-y-20">
          {PRODUCTS_POWDERS.map((powder, index) => {
            const isEven = index % 2 === 1;
            const powderBg = powder.id === "powder-new-line" ? "#E6FBF2" : "#EBF5FB";
            const currentWeight =
              powderWeights[powder.id] || (powder.id === "powder-new-line" ? "1 кг" : "900 г");

            const activeOption = powder.weightOptions?.find(
              (opt) => opt.weight.startsWith(currentWeight) || opt.label.includes(currentWeight)
            );
            const activeImage = activeOption?.image || powder.image;

            return (
              <div
                key={powder.id}
                className="rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 lg:p-16 transition-all duration-500 overflow-hidden relative shadow-xs"
                style={{ backgroundColor: powderBg }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Left or Right Content Block */}
                  <div
                    className={`lg:col-span-7 flex flex-col items-start ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0B1B2B]/70 mb-4">
                      {powder.badge}
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
                        {t.powders?.packFormat || t.products?.packFormat || "Формат упаковки:"}
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
                          {t.powders?.tempRange || "30°C–90°C"}
                        </div>
                        <div className="text-xs sm:text-sm text-[#0B1B2B]/70 font-semibold mt-0.5">
                          {t.powders?.tempLabel || "температурный диапазон"}
                        </div>
                      </div>

                      <div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B] font-display">
                          {t.powders?.chlorineFree || "0%"}
                        </div>
                        <div className="text-xs sm:text-sm text-[#0B1B2B]/70 font-semibold mt-0.5">
                          {t.powders?.chlorineLabel || "хлора и токсичных примесей"}
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
                        <span>
                          {t.powders?.orderWeightTelegram
                            ? t.powders.orderWeightTelegram.replace("{weight}", currentWeight)
                            : `Заказать ${currentWeight} в Telegram`}
                        </span>
                      </a>

                      <button
                        type="button"
                        onClick={() => onSelectComposition(powder)}
                        className="btn-capsule bg-white/90 hover:bg-white text-[#0B1B2B] border border-black/10 flex items-center gap-2 shadow-xs cursor-pointer"
                      >
                        <Info className="w-4 h-4 text-[#526071]" />
                        <span>{t.powders?.compositionBtn || t.products?.compositionBtn || "Состав и дозировка"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Packshot Column with Dynamic Weight Switching */}
                  <div
                    className={`lg:col-span-5 relative flex items-center justify-center ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[380px] sm:h-[460px] flex items-center justify-center">
                      <div className="bottle-floor-shadow" />
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${powder.id}-${currentWeight}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.25 }}
                          className="relative w-full h-full flex items-center justify-center select-none"
                        >
                          <Image
                            src={activeImage}
                            alt={`${powder.name} — Стиральный порошок ${currentWeight}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 420px"
                            className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500 select-none"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
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
