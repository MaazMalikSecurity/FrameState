import { useRef, useEffect, useState, useCallback } from "react";

interface BeforeAfterScrollProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
  reversed?: boolean;
}

const BeforeAfterScroll = ({
  beforeImage,
  afterImage,
  title,
  description,
  reversed = false,
}: BeforeAfterScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const accumulatedScrollRef = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const maxScroll = 400; // Pixels of scroll needed to complete transition

  const handleWheel = useCallback((e: WheelEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // Check if component is in the viewport center area
    const isInView = rect.top <= viewportHeight * 0.3 && rect.bottom >= viewportHeight * 0.7;
    
    // Get current progress
    const currentProgress = accumulatedScrollRef.current / maxScroll;

    // Only intercept scroll if we're in view AND not complete yet
    if (isInView && currentProgress < 1) {
      e.preventDefault();
      e.stopPropagation();
      
      accumulatedScrollRef.current += e.deltaY;
      
      // Clamp values
      if (accumulatedScrollRef.current < 0) accumulatedScrollRef.current = 0;
      if (accumulatedScrollRef.current > maxScroll) accumulatedScrollRef.current = maxScroll;

      const newProgress = accumulatedScrollRef.current / maxScroll;
      setScrollProgress(newProgress);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  // Reset accumulated scroll when scrolling back up to this section
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      // If we've scrolled past this section going up, reset
      if (rect.top > window.innerHeight) {
        accumulatedScrollRef.current = 0;
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen py-16 px-6 lg:px-16 flex items-center"
    >
      <div className={`max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}>
        {/* Before/After Image Container */}
        <div className="flex-1 w-full">
          <div className="relative h-[420px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 h-[200%] transition-transform duration-150 ease-out"
              style={{
                transform: `translateY(-${scrollProgress * 50}%)`,
              }}
            >
              <img
                src={beforeImage}
                alt="Before"
                className="w-full h-1/2 object-cover"
              />
              <img
                src={afterImage}
                alt="After"
                className="w-full h-1/2 object-cover"
              />
            </div>
            
            {/* Progress indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
              {scrollProgress < 0.5 ? "Before" : "After"} • {scrollProgress < 1 ? "Scroll to reveal" : "Complete!"}
            </div>
            
            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 z-10">
              <div 
                className="h-full bg-accent transition-all duration-100"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterScroll;
