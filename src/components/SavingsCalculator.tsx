"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ProductItem, PRODUCTS_GELS } from "@/data/products";
import { Send, Droplets, Layers } from "lucide-react";

interface SavingsCalculatorProps {
  onOrderRecommended?: (product: ProductItem) => void;
}

export default function SavingsCalculator({}: SavingsCalculatorProps) {
  const { t } = useLanguage();
  const [washesPerWeek, setWashesPerWeek] = useState(4);
  const [selectedFormat, setSelectedFormat] = useState<"gel" | "powder">("gel");

  const totalWashes = selectedFormat === "gel" ? 80 : 20;
  const productName = selectedFormat === "gel" ? "Гель PureLife 4 кг" : "Порошок PureLife 1 кг";
  const weeksDuration = Math.round(totalWashes / washesPerWeek);
  const monthsDuration = (weeksDuration / 4.3).toFixed(1);

  const telegramOrderLink = `https://t.me/purelife_uz?text=${encodeURIComponent(
    `Здравствуйте! Рассчитал расход на сайте: стираем ${washesPerWeek} раз в неделю. Хочу заказать ${productName}, которого хватит на ${weeksDuration} недель.`
  )}`;

  return (
    <section id="calculator" className="py-24 sm:py-32 bg-[#FAF8F4] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#526071] mb-3">
            {t.calculator.sectionTag}
          </div>
          <h2 className="section-title text-[#0B1B2B] mb-4">
            {t.calculator.title}
          </h2>
          <p className="text-base sm:text-lg text-[#526071]">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Simplified Calculator Card */}
        <div className="bg-white rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 border border-black/5 shadow-xl shadow-stone-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Form & Slider */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Product Type Toggle */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#526071] mb-3">
                  Средство для расчета:
                </label>
                <div className="grid grid-cols-2 gap-2 p-1.5 rounded-full bg-stone-100 border border-stone-200">
                  <button
                    type="button"
                    onClick={() => setSelectedFormat("gel")}
                    className={`py-3 px-4 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                      selectedFormat === "gel"
                        ? "bg-[#0B1B2B] text-white shadow-xs"
                        : "text-[#526071] hover:text-[#0B1B2B]"
                    }`}
                  >
                    <Droplets className="w-4 h-4 text-[#1E9BFF]" />
                    <span>Гель 4 кг</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedFormat("powder")}
                    className={`py-3 px-4 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                      selectedFormat === "powder"
                        ? "bg-[#0B1B2B] text-white shadow-xs"
                        : "text-[#526071] hover:text-[#0B1B2B]"
                    }`}
                  >
                    <Layers className="w-4 h-4 text-[#10B981]" />
                    <span>Порошок 1 кг</span>
                  </button>
                </div>
              </div>

              {/* Range Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-[#0B1B2B]">
                    {t.calculator.sliderLabel}
                  </span>
                  <span className="text-lg font-black font-display text-[#1E9BFF]">
                    {washesPerWeek} {t.calculator.sliderUnit}
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={washesPerWeek}
                  onChange={(e) => setWashesPerWeek(Number(e.target.value))}
                  className="w-full h-3 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#1E9BFF]"
                />
                
                <div className="flex justify-between text-xs font-semibold text-[#8A97A6] mt-2">
                  <span>1 стирка</span>
                  <span>5 стирок</span>
                  <span>10 стирок</span>
                </div>
              </div>

            </div>

            {/* Right Column: Honest Big Result Display */}
            <div className="lg:col-span-6 flex flex-col items-start justify-center p-8 sm:p-10 rounded-[32px] bg-[#DFF3FF]/40 border border-[#1E9BFF]/20">
              
              <div className="text-xs font-bold uppercase tracking-wider text-[#0369A1] mb-2">
                Результат расчета
              </div>

              {/* Big Result Text */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#0B1B2B] leading-tight mb-3">
                {t.calculator.resultPrefix} {weeksDuration} {t.calculator.resultSuffix}
              </div>

              <p className="text-base sm:text-lg text-[#526071] mb-8">
                Это примерно <strong>{monthsDuration} месяца</strong> чистого и свежего белья для вашей семьи из одного флакона.
              </p>

              {/* Telegram Order Action */}
              <a
                href={telegramOrderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-capsule btn-ink text-sm sm:text-base px-8 py-4 flex items-center gap-2.5 w-full sm:w-auto shadow-md"
              >
                <Send className="w-4 h-4 text-[#1E9BFF]" />
                <span>{t.calculator.orderBtn}</span>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
