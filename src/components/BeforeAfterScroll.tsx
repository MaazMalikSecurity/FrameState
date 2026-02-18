import { useRef, useEffect, useState, useCallback, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterScrollProps {
  beforeImage: string;
  afterImage: string;
  title: string | ReactNode;
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
      className="min-h-[80vh] py-16 px-6 md:px-10 lg:px-16 flex items-center"
    >
      <div className={`max-w-[120rem] mx-auto w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}>
        
        {/* --- IMAGE CONTAINER --- */}
        <div className="w-full lg:w-[65%]">
          <div 
            className="relative h-[300px] md:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100 select-none group"
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
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg text-primary">
                <MoveHorizontal size={20} />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-6 left-6 bg-black/60 text-white px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider z-30 pointer-events-none backdrop-blur-sm">
              Before
            </div>
            <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider z-30 pointer-events-none shadow-lg">
              After
            </div>
          </div>
        </div>

        {/* --- TEXT CONTAINER --- */}
        <div className="w-full lg:w-[35%] text-center lg:text-left">
          <h3 className="text-3xl lg:text-5xl font-bold text-[#22265c] dark:text-[#f26b2c] mb-6 leading-tight">
            {title}
          </h3>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
            {description}
          </p>
          {serviceId && (
            <Button 
              asChild
              // FIXED: Reduced padding (py-3 px-6) and font size (text-base) 
              // to match the description text better.
              className="bg-white text-[#f26b2c] border-2 border-[#f26b2c] hover:bg-[#f26b2c] hover:text-white transition-colors dark:bg-[#252b37] dark:hover:bg-[#f26b2c] dark:hover:text-[#252b37] text-base font-semibold py-3 px-8 h-auto"
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