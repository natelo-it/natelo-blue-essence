import { motion } from "framer-motion";
import { MapPin, Globe, PhoneForwarded, Clock } from "lucide-react";

const locations = [
  {
    name: "Emmenbrücke",
    address: "Sonnenplatz 1",
    plz: "6020 Emmenbrücke",
    time: "Geöffnet bis 19.00 Uhr.",
  },
  {
    name: "Küssnacht am Rigi",
    address: "Bahnhofstrasse 38",
    plz: "6403 Küssnacht",
    time: "Geöffnet bis 18.30 Uhr.",
  },
  {
    name: "Sursee",
    address: "Surseepark 3",
    plz: "Bahnhofstrasse 20\n6210 Sursee",
    time: "Geöffnet bis 19.00 Uhr.",
  },
  {
    name: "Muri",
    address: "Aarauerstrasse 6",
    plz: "5630 Muri",
    time: "Geöffnet bis 19.00 Uhr.",
  },
  {
    name: "Rapperswil",
    address: "Obere\nBahnhofstrasse 58\n8640 Rapperswil",
    time: "Geöffnet bis 19.00 Uhr.",
  },
];

const LocationsSection = () => {
  return (
    <section id="standorte" className="bg-[#f5f5f7] pt-16 sm:pt-20 pb-8 overflow-hidden">
      <div className="w-full max-w-[980px] mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-b border-[#d2d2d7] pb-6 sm:pb-8 mb-6 sm:mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4">
            <h2 className="text-[22px] sm:text-[28px] md:text-3xl font-semibold text-[#1d1d1f] tracking-tight">
              Besuche uns in deiner Nähe.
            </h2>
            <div className="text-[13px] text-[#86868b] flex gap-4">
              <span className="flex items-center gap-1.5"><PhoneForwarded className="w-3.5 h-3.5"/> 041 535 44 44</span>
              <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5"/> hello@natelo.ch</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-8 sm:gap-y-10">
            {locations.map((loc, idx) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * idx }}
                className="flex flex-col"
              >
                <h3 className="font-semibold text-[#1d1d1f] text-[13px] mb-1">
                  {loc.name}
                </h3>
                <p className="text-[#86868b] text-[12px] leading-relaxed mb-3 whitespace-pre-line">
                  {loc.address}
                  <br />
                  {loc.plz}
                </p>
                <p className="text-[#86868b] text-[11px] mb-2">{loc.time}</p>
                <a href="#" className="mt-auto text-[#0066cc] text-[12px] hover:underline flex items-center">
                  Route planen <span className="ml-1 text-[10px]">›</span>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;
