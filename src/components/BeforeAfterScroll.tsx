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
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  // --- DRAG HANDLERS (Unified for Mobile & Desktop) ---

  const handleMove = useCallback((clientX: number) => {
    const container = containerRef.current?.querySelector('.relative');
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    // Calculate percentage and clamp between 0 and 100
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  // Global listeners to handle dragging outside the element
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleGlobalMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleGlobalTouchMove);
      window.addEventListener('touchend', handleEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleMove]);

  return (
    <div
      ref={containerRef}
      className="min-h-[85vh] py-10 px-6 lg:px-12 xl:px-16 2xl:px-20 flex items-center"
    >
      <div className={`max-w-[100rem] mx-auto w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-12 ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}>
        
        {/* --- IMAGE CONTAINER --- */}
        <div className={`w-full lg:w-[55%] ${reversed ? 'lg:ml-0' : 'lg:mr-0'}`}>
          
          <div 
            className="relative h-[280px] lg:h-[300px] xl:h-[400px] 2xl:h-[450px] rounded-xl overflow-hidden shadow-2xl bg-gray-100 select-none group"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            // Add resize cursor for desktop
            style={{ cursor: isDragging ? 'grabbing' : 'ew-resize' }}
          >
            
            {/* BEFORE Image (Base Layer) - Visible on Left */}
            <img
              src={beforeImage}
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              draggable={false}
            />

            {/* AFTER Image (Overlay Layer) - Clipped from the Left */}
            <div 
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                // This clips the image from the left (0 0 0 X%), revealing the "After" image on the right side
                clipPath: `inset(0 0 0 ${sliderPosition}%)`
              }}
            >
              <img
                src={afterImage}
                alt="After"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>

            {/* --- SLIDER LINE (Unified Style) --- */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Center Handle Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-lg text-primary">
                {/* Horizontal Arrows Icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black/70">
                  <path d="m15 18-6-6 6-6"/>
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider z-30 pointer-events-none">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider z-30 pointer-events-none">
              After
            </div>

          </div>
        </div>

        {/* --- TEXT CONTAINER --- */}
        <div className="w-full lg:w-[50%] text-center lg:text-left">
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