import { motion } from "framer-motion";

const quotes = [
  { text: "John Nash is the real deal.", author: "Bruce Kunkel", title: "Founding member, Nitty Gritty Dirt Band" },
  { text: "John Nash is one of my favorite songwriters.", author: "Drew Pearce", title: "Founder, Bay Area House Concerts" },
  { text: "John Nash is on my list of the top 50 songwriters in the country today.", author: "Steve Meckfessel", title: "Indie Singer/Songwriter" },
];

export const Testimonials = () => (
  <section className="py-24 md:py-32 border-t border-border">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {quotes.map((q, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <p className="text-lg font-display italic text-foreground mb-4">"{q.text}"</p>
            <footer>
              <span className="text-sm text-foreground font-semibold">{q.author}</span>
              <span className="block text-xs text-muted-foreground mt-0.5">{q.title}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);
