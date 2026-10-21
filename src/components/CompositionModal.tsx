"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ProductItem } from "@/data/products";
import { Send, X, ShieldCheck } from "lucide-react";

interface CompositionModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export default function CompositionModal({ product, onClose }: CompositionModalProps) {
  if (!product) return null;

  const getTelegramLink = (prod: ProductItem) => {
    const text = `Здравствуйте! Хочу заказать ${prod.name} (${prod.scentOrLine}). Подскажите стоимость и наличие.`;
    return `https://t.me/purelife_uz?text=${encodeURIComponent(text)}`;
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
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
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {product.categoryName}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0B1B2B] mb-2">
            {product.name} — {product.scentOrLine}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 mb-8">
            {product.subtitle}
          </p>

          <div className="space-y-6 text-sm text-[#0B1B2B]">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-1.5">
                Активные компоненты
              </div>
              <div>{product.composition.activeAgents}</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-1.5">
                Энзимный комплекс
              </div>
              <div>{product.composition.enzymes}</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-1.5">
                Ароматическая композиция
              </div>
              <div>{product.composition.fragrance}</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-1.5">
                Полный состав (INCI)
              </div>
              <div className="text-xs font-mono text-slate-600 leading-relaxed">
                {product.composition.fullInci}
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
              href={getTelegramLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-capsule btn-ink text-sm px-6 py-3.5 flex items-center gap-2"
            >
              <Send className="w-4 h-4 text-[#1E9BFF]" />
              <span>Заказать в Telegram</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
