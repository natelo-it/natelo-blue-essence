import { motion } from "framer-motion";

const providers = [
  { name: "Sunrise", src: "https://deinabo.ch/storage/hiB7miejvy6lUSK2u5o3qqoucPuGMJ-metac3VucmlzZS5zdmc=-.svg" },
  { name: "Salt", src: "https://deinabo.ch/storage/6ktcMccHpt804ixqW1sKKgWGfCzo0A-metaU2FsdF9JbnRlcm5ldF9UVl9Nb2JpbGVfQkxBQ0suc3Zn-.svg" },
  { name: "yallo", src: "https://deinabo.ch/storage/U55wmqpTMQGG4p1iiPFZTOdF8MK3Ik-metaeWFsbG8uc3Zn-.svg" },
  { name: "Lebara", src: "https://deinabo.ch/storage/SmAmEz2lX6SVF6h718aTwhIDgRWdjh-metabGViYXJhLnN2Zw==-.svg" },
  { name: "Quickline", src: "https://deinabo.ch/storage/akhDIZbWHLC9eAlliC4rjO3NY2OWa2-metacXVpY2tsaW5lLnN2Zw==-.svg" },
];

const accessories = [
  { name: "Green Lion", src: "https://cdn.natelo.ch/wp-content/uploads/2025/08/14081642/green-lion-brand-1.png" },
  { name: "Guess", src: "https://cdn.natelo.ch/wp-content/uploads/2025/08/14081642/guess-brand-1.svg" },
  { name: "Levelo", src: "https://cdn.natelo.ch/wp-content/uploads/2025/08/14081642/levelo-brand-1-1.png" },
  { name: "Nillkin", src: "https://cdn.natelo.ch/wp-content/uploads/2025/08/14081642/nillkin-brand-1.svg" },
  { name: "Porodo", src: "https://cdn.natelo.ch/wp-content/uploads/2025/08/14081642/porodo-brand-1.svg" },
  { name: "Powerology", src: "https://cdn.natelo.ch/wp-content/uploads/2025/08/14081642/powerology-brand-1.svg" },
];

const TopBrandsSection = () => {
  return (
    <section className="bg-[#f5f5f7] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* ── Netzwerk-Partner (Provider Logos) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-8">
            Unsere Netzwerk-Partner
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-14 lg:gap-20">
            {providers.map((p, i) => (
              <motion.img
                key={p.name}
                src={p.src}
                alt={p.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="h-5 sm:h-6 md:h-7 lg:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              />
            ))}
          </div>
        </motion.div>

        {/* ── Divider ── */}
        <div className="border-t border-gray-200/60 my-10 md:my-14" />

        {/* ── Zubehör-Marken ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-8">
            Top Zubehör Marken
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-14 lg:gap-20">
            {accessories.map((b, i) => (
              <motion.img
                key={b.name}
                src={b.src}
                alt={b.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="h-5 sm:h-7 md:h-8 lg:h-9 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TopBrandsSection;
