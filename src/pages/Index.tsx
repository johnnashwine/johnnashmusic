import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Discography } from "@/components/Discography";
import { TracksSection } from "@/components/TracksSection";
import { VideoSection } from "@/components/VideoSection";
import { Biography } from "@/components/Biography";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { AudioPlayer } from "@/components/AudioPlayer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <Biography />
      <Discography />
      <TracksSection />
      <VideoSection />
      <ContactSection />
    </main>
    <Footer />
    <AudioPlayer />
  </>
);

export default Index;
