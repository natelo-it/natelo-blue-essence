import { motion } from "framer-motion";

interface AppleGridItemProps {
  badge?: string;
  headline: string;
  subheadline: string;
  image?: string;
  images?: string[];
  video?: string;
  imageClassName?: string;
  dark?: boolean;
  primaryCta: string;
  secondaryCta?: string;
}

export const AppleGridItem = ({
  badge,
  headline,
  subheadline,
  image,
  images,
  video,
  imageClassName,
  dark,
  primaryCta,
  secondaryCta,
}: AppleGridItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative flex flex-col items-center text-center overflow-hidden w-full h-[420px] sm:h-[500px] md:h-[580px] lg:h-[680px] ${
        dark ? "bg-[#000000] text-[#f5f5f7]" : "bg-[#ffffff] text-[#1d1d1f]"
      }`}
    >
      {video && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={video} type="video/mp4" />
        </video>
      )}

      {/* Strong overlay for video to ensure text + buttons are always readable */}
      {video && dark && (
        <>
          <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-0 pointer-events-none" />
        </>
      )}

      <div className={`z-10 px-5 sm:px-6 max-w-2xl pt-10 sm:pt-12 md:pt-16`}>
        {badge && (
          <p
            className={`text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 ${dark ? "text-[#f5f5f7]/60" : "text-[#86868b]"}`}
            style={{ fontFamily: "'Aileron', sans-serif" }}
          >
            {badge}
          </p>
        )}
        <h3
          className="text-[1.75rem] sm:text-4xl md:text-[2.5rem] font-bold tracking-tight leading-[1.05] mb-2 sm:mb-3"
          style={{ fontFamily: "'Aileron', sans-serif", letterSpacing: "-0.01em" }}
        >
          {headline}
        </h3>
        <p
          className={`text-[15px] sm:text-[19px] md:text-[21px] font-normal leading-snug mx-auto max-w-sm ${dark ? "text-[#f5f5f7]/80" : "text-[#1d1d1f]/80"}`}
          style={{ fontFamily: "'Aileron', sans-serif" }}
        >
          {subheadline}
        </p>

        <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <button
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[15px] transition-all hover:scale-[1.03] active:scale-[0.97] ${
              dark
                ? "bg-[#2997ff] text-white"
                : "bg-[#0071e3] text-white"
            }`}
            style={{ fontFamily: "'Aileron', sans-serif", fontWeight: 500 }}
          >
            {primaryCta}
          </button>
          {secondaryCta && (
            <button
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[15px] border border-solid transition-all hover:scale-[1.03] active:scale-[0.97] ${
                dark
                  ? "border-[#2997ff] text-[#2997ff] hover:bg-[#2997ff]/10"
                  : "border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3]/10"
              }`}
              style={{ fontFamily: "'Aileron', sans-serif", fontWeight: 500 }}
            >
              {secondaryCta}
            </button>
          )}
        </div>
      </div>

      {image && !images && (
        <div className="flex-1 w-full relative mt-6 flex justify-center items-end px-0 pb-0">
          <img
            src={image}
            alt={headline.replace(/\n/g, " ")}
            className={`object-contain max-h-full max-w-full drop-shadow-xl ${
              !dark ? "mix-blend-multiply" : ""
            } ${imageClassName || ""}`}
          />
        </div>
      )}

      {images && (
        <div className="flex-1 w-full relative mt-6 flex flex-col justify-end px-0 pb-0 overflow-hidden pointer-events-none">
          <div className="flex items-end gap-10 w-max animate-scroll pb-4 sm:pb-8 pl-10">
            {[...images, ...images, ...images, ...images].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Product ${i}`}
                className={`object-contain max-h-[150px] sm:max-h-[200px] lg:max-h-[230px] w-auto drop-shadow-md flex-shrink-0 transition-transform origin-bottom ${
                  !dark ? "mix-blend-multiply" : ""
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};
