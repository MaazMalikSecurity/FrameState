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
    <div className="hero-slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide} alt={`Real estate showcase ${index + 1}`} />
        </div>
      ))}
      {/* Dark overlay for text readability */}
      <div className="hero-overlay" />
    </div>
  );
};

export default HeroSlideshow;
