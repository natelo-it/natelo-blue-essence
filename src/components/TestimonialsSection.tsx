import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marco L.",
    location: "Zug",
    text: "Super Beratung und faire Preise! Mein neues Sunrise-Abo spart mir über CHF 200 pro Jahr. Kann natelo nur empfehlen.",
    rating: 5,
  },
  {
    name: "Sandra W.",
    location: "Luzern",
    text: "Handy-Reparatur in unter einer Stunde – schnell, professionell und günstig. Komme sicher wieder!",
    rating: 5,
  },
  {
    name: "Thomas B.",
    location: "Zürich",
    text: "Top Service beim Geräteverkauf. Faire Bewertung, schnelle Auszahlung. Alles reibungslos abgelaufen.",
    rating: 5,
  },
  {
    name: "Lisa M.",
    location: "Zug",
    text: "Refurbished iPhone in perfektem Zustand! Sieht aus wie neu und ist deutlich günstiger. Sehr empfehlenswert.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-16 sm:py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6e6e73] mb-4">
            Kundenstimmen
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.003em] text-[#1d1d1f]">
            Das sagen unsere Kunden
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#6e6e73] max-w-xl mx-auto">
            Über 5'000 zufriedene Kunden vertrauen auf natelo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative bg-[#f5f5f7] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-7 h-7 text-[#d2d2d7] absolute top-5 right-5" />

              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-[#f5a623] text-[#f5a623]" />
                ))}
              </div>

              <p className="text-sm text-[#1d1d1f] leading-relaxed mb-5">
                „{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-[#d2d2d7]/50">
                <div className="w-9 h-9 rounded-full bg-[#d2d2d7]/50 flex items-center justify-center">
                  <span className="text-sm font-semibold text-[#6e6e73]">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1d1d1f]">{t.name}</p>
                  <p className="text-xs text-[#86868b]">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
