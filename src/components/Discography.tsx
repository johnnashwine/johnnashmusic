import { motion } from "framer-motion";
import { Play } from "lucide-react";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";

const albums = [
  { title: "Zarathustra's Romance", year: "2011", image: album1, link: "https://www.youtube.com/watch?v=qg7lk7Dhj8w" },
  { title: "Heavy Light", year: "2014", image: album2, link: "https://www.youtube.com/watch?v=FTc2nYZqh2c" },
  { title: "New Album", year: "2016", image: album3, link: "https://www.youtube.com/watch?v=ZwSknm4QqkY" },
];

export const Discography = () => (
  <section id="discography" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="section-title font-display text-foreground mb-16"
    >
      Discography
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {albums.map((album, i) => (
        <motion.a
          key={album.title}
          href={album.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group block"
        >
          <div className="aspect-square bg-muted overflow-hidden rounded-sm relative" style={{ boxShadow: "var(--shadow-card)" }}>
            <img
              src={album.image}
              alt={album.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-standard group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/30">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
              </div>
            </div>
          </div>
          <h3 className="mt-4 text-lg font-display text-foreground">{album.title}</h3>
          <p className="text-sm text-muted-foreground">{album.year}</p>
        </motion.a>
      ))}
    </div>
  </section>
);
