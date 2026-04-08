import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check, Globe, ArrowRight, X,
  Smartphone, Shield, Clock, BadgePercent, Headphones, ChevronRight
} from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

/* ═══ BRAND ═══ */
const BLUE = "#0071e3";

/* ═══ PROVIDER CONFIG ═══ */
const prov = {
  salt:      { name: "Salt",      color: "#8338EC", accent: "#f3eefe", net: "Salt",    logo: "https://deinabo.ch/storage/6ktcMccHpt804ixqW1sKKgWGfCzo0A-metaU2FsdF9JbnRlcm5ldF9UVl9Nb2JpbGVfQkxBQ0suc3Zn-.svg" },
  sunrise:   { name: "Sunrise",   color: "#e4002b", accent: "#fef2f2", net: "Sunrise", logo: "https://deinabo.ch/storage/hiB7miejvy6lUSK2u5o3qqoucPuGMJ-metac3VucmlzZS5zdmc=-.svg" },
  yallo:     { name: "yallo",     color: "#00b846", accent: "#f0fdf4", net: "Sunrise", logo: "https://deinabo.ch/storage/U55wmqpTMQGG4p1iiPFZTOdF8MK3Ik-metaeWFsbG8uc3Zn-.svg" },
  lebara:    { name: "Lebara",    color: "#0052cc", accent: "#eff6ff", net: "Sunrise", logo: "https://deinabo.ch/storage/SmAmEz2lX6SVF6h718aTwhIDgRWdjh-metabGViYXJhLnN2Zw==-.svg" },
  quickline: { name: "Quickline", color: "#e10079", accent: "#fdf2f8", net: "Sunrise", logo: "https://deinabo.ch/storage/akhDIZbWHLC9eAlliC4rjO3NY2OWa2-metacXVpY2tsaW5lLnN2Zw==-.svg" },
};
type ProvKey = keyof typeof prov;

/* ═══ PLAN DATA ═══ */
interface Plan {
  id: string; name: string; provider: ProvKey;
  deal?: string; dataCH: string; callsCH: string;
  months: number; price: number; was: number;
  cashback?: number; roaming: string[]; extras: string[];
  tags: string[]; url: string; top?: boolean; fiveG?: boolean;
}

const allPlans: Plan[] = [
  { id:"sm", name:"Swiss Max", provider:"salt", deal:"Premium-Deal 🚀", fiveG:true,
    dataCH:"Unlimitiert", callsCH:"Unlimitiert", months:24,
    price:21.95, was:72.95, cashback:60,
    roaming:["1 GB/Mt. Europe Zone"],
    extras:["Lebenslanger Rabatt","eSIM","Apple Watch"],
    tags:["ch","eu"], url:"https://www.deinabo.ch/handy-abos/salt-swiss-max/", top:true },
  { id:"s10", name:"Swiss 10GB", provider:"salt", fiveG:true,
    dataCH:"10 GB", callsCH:"Unlimitiert", months:24,
    price:16.95, was:51.95,
    roaming:[],
    extras:["SIM-Karte geschenkt","99.9% Netzabdeckung"],
    tags:["ch","budget"], url:"https://www.deinabo.ch/handy-abos/salt-swiss-10gb/" },
  { id:"sxxl", name:"Swiss XXL", provider:"salt", fiveG:true,
    dataCH:"Unlimitiert", callsCH:"Unlimitiert", months:24,
    price:26.95, was:83.95, cashback:60,
    roaming:["4 GB/Mt. Europe Zone","100 Min. Europe Zone"],
    extras:["eSIM","Apple Watch"],
    tags:["ch"], url:"https://www.deinabo.ch/handy-abos/salt-swiss-xxl-aktion/" },
  { id:"st", name:"Travel", provider:"salt", fiveG:true,
    dataCH:"Unlimitiert", callsCH:"Unlimitiert", months:24,
    price:29.95, was:94.95, cashback:60,
    roaming:["Unlim. Daten EU & USA/CAN (20GB HS)","5 GB/Mt. Travel Zone"],
    extras:["eSIM","Apple Watch"],
    tags:["eu","reisen"], url:"https://www.deinabo.ch/handy-abos/salt-travel/" },
  { id:"sem", name:"Europe Max", provider:"salt", deal:"Premium-Deal 🚀", fiveG:true,
    dataCH:"Unlimitiert", callsCH:"Unlimitiert", months:24,
    price:29.95, was:84.95, cashback:60,
    roaming:["Unlim. Daten in der EU","Unlim. Anrufe in der EU"],
    extras:["Lebenslanger Rabatt","eSIM","Apple Watch"],
    tags:["eu"], url:"https://www.deinabo.ch/handy-abos/salt-europe-max/", top:true },
  { id:"sexxl", name:"Europe XXL", provider:"salt", deal:"62% Rabatt", fiveG:true,
    dataCH:"Unlimitiert", callsCH:"Unlimitiert", months:24,
    price:39.95, was:104.95, cashback:80,
    roaming:["Unlim. Daten EU","Unlim. Anrufe in/aus CH in EU"],
    extras:["Lebenslanger Rabatt","eSIM","Apple Watch"],
    tags:["eu"], url:"https://www.deinabo.ch/handy-abos/salt-europe-xxl/" },
  { id:"sexl", name:"Europe XL", provider:"salt", fiveG:true,
    dataCH:"Unlimitiert", callsCH:"Unlimitiert", months:0,
    price:35.95, was:92.95,
    roaming:["Unlim. Daten EU (10GB HS)","Unlim. Anrufe in/aus CH in EU"],
    extras:["Keine Vertragsbindung","eSIM","Apple Watch"],
    tags:["eu","flex"], url:"https://www.deinabo.ch/handy-abos/salt-europe-xl/" },
  { id:"stm", name:"Travel Max", provider:"salt", fiveG:true,
    dataCH:"Unlimitiert", callsCH:"Unlimitiert", months:24,
    price:59.95, was:104.95, cashback:80,
    roaming:["Unlim. Daten EU + 30 Reiseziele","Unlim. Anrufe EU + 600 Min. weltweit"],
    extras:["eSIM","Apple Watch"],
    tags:["eu","reisen","welt"], url:"https://www.deinabo.ch/handy-abos/salt-travel-max/" },
  { id:"sce+", name:"Swiss Connect Europe+", provider:"sunrise", deal:"⭐ Empfehlung", fiveG:true,
    dataCH:"Unlimitiert", callsCH:"Unlimitiert", months:12,
    price:39.95, was:79.90,
    roaming:["Unlim. Daten EU","5 GB/Mt. USA & Kanada","Unlim. Anrufe EU"],
    extras:["Lebenslanger Rabatt","eSIM","Apple Watch"],
    tags:["eu"], url:"https://www.deinabo.ch/handy-abos/sunrise-swiss-connect-europe+/", top:true },
  { id:"scg", name:"Swiss Connect Global", provider:"sunrise", fiveG:true,
    dataCH:"Unlimitiert", callsCH:"Unlimitiert", months:12,
    price:49.95, was:99.90,
    roaming:["Unlim. Daten EU, USA & Kanada","Unlim. Anrufe EU, USA & Kanada"],
    extras:["Lebenslanger Rabatt","eSIM","Apple Watch"],
    tags:["welt"], url:"https://www.deinabo.ch/handy-abos/sunrise-swiss-connect-global/" },
  { id:"scn", name:"Swiss Connect Neighbors", provider:"sunrise", fiveG:true,
    dataCH:"Unlimitiert", callsCH:"Unlimitiert", months:24,
    price:34.95, was:69.90, cashback:50,
    roaming:["Unlim. Daten Nachbarländer","Unlim. Anrufe Nachbarländer"],
    extras:["eSIM","Apple Watch"],
    tags:["ch","eu"], url:"https://www.deinabo.ch/handy-abos/sunrise-swiss-connect-neighbors/" },
  { id:"yte", name:"Top Europe", provider:"yallo", fiveG:true,
    dataCH:"Unlimitiert", callsCH:"Unlimitiert", months:0,
    price:34.90, was:100.00,
    roaming:["Unlim. Daten EU, USA & Kanada"],
    extras:["Keine Vertragsbindung","Lebenslanger Rabatt","eSIM"],
    tags:["eu","flex"], url:"https://www.deinabo.ch/handy-abos/yallo-top-europe/" },
  { id:"ysf", name:"Super Fat XXL", provider:"yallo", deal:"🚀 Mega-Deal", fiveG:true,
    dataCH:"Unlimitiert", callsCH:"Unlimitiert", months:0,
    price:47.90, was:131.00,
    roaming:["Unlim. Daten EU, USA & Kanada","Unlim. Anrufe EU, USA & Kanada"],
    extras:["Keine Vertragsbindung","Lebenslanger Rabatt","eSIM"],
    tags:["welt","flex"], url:"https://www.deinabo.ch/handy-abos/yallo-Super-Fat-XXL/", top:true },
  { id:"lsf", name:"Swiss Flat", provider:"lebara",
    dataCH:"Unlimitiert", callsCH:"Unlimitiert", months:0,
    price:22.95, was:60.95,
    roaming:[],
    extras:["SIM-Karte geschenkt","Lebenslanger Rabatt","eSIM"],
    tags:["ch","budget","flex"], url:"https://www.deinabo.ch/handy-abos/lebara-swiss-flat/" },
  { id:"lsl", name:"Swiss L", provider:"lebara",
    dataCH:"Unlimitiert", callsCH:"Unlimitiert", months:0,
    price:25.95, was:70.95,
    roaming:["10 GB Daten in der EU"],
    extras:["SIM-Karte geschenkt","Lebenslanger Rabatt","eSIM"],
    tags:["ch"], url:"https://www.deinabo.ch/handy-abos/lebara-swiss-l/" },
  { id:"lel", name:"Europe L", provider:"lebara",
    dataCH:"Unlimitiert", callsCH:"Unlimitiert", months:0,
    price:25.95, was:70.95,
    roaming:["Unlim. Anrufe aus CH in EU"],
    extras:["SIM-Karte geschenkt","Lebenslanger Rabatt","eSIM"],
    tags:["eu"], url:"https://www.deinabo.ch/handy-abos/lebara-europe-l/" },
  { id:"lxxl", name:"XXL", provider:"lebara",
    dataCH:"Unlimitiert", callsCH:"Unlimitiert", months:0,
    price:40.95, was:100.95,
    roaming:["Unlim. Daten EU, USA & Kanada","Unlim. Anrufe EU, USA & Kanada"],
    extras:["SIM-Karte geschenkt","Lebenslanger Rabatt","eSIM"],
    tags:["welt"], url:"https://www.deinabo.ch/handy-abos/lebara-xxl-abo/" },
  { id:"qxl", name:"Mobile XL", provider:"quickline", deal:"50% Rabatt", fiveG:true,
    dataCH:"Unlimitiert", callsCH:"Unlimitiert", months:24,
    price:34.50, was:69.00,
    roaming:["40 GB EU, USA & Kanada","Unlim. Anrufe EU, USA & Kanada"],
    extras:["Ersparnis: CHF 828.-","Apple Watch"],
    tags:["eu"], url:"https://www.deinabo.ch/handy-abos/quickline-mobile-xl/" },
  { id:"ql", name:"Mobile L", provider:"quickline", fiveG:true,
    dataCH:"Unlimitiert", callsCH:"Unlimitiert", months:24,
    price:14.50, was:29.00,
    roaming:["5 GB EU, USA & Kanada"],
    extras:["50% Rabatt 2 Jahre","eSIM"],
    tags:["ch","budget"], url:"https://www.deinabo.ch/handy-abos/quickline-mobile-l-flashsale/" },
];

/* ═══ MOBILE CARD (compact, clean, full-width) ═══ */
const MobileCard = ({ plan }: { plan: Plan }) => {
  const p = prov[plan.provider];
  const disc = Math.round(((plan.was - plan.price) / plan.was) * 100);
  const [w, d] = plan.price.toFixed(2).split(".");

  return (
    <a
      href={plan.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-2xl overflow-hidden border border-gray-100 active:scale-[0.99] transition-transform"
    >
      {/* Deal badge */}
      {plan.deal && (
        <div className="flex items-center justify-between px-4 py-2" style={{ backgroundColor: p.color }}>
          <span className="text-white text-[11px] font-bold">{plan.deal}</span>
          <span className="text-white/80 text-[11px] font-black">{disc}% Rabatt</span>
        </div>
      )}

      <div className="p-4">
        {/* Row 1: Logo + Name + 5G + Discount */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <img src={p.logo} alt={p.name} className="h-5 w-auto object-contain" />
            <span className="text-[16px] font-bold text-[#1d1d1f]">{plan.name}</span>
            {plan.fiveG && <span className="px-1.5 py-0.5 bg-[#1d1d1f] text-white text-[8px] font-black rounded">5G</span>}
          </div>
          {!plan.deal && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-black" style={{ backgroundColor: p.accent, color: p.color }}>–{disc}%</span>
          )}
        </div>

        {/* Row 2: Key features in two columns */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-3">
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 shrink-0" style={{ color: p.color }} />
            <span className="text-[12px] text-gray-700">{plan.dataCH === "Unlimitiert" ? "Unlim. Daten" : plan.dataCH} CH</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 shrink-0" style={{ color: p.color }} />
            <span className="text-[12px] text-gray-700">Unlim. Anrufe & SMS</span>
          </div>
          {plan.roaming.slice(0, 2).map((r, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 shrink-0" style={{ color: p.color }} />
              <span className="text-[12px] text-gray-600 truncate">{r}</span>
            </div>
          ))}
        </div>

        {/* Row 3: Highlight tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {plan.cashback && (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold" style={{ backgroundColor: p.accent, color: p.color }}>
              CHF {plan.cashback}.- Cashback
            </span>
          )}
          {plan.extras.includes("Lebenslanger Rabatt") && (
            <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-[10px] font-bold">Rabatt für immer</span>
          )}
          {plan.months === 0 && (
            <span className="px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-[10px] font-bold">Ohne Vertrag</span>
          )}
          <span className="px-2 py-0.5 bg-gray-50 text-gray-500 rounded text-[10px] font-bold">Gratis Aktivierung</span>
        </div>

        {/* Row 4: Price + CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <div className="flex items-baseline">
              <span className="text-[10px] text-gray-400 mr-0.5">CHF</span>
              <span className="text-[28px] font-black text-[#1d1d1f] leading-none">{w}</span>
              <span className="text-[14px] font-bold text-[#1d1d1f]">.{d}</span>
              <span className="text-[11px] text-gray-400 ml-1">/Mt.</span>
            </div>
            <span className="text-[10px] text-gray-400 line-through">{plan.was.toFixed(2)}/Mt.</span>
          </div>
          <div
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-white text-[13px] font-bold"
            style={{ backgroundColor: BLUE }}
          >
            Bestellen <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        <p className="text-[9px] text-gray-400 text-center mt-2">
          {plan.months === 0 ? "Keine Vertragsbindung" : `${plan.months} Mt. Laufzeit`} · Netz: {p.net}
        </p>
      </div>
    </a>
  );
};

/* ═══ DESKTOP CARD (richer detail) ═══ */
const DesktopCard = ({ plan }: { plan: Plan }) => {
  const p = prov[plan.provider];
  const disc = Math.round(((plan.was - plan.price) / plan.was) * 100);
  const [w, d] = plan.price.toFixed(2).split(".");

  const highlights: string[] = [];
  if (plan.cashback) highlights.push(`CHF ${plan.cashback}.- Cashback`);
  if (plan.extras.includes("Lebenslanger Rabatt")) highlights.push("Lebenslanger Rabatt");
  if (plan.months === 0) highlights.push("Keine Vertragsbindung");
  if (plan.extras.includes("eSIM")) highlights.push("eSIM");

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className={`group relative bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 ${
        plan.deal ? "" : "border border-gray-200"
      }`}
      style={plan.deal ? { boxShadow: `0 0 0 2px ${p.color}` } : undefined}
    >
      {plan.deal && (
        <div className="flex items-center justify-between px-4 py-2" style={{ backgroundColor: p.color }}>
          <span className="text-white text-[12px] font-bold">{plan.deal}</span>
          <span className="text-white/90 text-[12px] font-black">{disc}% Rabatt</span>
        </div>
      )}

      <div className="px-5 pt-5 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img src={p.logo} alt={p.name} className="h-6 w-auto object-contain shrink-0" />
          <h3 className="text-[17px] font-bold text-[#1d1d1f] leading-tight">{plan.name}</h3>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {plan.fiveG && <span className="px-1.5 py-0.5 bg-[#1d1d1f] text-white text-[9px] font-black rounded">5G</span>}
          {!plan.deal && <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-black rounded">–{disc}%</span>}
        </div>
      </div>

      <div className="mx-5 mb-2">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-[12px]">🇨🇭</span>
          <span className="text-[11px] font-bold text-[#1d1d1f] uppercase tracking-wider">In der Schweiz</span>
        </div>
        <div className="space-y-1 pl-0.5">
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 shrink-0" style={{ color: p.color }} />
            <span className="text-[13px] text-gray-700">Unlimitierte Daten{plan.dataCH !== "Unlimitiert" ? ` (${plan.dataCH})` : ""}{plan.fiveG ? " bis 5G" : ""}</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 shrink-0" style={{ color: p.color }} />
            <span className="text-[13px] text-gray-700">Unlimitierte Anrufe & SMS</span>
          </div>
        </div>
      </div>

      {plan.roaming.length > 0 && (
        <div className="mx-5 mb-2">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[12px]">🌍</span>
            <span className="text-[11px] font-bold text-[#1d1d1f] uppercase tracking-wider">Im Ausland</span>
          </div>
          <div className="space-y-1 pl-0.5">
            {plan.roaming.slice(0, 2).map((r, i) => (
              <div key={i} className="flex items-start gap-2">
                <Globe className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: p.color }} />
                <span className="text-[13px] text-gray-700">{r}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {highlights.length > 0 && (
        <div className="mx-5 mb-3 flex flex-wrap gap-1.5">
          {highlights.slice(0, 3).map((h, i) => (
            <span key={i} className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-bold" style={{ backgroundColor: p.accent, color: p.color }}>
              <Check className="w-3 h-3" />{h}
            </span>
          ))}
        </div>
      )}

      <div className="border-t border-gray-100 mx-5" />

      <div className="px-5 py-4 mt-auto">
        <div className="flex items-end justify-between mb-3">
          <div>
            <div className="flex items-baseline gap-0.5">
              <span className="text-[11px] text-gray-400 mr-0.5">CHF</span>
              <span className="text-[36px] font-black text-[#1d1d1f] leading-none tracking-tight">{w}</span>
              <span className="text-[16px] font-bold text-[#1d1d1f]">.{d}</span>
              <span className="text-[12px] text-gray-400 ml-1">/Mt.</span>
            </div>
            <p className="text-[11px] text-gray-400 line-through">{plan.was.toFixed(2)} CHF/Mt.</p>
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            {plan.extras.includes("Lebenslanger Rabatt") && (
              <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded font-bold text-[9px]">Rabatt für immer</span>
            )}
            <span className="px-2 py-0.5 bg-gray-50 rounded font-bold text-gray-500">Aktivierung CHF 0.–</span>
          </div>
        </div>

        <a href={plan.url} target="_blank" rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white text-[14px] font-bold transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
          style={{ backgroundColor: BLUE }}
        >
          Jetzt bestellen <ArrowRight className="w-4 h-4" />
        </a>
        
        <p className="text-[10px] text-gray-400 text-center mt-2 font-medium">
          {plan.months === 0 ? "Keine Vertragsbindung" : `${plan.months} Mt. Laufzeit`} · Netz: {p.net}
        </p>
      </div>
    </motion.article>
  );
};

/* ═══ FILTER CONFIG ═══ */
const providerKeys = Object.keys(prov) as ProvKey[];
const filterCategories = [
  { id:"alle", label:"Alle", icon:"📱" },
  { id:"ch", label:"Schweiz", icon:"🇨🇭" },
  { id:"eu", label:"Europa", icon:"🇪🇺" },
  { id:"welt", label:"Weltweit", icon:"🌍" },
  { id:"budget", label:"Günstig", icon:"💰" },
  { id:"flex", label:"Flex", icon:"⚡" },
];

/* ═══ USP BAR ═══ */
const usps = [
  { icon: BadgePercent, text: "Abo-Vergleich & Kauf", sub: "Finde dein Abo zum günstigsten Preis" },
  { icon: Shield, text: "Spare bis zu CHF 1'200.–", sub: "Exklusive Rabatte & Cashback" },
  { icon: Clock, text: "In 5 Minuten", sub: "Abo einfach online abschliessen" },
  { icon: Headphones, text: "100% Provider-unabhängig", sub: "Abo-Beratung & Hilfe" },
];

/* ═══ PAGE ═══ */
const HandyAbos = () => {
  const [cat, setCat] = useState("alle");
  const [provFilter, setProvFilter] = useState<ProvKey[]>([]);
  const [sort, setSort] = useState<"discount"|"price"|"popular">("discount");
  const [mobileFilter, setMobileFilter] = useState(false);

  const toggleProv = (k: ProvKey) =>
    setProvFilter(prev => prev.includes(k) ? prev.filter(x => x !== k) : [...prev, k]);

  const results = useMemo(() => {
    let r = [...allPlans];
    if (cat !== "alle") r = r.filter(p => p.tags.includes(cat));
    if (provFilter.length) r = r.filter(p => provFilter.includes(p.provider));
    if (sort === "price") r.sort((a,b) => a.price - b.price);
    else if (sort === "discount") r.sort((a,b) => ((b.was-b.price)/b.was) - ((a.was-a.price)/a.was));
    else r.sort((a,b) => (b.top?1:0) - (a.top?1:0));
    return r;
  }, [cat, provFilter, sort]);

  const resetFilters = () => { setCat("alle"); setProvFilter([]); };
  const activeFilterCount = (provFilter.length > 0 ? 1 : 0) + (cat !== "alle" ? 1 : 0);

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <Header />

      {/* ═══════════════════════════════════════════ */}
      {/* ═══ MOBILE LAYOUT ═══ */}
      {/* ═══════════════════════════════════════════ */}
      <div className="lg:hidden">
        
        {/* ── Sticky Mobile Header ── */}
        <div className="sticky top-[56px] z-30 bg-white border-b border-gray-200/60">
          {/* Title row */}
          <div className="px-4 pt-3 pb-2 flex items-center justify-between">
            <div>
              <h1 className="text-[20px] font-black text-[#1d1d1f] leading-tight">Handy-Abos</h1>
              <p className="text-[11px] text-gray-400 font-medium">{results.length} Abos verfügbar</p>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={sort}
                onChange={e => setSort(e.target.value as any)}
                className="px-2.5 py-1.5 bg-gray-50 rounded-lg text-[11px] font-semibold text-gray-700 border-0 focus:outline-none appearance-none"
              >
                <option value="discount">🔥 Top Rabatt</option>
                <option value="price">💰 Günstig</option>
                <option value="popular">⭐ Beliebt</option>
              </select>
              <button
                onClick={() => setMobileFilter(true)}
                className="relative w-9 h-9 rounded-xl flex items-center justify-center bg-gray-50"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="20" y2="12"/><line x1="12" y1="18" x2="20" y2="18"/><circle cx="6" cy="12" r="1.5" fill="#1d1d1f"/><circle cx="10" cy="18" r="1.5" fill="#1d1d1f"/></svg>
                {activeFilterCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[9px] font-bold text-white flex items-center justify-center" style={{ backgroundColor: BLUE }}>
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Category pills */}
          <div className="px-4 pb-2.5 flex gap-1.5 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {filterCategories.map(f => (
              <button
                key={f.id}
                onClick={() => setCat(f.id)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[12px] font-semibold whitespace-nowrap transition-all shrink-0 ${
                  cat === f.id
                    ? "text-white shadow-sm"
                    : "bg-gray-100 text-gray-600"
                }`}
                style={cat === f.id ? { backgroundColor: BLUE } : undefined}
              >
                <span className="text-[11px]">{f.icon}</span> {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Mobile Cards: Full-width vertical list ── */}
        <div className="px-4 py-4 space-y-3">
          {results.map(plan => (
            <MobileCard key={plan.id} plan={plan} />
          ))}

          {results.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl">
              <Smartphone className="w-10 h-10 text-gray-200 mx-auto mb-3" />
              <p className="text-[15px] font-bold text-gray-400 mb-3">Keine Abos gefunden</p>
              <button onClick={resetFilters} className="px-5 py-2.5 text-white font-bold rounded-xl text-[13px]" style={{ backgroundColor: BLUE }}>
                Alle anzeigen
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ═══ MOBILE FILTER SHEET ═══ */}
      <AnimatePresence>
        {mobileFilter && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50" onClick={() => setMobileFilter(false)} />
            <motion.div
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[28px] z-50 max-h-[85vh] overflow-y-auto"
            >
              {/* Handle bar */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-gray-300" />
              </div>
              
              <div className="px-5 pb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[18px] font-black text-[#1d1d1f]">Filter & Sortierung</h3>
                  <button onClick={() => setMobileFilter(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <X className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                {/* Provider selection */}
                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-3">Anbieter</p>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {providerKeys.map(k => {
                    const active = provFilter.includes(k);
                    return (
                      <button key={k} onClick={() => toggleProv(k)}
                        className={`flex flex-col items-center gap-1.5 py-3 rounded-2xl transition-all ${
                          active ? "shadow-md" : "bg-gray-50"
                        }`}
                        style={active ? { backgroundColor: prov[k].accent, boxShadow: `0 0 0 2px ${prov[k].color}` } : undefined}
                      >
                        <img src={prov[k].logo} alt={prov[k].name} className="h-4 w-auto object-contain" />
                        <span className={`text-[10px] font-bold ${active ? "" : "text-gray-400"}`} style={active ? { color: prov[k].color } : undefined}>
                          {prov[k].name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Category */}
                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-3">Kategorie</p>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {filterCategories.map(f => (
                    <button key={f.id} onClick={() => setCat(f.id)}
                      className={`py-3 rounded-2xl text-[12px] font-bold transition-all ${
                        cat === f.id ? "text-white shadow-sm" : "bg-gray-50 text-gray-600"
                      }`}
                      style={cat === f.id ? { backgroundColor: BLUE } : undefined}
                    >{f.icon} {f.label}</button>
                  ))}
                </div>

                {/* Sort */}
                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-3">Sortierung</p>
                <div className="grid grid-cols-3 gap-2 mb-8">
                  {([["discount","🔥 Rabatt"],["price","💰 Preis"],["popular","⭐ Beliebt"]] as const).map(([k,l]) => (
                    <button key={k} onClick={() => setSort(k)}
                      className={`py-3 rounded-2xl text-[12px] font-bold transition-all ${
                        sort === k ? "text-white shadow-sm" : "bg-gray-50 text-gray-600"
                      }`}
                      style={sort === k ? { backgroundColor: "#1d1d1f" } : undefined}
                    >{l}</button>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {activeFilterCount > 0 && (
                    <button onClick={resetFilters}
                      className="flex-1 py-3.5 rounded-2xl border-2 border-gray-200 text-[14px] font-bold text-gray-500"
                    >Zurücksetzen</button>
                  )}
                  <button onClick={() => setMobileFilter(false)}
                    className="flex-[2] py-3.5 text-white font-bold text-[14px] rounded-2xl"
                    style={{ backgroundColor: BLUE }}
                  >{results.length} Abos anzeigen</button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


      {/* ═══════════════════════════════════════════ */}
      {/* ═══ DESKTOP LAYOUT ═══ */}
      {/* ═══════════════════════════════════════════ */}
      <div className="hidden lg:block">
        
        {/* Hero */}
        <section className="pt-[100px] pb-6 bg-white border-b border-gray-100">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-[42px] font-black text-[#1d1d1f] tracking-tight leading-[1.1]">Handy-Abos</h1>
                <p className="text-[15px] text-gray-500 mt-1 font-medium">
                  <span className="text-[#1d1d1f] font-bold">{results.length}</span> Abos verfügbar – vergleiche & spare.
                </p>
              </div>
              <select
                value={sort}
                onChange={e => setSort(e.target.value as any)}
                className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-[13px] font-semibold text-gray-700 cursor-pointer focus:outline-none"
              >
                <option value="discount">Höchster Rabatt</option>
                <option value="price">Günstigster Preis</option>
                <option value="popular">Beliebteste</option>
              </select>
            </div>
          </div>
        </section>

        {/* USP Bar */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="flex py-3">
              {usps.map((u, i) => (
                <div key={i} className="flex items-center gap-2.5 flex-1 px-4 py-2 border-r border-gray-100 last:border-r-0">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "#eff6ff" }}>
                    <u.icon className="w-4 h-4" style={{ color: BLUE }} />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-[#1d1d1f]">{u.text}</p>
                    <p className="text-[10px] text-gray-400">{u.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar + Grid */}
        <div className="max-w-[1300px] mx-auto px-6 py-8">
          <div className="flex gap-6">
            <aside className="w-[250px] shrink-0 sticky top-[110px] self-start">
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <h4 className="text-[13px] font-black text-[#1d1d1f] mb-3">Netzauswahl</h4>
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {providerKeys.map(k => {
                    const active = provFilter.includes(k);
                    return (
                      <button key={k} onClick={() => toggleProv(k)}
                        className={`flex items-center justify-center py-2.5 px-3 rounded-xl border-2 transition-all duration-200 ${
                          active ? "border-transparent shadow-md" : "bg-white border-gray-100 hover:border-gray-300"
                        }`}
                        style={active ? { backgroundColor: prov[k].color, borderColor: prov[k].color } : undefined}
                      >
                        <img src={prov[k].logo} alt={prov[k].name} className={`h-4 w-auto object-contain ${active ? "brightness-0 invert" : ""}`} />
                      </button>
                    );
                  })}
                </div>

                <h4 className="text-[13px] font-black text-[#1d1d1f] mb-3">Kategorie</h4>
                <div className="space-y-1 mb-5">
                  {filterCategories.map(f => (
                    <button key={f.id} onClick={() => setCat(f.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-[12px] font-medium transition-all ${
                        cat === f.id ? "text-white font-bold" : "text-gray-600 hover:bg-gray-50"
                      }`}
                      style={cat === f.id ? { backgroundColor: BLUE } : undefined}
                    >{f.icon} {f.label}</button>
                  ))}
                </div>

                {activeFilterCount > 0 && (
                  <button onClick={resetFilters}
                    className="w-full py-2.5 rounded-lg border border-gray-200 text-[12px] font-bold text-gray-500 hover:text-[#1d1d1f] transition-all"
                  >Filter zurücksetzen</button>
                )}
              </div>

              <div className="mt-3 bg-white rounded-2xl p-4 border border-gray-100">
                <h4 className="text-[13px] font-bold text-[#1d1d1f] mb-3">Hast du Fragen?</h4>
                <div className="space-y-1.5">
                  <a href="https://wa.me/41415353535" className="flex items-center gap-2 w-full py-2 px-3 bg-[#25D366] text-white text-[11px] font-bold rounded-lg">💬 WhatsApp</a>
                  <a href="tel:+41415353535" className="flex items-center gap-2 w-full py-2 px-3 bg-gray-50 text-[#1d1d1f] text-[11px] font-bold rounded-lg">📞 041 535 35 35</a>
                  <a href="mailto:info@deinabo.ch" className="flex items-center gap-2 w-full py-2 px-3 bg-gray-50 text-[#1d1d1f] text-[11px] font-bold rounded-lg">✉️ E-Mail</a>
                </div>
              </div>
            </aside>

            <div className="flex-1 min-w-0">
              <AnimatePresence mode="popLayout">
                <motion.div layout className="grid grid-cols-2 xl:grid-cols-3 gap-4">
                  {results.map(plan => (
                    <DesktopCard key={plan.id} plan={plan} />
                  ))}
                </motion.div>
              </AnimatePresence>

              {results.length === 0 && (
                <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                  <Smartphone className="w-10 h-10 text-gray-200 mx-auto mb-3" />
                  <p className="text-[16px] font-bold text-gray-400 mb-1">Keine Abos gefunden</p>
                  <button onClick={resetFilters} className="mt-3 px-5 py-2.5 text-white font-bold rounded-xl text-[13px]" style={{ backgroundColor: BLUE }}>
                    Alle anzeigen
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default HandyAbos;
