"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/translations";
import { Send, Menu, X, Phone } from "lucide-react";

interface HeaderProps {
  onOpenOrderModal?: () => void;
}

export default function Header({}: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.products, href: "#products" },
    { label: t.nav.why, href: "#technology" },
    { label: t.nav.calculator, href: "#calculator" },
    { label: t.nav.b2b, href: "#b2b" },
    { label: t.nav.faq, href: "#faq" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F4]/90 backdrop-blur-md shadow-xs py-3 border-b border-black/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-hidden"
            aria-label="PureLife Главная"
          >
            <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0B1B2B]">
              Pure<span className="text-[#1E9BFF]">Life</span>
            </span>
            <span className="w-2 h-2 rounded-full bg-[#1E9BFF] -mb-2" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-[#526071] hover:text-[#0B1B2B] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Lang + Telegram CTA */}
          <div className="hidden sm:flex items-center gap-4">
            
            {/* Language Selector */}
            <div className="flex items-center bg-black/5 rounded-full p-1 text-xs font-bold text-[#526071]">
              {(["RU", "UZ", "EN"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`px-2.5 py-1 rounded-full transition-all duration-150 cursor-pointer ${
                    language === lang
                      ? "bg-white text-[#0B1B2B] shadow-xs"
                      : "text-[#526071] hover:text-[#0B1B2B]"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Direct Telegram Link Button */}
            <a
              href="https://t.me/purelife_uz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-capsule btn-ink text-xs px-5 py-2.5 flex items-center gap-2 shadow-xs"
            >
              <Send className="w-3.5 h-3.5 text-[#1E9BFF]" />
              <span>{t.nav.telegramBtn}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0B1B2B] rounded-xl hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F4] border-b border-black/10 px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-[#0B1B2B] py-1 border-b border-black/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center bg-black/5 rounded-full p-1 text-xs font-bold text-[#526071]">
              {(["RU", "UZ", "EN"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    language === lang
                      ? "bg-white text-[#0B1B2B] shadow-xs"
                      : "text-[#526071]"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <a
              href="tel:+998712004488"
              className="flex items-center gap-1.5 text-xs font-bold text-[#0B1B2B]"
            >
              <Phone className="w-3.5 h-3.5 text-[#1E9BFF]" />
              <span>+998 (71) 200-44-88</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
