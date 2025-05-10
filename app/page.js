import VideoBackground from "@/components/landing/VideoBackground";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";

export default function Home() {
  return (
    <div className="relative w-full">
      <VideoBackground />
      <section className="min-h-screen">
        <HeroSection />
      </section>
      <section>
        <ServicesSection />
      </section>
    </div>
  );
}
