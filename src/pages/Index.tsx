import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Discography } from "@/components/Discography";
import { Testimonials } from "@/components/Testimonials";
import { Shows } from "@/components/Shows";
import { Biography } from "@/components/Biography";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { AudioPlayer } from "@/components/AudioPlayer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <Discography />
      <Testimonials />
      <Shows />
      <Biography />
      <ContactSection />
    </main>
    <Footer />
    <AudioPlayer />
  </>
);

export default Index;
