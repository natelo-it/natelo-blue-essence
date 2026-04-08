import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, ShoppingBag, User, Menu, X, 
  Smartphone, Headphones, Laptop, Gamepad2, Watch, Zap,
  Tags, ReceiptText, Briefcase
} from "lucide-react";
import nateloLogo from "@/assets/natelo-logo.png";

const mainNav = [
  { label: "Handy-Abos", href: "/handy-abos" },
  { label: "Internet & TV", href: "#internet-tv" },
  { label: "Gerät Verkaufen", href: "#geraet-verkaufen" },
  { label: "Reparieren", href: "#geraete-reparieren" },
  { label: "Refurbished", href: "#refurbished" },
  { label: "Zubehör", href: "#zubehoer" },
  { label: "TOP-DEALS %", href: "#top-deals" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Standorte", href: "#standorte" },
  { label: "Kontakt", href: "#kontakt" },
];

const menuCategories = [
  { id: "handy", icon: <Smartphone className="w-5 h-5 text-gray-700" />, label: "Smartphones & Handys" },
  { id: "zubehoer", icon: <Headphones className="w-5 h-5 text-gray-700" />, label: "Handy & Mobile-Zubehör" },
  { id: "laptop", icon: <Laptop className="w-5 h-5 text-gray-700" />, label: "Laptop & Tablet Zubehör" },
  { id: "gaming", icon: <Gamepad2 className="w-5 h-5 text-gray-700" />, label: "Gaming Zubehör" },
  { id: "watch", icon: <Watch className="w-5 h-5 text-gray-700" />, label: "Smartwatches & Uhren" },
  { id: "refurbished", icon: <Zap className="w-5 h-5 text-gray-700" />, label: "Refurbished" },
];

const subCategories: Record<string, { label: string; href: string }[]> = {
  handy: [
    { label: "Apple iPhone", href: "#" },
    { label: "Samsung Galaxy", href: "#" },
    { label: "Google Pixel", href: "#" },
    { label: "Xiaomi Smartphone", href: "#" },
    { label: "Oppo Smartphone", href: "#" },
    { label: "Nokia Smartphone", href: "#" },
    { label: "Emporia Smartphone", href: "#" },
  ],
  zubehoer: [
    { label: "Handyhüllen", href: "#" },
    { label: "Panzerglas & Schutzfolien", href: "#" },
    { label: "Ladekabel & Adapter", href: "#" },
    { label: "Powerbanks", href: "#" },
    { label: "Halterungen", href: "#" },
    { label: "Kopfhörer & Headsets", href: "#" },
  ],
  laptop: [
    { label: "Notebook Taschen", href: "#" },
    { label: "Mäuse & Tastaturen", href: "#" },
    { label: "USB-Hubs & Adapter", href: "#" },
    { label: "Laptop Ladegeräte", href: "#" },
    { label: "Tablet Hüllen", href: "#" },
    { label: "Eingabestifte", href: "#" },
  ],
  gaming: [
    { label: "Gaming Controller", href: "#" },
    { label: "Gaming Headsets", href: "#" },
    { label: "Gaming Tastaturen", href: "#" },
    { label: "Gaming Mäuse", href: "#" },
    { label: "Mauspads", href: "#" },
    { label: "Konsolen-Zubehör", href: "#" },
  ],
  watch: [
    { label: "Apple Watch", href: "#" },
    { label: "Samsung Galaxy Watch", href: "#" },
    { label: "Garmin Smartwatches", href: "#" },
    { label: "Ersatzarmbänder", href: "#" },
    { label: "Schutzgläser für Uhren", href: "#" },
    { label: "Ladestationen", href: "#" },
  ],
  refurbished: [
    { label: "Gebrauchte iPhones", href: "#" },
    { label: "Gebrauchte iPads", href: "#" },
    { label: "Gebrauchte Samsung Handys", href: "#" },
    { label: "Gebrauchte MacBooks", href: "#" },
    { label: "Gebrauchte Smartwatches", href: "#" },
    { label: "Zustands-Garantie", href: "#" },
  ],
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // States for the new Mega Menu
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("handy");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBgClass = megaMenuOpen
    ? "bg-[#f5f5f7] border-b border-[#d2d2d7]/60" 
    : scrolled 
      ? "bg-white/80 backdrop-blur-2xl shadow-[0_1px_3px_rgba(0,0,0,0.08)]" 
      : "bg-[#f5f5f7]";

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBgClass}`}
      >
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-20 bg-transparent">
          <div className="h-[64px] flex items-center justify-between relative">
            
            {/* Left side: Logo + Hamburger */}
            <div className="flex items-center gap-6 z-50">
              <a href="/" className="flex-shrink-0">
                <img src={nateloLogo} alt="natelo" className="h-7" />
              </a>
              <button 
                className="hidden xl:flex items-center justify-center p-2 rounded-full hover:bg-black/5 transition-colors group cursor-pointer"
                onMouseEnter={() => setMegaMenuOpen(true)}
              >
                <Menu className="w-6 h-6 text-[#1d1d1f]" strokeWidth={2} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="hidden xl:flex flex-1 items-center justify-center px-4 z-40">
              <div className="flex items-center h-full">
                {mainNav.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-2 lg:px-2.5 h-full flex items-center text-[11px] xl:text-[12px] text-[#1d1d1f]/90 hover:text-[#1d1d1f] transition-colors duration-200 whitespace-nowrap cursor-pointer font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-2 z-50">
              <button className="p-2 text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden sm:flex p-2 text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-black text-white text-[9px] font-bold flex items-center justify-center rounded-full">0</span>
              </button>
              <button className="hidden sm:flex p-2 text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">
                <User className="w-5 h-5" />
              </button>
              
              {/* Premium B2B Button inside main header */}
              <a href="#geschaeftskunden" className="hidden lg:flex items-center gap-2 px-4 py-2 ml-2 bg-[#1d1d1f] text-white text-[12px] font-medium rounded-full hover:bg-black transition-all shadow-sm">
                <Briefcase className="w-3.5 h-3.5" />
                Geschäftskunden
              </a>

              <button
                className="xl:hidden p-2 text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Full-Screen Backdrop Overlay for Mega Menu */}
        <AnimatePresence>
          {megaMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 top-[64px] bg-[#1d1d1f]/20 backdrop-blur-md z-10"
              onMouseEnter={() => setMegaMenuOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mega Menu Dropdown (Floating Popup Card) */}
        <AnimatePresence>
          {megaMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onMouseLeave={() => setMegaMenuOpen(false)}
              className="fixed top-[64px] left-0 right-0 w-full z-50 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.12)] xl:flex flex-col hidden pointer-events-auto"
            >
              {/* Top 3 Columns */}
              <div className="max-w-[1440px] w-full mx-auto flex bg-white min-h-[500px]">
                
                {/* Column 1: Main Categories */}
                <div className="w-[320px] bg-[#fbfbfd] p-6 pt-8 shrink-0">
                  <p className="text-[12px] font-medium text-gray-400 mb-4 px-3">Unsere Produkte</p>
                  <div className="space-y-1">
                    {menuCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onMouseEnter={() => setActiveCategory(cat.id)}
                        className={`w-full flex items-center gap-4 px-3 py-3 rounded-2xl text-[14px] transition-all duration-200 ${
                          activeCategory === cat.id ? "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] font-semibold text-[#1d1d1f]" : "text-gray-600 hover:bg-gray-100/50"
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg ${activeCategory === cat.id ? "text-blue-500" : "text-gray-500"}`}>
                          {cat.icon}
                        </div>
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Column 2: Sub-Categories (Dynamic) */}
                <div className="w-[300px] border-l border-gray-100 p-8 pt-8 shadow-inner shrink-0 bg-white">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-4"
                  >
                    <p className="text-[12px] font-medium text-gray-400 mb-2">Entdecken</p>
                    {subCategories[activeCategory]?.map((sub, i) => (
                      <a key={i} href={sub.href} className="text-[14px] text-gray-700 hover:text-blue-500 font-medium transition-colors">
                        {sub.label}
                      </a>
                    ))}
                  </motion.div>
                </div>

                {/* Column 3: Promos & Logos */}
                <div className="flex-1 p-8 pt-8 bg-white border-l border-gray-100 flex flex-col justify-between">
                  {/* Promo Cards */}
                  <div className="space-y-4">
                    <p className="text-[12px] font-medium text-gray-400 mb-2">Unsere Empfehlungen</p>
                    
                    <div className="flex flex-col gap-3">
                      <a href="#handy-abos" className="flex items-start gap-4 p-4 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all group">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-100 group-hover:scale-110 transition-transform">
                          <Smartphone className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                          <h4 className="text-[15px] font-bold text-[#1d1d1f] mb-0.5">Handy-Abos</h4>
                          <p className="text-[12px] text-gray-500 leading-snug">Vergleiche die besten Abos der Schweiz.</p>
                        </div>
                      </a>

                      <a href="#internet-tv" className="flex items-start gap-4 p-4 rounded-3xl bg-blue-500 border border-blue-600 hover:shadow-lg shadow-blue-500/20 transition-all group">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <Laptop className="w-6 h-6 text-white" fill="currentColor" />
                        </div>
                        <div>
                          <h4 className="text-[15px] font-bold text-white mb-0.5">Home-Abos</h4>
                          <p className="text-[12px] text-white/80 leading-snug">Das beste Internet & TV für dein Zuhause.</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Provider Logos Grid */}
                  <div className="mt-8">
                    <p className="text-[12px] font-medium text-gray-400 mb-3">Ausgewählte Partner</p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-11 rounded-xl border border-gray-200 flex items-center justify-center text-[10px] font-bold text-red-500 hover:border-red-500 hover:shadow-sm transition-all cursor-pointer">SUNRISE</div>
                      <div className="h-11 rounded-xl border border-gray-200 flex items-center justify-center text-[10px] font-bold text-blue-600 hover:border-blue-600 hover:shadow-sm transition-all cursor-pointer">WWZ</div>
                      <div className="h-11 rounded-xl border border-gray-200 flex items-center justify-center text-[10px] font-bold text-[#e10079] hover:border-[#e10079] hover:shadow-sm transition-all cursor-pointer">QUICKLINE</div>
                      <div className="h-11 rounded-xl border border-gray-200 flex items-center justify-center text-[10px] font-bold text-black hover:border-black hover:bg-black hover:text-white hover:shadow-sm transition-all cursor-pointer">SALT</div>
                      <div className="h-11 rounded-xl border border-gray-200 flex items-center justify-center text-[10px] font-bold text-green-500 hover:border-green-500 hover:shadow-sm transition-all cursor-pointer">YALLO</div>
                      <div className="h-11 rounded-xl border border-gray-200 flex items-center justify-center text-[10px] font-bold text-blue-500 hover:border-blue-500 hover:shadow-sm transition-all cursor-pointer">LEBARA</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Banner Area */}
              <div className="w-full bg-[#fbfbfd] border-t border-gray-200 p-5 px-8 flex flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Tags className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-bold text-[#1d1d1f] text-[15px]">10% Bonus auf Geräteverkauf. </span>
                    <span className="text-gray-500 text-[15px] ml-1">Was ist dein exaktes Modell?</span>
                  </div>
                </div>
                <a href="#geraet-verkaufen" className="px-6 py-2.5 bg-white border border-gray-200 text-[#1d1d1f] font-semibold rounded-full hover:bg-white hover:shadow-sm transition-all text-sm">
                  Jetzt Preis checken!
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom line for normal states */}
        {!megaMenuOpen && <div className="h-px bg-[#d2d2d7]/60 absolute bottom-0 left-0 right-0" />}

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="xl:hidden overflow-hidden bg-[#f5f5f7] border-b border-[#d2d2d7]/50"
            >
              <div className="max-w-[1440px] mx-auto px-6 py-5 space-y-0.5">
                {/* Mobile search */}
                <div className="pb-4 mb-4 border-b border-[#d2d2d7]/40">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" />
                    <input
                      type="text"
                      placeholder="Suchen..."
                      className="w-full h-11 pl-11 pr-5 text-[15px] rounded-xl bg-white border-0 text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-1 focus:ring-[#0071e3]/30"
                    />
                  </div>
                </div>
                {mainNav.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-[16px] font-medium text-[#1d1d1f] hover:bg-white rounded-xl transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Screen Blur Backdrop layer outside the scroll flow */}
      <AnimatePresence>
        {megaMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="hidden xl:block fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
            onMouseEnter={() => setMegaMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
