import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import Projects from "@/components/Projects";
import { TapeSection } from "@/components/TapeSection";

export default function Home() {
  return (
    <section className="h-full">
      {/* <Header /> */}
      <div className="container mx-auto h-full">
        <HeroSection />
      </div>
      <div className="container mx-auto h-full">
        <Projects />
      </div>
      <TapeSection />
      <div className="container mx-auto h-full">
        <AboutSection />
      </div>
      <div className="container mx-auto h-full">
        <ContactSection />
      </div>
      <div className="container mx-auto h-full">
        <FooterSection />
      </div>
    </section>
  );
}
