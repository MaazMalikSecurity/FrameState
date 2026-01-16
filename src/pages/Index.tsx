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
      <section className="bg-secondary py-8">
        <div className="text-center mb-8 pt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Enhance Your Listings
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto px-6">
            Scroll through each service to see the transformation
          </p>
        </div>

        <BeforeAfterScroll
          beforeImage={before1}
          afterImage={after1}
          title="Photo Retouching / Enhancement"
          description="Our photo retouching and enhancement service improves the overall look of real estate images while keeping them natural and realistic. We adjust lighting, exposure, colors, contrast, and sharpness to ensure the property looks clear, balanced, and ready for professional listings."
        />

        <BeforeAfterScroll
          beforeImage={before2}
          afterImage={after2}
          title="Day to Dusk / Twilight"
          description="HDR photo blending combines multiple exposures into a single well-balanced image. This process ensures bright interiors, clear windows, and properly exposed exteriors, resulting in images that closely match what the human eye sees on-site."
          reversed
        />
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
