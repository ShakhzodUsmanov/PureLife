"use client";

import { useState } from "react";
import Image from "next/image";
import {
  PRODUCTS_GELS,
  PRODUCTS_POWDERS,
  ProductItem,
} from "@/data/products";
import {
  Sparkles,
  Droplets,
  CheckCircle,
  Eye,
  ShoppingCart,
  Layers,
  Scale,
  Zap,
} from "lucide-react";

interface ProductShowcaseProps {
  onQuickView: (product: ProductItem) => void;
  onOrder: (product: ProductItem, selectedWeight?: string) => void;
}

export default function ProductShowcase({
  onQuickView,
  onOrder,
}: ProductShowcaseProps) {
  const [activeTab, setActiveTab] = useState<"gels" | "powders">("gels");

  // Track weight options per powder product
  const [powderWeights, setPowderWeights] = useState<Record<string, string>>({
    "powder-new-line": "nl-1kg",
    "powder-classic": "classic-900g",
  });

  const handleSelectWeight = (productId: string, optionId: string) => {
    setPowderWeights((prev) => ({
      ...prev,
      [productId]: optionId,
    }));
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-[#FAFCFF] via-white to-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-xs font-bold uppercase tracking-wider text-[#0284C7] mb-4">
            <Droplets className="w-3.5 h-3.5" />
            Каталог официальной продукции PureLife
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E253A] tracking-tight mb-4">
            Премиальные решения для безупречной чистоты
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Строго выверенная рецептура: концентрированные формулы с немецкими энзимами, сохраняющие структуру тканей и обеспечивающие до 80 стирок.
          </p>

          {/* Tab Navigation */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80 shadow-inner">
            <button
              type="button"
              id="tab-gels"
              onClick={() => setActiveTab("gels")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                activeTab === "gels"
                  ? "bg-white text-[#0E253A] shadow-md shadow-slate-900/5 ring-1 ring-slate-200/50"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Droplets className="w-4 h-4 text-[#0284C7]" />
              <span>Гели для стирки (4 кг)</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-sky-100 text-[#0284C7] font-extrabold">
                3 аромата
              </span>
            </button>

            <button
              type="button"
              id="tab-powders"
              onClick={() => setActiveTab("powders")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                activeTab === "powders"
                  ? "bg-white text-[#0E253A] shadow-md shadow-slate-900/5 ring-1 ring-slate-200/50"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>Стиральные порошки</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-100 text-emerald-700 font-extrabold">
                2 линейки
              </span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: GELS SHOWCASE */}
        {/* ========================================================================= */}
        {activeTab === "gels" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS_GELS.map((product) => (
              <article
                key={product.id}
                className="group relative flex flex-col rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-300/60 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Luminous aura glow matching bottle scent */}
                <div
                  className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-60 transition-opacity group-hover:opacity-90"
                  style={{ backgroundColor: product.auraGlow }}
                />

                {/* Card Top: Badges */}
                <div className="p-6 pb-0 flex items-center justify-between z-10">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-xs"
                    style={{
                      backgroundColor: `${product.accentColor}15`,
                      color: product.accentColor,
                    }}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    {product.badge}
                  </span>

                  <span className="text-xs font-bold text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-full">
                    {product.specs.baseSpec}
                  </span>
                </div>

                {/* Product Image Stage */}
                <div className="relative aspect-[3/4] w-full p-4 flex items-center justify-center">
                  <div
                    className="absolute inset-8 rounded-full blur-2xl opacity-30"
                    style={{ backgroundColor: product.accentColor }}
                  />
                  <div className="relative w-full h-full">
                    <Image
                      src={product.image}
                      alt={`${product.name} - ${product.scentOrLine}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 pt-2 flex-1 flex flex-col justify-between z-10 bg-white">
                  <div>
                    <div className="text-xs font-bold tracking-wider uppercase text-slate-400 mb-1">
                      {product.name}
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0E253A] mb-1">
                      {product.scentOrLine}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                      {product.subtitle}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: product.accentColor }}
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onQuickView(product)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-400" />
                      <span>Состав</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onOrder(product)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white shadow-md transition-all hover:shadow-lg hover:opacity-95"
                      style={{
                        backgroundColor: product.accentColor,
                      }}
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Заказать</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: POWDERS SHOWCASE WITH WEIGHT SWITCHERS */}
        {/* ========================================================================= */}
        {activeTab === "powders" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PRODUCTS_POWDERS.map((product) => {
              const selectedOptionId =
                powderWeights[product.id] ||
                product.weightOptions?.[0]?.id ||
                "";
              const currentWeightOption =
                product.weightOptions?.find((opt) => opt.id === selectedOptionId) ||
                product.weightOptions?.[0];

              return (
                <article
                  key={product.id}
                  className="group relative flex flex-col md:flex-row rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-300/60 transition-all duration-300 overflow-hidden"
                >
                  {/* Subtle Aura Glow */}
                  <div
                    className="absolute -top-12 -left-12 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-50"
                    style={{ backgroundColor: product.auraGlow }}
                  />

                  {/* Left: Product Packshot */}
                  <div className="md:w-5/12 relative aspect-[3/4] md:aspect-auto p-4 flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
                    <div className="relative w-full h-full min-h-[280px]">
                      <Image
                        src={product.image}
                        alt={`${product.name} - ${product.scentOrLine}`}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Badge top left */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-2xs">
                        <Zap className="w-3 h-3 text-emerald-600" />
                        {product.id === "powder-new-line" ? "Activ Granules" : "Classic Eco"}
                      </span>
                    </div>
                  </div>

                  {/* Right: Info & Interactive Weight Switcher */}
                  <div className="md:w-7/12 p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold tracking-wider uppercase text-slate-400 mb-1">
                        {product.name}
                      </div>
                      <h3 className="text-2xl font-extrabold text-[#0E253A] mb-1">
                        {product.scentOrLine}
                      </h3>
                      <p className="text-xs text-slate-500 mb-4">
                        {product.subtitle}
                      </p>

                      {/* Weight Options Switcher (Pill/Button) */}
                      <div className="mb-5 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                          <span className="flex items-center gap-1">
                            <Scale className="w-3.5 h-3.5 text-slate-500" />
                            Выберите фасовку:
                          </span>
                          <span className="text-emerald-700 font-extrabold">
                            {currentWeightOption?.weight}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {product.weightOptions?.map((opt) => {
                            const isSelected = opt.id === selectedOptionId;
                            return (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => handleSelectWeight(product.id, opt.id)}
                                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all duration-200 flex flex-col items-center justify-center ${
                                  isSelected
                                    ? "bg-white text-[#0E253A] shadow-md ring-2 ring-emerald-500"
                                    : "bg-slate-200/60 text-slate-600 hover:bg-slate-200"
                                }`}
                              >
                                <span>{opt.label}</span>
                                <span className="text-[10px] font-semibold text-emerald-600">
                                  {opt.yieldWashes} стирок
                                </span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Dynamic Dosage Yield Callout */}
                        <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                          <span className="text-slate-500 font-medium">Ресурс упаковки:</span>
                          <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                            {currentWeightOption?.yieldDescription}
                          </span>
                        </div>
                      </div>

                      {/* Features */}
                      <ul className="space-y-2 mb-4">
                        {product.features.slice(0, 3).map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onQuickView(product)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-slate-400" />
                        <span>Быстрый просмотр</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onOrder(product, currentWeightOption?.weight)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Заказать ({currentWeightOption?.weight})</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
