import { motion } from "framer-motion";
import { ArrowRight, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import AboCard, { AboCardProps } from "./AboCard";
import iphoneBackImg from "@/assets/iphone-back.png";
import samsungBackImg from "@/assets/samsung-back.png";

interface DealCard {
  name: string;
  price: string;
  oldPrice?: string;
  badge?: string;
}

interface DealCategory {
  title: string;
  deals: DealCard[];
}

const aboDeals: AboCardProps[] = [
  {
    provider: "Salt",
    planName: "Swiss Max",
    has5G: true,
    premiumDealBadge: "🚀 Premium-Deal",
    discountBadge: "Rabatt",
    switzerlandFeatures: ["Unlimitierte Daten", "Unlimitierte Anrufe & SMS"],
    abroadFeatures: ["1 GB Daten in der Europe Zone"],
    highlights: ["Lebenslanger Rabatt", "Gratis Aktivierung"],
    price: "21.95",
    oldPrice: "72.95",
    percentageBadge: "-70%",
    details: ["24 Monate Vertragsdauer"]
  },
  {
    provider: "Sunrise",
    planName: "Up Mobile L",
    has5G: true,
    discountBadge: "Aktion",
    switzerlandFeatures: ["Unlimitierte Daten bis 2 Gbit/s", "Unlimitierte Anrufe & SMS"],
    abroadFeatures: ["Unlimitierte Daten in der EU", "Unlimitierte Anrufe in der EU"],
    highlights: ["Lebenslanger Rabatt", "Gratis Rufnummernmitnahme"],
    price: "34.90",
    oldPrice: "89.90",
    percentageBadge: "-61%",
    details: ["CHF 0.- Aktivierungsgebühr", "24 Monate Vertragsdauer"]
  },
  {
    provider: "Yallo",
    planName: "Swiss Flat",
    has5G: true,
    discountBadge: "Deal",
    switzerlandFeatures: ["Unlimitierte Daten in der Schweiz", "Unlimitierte Anrufe & SMS"],
    abroadFeatures: [],
    highlights: ["Keine Mindestvertragslaufzeit"],
    price: "24.95",
    oldPrice: "59.00",
    percentageBadge: "-58%",
    details: ["CHF 59.- Aktivierungsgebühr", "Ohne Vertragsbindung"]
  },
  {
    provider: "Lebara",
    planName: "Europe",
    has5G: true,
    discountBadge: "Beliebt",
    switzerlandFeatures: ["Unlimitierte Daten", "Unlimitierte Anrufe & SMS"],
    abroadFeatures: ["Unlimitierte Anrufe in der EU"],
    highlights: ["Discount forever"],
    price: "29.95",
    oldPrice: "59.95",
    percentageBadge: "-50%",
    details: ["CHF 59.- Aktivierungsgebühr", "Ohne Vertragsbindung"]
  }
];

const categories: DealCategory[] = [
  {
    title: "Handy-Abos",
    deals: [], // Replaced by aboDeals in render
  },
  {
    title: "Refurbished",
    deals: [
      { name: "iPhone 14 Pro – 128GB", price: "CHF 549.–", oldPrice: "CHF 899.–", badge: "-39%" },
      { name: "Samsung Galaxy S23", price: "CHF 449.–", oldPrice: "CHF 799.–", badge: "-44%" },
      { name: "iPhone 13 – 256GB", price: "CHF 429.–", oldPrice: "CHF 729.–", badge: "-41%" },
      { name: "Samsung Galaxy S22 Ultra", price: "CHF 499.–", oldPrice: "CHF 879.–", badge: "-43%" },
    ],
  },
  {
    title: "Zubehör",
    deals: [
      { name: "Apple MagSafe Charger", price: "CHF 39.–", badge: "Beliebt" },
      { name: "Samsung Galaxy Buds3 Pro", price: "CHF 189.–", oldPrice: "CHF 249.–", badge: "Top-Deal" },
      { name: "Premium Schutzglas (Universal)", price: "CHF 19.90", badge: "Bestseller" },
      { name: "iPhone 15 Silicone Case", price: "CHF 49.–", badge: "Neu" },
    ],
  },
  {
    title: "Gadgets",
    deals: [
      { name: "Apple AirTag 4er Pack", price: "CHF 99.–", oldPrice: "CHF 119.–", badge: "Beliebt" },
      { name: "Samsung SmartTag2", price: "CHF 29.90", badge: "Neu" },
      { name: "Apple Watch SE (2. Gen)", price: "CHF 249.–", oldPrice: "CHF 299.–", badge: "Top-Deal" },
      { name: "Wireless Powerbank 10000mAh", price: "CHF 39.90", badge: "Bestseller" },
    ],
  },
];

const TopDealsSection = () => {
  return (
    <section id="top-deals" className="bg-[#f5f5f7] py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#bf4800] mb-4">
            Top-Deals
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.003em] text-[#1d1d1f]">
            Unsere besten Angebote
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#6e6e73] max-w-2xl mx-auto">
            Handverlesene Top-Seller aus allen Kategorien – jetzt zugreifen und sparen.
          </p>
        </motion.div>

        {/* Full-width carousels for all categories */}
        {categories.map((cat, catIdx) => (
          <div key={cat.title} className="mb-16 last:mb-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.05 }}
              className="flex items-center justify-between mb-6"
            >
              <h3 className="text-xl font-semibold text-[#1d1d1f]">{cat.title}</h3>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 gap-1 text-sm">
                Alle ansehen <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </motion.div>

            <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 sm:pb-8 pt-4 -mx-5 px-5 sm:-mx-6 sm:px-6 lg:-mx-12 lg:px-12 gap-4 sm:gap-6">
              {cat.title === "Handy-Abos" ? (
                // Render the new highly detailed AboCard component
                aboDeals.map((deal, i) => (
                  <motion.div
                    key={deal.planName}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex self-stretch"
                  >
                    <AboCard {...deal} />
                  </motion.div>
                ))
              ) : (
                cat.deals.map((deal, i) => {
                  const isPhone = cat.title === "Refurbished";
                  
                  let brandBg = "bg-white";
                  let brandText = "";
                  let fontColor = "text-[#1d1d1f]";
                  let priceColor = "text-[#1d1d1f]";
                  let hasCustomDesign = false;

                  // Zubehör
                  if (deal.name.includes("MagSafe")) { brandBg = "bg-gradient-to-br from-[#f5f5f7] to-[#d2d2d7]"; brandText = "MagSafe"; fontColor = "text-[#1d1d1f]"; priceColor = "text-[#1d1d1f]"; hasCustomDesign = true; }
                  else if (deal.name.includes("Buds3")) { brandBg = "bg-gradient-to-br from-[#8E8D92] to-[#45454b]"; brandText = "Buds"; fontColor = "text-white"; priceColor = "text-white"; hasCustomDesign = true; }
                  else if (deal.name.includes("Premium Schutzglas")) { brandBg = "bg-gradient-to-bl from-[#9db7e8] to-[#c7d8f5]"; brandText = "Glass"; fontColor = "text-[#1d1d1f]"; priceColor = "text-[#1d1d1f]"; hasCustomDesign = true; }
                  else if (deal.name.includes("Silicone Case")) { brandBg = "bg-gradient-to-tr from-[#ff9a9e] to-[#fecfef]"; brandText = "Case"; fontColor = "text-[#1d1d1f]"; priceColor = "text-[#1d1d1f]"; hasCustomDesign = true; }

                  // Gadgets
                  else if (deal.name.includes("AirTag")) { brandBg = "bg-gradient-to-br from-[#ffffff] to-[#e6e6e6]"; brandText = "AirTag"; fontColor = "text-[#1d1d1f]"; priceColor = "text-[#1d1d1f]"; hasCustomDesign = true; }
                  else if (deal.name.includes("SmartTag2")) { brandBg = "bg-gradient-to-br from-[#2c2c2e] to-[#1c1c1e]"; brandText = "SmartTag"; fontColor = "text-white"; priceColor = "text-white"; hasCustomDesign = true; }
                  else if (deal.name.includes("Watch SE")) { brandBg = "bg-gradient-to-b from-[#b2c8e3] to-[#8faac7]"; brandText = "Watch"; fontColor = "text-white"; priceColor = "text-white"; hasCustomDesign = true; }
                  else if (deal.name.includes("Powerbank")) { brandBg = "bg-gradient-to-br from-[#2ecc71] to-[#27ae60]"; brandText = "Power"; fontColor = "text-white"; priceColor = "text-white"; hasCustomDesign = true; }

                  if (isPhone) {
                    return (
                      <motion.div
                        key={deal.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="group flex-shrink-0 w-[220px] sm:w-[260px] md:w-[280px] flex flex-col items-center hover:scale-[1.02] transition-transform duration-500 cursor-pointer snap-start relative pt-2"
                      >
                        {/* Top Title Section */}
                        <div className="w-full flex flex-col items-center mb-6 sm:mb-8 md:mb-10 mt-2">
                          <h4 className="font-semibold text-lg sm:text-2xl tracking-tight text-[#1d1d1f] text-center px-2">
                            {deal.name}
                          </h4>
                          {deal.badge && (
                            <span className="mt-2 text-[#bf4800] text-xs font-semibold uppercase tracking-widest bg-[#bf4800]/10 px-3 py-1 rounded-full">
                              {deal.badge}
                            </span>
                          )}
                        </div>

                        {/* Phone Image */}
                        <div className="w-full h-[200px] sm:h-[240px] md:h-[280px] bg-transparent flex flex-col items-center justify-center">
                          <img 
                            src={deal.name.includes("iPhone") ? iphoneBackImg : samsungBackImg} 
                            alt={deal.name}
                            className="h-full object-contain mix-blend-multiply contrast-[1.05]" 
                          />
                        </div>

                        {/* Bottom Options & Price */}
                        <div className="mt-8 flex flex-col items-center">
                          <div className="flex items-center gap-3">
                            {deal.name.includes("iPhone") ? (
                              <>
                                <div className="flex items-center justify-center p-0.5 rounded-full border border-[#007aff]">
                                  <span className="w-5 h-5 rounded-full bg-[#E5D2C2] ring-1 ring-inset ring-black/10"></span>
                                </div>
                                <span className="w-5 h-5 rounded-full bg-[#464644] ring-1 ring-inset ring-black/10"></span>
                                <span className="w-5 h-5 rounded-full bg-[#f4e8ce] ring-1 ring-inset ring-black/10"></span>
                                <span className="w-5 h-5 rounded-full bg-[#3C404E] ring-1 ring-inset ring-black/10"></span>
                              </>
                            ) : (
                              <>
                                <div className="flex items-center justify-center p-0.5 rounded-full border border-[#007aff]">
                                  <span className="w-5 h-5 rounded-full bg-[#202020] ring-1 ring-inset ring-black/10"></span>
                                </div>
                                <span className="w-5 h-5 rounded-full bg-[#f1f0ee] ring-1 ring-inset ring-black/10"></span>
                                <span className="w-5 h-5 rounded-full bg-[#b8c6a0] ring-1 ring-inset ring-black/10"></span>
                              </>
                            )}
                          </div>
                          <span className="text-[11px] text-[#1d1d1f] mt-3 font-medium">Cosmic Orange</span>
                          
                          <div className="mt-5 flex flex-col items-center gap-1">
                            <span className="text-xl font-bold tracking-tight text-[#1d1d1f]">{deal.price}</span>
                            {deal.oldPrice && <span className="text-[#86868b] text-xs line-through font-medium">{deal.oldPrice}</span>}
                          </div>
                        </div>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={deal.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className={`group relative flex-shrink-0 w-[240px] sm:w-[280px] md:w-[300px] h-[340px] sm:h-[400px] md:h-[440px] rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 md:p-8 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500 cursor-pointer snap-start overflow-hidden shadow-sm hover:shadow-xl ${brandBg}`}
                    >
                      {hasCustomDesign && <div className="absolute inset-0 bg-black/5 pointer-events-none mix-blend-overlay"></div>}

                      {deal.badge && (
                        <span className={`absolute top-6 right-6 z-10 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest ${
                          hasCustomDesign ? "bg-white/20 text-white backdrop-blur-md" : 
                          deal.badge.startsWith("-") ? "bg-[#bf4800]/10 text-[#bf4800]" : "bg-primary/10 text-primary"
                        }`}>
                          {deal.badge}
                        </span>
                      )}

                      <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full">
                        {hasCustomDesign ? (
                          <span className={`font-bold text-4xl sm:text-5xl tracking-tighter mix-blend-overlay opacity-90 drop-shadow-md ${fontColor}`} style={{ fontFamily: "'Aileron', sans-serif" }}>
                            {brandText}
                          </span>
                        ) : (
                          <div className="w-full h-full rounded-2xl bg-[#f5f5f7] mb-6 flex items-center justify-center group-hover:bg-[#ebebfa] transition-colors duration-500">
                            <Star className="w-10 h-10 text-[#d2d2d7] group-hover:text-primary transition-colors duration-500" />
                          </div>
                        )}
                      </div>

                      <div className="relative z-10 mt-6 pt-4">
                        <h4 className={`font-semibold text-[17px] leading-snug line-clamp-2 max-w-[85%] ${fontColor}`} style={{ fontFamily: "'Aileron', sans-serif" }}>
                          {deal.name}
                        </h4>
                        <div className="mt-3 flex flex-col gap-0.5">
                          <span className={`text-xl sm:text-2xl font-bold tracking-tight ${priceColor}`} style={{ fontFamily: "'Aileron', sans-serif" }}>
                            {deal.price}
                          </span>
                          {deal.oldPrice && (
                            <span className={`${hasCustomDesign ? 'text-white/60' : 'text-[#86868b]'} text-sm line-through font-medium`}>
                              {deal.oldPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDealsSection;
