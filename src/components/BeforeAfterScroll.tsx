import { useRef, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BeforeAfterScrollProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
  reversed?: boolean;
  serviceId?: string;
}

const BeforeAfterScroll = ({
  beforeImage,
  afterImage,
  title,
  description,
  reversed = false,
  serviceId,
}: BeforeAfterScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const accumulatedScrollRef = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const isSnapingRef = useRef(false);
  const maxScroll = 400;
  const navbarHeight = 80;

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (isMobile) return; // Skip wheel handling on mobile
    
    const container = containerRef.current;
    if (!container || isSnapingRef.current) return;

    const rect = container.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    const availableHeight = viewportHeight - navbarHeight;
    const visualCenter = navbarHeight + availableHeight / 2;
    const containerCenter = rect.top + rect.height / 2;
    
    const distanceFromCenter = Math.abs(containerCenter - visualCenter);
    const isInCenter = distanceFromCenter < availableHeight * 0.2;
    
    const currentProgress = accumulatedScrollRef.current / maxScroll;

    if (currentProgress <= 0 && e.deltaY < 0) {
      setIsLocked(false);
      accumulatedScrollRef.current = 0;
      setScrollProgress(0);
      return;
    }
    
    if (currentProgress >= 1 && e.deltaY > 0) {
      setIsLocked(false);
      accumulatedScrollRef.current = maxScroll;
      setScrollProgress(1);
      return;
    }

    if (isInCenter) {
      e.preventDefault();
      e.stopPropagation();
      setIsLocked(true);
      
      if (distanceFromCenter > 20 && !isSnapingRef.current) {
        isSnapingRef.current = true;
        const scrollOffset = containerCenter - visualCenter;
        window.scrollBy({ top: scrollOffset, behavior: 'smooth' });
        
        setTimeout(() => {
          isSnapingRef.current = false;
        }, 300);
      }
      
      accumulatedScrollRef.current += e.deltaY;
      accumulatedScrollRef.current = Math.max(0, Math.min(maxScroll, accumulatedScrollRef.current));

      const newProgress = accumulatedScrollRef.current / maxScroll;
      setScrollProgress(newProgress);
    } else {
      if (isLocked && distanceFromCenter > availableHeight * 0.25) {
        setIsLocked(false);
      }
    }
  }, [navbarHeight, isMobile, isLocked]);

  // Mobile slider handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isMobile) return;
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setIsDragging(true);
    updateSliderPosition(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile || !isDragging) return;
    updateSliderPosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile || !isDragging) return;
    updateSliderPosition(e.touches[0].clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (clientX: number) => {
    const container = containerRef.current?.querySelector('.relative');
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    if (isMobile) return;
    
    const wheelListener = (e: WheelEvent) => handleWheel(e);
    window.addEventListener("wheel", wheelListener, { passive: false });
    return () => window.removeEventListener("wheel", wheelListener);
  }, [handleWheel, isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container || isMobile || isSnapingRef.current) return;
      
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (rect.bottom < 0 || rect.top > viewportHeight) {
        accumulatedScrollRef.current = 0;
        setScrollProgress(0);
        setIsLocked(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchend', handleMouseUp);
      return () => {
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchend', handleMouseUp);
      };
    }
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="min-h-[85vh] py-10 px-6 lg:px-12 xl:px-16 2xl:px-20 flex items-center"
    >
      <div className={`max-w-[90rem] mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16 ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}>
        {/* Before/After Image Container */}
        <div className="flex-1 w-full">
          <div 
            className="relative h-[320px] lg:h-[400px] xl:h-[480px] 2xl:h-[550px] rounded-xl overflow-hidden shadow-2xl bg-gray-100 select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            style={{ cursor: isMobile ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
          >
            
            {/* BEFORE Image (Base Layer) */}
            <img
              src={beforeImage}
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              draggable={false}
            />

            {/* AFTER Image (Overlay Layer) */}
            <div 
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                clipPath: isMobile 
                  ? `inset(0 ${100 - sliderPosition}% 0 0)`
                  : `inset(${100 - (scrollProgress * 100)}% 0 0 0)`
              }}
            >
              <img
                src={afterImage}
                alt="After"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>

            {/* Slider Line */}
            <div 
              className="absolute z-20 pointer-events-none"
              style={isMobile 
                ? { 
                    left: `${sliderPosition}%`,
                    top: 0,
                    height: '100%',
                    width: '1px',
                    backgroundColor: 'white',
                    boxShadow: '0 0 10px rgba(0,0,0,0.5)'
                  }
                : { 
                    bottom: `${scrollProgress * 100}%`,
                    left: 0,
                    right: 0,
                    height: '1px',
                    backgroundColor: 'white',
                    boxShadow: '0 0 10px rgba(0,0,0,0.5)'
                  }
              }
            >
              {/* Center Handle Icon */}
              <div className={`absolute bg-white rounded-full shadow-lg flex items-center justify-center ${
                isMobile 
                  ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10' 
                  : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8'
              }`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black/70">
                  {isMobile ? (
                    <>
                      <path d="m15 18-6-6 6-6"/>
                      <path d="m9 18 6-6-6-6"/>
                    </>
                  ) : (
                    <>
                      <path d="m7 15 5 5 5-5"/>
                      <path d="m7 9 5-5 5 5"/>
                    </>
                  )}
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider z-30 pointer-events-none">
              Before
            </div>
            <div className={`absolute bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider z-30 pointer-events-none ${
              isMobile ? 'top-4 right-4' : 'bottom-4 right-4'
            }`}>
              After
            </div>

          </div>
        </div>

        {/* Service Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#22265c] dark:text-[#f26b2c] mb-3 lg:mb-4 xl:mb-6">
            {title}
          </h3>
          <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-muted-foreground leading-relaxed mb-6">
            {description}
          </p>
          {serviceId && (
            <Button 
              asChild
              className="bg-white text-[#f26b2c] border-2 border-[#f26b2c] hover:bg-[#f26b2c] hover:text-white transition-colors dark:bg-[#252b37] dark:hover:bg-[#f26b2c] dark:hover:text-[#252b37]"
            >
              <Link to={`/services/${serviceId}`}>
                View More Examples
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterScroll;