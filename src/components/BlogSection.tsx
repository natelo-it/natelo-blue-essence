import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const baseTopPosts = [
  {
    massiveTitle: "IPHONE 16 PRO",
    title: "Das ultimative Flaggschiff im extremen Härtetest.",
    category: "Review",
    action: "Lesen",
    imgUrl: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=1600&auto=format&fit=crop"
  },
  {
    massiveTitle: "GALAXY S25",
    title: "Die neue Galaxy AI ändert alles. Lohnt sich ein Upgrade?",
    category: "Preview",
    action: "Entdecken",
    imgUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1600&auto=format&fit=crop"
  },
  {
    massiveTitle: "IOS 19",
    title: "10 versteckte Features, die deinen Alltag verändern.",
    category: "Tipps",
    action: "Weiterlesen",
    imgUrl: "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1600&auto=format&fit=crop"
  }
];

const baseBottomPosts = [
  {
    title: "Refurbished: Mehr als nur Geld gespart",
    category: "Nachhaltigkeit",
    action: "Lesen",
    imgUrl: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Versteckte Kosten bei Handy-Abos",
    category: "Ratgeber",
    action: "Tipps ansehen",
    imgUrl: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Apple Watch SE (2026) Gerüchte",
    category: "News",
    action: "Jetzt lesen",
    imgUrl: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Die besten MagSafe-Zubehörteile",
    category: "Zubehör",
    action: "Entdecken",
    imgUrl: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop"
  }
];

const topPosts = [...baseTopPosts, ...baseTopPosts, ...baseTopPosts, ...baseTopPosts, ...baseTopPosts];
const bottomPosts = [...baseBottomPosts, ...baseBottomPosts, ...baseBottomPosts, ...baseBottomPosts, ...baseBottomPosts];

const BlogSection = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (topRef.current) {
        topRef.current.scrollLeft = topRef.current.scrollWidth / 2 - window.innerWidth / 2;
      }
      if (bottomRef.current) {
        bottomRef.current.scrollLeft = bottomRef.current.scrollWidth / 2 - window.innerWidth / 2;
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[#f5f5f7] py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.01em] text-[#1d1d1f]">
            Aktuelles & Ratgeber.
          </h2>
        </motion.div>
      </div>

      {/* Top Carousel (Massive Cinema Items) */}
      <div ref={topRef} className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-1 md:gap-2 px-1 pb-2 overflow-y-hidden scroll-smooth">
        {topPosts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group w-[85vw] sm:w-[90vw] md:w-[80vw] lg:w-[1100px] h-[320px] sm:h-[450px] md:h-[600px] flex-shrink-0 relative overflow-hidden rounded-none cursor-pointer snap-center"
          >
            {/* Background Image */}
            <div className={`absolute inset-0 group-hover:scale-105 transition-transform duration-[1.5s] ease-out bg-[#1d1d1f]`}>
               <img src={post.imgUrl} alt={post.massiveTitle} className="w-full h-full object-cover opacity-80" />
            </div>
            
            {/* Dark Gradient Overlay for the bottom text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Massive Title Overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 pointer-events-none">
              <h3 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[110px] font-bold uppercase tracking-widest text-white/90 text-center leading-[1] drop-shadow-xl">
                {post.massiveTitle}
              </h3>
            </div>

            {/* Bottom Content Area */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-5">
              <Button className="rounded-full bg-white text-[#1d1d1f] hover:bg-white/90 font-semibold px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-xs sm:text-sm md:text-base shrink-0 shadow-lg w-full sm:w-auto">
                {post.action}
              </Button>
              <p className="text-white text-sm sm:text-base md:text-lg leading-snug drop-shadow-md pb-1 max-w-[800px]">
                <span className="font-bold">{post.category}</span> <span className="opacity-70 px-2">•</span> {post.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Carousel (Wide Items) */}
      <div ref={bottomRef} className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-1 md:gap-2 px-1 pb-12 mt-1 md:mt-2 scroll-smooth">
        {bottomPosts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group w-[65vw] sm:w-[70vw] md:w-[40vw] lg:w-[400px] h-[150px] sm:h-[180px] md:h-[240px] flex-shrink-0 relative overflow-hidden rounded-none cursor-pointer snap-start"
          >
            {/* Background Image */}
            <div className={`absolute inset-0 group-hover:scale-105 transition-transform duration-[1.5s] ease-out bg-[#1d1d1f]`}>
               <img src={post.imgUrl} alt={post.title} className="w-full h-full object-cover opacity-90" />
            </div>
            
            {/* Subtle Gradient Overlay for wide items */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

            {/* Top Left Tag */}
            <div className="absolute top-4 sm:top-6 left-5 sm:left-6">
              <span className="text-white/90 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest drop-shadow-sm flex items-center gap-1.5">
                <span className="w-4 h-4 bg-white/20 rounded-sm flex items-center justify-center">N</span>
                Natelo {post.category}
              </span>
            </div>

            {/* Bottom Left Title */}
            <div className="absolute bottom-4 sm:bottom-6 left-5 sm:left-6 right-[120px]">
              <p className="text-white text-sm sm:text-base md:text-lg font-medium leading-tight drop-shadow-md">
                {post.title}
              </p>
            </div>

            {/* Bottom Right Button */}
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
              <Button variant="secondary" size="sm" className="rounded-full text-[11px] sm:text-xs font-bold bg-white/20 text-white hover:bg-white hover:text-[#1d1d1f] backdrop-blur-md border-0 transition-colors px-4 py-4 sm:py-5">
                {post.action}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
