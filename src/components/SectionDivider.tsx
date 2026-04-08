import { motion } from "framer-motion";

interface SectionDividerProps {
  fromColor?: string;
  toColor?: string;
  variant?: "wave" | "gradient" | "line";
}

const SectionDivider = ({ variant = "gradient" }: SectionDividerProps) => {
  if (variant === "line") {
    return (
      <div className="relative h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className="relative h-16 md:h-24 -mb-1">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>
    );
  }

  // gradient divider
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative h-20 md:h-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <motion.div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)",
        }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default SectionDivider;
