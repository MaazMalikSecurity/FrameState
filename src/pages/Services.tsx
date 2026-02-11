import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight, Check, MoveHorizontal, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- IMPORTS (Images) ---
import hdrThumb from "@/assets/HDR/1A.webp";
import retouchingThumb from "@/assets/Retouching/1B.webp";
import declutteringThumb from "@/assets/Decluttering/1B.webp";
import twilightThumb from "@/assets/Twilight/1B.webp";
import virtualStagingThumb from "@/assets/Virtual Staging/1B.webp";

// HDR Examples
import hdr2A from "@/assets/HDR/2A.webp"; import hdr2B from "@/assets/HDR/2B.webp";
import hdr3A from "@/assets/HDR/3A.webp"; import hdr3B from "@/assets/HDR/3B.webp";
import hdr4A from "@/assets/HDR/4A.webp"; import hdr4B from "@/assets/HDR/4B.webp";
import hdr5A from "@/assets/HDR/5A.webp"; import hdr5B from "@/assets/HDR/5B.webp";
import hdr6A from "@/assets/HDR/6A.webp"; import hdr6B from "@/assets/HDR/6B.webp";

// Retouching Examples
import retouching2A from "@/assets/Retouching/2A.webp"; import retouching2B from "@/assets/Retouching/2B.webp";
import retouching3A from "@/assets/Retouching/3A.webp"; import retouching3B from "@/assets/Retouching/3B.webp";
import retouching4A from "@/assets/Retouching/4A.webp"; import retouching4B from "@/assets/Retouching/4B.webp";
import retouching5A from "@/assets/Retouching/5A.webp"; import retouching5B from "@/assets/Retouching/5B.webp";
import retouching6A from "@/assets/Retouching/6A.webp"; import retouching6B from "@/assets/Retouching/6B.webp";

// Decluttering Examples
import decluttering3A from "@/assets/Decluttering/3A.webp"; import decluttering3B from "@/assets/Decluttering/3B.webp";
import decluttering4A from "@/assets/Decluttering/4A.webp"; import decluttering4B from "@/assets/Decluttering/4B.webp";
import decluttering5A from "@/assets/Decluttering/5A.webp"; import decluttering5B from "@/assets/Decluttering/5B.webp";
import decluttering6A from "@/assets/Decluttering/6A.webp"; import decluttering6B from "@/assets/Decluttering/6B.webp";

// Twilight Examples
import twilight2A from "@/assets/Twilight/2A.webp"; import twilight2B from "@/assets/Twilight/2B.webp";
import twilight3A from "@/assets/Twilight/3A.webp"; import twilight3B from "@/assets/Twilight/3B.webp";
import twilight4A from "@/assets/Twilight/4A.webp"; import twilight4B from "@/assets/Twilight/4B.webp";
import twilight5A from "@/assets/Twilight/5A.webp"; import twilight5B from "@/assets/Twilight/5B.webp";
import twilight6A from "@/assets/Twilight/6A.webp"; import twilight6B from "@/assets/Twilight/6B.webp";

// Virtual Staging Examples
import virtualStaging2A from "@/assets/Virtual Staging/2A.webp"; import virtualStaging2B from "@/assets/Virtual Staging/2B.webp";
import virtualStaging3A from "@/assets/Virtual Staging/3A.webp"; import virtualStaging3B from "@/assets/Virtual Staging/3B.webp";
import virtualStaging4A from "@/assets/Virtual Staging/4A.webp"; import virtualStaging4B from "@/assets/Virtual Staging/4B.webp";
import virtualStaging5A from "@/assets/Virtual Staging/5A.webp"; import virtualStaging5B from "@/assets/Virtual Staging/5B.webp";
import virtualStaging6A from "@/assets/Virtual Staging/6A.webp"; import virtualStaging6B from "@/assets/Virtual Staging/6B.webp";


// --- Data Structure ---
const servicesData = [
  {
    id: "photo-retouching",
    name: "Photo Retouching & Enhancement",
    thumbnail: retouchingThumb,
    tagline: "Professional image correction to make every photo clean, bright, and listing-ready.",
    features: [
      "Exposure, brightness & contrast correction",
      "Color correction & accurate white balance",
      "Image sharpening & noise reduction",
      "Vertical & horizontal perspective correction",
      "Window light balancing",
      "Lens distortion & reflection removal",
      "Minor surface touch-ups",
      "Adding realistic fire to fireplaces",
      "TV screen replacement"
    ],
    examples: [
      { before: retouching2B, after: retouching2A },
      { before: retouching3B, after: retouching3A },
      { before: retouching4B, after: retouching4A },
      { before: retouching5B, after: retouching5A },
      { before: retouching6B, after: retouching6A },
    ]
  },
  {
    id: "hdr-blending",
    name: "HDR Photo Blending",
    thumbnail: hdrThumb,
    tagline: "Seamless blending of multiple exposures for perfectly balanced lighting.",
    features: [
      "Blending of 3–7 bracketed images",
      "Balanced interior and exterior exposure",
      "Highlight & shadow recovery",
      "Clear and natural window views",
      "Consistent lighting across rooms",
      "Realistic contrast and depth",
      "Natural tones without over-processing"
    ],
    examples: [
      { before: hdr2B, after: hdr2A },
      { before: hdr3B, after: hdr3A },
      { before: hdr4B, after: hdr4A },
      { before: hdr5B, after: hdr5A },
      { before: hdr6B, after: hdr6A },
    ]
  },
  {
    id: "virtual-staging",
    name: "Virtual Staging",
    thumbnail: virtualStagingThumb,
    tagline: "Transform empty or outdated spaces into beautifully furnished homes.",
    features: [
      "Realistic furniture placement & décor",
      "Multiple design styles (modern, luxury, etc.)",
      "Accurate scaling & room perspective",
      "Natural lighting, shadows & reflections",
      "Rugs, wall art, lamps, plants & accessories",
      "Lifestyle-based staging",
      "Empty room to fully furnished transformation"
    ],
    examples: [
      { before: virtualStaging2B, after: virtualStaging2A },
      { before: virtualStaging3B, after: virtualStaging3A },
      { before: virtualStaging4B, after: virtualStaging4A },
      { before: virtualStaging5B, after: virtualStaging5A },
      { before: virtualStaging6B, after: virtualStaging6A },
    ]
  },
  {
    id: "decluttering",
    name: "Decluttering & Object Removal",
    thumbnail: declutteringThumb,
    tagline: "Digitally clean and organize spaces to highlight the property's best features.",
    features: [
      "Removal of personal items",
      "Removal of clutter, cables & small objects",
      "Removal of unwanted furniture or décor",
      "Wall marks, stains & imperfections removal",
      "Removal of people, pets & vehicles",
      "Outdoor cleanup",
      "Clean, distraction-free presentation"
    ],
    examples: [
      { before: decluttering3B, after: decluttering3A },
      { before: decluttering4B, after: decluttering4A },
      { before: decluttering5B, after: decluttering5A },
      { before: decluttering6B, after: decluttering6A },
    ]
  },
  {
    id: "twilight",
    name: "Twilight Conversion",
    thumbnail: twilightThumb,
    tagline: "Create stunning dusk images that elevate the property's visual appeal.",
    features: [
      "Day-to-dusk sky replacement",
      "Warm interior lighting enhancement",
      "Exterior light activation",
      "Window glow & reflections",
      "Natural shadows & premium evening tones",
      "High-end, luxury twilight finish"
    ],
    examples: [
      { before: twilight2B, after: twilight2A },
      { before: twilight3B, after: twilight3A },
      { before: twilight4B, after: twilight4A },
      { before: twilight5B, after: twilight5A },
      { before: twilight6B, after: twilight6A },
    ]
  }
];

// --- Internal Component: Comparison Slide ---
const ComparisonSlide = ({ before, after }: { before: string; after: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percent);
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMove]);

  return (
    <div className="w-full h-full relative group cursor-ew-resize select-none overflow-hidden rounded-xl bg-gray-100"
         ref={containerRef}
         onMouseDown={handleMouseDown}
         onTouchStart={handleTouchStart}
    >
      <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-xs font-bold z-10 pointer-events-none">BEFORE</div>

      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover max-w-none" style={{ width: '100%', height: '100%' }} draggable={false} />
      </div>
      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded text-xs font-bold z-10 pointer-events-none">AFTER</div>

      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-lg text-primary">
          <MoveHorizontal size={18} />
        </div>
      </div>
    </div>
  );
};

// --- Main Services Component ---
const Services = () => {
  const { serviceId } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setCurrentSlide(0);
  }, [serviceId]);

  // --- SERVICE DETAIL VIEW ---
  if (serviceId) {
    const service = servicesData.find((s) => s.id === serviceId);

    if (!service) {
      return (
        <div className="min-h-screen bg-secondary">
          <Navbar />
          <section className="pt-32 pb-20 px-6 lg:px-16 text-center">
            <h2 className="text-3xl font-bold text-red-500">Service Not Found</h2>
            <Link to="/services" className="text-blue-600 underline mt-4 inline-block">Back to Services</Link>
          </section>
          <Footer />
        </div>
      );
    }

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % service.examples.length);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + service.examples.length) % service.examples.length);
    };

    return (
      <div className="min-h-screen bg-secondary transition-colors duration-300">
        <Navbar />
        
        {/* 1. Detail Hero Section */}
        {/* UPDATED: min-h-screen for full height, centering content */}
        <section 
          className="relative min-h-screen flex items-center justify-center pt-20 pb-20 bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${service.thumbnail})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/75"></div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full">
              
              {/* Left: Heading */}
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  {service.name}
                </h1>
                <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl drop-shadow-md">
                  {service.tagline}
                </p>
                <div className="mt-8 flex gap-4">
                   <Button className="bg-[#f26b2c] hover:bg-[#f26b2c]/90 text-white text-lg px-8 h-12" size="lg" asChild>
                      <Link to="/free-trial">Start Free Trial</Link>
                   </Button>
                </div>
              </div>

              {/* Right: "Included" List */}
              {/* UPDATED: Constrained height, scrollable content if overflow, centered alignment */}
              <div className="flex flex-col justify-center w-full animate-fade-in-up delay-100">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl w-full max-w-xl lg:ml-auto max-h-[60vh] flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 shrink-0">
                    What's Included
                  </h3>
                  
                  {/* Scrollable list container */}
                  <div className="overflow-y-auto pr-2 custom-scrollbar">
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-base text-white/90">
                          <div className="mt-1 min-w-4 w-4 h-4 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center shrink-0">
                            <Check size={10} className="text-green-400" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Universal Scroll Indicator (Mobile & Desktop) */}
          {showScrollIndicator && (
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

        {/* 2. Slideshow Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 border-t border-border/50 bg-white dark:bg-footer/30">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#22265c] dark:text-[#f26b2c] mb-2">
              See the Difference
            </h2>
            <p className="text-muted-foreground text-lg">
              Drag the slider to compare before and after results
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative group">
            
            <div className="relative aspect-[4/3] md:aspect-video w-full bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-white dark:border-gray-800">
               <ComparisonSlide 
                  before={service.examples[currentSlide].before}
                  after={service.examples[currentSlide].after}
                  key={currentSlide}
               />

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-[#22265c] p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none z-30 backdrop-blur-sm"
                aria-label="Previous example"
              >
                <ChevronLeft size={24} />
              </button>

              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-[#22265c] p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none z-30 backdrop-blur-sm"
                aria-label="Next example"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {service.examples.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? "w-8 bg-[#f26b2c]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // --- SERVICE GRID VIEW (Landing) ---
  return (
    <div className="min-h-screen bg-secondary transition-colors duration-300">
      <Navbar />
      <section className="py-16 md:py-24 pt-28">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#22265c] dark:text-[#f26b2c]">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Click on a service to see detailed examples and transformations
          </p>
        </div>

        <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {servicesData.map((service) => (
            <Link
              to={`/services/${service.id}`}
              key={service.id}
              className="relative w-full h-64 md:h-72 lg:h-80 flex flex-col justify-end p-6 bg-cover bg-center rounded-2xl shadow-lg text-white transition-transform hover:scale-[1.02] overflow-hidden group"
              style={{ backgroundImage: `url(${service.thumbnail})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-colors group-hover:via-black/50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#f26b2c] transition-colors">
                  {service.name}
                </h3>
                <p className="text-base text-white/90 line-clamp-2">
                  {service.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;