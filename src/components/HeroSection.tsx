import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Smartphone, Wifi, Wrench } from "lucide-react";

const slides = [
  {
    id: 0,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=2400&auto=format&fit=crop",
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero-cinematic"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#1d1d1f]"
    >
      {/* Dynamic Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt="Hero Background"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Dark Vignette Overlay for perfect contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* Foreground Content */}
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-16 relative z-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Dramatic Typography */}
        <div className="flex-1 max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/70 mb-5 font-semibold">
              Dein Unabhängiger Partner
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[85px] font-bold leading-[1.05] tracking-[-0.02em] text-white mb-6">
              Alle Netze.<br/>
              Alle Geräte.<br/>
              <span className="text-white/60">Ein Ort.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-lg leading-relaxed mb-8">
              Warum stundenlang vergleichen? Wir schnüren für dich das perfekte Paket aus Mobile, Internet und Entertainment.
            </p>

            {/* Partner Trust Bar – Real Logos */}
            <div className="flex items-center gap-6 sm:gap-8 border-t border-white/10 pt-6 opacity-60">
              <img src="https://deinabo.ch/storage/hiB7miejvy6lUSK2u5o3qqoucPuGMJ-metac3VucmlzZS5zdmc=-.svg" alt="Sunrise" className="h-4 sm:h-5 w-auto brightness-0 invert" />
              <img src="https://deinabo.ch/storage/6ktcMccHpt804ixqW1sKKgWGfCzo0A-metaU2FsdF9JbnRlcm5ldF9UVl9Nb2JpbGVfQkxBQ0suc3Zn-.svg" alt="Salt" className="h-4 sm:h-5 w-auto brightness-0 invert" />
              <img src="https://deinabo.ch/storage/U55wmqpTMQGG4p1iiPFZTOdF8MK3Ik-metaeWFsbG8uc3Zn-.svg" alt="yallo" className="h-3.5 sm:h-4 w-auto brightness-0 invert" />
              <img src="https://deinabo.ch/storage/SmAmEz2lX6SVF6h718aTwhIDgRWdjh-metabGViYXJhLnN2Zw==-.svg" alt="Lebara" className="h-3.5 sm:h-4 w-auto brightness-0 invert" />
              <img src="https://deinabo.ch/storage/akhDIZbWHLC9eAlliC4rjO3NY2OWa2-metacXVpY2tsaW5lLnN2Zw==-.svg" alt="Quickline" className="h-3.5 sm:h-4 w-auto brightness-0 invert" />
            </div>
          </motion.div>
        </div>

        {/* Right Side: The Smart Chooser (Glassmorphism) */}
        <div className="w-full max-w-[480px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[32px] p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Glossy highlight effect */}
            <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

            <h3 className="text-white text-2xl font-semibold mb-6 flex items-center gap-3">
              Was suchst du heute?
            </h3>

            <div className="space-y-3">
              {/* Option 1 */}
              <button className="w-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors p-4 rounded-2xl flex items-center gap-5 group text-left">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Smartphone className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium text-[16px]">Neues Handy mit Abo</p>
                  <p className="text-white/60 text-[13px] mt-0.5">Finde den besten Sunrise/Salt Deal</p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
              </button>

              {/* Option 2 */}
              <button className="w-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors p-4 rounded-2xl flex items-center gap-5 group text-left">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Wifi className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium text-[16px]">Abo wechseln & sparen</p>
                  <p className="text-white/60 text-[13px] mt-0.5">Reiner Tarifvergleich</p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
              </button>

              {/* Option 3 */}
              <button className="w-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors p-4 rounded-2xl flex items-center gap-5 group text-left">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Wrench className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium text-[16px]">Reparieren & Verkaufen</p>
                  <p className="text-white/60 text-[13px] mt-0.5">Nachhaltig, fair und schnell</p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
              </button>
            </div>
            
            <p className="text-center text-white/40 text-[12px] mt-6">
              Kostenlose und unverbindliche Top-Beratung
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
