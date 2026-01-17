import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlideshow from "@/components/HeroSlideshow";
import BeforeAfterScroll from "@/components/BeforeAfterScroll";

import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

const Index = () => {
  const services = [
    {
      title: "Photo Retouching / Enhancement",
      description: "Our photo retouching and enhancement service improves the overall look of real estate images while keeping them natural and realistic. We adjust lighting, exposure, colors, contrast, and sharpness to ensure the property looks clear, balanced, and ready for professional listings.",
      beforeImage: before1,
      afterImage: after1,
    },
    {
      title: "HDR Photo Blending",
      description: "HDR photo blending combines multiple exposures into a single well-balanced image. This process ensures bright interiors, clear windows, and properly exposed exteriors, resulting in images that closely match what the human eye sees on-site.",
      beforeImage: before2,
      afterImage: after2,
    },
    {
      title: "Virtual Staging",
      description: "Transform empty spaces into beautifully furnished rooms that help buyers envision their future home. Our virtual staging adds realistic furniture and decor to showcase the full potential of any property.",
      beforeImage: before1,
      afterImage: after1,
    },
    {
      title: "Decluttering / Object Removal",
      description: "Remove unwanted objects, clutter, and distractions from your property photos. We seamlessly eliminate items like personal belongings, wires, trash cans, and other elements that detract from the property's appeal.",
      beforeImage: before2,
      afterImage: after2,
    },
    {
      title: "Twilight Conversion",
      description: "Convert daytime photos into stunning twilight images that create a warm, inviting atmosphere. Our twilight conversion adds dramatic skies and enhanced lighting to make properties stand out in listings.",
      beforeImage: before1,
      afterImage: after1,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Slideshow */}
      <section className="relative min-h-screen flex items-center pt-20">
        <HeroSlideshow />
        
        <div className="relative z-10 max-w-7xl px-6 lg:px-16 py-20">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional Real Estate Photo Editing
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
              High-quality, fast, and affordable editing to make your listings stand out and sell faster.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" asChild>
                <Link to="/free-trial">Start Free Trial</Link>
              </Button>
              <Button variant="heroOutline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase with Scroll-Lock Before/After */}
      <section className="bg-secondary py-6">
        <div className="text-center mb-2 pt-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-[#f26b2c]">
            How We Enhance Your Listings
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto px-6">
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
          />
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Listings?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Try our professional photo editing services with no commitment. 
            See the difference quality editing makes.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/free-trial">Start Your Free Trial</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
