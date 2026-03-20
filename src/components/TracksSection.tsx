import { motion } from "framer-motion";
import { Play, Music } from "lucide-react";
import { tracks } from "./AudioPlayer";

export const TracksSection = () => (
  <section id="tracks" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="section-title font-display text-foreground mb-16"
    >
      Tracks
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {tracks.map((track, i) => (
        <motion.button
          key={track.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          onClick={() => (window as any).__playTrack?.(i)}
          className="group flex items-center gap-4 px-5 py-4 rounded-sm text-left transition-colors hover:bg-secondary/50"
        >
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
            <Play className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground ml-0.5 transition-colors" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-foreground font-display truncate">{track.title}</p>
          </div>
          <Music className="w-4 h-4 text-muted-foreground/50 flex-shrink-0" />
        </motion.button>
      ))}
    </div>
  </section>
);
