import Script from "next/script";
import { ALL_PRODUCTS } from "@/data/products";

export default function SeoStructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PureLife Care Tech",
    "legalName": "OOO 'PureLife Care Tech'",
    "url": "https://purelife-care.com",
    "logo": "https://purelife-care.com/images/products/alpine-fresh-gel.jpg",
    "description": "Производитель ультраконцентрированных гелей для стирки 4 кг и эффективных стиральных порошков с энзимами нового поколения.",
    "email": "b2b@purelife-care.com",
    "telephone": "+998 71 200 44 88",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ташкент",
      "addressCountry": "UZ",
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+998 71 200 44 88",
        "contactType": "sales",
        "availableLanguage": ["Russian", "Uzbek", "English"],
      },
    ],
  };

  const productSchemas = ALL_PRODUCTS.map((prod) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${prod.name} - ${prod.scentOrLine}`,
    "image": `https://purelife-care.com${prod.image}`,
    "description": prod.subtitle,
    "brand": {
      "@type": "Brand",
      "name": "PureLife",
    },
    "category": prod.categoryName,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "UZS",
      "lowPrice": prod.category === "gel" ? "65000" : "18000",
      "highPrice": prod.category === "gel" ? "85000" : "38000",
      "offerCount": "1000",
      "availability": "https://schema.org/InStock",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "142",
    },
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Подходит ли гель PureLife для стирки в жесткой воде?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да. Формула гелей PureLife обогащена современными поликарбоксилатами и смягчающими агентами, которые связывают ионы кальция и магния, предотвращая образование накипи на ТЭНе и сохраняя полную моющую активность энзимов даже в воде повышенной жесткости.",
        },
      },
      {
        "@type": "Question",
        "name": "Можно ли стирать гелем PureLife деликатные ткани (шерсть, натуральный шелк)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для деликатных тканей рекомендуется PureLife Lavender Dream в режиме деликатной стирки при температуре до 30°C. В его составе используются щадящие растительные ПАВ и отсутствует агрессивный хлор, что бережет шелковистые и тонкие волокна.",
        },
      },
      {
        "@type": "Question",
        "name": "Безопасны ли средства PureLife для стирки детского белья?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Все линейки PureLife прошли строгий дерматологический контроль, имеют сертификаты соответствия безопасности бытовой химии, содержат биоразлагаемые ПАВ и 100% выполаскиваются из волокон за стандартный цикл полоскания, не вызывая раздражения детской кожи.",
        },
      },
      {
        "@type": "Question",
        "name": "Каковы минимальные условия и скидки для оптовых дистрибьюторов?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Минимальная партия для оптовых партнеров начинается от 500 кг (сборная паллета). Для региональных дистрибьюторов и розничных сетей действуют гибкие дифференцированные скидки до 35%, отсрочка платежа, бесплатная доставка до РЦ и полный пакет POS-материалов.",
        },
      },
      {
        "@type": "Question",
        "name": "Чем концентрированный гель 4 кг выгоднее стандартного порошка?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Одна канистра 4 кг геля PureLife заменяет до 12 кг обычного разбавленного порошка и обеспечивает до 80 циклов стирки. Себестоимость одной стирки снижается практически в 2 раза, а дозировка мерным колпачком исключает перерасход и образование пыли.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="schema-org-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="schema-org-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {productSchemas.map((schema, idx) => (
        <Script
          key={idx}
          id={`schema-org-product-${idx}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
