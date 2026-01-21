import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlideshow from "@/components/HeroSlideshow";
import BeforeAfterScroll from "@/components/BeforeAfterScroll";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

// Import 1A (before) and 1B (after) for each service
import retouching1A from "@/assets/Retouching/1A.webp";
import retouching1B from "@/assets/Retouching/1B.webp";
import hdr1A from "@/assets/HDR/1A.webp";
import hdr1B from "@/assets/HDR/1B.webp";
import virtualStaging1A from "@/assets/Virtual Staging/1A.webp";
import virtualStaging1B from "@/assets/Virtual Staging/1B.webp";
import decluttering1A from "@/assets/Decluttering/1A.webp";
import decluttering1B from "@/assets/Decluttering/1B.webp";
import twilight1A from "@/assets/Twilight/1A.webp";
import twilight1B from "@/assets/Twilight/1B.webp";

const Index = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      id: "photo-retouching",
      title: "Photo Retouching / Enhancement",
      description: "Our photo retouching and enhancement service improves the overall look of real estate images while keeping them natural and realistic. We adjust lighting, exposure, colors, contrast, and sharpness to ensure the property looks clear, balanced, and ready for professional listings.",
      beforeImage: retouching1A,
      afterImage: retouching1B,
    },
    {
      id: "hdr-blending",
      title: "HDR Photo Blending",
      description: "HDR photo blending combines multiple exposures into a single well-balanced image. This process ensures bright interiors, clear windows, and properly exposed exteriors, resulting in images that closely match what the human eye sees on-site.",
      beforeImage: hdr1A,
      afterImage: hdr1B,
    },
    {
      id: "virtual-staging",
      title: "Virtual Staging",
      description: "Transform empty spaces into beautifully furnished rooms that help buyers envision their future home. Our virtual staging adds realistic furniture and decor to showcase the full potential of any property.",
      beforeImage: virtualStaging1A,
      afterImage: virtualStaging1B,
    },
    {
      id: "decluttering",
      title: "Decluttering / Object Removal",
      description: "Remove unwanted objects, clutter, and distractions from your property photos. We seamlessly eliminate items like personal belongings, wires, trash cans, and other elements that detract from the property's appeal.",
      beforeImage: decluttering1A,
      afterImage: decluttering1B,
    },
    {
      id: "twilight",
      title: "Twilight Conversion",
      description: "Convert daytime photos into stunning twilight images that create a warm, inviting atmosphere. Our twilight conversion adds dramatic skies and enhanced lighting to make properties stand out in listings.",
      beforeImage: twilight1A,
      afterImage: twilight1B,
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20">
        <HeroSlideshow />
        
        {/* Main Content Wrapper - Left Aligned */}
        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 py-20">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional Real Estate Photo Editing
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl">
              High-quality, fast, and affordable editing to make your listings stand out and sell faster.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="hero" 
                size="lg"
                className="bg-[#f26b2c] text-white hover:bg-[#f26b2c]/90 transition-colors" 
                asChild
              >
                <Link to="/free-trial">Start Free Trial</Link>
              </Button>
              
              <Button 
                variant="heroOutline" 
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary" 
                asChild
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-2 left-0 right-0 z-10 flex justify-center animate-bounce">
            <div className="flex flex-col items-center gap-1 sm:gap-2">
              <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">Scroll Down</span>
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
          </div>
        )}
      </section>

      {/* Services Showcase */}
      <section className="bg-secondary py-12 md:py-20">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Enhance Your Listings
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Scroll through each service to see the transformation
          </p>
        </div>

        {services.map((service, index) => (
          <BeforeAfterScroll
            key={index}
            beforeImage={service.beforeImage}
            afterImage={service.afterImage}
            title={service.title}
            description={service.description}
            reversed={index % 2 !== 0}
            serviceId={service.id}
          />
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Listings?
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Try our professional photo editing services with no commitment. 
            See the difference quality editing makes.
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            asChild
          >
            <Link to="/free-trial">Start Your Free Trial</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;