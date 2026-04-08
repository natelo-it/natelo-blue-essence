import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "4 in 1 Schutzpaket iPhone 17 Pro Max",
    sub: "Transparent",
    img: "/products/case-transparent.png",
    price: 24.90,
    was: 49.90,
  },
  {
    name: "Magsafe Karbonoptik Hülle",
    sub: "iPhone 17 Pro Max – Schwarz",
    img: "/products/case-carbon.png",
    price: 39.90,
    was: null,
  },
  {
    name: "MagSafe Hülle Kristallklar",
    sub: "Apple iPhone 17 – Klar",
    img: "/products/case-magsafe.png",
    price: 34.90,
    was: null,
  },
  {
    name: "MagSafe Ladeständer 15W",
    sub: "Kompatibel mit allen iPhones",
    img: "/products/charger-wireless.png",
    price: 29.90,
    was: 59.90,
  },
  {
    name: "Premium Panzerglas 9H",
    sub: "iPhone 17 Pro · 2er Pack",
    img: "/products/screen-protector.png",
    price: 19.90,
    was: 34.90,
  },
  {
    name: "Wireless Earbuds Pro",
    sub: "Active Noise Cancelling · 30h",
    img: "/products/earbuds.png",
    price: 49.90,
    was: 89.90,
  },
];

const BestsellerSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  return (
    <section className="bg-[#f5f5f7] py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between"
        >
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.01em] text-[#1d1d1f]">
              Bestseller.
            </h2>
            <p className="text-[15px] sm:text-[17px] text-gray-500 mt-2 max-w-md">
              Die beliebtesten Produkte unserer Kunden – handverlesen für dich.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-gray-500 hover:text-[#1d1d1f] hover:bg-white transition-all shadow-sm"
              aria-label="Zurück"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-gray-500 hover:text-[#1d1d1f] hover:bg-white transition-all shadow-sm"
              aria-label="Weiter"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Product Cards – Full Bleed Scroll */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-1 md:gap-2 px-1 pb-2 scroll-smooth"
      >
        {products.map((product, i) => {
          const disc = product.was
            ? Math.round(((product.was - product.price) / product.was) * 100)
            : null;

          return (
            <motion.a
              key={i}
              href="https://natelo.ch/shop"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group w-[75vw] sm:w-[50vw] md:w-[33vw] lg:w-[400px] h-[400px] sm:h-[480px] md:h-[560px] flex-shrink-0 relative overflow-hidden rounded-none cursor-pointer snap-start bg-white"
            >
              {/* Product Image – full card background */}
              <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12 md:p-14 pb-28 sm:pb-36 md:pb-40">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
                  loading="lazy"
                />
              </div>

              {/* Discount Badge */}
              {disc && (
                <div className="absolute top-5 left-5 sm:top-6 sm:left-6">
                  <span className="px-3 py-1.5 bg-[#1d1d1f] text-white text-[11px] sm:text-[12px] font-bold tracking-wide">
                    –{disc}%
                  </span>
                </div>
              )}

              {/* Bottom Content – floating above image */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 bg-gradient-to-t from-white via-white/95 to-transparent pt-16">
                <p className="text-[11px] text-gray-400 font-medium mb-1 uppercase tracking-wider">
                  {product.sub}
                </p>
                <h3 className="text-[17px] sm:text-[20px] font-bold text-[#1d1d1f] leading-tight mb-3">
                  {product.name}
                </h3>

                <div className="flex items-end justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[24px] sm:text-[28px] font-black text-[#1d1d1f] tracking-tight">
                      {product.price.toFixed(2)}
                    </span>
                    <span className="text-[13px] text-gray-400 font-medium">CHF</span>
                    {product.was && (
                      <span className="text-[13px] text-gray-400 line-through ml-1">
                        {product.was.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <span className="text-[12px] text-blue-600 font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Kaufen
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* "Alle Produkte" Link */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 mt-8 sm:mt-12">
        <a
          href="https://natelo.ch/shop"
          className="inline-flex items-center gap-2 text-blue-600 text-[15px] font-semibold hover:gap-3 transition-all group"
        >
          Alle Produkte entdecken
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default BestsellerSection;
