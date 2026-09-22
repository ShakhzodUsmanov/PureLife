"use client";

import { useState } from "react";
import { Calculator, Sparkles, Droplets, ArrowRight, ShieldCheck, Leaf } from "lucide-react";
import { ProductItem, PRODUCTS_GELS, PRODUCTS_POWDERS } from "@/data/products";

interface SavingsCalculatorProps {
  onOrderRecommended: (product: ProductItem) => void;
}

export default function SavingsCalculator({
  onOrderRecommended,
}: SavingsCalculatorProps) {
  const [washesPerWeek, setWashesPerWeek] = useState(4);
  const [productType, setProductType] = useState<"gel" | "newline" | "classic">("gel");

  const monthlyWashes = Math.round(washesPerWeek * 4.33);
  const quarterlyWashes = washesPerWeek * 13;
  const annualWashes = washesPerWeek * 52;

  // Calculation parameters based on chosen product
  let productLabel = "Гель PureLife Liquid Gel 4 кг";
  let productYieldPerUnit = 80;
  let unitName = "бутыль (4 кг)";
  let dosageText = "50 мл (1 мерный колпачок)";
  let savingsPercent = 48;
  let plasticSavedKg = (annualWashes * 0.025).toFixed(1);
  let recommendedProduct: ProductItem = PRODUCTS_GELS[0];

  if (productType === "gel") {
    productLabel = "Гель PureLife 4 кг (Концентрат)";
    productYieldPerUnit = 80;
    unitName = "бутыли по 4 кг";
    dosageText = "50 мл (1 мерный колпачок)";
    savingsPercent = 48;
    recommendedProduct = PRODUCTS_GELS[0];
  } else if (productType === "newline") {
    productLabel = "Порошок PureLife New Line 1 кг";
    productYieldPerUnit = 20;
    unitName = "пачек по 1 кг";
    dosageText = "50 г активных гранул";
    savingsPercent = 40;
    recommendedProduct = PRODUCTS_POWDERS[0];
  } else {
    productLabel = "Порошок Pure Life Classic 900 г";
    productYieldPerUnit = 18;
    unitName = "пачек по 900 г";
    dosageText = "50-60 г на стандартную загрузку";
    savingsPercent = 35;
    recommendedProduct = PRODUCTS_POWDERS[1];
  }

  // Units needed for a quarter (3 months)
  const quarterUnits = Math.ceil(quarterlyWashes / productYieldPerUnit);
  // How long 1 unit lasts in weeks
  const oneUnitDurationWeeks = Math.round(productYieldPerUnit / washesPerWeek);
  const oneUnitDurationMonths = (productYieldPerUnit / (washesPerWeek * 4.33)).toFixed(1);

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-[#F8FAFC] to-[#FAFCFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Интерактивный калькулятор расхода и выгоды
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E253A] tracking-tight mb-4">
            Рассчитайте идеальный запас для вашей семьи
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Узнайте, сколько упаковок понадобится на месяц или квартал и сколько вы сэкономите благодаря ультраконцентрированной формуле.
          </p>
        </div>

        {/* Calculator Main Panel */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-sky-950/5 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Inputs */}
            <div className="lg:col-span-6 space-y-8">
              {/* Slider 1: Washes per week */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor="washes-range" className="text-sm font-bold text-[#0E253A]">
                    Количество стирок в неделю:
                  </label>
                  <span className="px-3.5 py-1 rounded-full bg-sky-50 text-[#0284C7] font-black text-base border border-sky-200">
                    {washesPerWeek} {washesPerWeek === 1 ? "стирка" : washesPerWeek < 5 ? "стирки" : "стирок"}
                  </span>
                </div>

                <input
                  id="washes-range"
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={washesPerWeek}
                  onChange={(e) => setWashesPerWeek(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0284C7]"
                />

                <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-2 px-1">
                  <span>1 (соло)</span>
                  <span>4 (семья с детьми)</span>
                  <span>10 (большой дом)</span>
                </div>
              </div>

              {/* Radio Group: Preference */}
              <div>
                <label className="block text-sm font-bold text-[#0E253A] mb-3">
                  Предпочтительный формат средства:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setProductType("gel")}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      productType === "gel"
                        ? "border-[#0284C7] bg-sky-50/70 shadow-sm ring-2 ring-sky-500/20"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs text-[#0E253A] mb-1">
                      <Droplets className="w-3.5 h-3.5 text-[#0284C7]" />
                      Гель 4 кг
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Концентрат ~80 стирок
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setProductType("newline")}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      productType === "newline"
                        ? "border-emerald-500 bg-emerald-50/70 shadow-sm ring-2 ring-emerald-500/20"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs text-[#0E253A] mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      New Line
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Active Granules 1 кг
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setProductType("classic")}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      productType === "classic"
                        ? "border-sky-500 bg-sky-50/70 shadow-sm ring-2 ring-sky-500/20"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs text-[#0E253A] mb-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0284C7]" />
                      Classic
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Экономная стирка 900 г
                    </div>
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 space-y-1.5">
                <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Leaf className="w-4 h-4 text-emerald-600" />
                  Рекомендуемая дозировка на 1 цикл:
                </div>
                <div className="text-slate-600 font-medium">
                  {dosageText} на 4–5 кг белья средней степени загрязнения.
                </div>
              </div>
            </div>

            {/* Right Column: Output Metrics & Callout */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#0E253A] to-[#163653] text-white shadow-xl relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />

                <span className="text-[11px] font-bold tracking-widest uppercase text-sky-300 block mb-1">
                  Персональный расчет расхода
                </span>
                <h3 className="text-xl sm:text-2xl font-black mb-6">
                  {productLabel}
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
                    <div className="text-xs text-slate-300 mb-1">Запас на 1 месяц:</div>
                    <div className="text-2xl font-black text-white">
                      {monthlyWashes} <span className="text-sm font-semibold text-sky-200">стирок</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      хватит 1 шт. на ~{oneUnitDurationMonths} мес.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
                    <div className="text-xs text-slate-300 mb-1">Запас на 3 месяца (квартал):</div>
                    <div className="text-2xl font-black text-emerald-400">
                      {quarterUnits} <span className="text-sm font-semibold text-white">{unitName}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      полное покрытие {quarterlyWashes} стирок
                    </div>
                  </div>
                </div>

                {/* Savings highlights */}
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 mb-6 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Экономия бюджета семьи:</span>
                    <span className="font-bold text-emerald-400 text-sm">до {savingsPercent}%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Всего стирок в год:</span>
                    <span className="font-bold text-white text-sm">{annualWashes} стирок</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Эко-эффект (меньше пластика):</span>
                    <span className="font-bold text-sky-300 text-sm">-{plasticSavedKg} кг/год</span>
                  </div>
                </div>

                {/* Order calculated quantity CTA */}
                <button
                  type="button"
                  onClick={() => onOrderRecommended(recommendedProduct)}
                  className="w-full py-3.5 px-6 rounded-2xl font-bold text-sm text-[#0E253A] bg-white hover:bg-slate-100 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Заказать рассчитанный объем</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
