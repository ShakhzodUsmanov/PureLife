"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Send, Phone, CheckCircle2, FileText } from "lucide-react";

export default function B2BSection() {
  const { t } = useLanguage();

  const telegramB2bLink = `https://t.me/purelife_uz?text=${encodeURIComponent(
    "Здравствуйте! Интересуют оптовые поставки продукции PureLife. Отправьте, пожалуйста, прайс-лист и коммерческое предложение."
  )}`;

  return (
    <section id="b2b" className="py-28 sm:py-36 bg-[#0B1B2B] text-white relative overflow-hidden">
      {/* Subtle organic ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E9BFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 sm:mb-20">
          
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1E9BFF] mb-4">
            {t.b2b.sectionTag}
          </div>

          <h2 className="section-title text-white mb-6">
            {t.b2b.title}
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
            {t.b2b.subtitle}
          </p>

        </div>

        {/* 3 Clear Advantage Bullets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <CheckCircle2 className="w-8 h-8 text-[#1E9BFF] mb-4" />
            <h3 className="text-lg font-bold text-white mb-2 font-display">
              Прямые цены завода
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              {t.b2b.point1}
            </p>
          </div>

          <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <CheckCircle2 className="w-8 h-8 text-[#10B981] mb-4" />
            <h3 className="text-lg font-bold text-white mb-2 font-display">
              Быстрая отгрузка
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              {t.b2b.point2}
            </p>
          </div>

          <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <CheckCircle2 className="w-8 h-8 text-[#8B5CF6] mb-4" />
            <h3 className="text-lg font-bold text-white mb-2 font-display">
              Документы и ЭДО
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              {t.b2b.point3}
            </p>
          </div>
        </div>

        {/* Action Buttons: Telegram + Direct Phone Call (Zero complex forms!) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href={telegramB2bLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-capsule bg-[#1E9BFF] hover:bg-[#0284C7] text-white text-base px-8 py-4.5 flex items-center justify-center gap-2.5 shadow-lg shadow-sky-500/20"
          >
            <Send className="w-4 h-4" />
            <span>{t.b2b.btnTelegram}</span>
          </a>

          <a
            href="tel:+998712004488"
            className="btn-capsule bg-white/10 hover:bg-white/15 text-white border border-white/20 text-base px-8 py-4.5 flex items-center justify-center gap-2.5"
          >
            <Phone className="w-4 h-4 text-[#1E9BFF]" />
            <span>{t.b2b.btnCall}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
