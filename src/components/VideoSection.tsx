import { motion } from "framer-motion";

const videos = [
  { id: "TlJCp3v3zak", title: "Video 1" },
  { id: "ZwSknm4QqkY", title: "Video 2" },
  { id: "qg7lk7Dhj8w", title: "Video 3" },
  { id: "FTc2nYZqh2c", title: "Video 4" },
];

export const VideoSection = () => (
  <section id="videos" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="section-title font-display text-foreground mb-16"
    >
      Videos
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {videos.map((video, i) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="aspect-video rounded-sm overflow-hidden bg-muted">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
