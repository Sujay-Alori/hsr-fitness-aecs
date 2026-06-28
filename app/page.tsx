import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import MembershipSection from "@/components/sections/MembershipSection";
import GallerySection from "@/components/sections/GallerySection";
import SupplementsSection from "@/components/sections/SupplementsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <StatsSection />
      <ServicesSection />
      <MembershipSection />
      <SupplementsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
