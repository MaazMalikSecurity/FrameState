import { useRef, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveHorizontal } from "lucide-react";

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

  // --- DRAG HANDLERS ---
  const handleMove = useCallback((clientX: number) => {
    const container = containerRef.current?.querySelector('.relative');
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
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
      // UPDATED: Adjusted padding for large screens to let content breathe
      className="min-h-[85vh] py-10 px-6 lg:px-12 xl:px-16 2xl:px-24 flex items-center"
    >
      {/* UPDATED: Increased max-w from 100rem to 120rem (approx 1920px) so it fills 1080p screens better */}
      <div className={`max-w-[120rem] mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-20 ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}>
        
        {/* --- IMAGE CONTAINER --- */}
        {/* UPDATED: Increased width share to 55% on large screens */}
        <div className={`w-full lg:w-[55%] ${reversed ? 'lg:ml-0' : 'lg:mr-0'}`}>
          
          <div 
            // UPDATED: 
            // 1. Kept h-[280px] for mobile/tablet.
            // 2. Added `lg:h-auto` and `lg:aspect-[3/2]` for desktop.
            // This forces the height to grow mathematically with the width, solving the "empty" look.
            className="relative h-[280px] lg:h-auto lg:aspect-[3/2] rounded-xl overflow-hidden shadow-2xl bg-gray-100 select-none group w-full"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{ cursor: isDragging ? 'grabbing' : 'ew-resize' }}
          >
            
            {/* BEFORE Image */}
            <img
              src={beforeImage}
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              draggable={false}
            />

            {/* AFTER Image */}
            <div 
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
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

            {/* --- SLIDER LINE --- */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-lg text-primary">
                <MoveHorizontal size={18} />
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
        <div className="w-full lg:w-[45%] text-center lg:text-left">
          {/* UPDATED: Added 3xl text sizes for ultra-wide screens */}
          <h3 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold text-[#22265c] dark:text-[#f26b2c] mb-3 lg:mb-4 xl:mb-6 leading-tight">
            {title}
          </h3>
          {/* UPDATED: Added 3xl text sizes and relaxed leading */}
          <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-muted-foreground leading-relaxed lg:leading-relaxed mb-6">
            {description}
          </p>
          {serviceId && (
            <Button 
              asChild
              // UPDATED: Made button larger on big screens
              className="bg-white text-[#f26b2c] border-2 border-[#f26b2c] hover:bg-[#f26b2c] hover:text-white transition-colors dark:bg-[#252b37] dark:hover:bg-[#f26b2c] dark:hover:text-[#252b37] text-base lg:text-lg py-6 px-8"
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