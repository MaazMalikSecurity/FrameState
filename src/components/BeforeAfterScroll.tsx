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
  const [isLocked, setIsLocked] = useState(false);
  const maxScroll = 400;
  const navbarHeight = 80; 

  const handleWheel = useCallback((e: WheelEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // Calculate center accounting for navbar
    const availableHeight = viewportHeight - navbarHeight;
    const visualCenter = navbarHeight + availableHeight / 2;
    const containerCenter = rect.top + rect.height / 2;
    
    // Lock when container center is near the visual center
    const distanceFromCenter = Math.abs(containerCenter - visualCenter);
    const isInCenter = distanceFromCenter < availableHeight * 0.15;
    
    const currentProgress = accumulatedScrollRef.current / maxScroll;

    // Auto-unlock when at 0% or 100% boundary and trying to escape
    if (currentProgress <= 0 && e.deltaY < 0) {
      setIsLocked(false);
      return;
    }
    
    if (currentProgress >= 1 && e.deltaY > 0) {
      setIsLocked(false);
      return;
    }

    // Lock scroll when in center
    if (isInCenter) {
      e.preventDefault();
      e.stopPropagation();
      setIsLocked(true);
      
      // Snap container to center if not already there (smooth correction)
      if (distanceFromCenter > 10) {
        const scrollOffset = containerCenter - visualCenter;
        window.scrollBy({ top: scrollOffset, behavior: 'smooth' });
      }
      
      // Accumulate scroll delta
      accumulatedScrollRef.current += e.deltaY;
      
      // Clamp between 0 and maxScroll
      if (accumulatedScrollRef.current < 0) accumulatedScrollRef.current = 0;
      if (accumulatedScrollRef.current > maxScroll) accumulatedScrollRef.current = maxScroll;

      const newProgress = accumulatedScrollRef.current / maxScroll;
      setScrollProgress(newProgress);
    } else {
      setIsLocked(false);
    }
  }, [navbarHeight]);

  // Prevent default document scrolling when locked
  useEffect(() => {
    const preventScroll = (e: Event) => {
      if (isLocked) {
        e.preventDefault();
      }
    };

    if (isLocked) {
      document.addEventListener('scroll', preventScroll, { passive: false });
    }

    return () => {
      document.removeEventListener('scroll', preventScroll);
    };
  }, [isLocked]);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  // Reset state when scrolling back up/down past this section via normal flow
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      // If we scroll way past it (up or down), reset logic could go here
      // Currently just resetting if it goes below viewport
      if (rect.top > window.innerHeight) {
        accumulatedScrollRef.current = 0;
        setScrollProgress(0);
        setIsLocked(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[85vh] py-10 px-6 lg:px-16 flex items-center"
    >
      <div className={`max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-8 ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}>
        {/* Before/After Image Container */}
        <div className="flex-1 w-full max-w-xl">
          <div className="relative h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-2xl bg-gray-100">
            
            {/* 1. BEFORE Image (Base Layer) */}
            <img
              src={beforeImage}
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* 2. AFTER Image (Overlay Layer) */}
            {/* We clip this image from the top down based on scroll progress */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                // inset(top right bottom left)
                // 100% hidden at start, 0% hidden at end
                clipPath: `inset(${100 - (scrollProgress * 100)}% 0 0 0)`
              }}
            >
              <img
                src={afterImage}
                alt="After"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 3. Slider Line */}
            <div 
              className="absolute left-0 right-0 h-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
              style={{
                bottom: `${scrollProgress * 100}%`
              }}
            >
              {/* Optional: Center Handle Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black/70">
                   <path d="m7 15 5 5 5-5"/>
                   <path d="m7 9 5-5 5 5"/>
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider z-30">
              Before
            </div>
            <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider z-30">
              After
            </div>

          </div>
        </div>

        {/* Service Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            {title}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterScroll;
