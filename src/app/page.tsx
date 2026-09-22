"use client";

import { useState } from "react";
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

export default function Home() {
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
    <main className="min-h-screen flex flex-col bg-[#FAFCFF] text-[#0E253A] selection:bg-sky-100 selection:text-sky-900">
      {/* Sticky Header */}
      <Header onOpenOrderModal={() => handleOpenOrder()} />

      {/* Hero Section */}
      <Hero
        onExploreProducts={() => handleScrollToSection("products")}
        onOpenB2B={() => handleScrollToSection("b2b")}
      />

      {/* Interactive Product Showcase */}
      <ProductShowcase
        onQuickView={(prod) => setQuickViewProduct(prod)}
        onOrder={(prod, weight) => handleOpenOrder(prod, weight)}
      />

      {/* Technology & Quality Assurance Section */}
      <TechnologySection />

      {/* Interactive Dosage & Savings Calculator */}
      <SavingsCalculator
        onOrderRecommended={(prod) => handleOpenOrder(prod)}
      />

      {/* B2B Wholesale Partnership Section */}
      <B2BSection />

      {/* FAQ Accordion Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Modals */}
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
