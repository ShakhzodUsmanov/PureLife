"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Droplets, Menu, X, Globe, PhoneCall } from "lucide-react";

interface HeaderProps {
  onOpenOrderModal?: () => void;
}

export default function Header({ onOpenOrderModal }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"RU" | "UZ" | "EN">("RU");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Продукция", href: "#products" },
    { label: "Формула чистоты", href: "#technology" },
    { label: "Преимущества", href: "#advantages" },
    { label: "Калькулятор", href: "#calculator" },
    { label: "Оптовикам / B2B", href: "#b2b" },
    { label: "Частые вопросы", href: "#faq" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm shadow-slate-900/5 py-3 border-b border-slate-100"
          : "bg-white/70 backdrop-blur-sm py-4 border-b border-slate-100/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1"
            aria-label="PureLife Главная"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0284C7] via-[#0E253A] to-[#10B981] p-0.5 shadow-md shadow-sky-500/15 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Droplets className="w-5 h-5 text-[#0284C7]" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-black tracking-tight text-[#0E253A]">
                  Pure<span className="text-[#0284C7]">Life</span>
                </span>
                <Sparkles className="w-4 h-4 text-emerald-500" />
              </div>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-500 -mt-1">
                Home Care & Laundry Tech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#0284C7] rounded-lg hover:bg-sky-50/60 transition-colors focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Language Switcher & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Selector Stub */}
            <div className="flex items-center bg-slate-100/90 rounded-full p-0.5 text-xs font-semibold text-slate-600 border border-slate-200/70">
              <Globe className="w-3.5 h-3.5 text-slate-400 ml-2 mr-1" />
              {(["RU", "UZ", "EN"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setCurrentLang(lang)}
                  className={`px-2 py-1 rounded-full transition-all duration-150 ${
                    currentLang === lang
                      ? "bg-white text-[#0E253A] shadow-xs font-bold"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                  aria-label={`Переключить язык на ${lang}`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Quick Consultation Link */}
            <a
              href="tel:+998712004488"
              className="p-2 text-slate-600 hover:text-[#0284C7] hover:bg-sky-50 rounded-lg transition-colors"
              title="Позвонить на горячую линию"
              aria-label="Телефон отдела продаж"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            {/* Main CTA */}
            <button
              type="button"
              id="header-cta-button"
              onClick={onOpenOrderModal}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] to-[#0E253A] hover:from-[#0369A1] hover:to-[#071524] shadow-md shadow-sky-600/20 hover:shadow-lg hover:shadow-sky-600/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:ring-2 focus:ring-sky-500"
            >
              <span>Оставить заявку / Купить</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-sky-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl p-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-sky-50 hover:text-[#0284C7] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase text-slate-500">Язык интерфейса</span>
              <div className="flex bg-slate-100 rounded-full p-0.5 text-xs font-semibold">
                {(["RU", "UZ", "EN"] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setCurrentLang(lang)}
                    className={`px-3 py-1 rounded-full ${
                      currentLang === lang ? "bg-white text-slate-900 shadow-xs" : "text-slate-500"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal?.();
              }}
              className="w-full py-3 px-4 rounded-xl text-center font-bold text-white bg-gradient-to-r from-[#0284C7] to-[#0E253A] shadow-md shadow-sky-600/20"
            >
              Оставить заявку / Купить
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
