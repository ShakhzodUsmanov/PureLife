import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SeoStructuredData from "@/components/SeoStructuredData";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0E253A",
};

export const metadata: Metadata = {
  title: "PureLife — Ультраконцентрированные гели и стиральные порошки нового поколения",
  description:
    "Официальный сайт бренда PureLife: инновационные концентрированные гели для стирки 4 кг (до 80 стирок) и стиральные порошки New Line & Classic. Биоразлагаемые ПАВ, немецкие энзимы, оптовые поставки от завода производителя.",
  keywords: [
    "гель для стирки 4 кг",
    "PureLife",
    "стиральный порошок",
    "бытовая химия оптом",
    "концентрат для стирки",
    "жидкий порошок suyuq gel",
    "стирка без аллергии",
    "бытовая химия производитель",
    "Alpine Fresh",
    "Lavender Dream",
    "Floral Bloom",
    "PureLife New Line",
    "Pure Life Classic",
  ],
  authors: [{ name: "PureLife Care Tech" }],
  creator: "PureLife Care Tech",
  publisher: "PureLife Care Tech",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://purelife-care.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PureLife — Свежесть, которая остается с вами",
    description:
      "Чистота нового поколения: биоразлагаемые гели для стирки 4 кг и эффективные стиральные порошки с активными гранулами.",
    url: "https://purelife-care.com",
    siteName: "PureLife Home Care & Laundry Tech",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/products/alpine-fresh-gel.jpg",
        width: 1200,
        height: 630,
        alt: "PureLife Liquid Laundry Gel 4kg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PureLife — Ультраконцентрированные гели и стиральные порошки",
    description: "Формула чистоты нового поколения. До 80 стирок в одной бутылке.",
    images: ["/images/products/alpine-fresh-gel.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased bg-[#FAFCFF] text-[#0E253A]">
        <SeoStructuredData />
        {children}
      </body>
    </html>
  );
}
