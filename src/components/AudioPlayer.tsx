import { useState, useRef, useEffect, useCallback } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tracks = [
  { title: "When I Remember", src: "/audio/When-I-Remember.mp3" },
  { title: "Nothing to Lose", src: "/audio/Nothing-to-Lose.mp3" },
];

export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [visible, setVisible] = useState(false);

  const play = useCallback(() => {
    audioRef.current?.play();
    setIsPlaying(true);
    setVisible(true);
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => (isPlaying ? pause() : play()), [isPlaying, play, pause]);

  const skip = useCallback(
    (dir: 1 | -1) => {
      const next = (currentTrack + dir + tracks.length) % tracks.length;
      setCurrentTrack(next);
      setIsPlaying(true);
      setVisible(true);
    },
    [currentTrack]
  );

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.load();
    if (isPlaying) a.play();
  }, [currentTrack]);

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  // Expose a global function so other components can trigger playback
  useEffect(() => {
    (window as any).__playTrack = (index: number) => {
      setCurrentTrack(index);
      setIsPlaying(true);
      setVisible(true);
    };
    return () => delete (window as any).__playTrack;
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={tracks[currentTrack].src}
        muted={muted}
        onTimeUpdate={() => setProgress(audioRef.current?.currentTime ?? 0)}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration ?? 0)}
        onEnded={() => skip(1)}
      />
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            exit={{ y: 80 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-md"
          >
            {/* progress bar */}
            <div
              className="h-1 cursor-pointer group"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pct = (e.clientX - rect.left) / rect.width;
                if (audioRef.current) audioRef.current.currentTime = pct * duration;
              }}
            >
              <div
                className="h-full bg-accent transition-all"
                style={{ width: `${duration ? (progress / duration) * 100 : 0}%` }}
              />
            </div>

            <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto gap-4">
              {/* track info */}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-display text-foreground truncate">
                  {tracks[currentTrack].title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {fmt(progress)} / {fmt(duration)}
                </p>
              </div>

              {/* controls */}
              <div className="flex items-center gap-3">
                <button onClick={() => skip(-1)} className="text-muted-foreground hover:text-foreground transition-colors">
                  <SkipBack className="w-4 h-4" />
                </button>
                <button
                  onClick={toggle}
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:opacity-90 transition-opacity"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <button onClick={() => skip(1)} className="text-muted-foreground hover:text-foreground transition-colors">
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              {/* right side */}
              <div className="flex items-center gap-3 flex-1 justify-end">
                <button onClick={() => setMuted(!muted)} className="text-muted-foreground hover:text-foreground transition-colors">
                  {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => { pause(); setVisible(false); }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating play button when hidden */}
      <AnimatePresence>
        {!visible && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => { setVisible(true); play(); }}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
          >
            <Play className="w-5 h-5 ml-0.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
