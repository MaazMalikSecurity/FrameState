import { useState, useEffect } from "react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [heroSlide1, heroSlide2, heroSlide3];

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    // FIXED: Added absolute inset-0 w-full h-full -z-10
    // This forces the container to fill the parent section and sit behind the content
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Ensure image covers the full area */}
          <img 
            src={slide} 
            alt={`Real estate showcase ${index + 1}`} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Uniform dark overlay: 40% opacity black */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
    </div>
  );
};

export default HeroSlideshow;