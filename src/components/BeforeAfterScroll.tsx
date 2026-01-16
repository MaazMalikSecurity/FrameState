import { useRef, useEffect, useState } from "react";

interface BeforeAfterScrollProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
  reversed?: boolean;
  onComplete?: () => void;
}

const BeforeAfterScroll = ({
  beforeImage,
  afterImage,
  title,
  description,
  reversed = false,
}: BeforeAfterScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let accumulatedScroll = 0;
    const maxScroll = 500; // Pixels of scroll needed to complete transition

    const handleWheel = (e: WheelEvent) => {
      const rect = container.getBoundingClientRect();
      const isInView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;

      if (isInView && scrollProgress < 1) {
        e.preventDefault();
        accumulatedScroll += e.deltaY;
        
        if (accumulatedScroll < 0) accumulatedScroll = 0;
        if (accumulatedScroll > maxScroll) accumulatedScroll = maxScroll;

        const newProgress = accumulatedScroll / maxScroll;
        setScrollProgress(newProgress);
        setIsLocked(newProgress > 0 && newProgress < 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [scrollProgress]);

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
              className="ba-inner"
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
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
              {scrollProgress < 0.5 ? "Before" : "After"} • Scroll to reveal
            </div>
            
            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
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
