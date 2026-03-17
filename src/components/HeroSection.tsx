import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => (
  <section className="relative min-h-[90svh] flex flex-col justify-end overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="John Nash performing live"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
    </div>
    <div className="relative z-10 p-8 md:p-16 max-w-5xl">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="hero-title font-display text-foreground mb-4"
      >
        John Nash
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8"
      >
        Composer & songwriter. Exploring the intersection of folk, jazz, and the poetry of everyday grace.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex gap-4"
      >
        <a
          href="#discography"
          className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors duration-200"
        >
          Listen Now
        </a>
        <a
          href="#contact"
          className="inline-flex items-center px-8 py-3 rounded-full border border-foreground/20 text-foreground text-sm font-semibold hover:bg-foreground/10 transition-colors duration-200"
        >
          Book a Show
        </a>
      </motion.div>
    </div>
  </section>
);
