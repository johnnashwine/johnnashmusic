import { motion } from "framer-motion";
import bioPortrait from "@/assets/bio-portrait.jpg";

export const Biography = () => (
  <section id="about" className="py-24 md:py-32 border-t border-border">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-sm"
      >
        <img
          src={bioPortrait}
          alt="John Nash portrait"
          className="w-full aspect-[4/5] object-cover"
          loading="lazy"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="section-title font-display text-foreground mb-8">About</h2>
        <blockquote className="text-xl font-display italic text-foreground/80 mb-8 border-l-2 border-accent pl-6">
          "Love moves away. The light changes. I need more grace than I thought."
          <span className="block text-sm text-muted-foreground mt-2 not-italic">— Rumi</span>
        </blockquote>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm frequently asked what kind of music I play. These are awkward conversations—it's like trying to describe a color. "Bluesy folk" or "urban jazzy indie"—no adjectives really get you there.
          </p>
          <p>
            What I can say is that my songs are about Grace. An exploration of force and flow and patience. The deep truths seem bound in paradox, and when you inquire enough, you arrive at a place where all you can do is behold two opposing truths.
          </p>
          <p>
            It feels right to trust my judgments less and less—I've been so wrong about so much, and the slightest change in lighting changes the appearance of things.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);
