import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PremiumSection from "@/components/PremiumSection";
import TopDealsSection from "@/components/TopDealsSection";
import TopBrandsSection from "@/components/TopBrandsSection";
import BlogSection from "@/components/BlogSection";
import LocationsSection from "@/components/LocationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";
import BestsellerSection from "@/components/BestsellerSection";
import { AppleGridItem } from "@/components/AppleGridItem";

import internetTvImg from "@/assets/internet-tv.png";
import tradeInImg from "@/assets/trade-in.png";
import repairImg from "@/assets/repair.png";
import accessoriesImg from "@/assets/accessories.png";
import refurbishedImg from "@/assets/refurbished.png";
import businessImg from "@/assets/business.png";
import gadgetsImg from "@/assets/gadgets.png";
import b2bBannerImg from "@/assets/b2b-banner.png";

const internetTvSection = {
  id: "internet-tv",
  badge: "Internet & TV",
  headline: "Internet & TV \nauf höchstem Niveau.",
  subheadline: "Schnell, stabil und modern – für Zuhause, Streaming und produktives Arbeiten.",
  primaryCta: "Internet-Angebote entdecken",
  secondaryCta: "Verfügbarkeit prüfen",
  image: internetTvImg,
  imageAlt: "Internet & TV Setup",
  reverse: true,
  variant: "gray" as const,
  imageClassName: "scale-[1.4] lg:scale-[1.7] origin-center translate-x-4 lg:-translate-x-12",
  providers: [
    { name: "Sunrise", color: "#e4002b" },
    { name: "Salt.", color: "#8338EC" },
    { name: "Quickline", color: "#0F172A" },
  ],
};

const tradeInSection = {
  id: "geraet-verkaufen",
  badge: "Gerät Verkaufen",
  headline: "Verkaufe dein Gerät\nin wenigen Minuten.",
  subheadline: "Schnelle Bewertung, faire Konditionen und eine einfache Abwicklung.",
  primaryCta: "Jetzt Gerät bewerten",
  secondaryCta: "So funktioniert's",
  image: tradeInImg,
  reverse: false,
  variant: "gray" as const,
  imageClassName: "absolute-right w-[140%] max-w-none scale-[1.6] lg:scale-[2.0] translate-x-[40%] mask-fade-edges",
};

const gridItems = [
  {
    badge: "Geräte Reparieren",
    headline: "Schnell repariert.",
    subheadline: "Professionell und zuverlässig.",
    primaryCta: "Mehr erfahren",
    secondaryCta: "Preise",
    video: "/iphone.mp4",
    dark: true,
  },
  {
    badge: "Refurbished",
    headline: "Clever gewählt.",
    subheadline: "Nachhaltig. Geprüfte Qualität.",
    primaryCta: "Mehr erfahren",
    secondaryCta: "Kaufen",
    image: refurbishedImg,
    imageClassName: "scale-110 pb-6",
    dark: false,
  },
  {
    badge: "Zubehör",
    headline: "Passt perfekt.",
    subheadline: "Die besten Essentials.",
    primaryCta: "Mehr erfahren",
    secondaryCta: "Kaufen",
    image: accessoriesImg,
    imageClassName: "scale-[1.25] md:scale-[1.35] origin-bottom",
    dark: false,
  },
  {
    badge: "Gadgets",
    headline: "Das will man haben.",
    subheadline: "Neu. Clever. Unverzichtbar.",
    primaryCta: "Mehr erfahren",
    secondaryCta: "Kaufen",
    image: gadgetsImg,
    imageClassName: "scale-[1.15] origin-bottom",
    dark: true,
  },
  {
    badge: "Geschäftskunden",
    headline: "Ihr Partner fürs Business.",
    subheadline: "Smartes Equipment. Starker Support.",
    primaryCta: "Mehr erfahren",
    secondaryCta: "Kontakt",
    image: b2bBannerImg,
    imageClassName: "!object-cover w-full h-[120%] !max-h-none absolute top-[-20px] left-0 rounded-none",
    dark: true,
  },
];

const Index = () => (
  <div className="min-h-screen bg-white">
    <Header />
    
    <main className="flex flex-col bg-white">
      {/* 1. Hero Full Width */}
      <HeroSection />

      <div className="w-full h-3 sm:h-4 bg-white" />

      {/* 2. Internet & TV Full Width */}
      <PremiumSection {...internetTvSection} />

      <div className="w-full h-3 sm:h-4 bg-white" />

      {/* 3. Gerät Verkaufen Full Width */}
      <PremiumSection {...tradeInSection} />

      <div className="w-full h-3 sm:h-4 bg-white" />

      {/* 4. The Apple-style Grid (Bentos) */}
      <section className="bg-white pb-2 sm:pb-3 px-2 sm:px-3">
        <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-2 sm:gap-3">
          {gridItems.map((item, idx) => (
            <div 
              key={idx} 
              className={idx === gridItems.length - 1 && gridItems.length % 2 !== 0 ? "md:col-span-2" : ""}
            >
              <AppleGridItem {...item} />
            </div>
          ))}
        </div>
      </section>

      {/* Original Following Sections */}
      <TopDealsSection />
      <BestsellerSection />
      <TopBrandsSection />
      <BlogSection />
      <TestimonialsSection />
      <LocationsSection />
    </main>

    <FooterSection />
  </div>
);

export default Index;
