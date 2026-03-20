import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Discography } from "@/components/Discography";
import { Testimonials } from "@/components/Testimonials";
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
      <Biography />
      <ContactSection />
    </main>
    <Footer />
    <AudioPlayer />
  </>
);

export default Index;
