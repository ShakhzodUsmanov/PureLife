"use client";

import { useState, lazy, Suspense } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GelsSection from "@/components/GelsSection";
import { ProductItem, PRODUCTS_GELS } from "@/data/products";
import { Send, Phone } from "lucide-react";

// Lazy-load below-the-fold sections to reduce initial JS bundle
const TechnologySection = lazy(() => import("@/components/TechnologySection"));
const PowdersSection = lazy(() => import("@/components/PowdersSection"));
const B2BSection = lazy(() => import("@/components/B2BSection"));
const FaqSection = lazy(() => import("@/components/FaqSection"));
const Footer = lazy(() => import("@/components/Footer"));
const CompositionModal = lazy(() => import("@/components/CompositionModal"));
const ProductModal = lazy(() => import("@/components/ProductModal"));
const OrderModal = lazy(() => import("@/components/OrderModal"));

function SectionFallback() {
  return <div className="py-24 sm:py-32" aria-hidden="true" />;
}

function PageContent() {
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);
  const [compositionProduct, setCompositionProduct] = useState<ProductItem | null>(null);
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
      {/* Sticky Header with Dynamic Lang Switcher */}
      <Header onOpenOrderModal={() => handleOpenOrder()} />

      {/* Re-imagined Hero Section */}
      <Hero
        onExploreProducts={() => handleScrollToSection("gels")}
      />

      {/* Dedicated Gels Section */}
      <div className="content-visibility-auto">
        <GelsSection
          onSelectComposition={(prod) => setCompositionProduct(prod)}
        />
      </div>

      {/* Below-fold sections: lazy loaded with content-visibility */}
      <div className="content-visibility-auto">
        <Suspense fallback={<SectionFallback />}>
          <TechnologySection />
        </Suspense>
      </div>

      <div className="content-visibility-auto">
        <Suspense fallback={<SectionFallback />}>
          <PowdersSection
            onSelectComposition={(prod) => setCompositionProduct(prod)}
          />
        </Suspense>
      </div>

      <div className="content-visibility-auto">
        <Suspense fallback={<SectionFallback />}>
          <B2BSection />
        </Suspense>
      </div>

      <div className="content-visibility-auto">
        <Suspense fallback={<SectionFallback />}>
          <FaqSection />
        </Suspense>
      </div>

      <div className="content-visibility-auto">
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </div>

      {/* Shared Composition & Dosage Modal */}
      <Suspense fallback={null}>
        {compositionProduct && (
          <CompositionModal
            product={compositionProduct}
            onClose={() => setCompositionProduct(null)}
          />
        )}
      </Suspense>

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
            href="tel:+998990881155"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white shrink-0 transition-colors"
            aria-label="Позвонить в PureLife"
          >
            <Phone className="w-4 h-4 text-[#1E9BFF]" />
          </a>
        </div>
      </div>

      {/* Quick View / Order Modals (Retained for fallback) */}
      <Suspense fallback={null}>
        <ProductModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onOrder={(prod) => handleOpenOrder(prod)}
        />
      </Suspense>

      <Suspense fallback={null}>
        <OrderModal
          isOpen={orderModalOpen}
          product={orderProduct}
          selectedWeight={orderSelectedWeight}
          onClose={() => setOrderModalOpen(false)}
        />
      </Suspense>
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
