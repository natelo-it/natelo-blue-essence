import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PremiumSectionProps {
  id: string;
  badge: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta?: string;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  variant?: "white" | "gray" | "dark";
  providers?: { name: string; color: string }[];
  imageClassName?: string;
}

const bgClasses: Record<string, string> = {
  white: "bg-white",
  gray: "bg-[#f5f5f7]",
  dark: "bg-[#1d1d1f] text-white",
};

const PremiumSection = ({
  id,
  badge,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
  reverse = false,
  variant = "white",
  providers,
  imageClassName,
}: PremiumSectionProps) => {
  const isDark = variant === "dark";

  return (
    <section id={id} className={`relative overflow-hidden ${bgClasses[variant] || bgClasses.white}`}>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 md:py-32 lg:py-40">
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-12 lg:gap-16`}
        >
          {/* Text */}
          <motion.div
            className={image ? "w-full lg:w-[40%] text-center lg:text-left" : "w-full max-w-4xl mx-auto text-center"}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p
              className={`text-sm md:text-base uppercase tracking-[0.3em] font-medium mb-6 ${
                isDark ? "text-white/50" : "text-[#86868b]"
              }`}
              style={{ fontFamily: "'Aileron', sans-serif" }}
            >
              {badge}
            </p>

            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-[-0.03em] ${
                isDark ? "text-white" : "text-[#1d1d1f]"
              }`}
              style={{ fontFamily: "'Aileron', sans-serif" }}
            >
              {headline.split('\n').map((line, idx, arr) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </h2>
            
            <p
              className={`mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl max-w-lg mx-auto lg:mx-0 leading-relaxed ${
                isDark ? "text-white/60" : "text-[#6e6e73]"
              }`}
              style={{ fontFamily: "'Aileron', sans-serif" }}
            >
              {subheadline}
            </p>

            {/* Providers */}
            {providers && providers.length > 0 && (
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 justify-center lg:justify-start">
                {providers.map((p) => (
                  <span
                    key={p.name}
                    className="text-sm font-bold tracking-wide"
                    style={{ color: p.color }}
                  >
                    {p.name}
                  </span>
                ))}
              </div>
            )}

            <div className={`mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center ${image ? "lg:justify-start" : ""}`}>
              <button
                className={`h-[50px] sm:h-[56px] px-6 lg:px-8 text-[14px] sm:text-[15px] font-semibold rounded-full transition-all duration-200 flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto ${
                  isDark
                    ? "bg-white text-[#1d1d1f] hover:bg-white/90 shadow-white/5"
                    : "bg-[#1d1d1f] text-white hover:bg-[#333] shadow-black/10"
                }`}
                style={{ fontFamily: "'Aileron', sans-serif" }}
              >
                {primaryCta}
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              {secondaryCta && (
                <button
                  className={`h-[50px] sm:h-[56px] px-6 lg:px-8 text-[14px] sm:text-[15px] font-semibold rounded-full border transition-all duration-200 w-full sm:w-auto ${
                    isDark
                      ? "bg-white/5 border-white/20 text-white hover:bg-white/10"
                      : "bg-black/5 border-[rgba(0,0,0,0.1)] text-[#1d1d1f] hover:bg-black/10"
                  }`}
                  style={{ fontFamily: "'Aileron', sans-serif" }}
                >
                  {secondaryCta}
                </button>
              )}
            </div>
          </motion.div>

          {image && imageClassName?.includes("absolute-right") ? (
            <motion.div
              className="hidden lg:flex absolute right-0 top-0 bottom-0 w-[50%] items-center justify-center pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={image}
                alt={imageAlt || ""}
                loading="lazy"
                className={imageClassName}
              />
            </motion.div>
          ) : image ? (
            <motion.div
              className={`w-full lg:w-[60%] flex justify-center ${reverse ? 'lg:justify-start' : 'lg:justify-end'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            >
              <img
                src={image}
                alt={imageAlt || ""}
                loading="lazy"
                width={1400}
                height={900}
                className={`w-full max-w-full lg:max-w-[1050px] object-contain drop-shadow-sm ${imageClassName || ""}`}
              />
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;
