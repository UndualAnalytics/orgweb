import AboutCompany from "@/components/home/AboutUs";
import HeroSection from "@/components/home/Hero";
import ProjectGallery from "@/components/home/Projects";
import ServicesSection from "@/components/home/Services";
import StatsSection from "@/components/home/Stats";
import BusinessPresence from "@/components/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div >
     <HeroSection />

     <div className="bg-black">
      <div className="custom-container">
      <AboutCompany />
     <StatsSection />
     <ServicesSection />
     <ProjectGallery />
     <BusinessPresence />
      </div>
     
     </div>
    
    </div>
  );
}
