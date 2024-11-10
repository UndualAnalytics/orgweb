import AboutCompany from "@/components/home/AboutUs";
import HeroSection from "@/components/home/Hero";
import ProjectGallery from "@/components/home/Projects";
import ServicesSection from "@/components/home/Services";
import StatsSection from "@/components/home/Stats";
import TestimonialSlider from "@/components/home/Testionials";
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
     <h2 className='main-heading text-white mt-8'>Digital Solutions</h2>
     <ProjectGallery />
     <BusinessPresence />
     <TestimonialSlider />
    
      </div>
     
     </div>
    
    </div>
  );
}
