"use client";

import Image from "next/image";
import { ProductItem } from "@/data/products";
import { X, Check, ShieldAlert, Sparkles, Thermometer, Info, Beaker } from "lucide-react";

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOrder: (product: ProductItem) => void;
}

export default function ProductModal({
  product,
  onClose,
  onOrder,
}: ProductModalProps) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      {/* Backdrop click dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-100 z-10 p-6 sm:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
          aria-label="Закрыть окно"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div
            className="relative w-full sm:w-44 h-52 sm:h-60 rounded-2xl p-2 shrink-0 flex items-center justify-center overflow-hidden border"
            style={{
              backgroundColor: `${product.accentColor}08`,
              borderColor: `${product.accentColor}30`,
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="200px"
              className="object-contain p-2"
            />
          </div>

          <div className="flex-1">
            <span
              className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2"
              style={{
                backgroundColor: `${product.accentColor}18`,
                color: product.accentColor,
              }}
            >
              {product.badge}
            </span>

            <h3 id="modal-product-title" className="text-2xl sm:text-3xl font-extrabold text-[#0E253A]">
              {product.name}
            </h3>
            <div className="text-lg font-bold text-slate-600 mb-2">
              {product.scentOrLine}
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              {product.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-lg bg-slate-100 font-semibold text-slate-700 flex items-center gap-1.5">
                <Thermometer className="w-3.5 h-3.5 text-sky-600" />
                {product.specs.temperatureRange}
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 font-semibold text-slate-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                {product.specs.baseSpec}
              </span>
            </div>
          </div>
        </div>

        {/* Ingredients Breakdown */}
        <div className="mt-8 border-t border-slate-100 pt-6">
          <h4 className="text-base font-bold text-[#0E253A] flex items-center gap-2 mb-4">
            <Beaker className="w-5 h-5 text-[#0284C7]" />
            Формула и активные компоненты
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-bold text-slate-800 block mb-1">Поверхностно-активные вещества (ПАВ):</span>
              <span className="text-slate-600">{product.composition.activeAgents}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-bold text-slate-800 block mb-1">Энзимный комплекс:</span>
              <span className="text-slate-600">{product.composition.enzymes}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-bold text-slate-800 block mb-1">Ароматическая композиция:</span>
              <span className="text-slate-600">{product.composition.fragrance}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-bold text-slate-800 block mb-1">Защитные микрокомпоненты:</span>
              <span className="text-slate-600">{product.composition.specialCare}</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-sky-50/70 border border-sky-100 text-xs text-slate-600">
            <strong className="font-bold text-slate-800">Полный международный состав (INCI): </strong>
            <span className="font-mono text-[11px] text-slate-600">{product.composition.fullInci}</span>
          </div>
        </div>

        {/* Safety & Care */}
        <div className="mt-6 border-t border-slate-100 pt-6">
          <h4 className="text-base font-bold text-[#0E253A] flex items-center gap-2 mb-3">
            <Info className="w-5 h-5 text-emerald-600" />
            Экологичность и безопасность
          </h4>
          <ul className="space-y-2">
            {product.safetyInfo.map((info, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{info}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Произведено по стандартам ISO 9001. Сертификат соответствия ЕАС.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Закрыть
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOrder(product);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] to-[#0E253A] shadow-md shadow-sky-600/20 hover:shadow-lg transition-all"
            >
              Заказать данный товар
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
