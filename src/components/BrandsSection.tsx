import { motion } from "framer-motion";

const brands = [
  { name: "Green Lion", src: "https://cdn.natelo.ch/wp-content/uploads/2025/08/14081642/green-lion-brand-1.png" },
  { name: "Guess", src: "https://cdn.natelo.ch/wp-content/uploads/2025/08/14081642/guess-brand-1.svg" },
  { name: "Levelo", src: "https://cdn.natelo.ch/wp-content/uploads/2025/08/14081642/levelo-brand-1-1.png" },
  { name: "Nillkin", src: "https://cdn.natelo.ch/wp-content/uploads/2025/08/14081642/nillkin-brand-1.svg" },
  { name: "Porodo", src: "https://cdn.natelo.ch/wp-content/uploads/2025/08/14081642/porodo-brand-1.svg" },
  { name: "Powerology", src: "https://cdn.natelo.ch/wp-content/uploads/2025/08/14081642/powerology-brand-1.svg" },
];

export const BrandsSection = () => {
  return (
    <section className="bg-white py-12 border-t border-[#f5f5f7]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[13px] tracking-[0.05em] uppercase text-[#86868b] font-medium mb-10"
          style={{ fontFamily: "'Aileron', sans-serif" }}
        >
          Unsere Top Zubehör Marken
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-20">
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="group cursor-pointer"
            >
              <img
                src={brand.src}
                alt={brand.name}
                className="h-7 sm:h-9 md:h-11 object-contain opacity-80 mix-blend-multiply grayscale brightness-50 contrast-125 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
