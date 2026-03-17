import { motion } from "framer-motion";

const shows = [
  { date: "Jun 17", venue: "EPIC – SF Embarcadero", city: "San Francisco, CA", note: "with Creatures of Habit", link: "http://www.waterbarsf.com" },
  { date: "Jun 18", venue: "West Point Inn", city: "Mt. Tamalpais, CA", note: "Pancake Breakfast w/ KC Turner", link: "http://www.westpointinn.com/" },
  { date: "Jun 24", venue: "Good People Dinner", city: "San Francisco, CA", note: "Talk & Tunes", link: "http://goodpeopledinners.com/" },
  { date: "Jul 04", venue: "Sonoma Plaza Amphitheatre", city: "Sonoma, CA", note: "with Creatures of Habit", link: "http://www.sonomacounty.com" },
];

export const Shows = () => (
  <section id="shows" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="section-title font-display text-foreground mb-16"
    >
      Upcoming Shows
    </motion.h2>
    <div className="divide-y divide-border">
      {shows.map((show, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          whileHover={{ x: 4 }}
          className="flex flex-col md:flex-row md:items-center justify-between py-6 group cursor-pointer"
        >
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
            <span className="text-sm tabular-nums text-muted-foreground font-mono w-16 shrink-0">
              {show.date}
            </span>
            <div>
              <span className="text-lg font-medium text-foreground">{show.venue}</span>
              <span className="block text-sm text-muted-foreground">
                {show.city} — {show.note}
              </span>
            </div>
          </div>
          <a
            href={show.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 md:mt-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full w-fit"
          >
            Tickets
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);
