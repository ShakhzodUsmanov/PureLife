"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Send, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0B1B2B] text-white pt-20 pb-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="max-w-md">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-3xl font-extrabold tracking-tight text-white">
                Pure<span className="text-[#1E9BFF]">Life</span>
              </span>
            </Link>
            <p className="text-base text-slate-400 leading-relaxed mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-[#1E9BFF]" />
              <span>{t.footer.city}</span>
            </div>
          </div>

          {/* Quick Nav Links (3–4 links only) */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Навигация
              </div>
              <ul className="space-y-3 text-base font-semibold text-slate-300">
                <li>
                  <a href="#products" className="hover:text-white transition-colors">
                    {t.nav.products}
                  </a>
                </li>
                <li>
                  <a href="#technology" className="hover:text-white transition-colors">
                    {t.nav.why}
                  </a>
                </li>
                <li>
                  <a href="#calculator" className="hover:text-white transition-colors">
                    {t.nav.calculator}
                  </a>
                </li>
                <li>
                  <a href="#b2b" className="hover:text-white transition-colors">
                    {t.nav.b2b}
                  </a>
                </li>
              </ul>
            </div>

            {/* Direct Contacts */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Связь с нами
              </div>
              <div className="space-y-3">
                <a
                  href="https://t.me/purelife_uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-base font-bold text-white hover:text-[#1E9BFF] transition-colors"
                >
                  <Send className="w-4 h-4 text-[#1E9BFF]" />
                  <span>@purelife_uz</span>
                </a>

                <a
                  href="tel:+998712004488"
                  className="flex items-center gap-2 text-base font-bold text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#1E9BFF]" />
                  <span>+998 (71) 200-44-88</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div>{t.footer.copyright}</div>
          <div className="text-xs text-slate-500">
            Жидкие гели и стиральные порошки PureLife
          </div>
        </div>

      </div>
    </footer>
  );
}
