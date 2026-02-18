import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Camera, Layers, Sparkles, Eraser, Moon, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlideshow from "@/components/HeroSlideshow";
import BeforeAfterScroll from "@/components/BeforeAfterScroll";

// Import Images
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

// Merged Data
const services = [
  {
    id: "photo-retouching",
    title: "Photo Retouching",
    description: "Our photo retouching and enhancement service improves the overall look of real estate images while keeping them natural and realistic. We adjust lighting, exposure, colors, contrast, and sharpness to ensure the property looks clear, balanced, and ready for professional listings.",
    icon: Camera,
    beforeImage: retouching1A,
    afterImage: retouching1B,
  },
  {
    id: "hdr-blending",
    title: "HDR Blending",
    description: "HDR photo blending combines multiple exposures into a single well-balanced image. This process ensures bright interiors, clear windows, and properly exposed exteriors, resulting in images that closely match what the human eye sees on-site.",
    icon: Layers,
    beforeImage: hdr1A,
    afterImage: hdr1B,
  },
  {
    id: "virtual-staging",
    title: "Virtual Staging",
    description: "Transform empty spaces into beautifully furnished rooms that help buyers envision their future home. Our virtual staging adds realistic furniture and decor to showcase the full potential of any property.",
    icon: Sparkles,
    beforeImage: virtualStaging1A,
    afterImage: virtualStaging1B,
  },
  {
    id: "decluttering",
    title: "Decluttering",
    description: "Remove unwanted objects, clutter, and distractions from your property photos. We seamlessly eliminate items like personal belongings, wires, trash cans, and other elements that detract from the property's appeal.",
    icon: Eraser,
    beforeImage: decluttering1A,
    afterImage: decluttering1B,
  },
  {
    id: "twilight",
    title: "Twilight Conversion",
    description: "Convert daytime photos into stunning twilight images that create a warm, inviting atmosphere. Our twilight conversion adds dramatic skies and enhanced lighting to make properties stand out in listings.",
    icon: Moon,
    beforeImage: twilight1A,
    afterImage: twilight1B,
  },
];

const Index = () => {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY < 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Background Slideshow */}
        <HeroSlideshow />

        {/* 1. FADED TRANSITION OVERLAY */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-64 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-20 w-full px-6 md:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl ml-0 lg:ml-8 xl:ml-16"
          >
            {/* 2. BIGGER TITLE */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight text-white drop-shadow-lg text-left">
              Professional Real Estate{" "}
              <span className="gradient-text">Photo Editing</span>
            </h1>

            {/* 2. BIGGER SUBTITLE */}
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl leading-relaxed drop-shadow-md font-medium text-left">
              High-quality, fast, and affordable editing to make your listings stand out and sell faster.
            </p>

            {/* 2. BIGGER BUTTONS */}
            <div className="flex flex-wrap gap-6 justify-start">
              <Link
                to="/free-trial"
                className="gradient-orange text-white font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity text-xl inline-flex items-center gap-2 glow-orange shadow-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/services"
                className="border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold px-10 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors text-xl"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
          {showScroll && (
            <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center animate-bounce">
              <div 
                className="flex flex-col items-center gap-2 cursor-pointer group" 
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              >
                <span className="text-white text-sm font-medium whitespace-nowrap drop-shadow-md group-hover:text-[#f26b2c] transition-colors">Scroll Down</span>
                <ChevronDown className="w-6 h-6 text-white drop-shadow-md group-hover:text-[#f26b2c] transition-colors" />
              </div>
            </div>
          )}
      </section>

      {/* --- SERVICES SHOWCASE (Before/After) --- */}
      <section className="py-24 md:py-32 bg-background relative z-20">
        <div className="max-w-[120rem] mx-auto px-4 md:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            {/* 4. BIGGER SERVICE TITLE */}
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-foreground">
              How We <span className="gradient-text">Enhance</span> Your Listings
            </h2>
            <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto">
              Scroll through our premium services to see the transformation.
            </p>
          </motion.div>

          <div className="space-y-24 md:space-y-40">
            {services.map((service, index) => (
              <div key={index} className="scroll-mt-32" id={service.id}>
                <BeforeAfterScroll
                  beforeImage={service.beforeImage}
                  afterImage={service.afterImage}
                  title={
                    <span className="flex items-center justify-center lg:justify-start gap-4">
                      <span className="gradient-orange p-3 rounded-xl hidden md:flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </span>
                      {service.title}
                    </span>
                  }
                  description={service.description}
                  reversed={index % 2 !== 0}
                  serviceId={service.id}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. WIDER & LARGER CTA SECTION --- */}
      <section className="py-24 px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          // Changed max-w-4xl to max-w-[100rem] and increased padding
          className="max-w-[70rem] mx-auto text-center gradient-navy rounded-[3rem] p-16 md:p-24 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/40 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Listings?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Try our professional photo editing services with no commitment. See the difference quality editing makes.
            </p>
            <Link
              to="/free-trial"
              className="gradient-orange text-primary-foreground font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-lg inline-flex items-center gap-2 glow-orange"
            >
              Start Your Free Trial
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;