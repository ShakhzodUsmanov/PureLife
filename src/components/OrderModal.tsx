"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ProductItem } from "@/data/products";
import { X, CheckCircle2, ShoppingBag, Send, ShieldCheck } from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  product: ProductItem | null;
  selectedWeight?: string;
  onClose: () => void;
}

export default function OrderModal({
  isOpen,
  product,
  selectedWeight,
  onClose,
}: OrderModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Ташкент");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setQuantity(1);
    }
  }, [isOpen, product]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const productTitle = product
    ? `${product.name} — ${product.scentOrLine}`
    : "Продукция PureLife (Индивидуальный заказ)";

  const formatText = selectedWeight || product?.specs.baseSpec || "4 кг / Стандарт";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 z-10 p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
          aria-label="Закрыть окно"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-[#0E253A] mb-2">
              Заявка успешно принята!
            </h3>
            <p className="text-slate-600 text-sm max-w-sm mx-auto mb-6">
              Спасибо, <strong className="text-slate-800">{name}</strong>. Наш менеджер свяжется с вами по номеру <strong className="text-slate-800">{phone}</strong> в течение 15 минут для подтверждения деталей и адреса доставки.
            </p>
            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-left text-xs mb-6 text-slate-700 space-y-1">
              <div><strong>Выбранный товар:</strong> {productTitle}</div>
              <div><strong>Объем/Вес:</strong> {formatText}</div>
              <div><strong>Количество:</strong> {quantity} шт.</div>
              <div><strong>Город:</strong> {city}</div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#0284C7] to-[#0E253A] shadow-md hover:shadow-lg transition-all"
            >
              Отлично, понятно
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0284C7] uppercase tracking-wider mb-2">
              <ShoppingBag className="w-4 h-4" />
              Быстрое оформление заказа
            </div>
            <h3 id="order-modal-title" className="text-2xl font-extrabold text-[#0E253A] mb-1">
              Заказ продукции PureLife
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Прямая поставка со склада производителя с гарантией оригинальности формулы.
            </p>

            {/* Selected Product Summary Box */}
            <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
              {product?.image && (
                <div className="relative w-14 h-16 rounded-xl bg-white border border-slate-200 shrink-0 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="60px"
                    className="object-contain p-1"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-slate-900 truncate">
                  {productTitle}
                </div>
                <div className="text-[11px] text-slate-500">
                  Формат: <span className="font-semibold text-slate-700">{formatText}</span>
                </div>
                <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">
                  ✓ В наличии на складе
                </div>
              </div>

              {/* Quantity Counter */}
              <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden shrink-0">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-2.5 py-1 text-sm font-bold text-slate-600 hover:bg-slate-100"
                >
                  -
                </button>
                <span className="px-2.5 py-1 text-xs font-bold text-slate-800">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-2.5 py-1 text-sm font-bold text-slate-600 hover:bg-slate-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Иван Петров / Алишер"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Телефон или Telegram *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+998 90 123-45-67"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Город / Регион
                  </label>
                  <input
                    type="text"
                    placeholder="Ташкент, Самарканд..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#0284C7] to-[#0E253A] hover:from-[#0369A1] hover:to-[#071524] shadow-md shadow-sky-600/20 hover:shadow-lg transition-all disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Отправка заявки...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Подтвердить заказ</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Конфиденциальность гарантирована. Оплата при получении.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
