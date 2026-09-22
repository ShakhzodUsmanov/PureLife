import Link from "next/link";
import { Droplets, Sparkles, Phone, Mail, MapPin, Send, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071524] text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0284C7] to-[#10B981] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#0E253A] rounded-[10px] flex items-center justify-center">
                  <Droplets className="w-4 h-4 text-sky-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black text-white tracking-tight">
                    Pure<span className="text-[#0284C7]">Life</span>
                  </span>
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 -mt-1">
                  Home Care & Laundry Tech
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Инновационные средства бытовой химии европейского качества. Концентрированные гели для стирки 4 кг и порошки с активными энзимами для идеальной чистоты каждого дома.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                ISO 9001:2015
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300">
                EAC Сертифицировано
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Навигация
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Гели для стирки 4 кг
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Стиральные порошки
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-white transition-colors">
                  Формула и энзимы
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Калькулятор расхода
                </a>
              </li>
              <li>
                <a href="#b2b" className="hover:text-white transition-colors">
                  Оптовые поставки (B2B)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Вопросы и ответы
                </a>
              </li>
            </ul>
          </div>

          {/* Product Lines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Линейки средств
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                <span className="text-slate-300">Alpine Fresh & Clean (4 кг)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                <span className="text-slate-300">Lavender Dream (4 кг)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EC4899]" />
                <span className="text-slate-300">Floral Bloom (4 кг)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="text-slate-300">PureLife New Line (1 кг / 400 г)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span className="text-slate-300">Pure Life Classic (900 г / 300 г)</span>
              </li>
            </ul>
          </div>

          {/* Contact & B2B Channels */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Контакты завода и дистрибуции
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+998712004488" className="hover:text-white transition-colors font-medium">
                  +998 (71) 200-44-88 (Отдел опта)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:b2b@purelife-care.com" className="hover:text-white transition-colors">
                  b2b@purelife-care.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>
                  г. Ташкент, Сергелийский р-н, промзона Янги Сергели, стр. 44
                </span>
              </div>
              <div className="pt-2">
                <a
                  href="https://t.me/purelife_uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-sky-600/20 text-sky-300 hover:bg-sky-600/30 border border-sky-500/30 transition-colors font-medium"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram: @purelife_uz</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 ООО «PureLife Care Tech». Все права защищены.
          </div>
          <div className="flex items-center gap-4">
            <span>Политика конфиденциальности</span>
            <span>•</span>
            <span>Публичная оферта</span>
            <span>•</span>
            <span>Паспорта безопасности SDS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
