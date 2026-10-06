"use client";

import { useState } from "react";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import TechnologySection from "@/components/TechnologySection";
import SavingsCalculator from "@/components/SavingsCalculator";
import B2BSection from "@/components/B2BSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import ProductModal from "@/components/ProductModal";
import OrderModal from "@/components/OrderModal";
import { ProductItem, PRODUCTS_GELS } from "@/data/products";
import { Send, Phone } from "lucide-react";

function PageContent() {
  const { t } = useLanguage();
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderProduct, setOrderProduct] = useState<ProductItem | null>(null);
  const [orderSelectedWeight, setOrderSelectedWeight] = useState<string | undefined>(undefined);

  const handleOpenOrder = (product?: ProductItem, selectedWeight?: string) => {
    setOrderProduct(product || PRODUCTS_GELS[0]);
    setOrderSelectedWeight(selectedWeight);
    setOrderModalOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#0B1B2B] selection:bg-[#1E9BFF]/20 selection:text-[#0B1B2B]">
      <SmoothScroll />

      {/* Sticky Header with Dynamic Lang Switcher */}
      <Header onOpenOrderModal={() => handleOpenOrder()} />

      {/* Re-imagined Hero Section */}
      <Hero
        onExploreProducts={() => handleScrollToSection("products")}
      />

      {/* Sensory Product Showcase */}
      <ProductShowcase
        onQuickView={(prod) => setQuickViewProduct(prod)}
        onOrder={(prod, weight) => handleOpenOrder(prod, weight)}
      />

      {/* Why PureLife 3-point Section */}
      <TechnologySection />

      {/* Interactive Dosage & Duration Calculator */}
      <SavingsCalculator
        onOrderRecommended={(prod) => handleOpenOrder(prod)}
      />

      {/* B2B Wholesale Partnership Section */}
      <B2BSection />

      {/* FAQ Accordion Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Sticky Floating Mobile Quick-Order Bar */}
      <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
        <div className="bg-[#0B1B2B] text-white p-2 rounded-full shadow-2xl flex items-center justify-between gap-2 border border-white/10">
          <a
            href="https://t.me/purelife_uz?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%86%D0%B8%D0%B8%20PureLife"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-capsule bg-[#1E9BFF] hover:bg-[#0284C7] text-white text-xs py-3 px-4 flex items-center justify-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Заказать в Telegram</span>
          </a>
          <a
            href="tel:+998712004488"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white shrink-0 transition-colors"
            aria-label="Позвонить в PureLife"
          >
            <Phone className="w-4 h-4 text-[#1E9BFF]" />
          </a>
        </div>
      </div>

      {/* Quick View / Order Modals (Retained for seamless fallback) */}
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onOrder={(prod) => handleOpenOrder(prod)}
      />

      <OrderModal
        isOpen={orderModalOpen}
        product={orderProduct}
        selectedWeight={orderSelectedWeight}
        onClose={() => setOrderModalOpen(false)}
      />
    </main>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}
