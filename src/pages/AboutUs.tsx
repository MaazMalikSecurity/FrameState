import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Zap, Layers, ShieldCheck, Cpu, Network, CheckCircle2, BarChart3, ChevronDown } from "lucide-react";
import HeroSlideshow from "@/components/HeroSlideshow";
import logo from "@/assets/logowhite.png";
import { useState, useEffect } from "react";

const About = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-secondary transition-colors duration-300">
      <Navbar />

      {/* COMBINED HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-12 pb-4 md:pt-20 md:pb-2 overflow-hidden">
        {/* Background Slideshow */}
        <HeroSlideshow />
        
        {/* Content Wrapper */}
        <div className="relative z-10 w-full max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 flex flex-col justify-center h-full">
          
          {/* --- PART 1: LOGO & INTRO --- */}
          <div className="max-w-4xl 2xl:max-w-7xl text-center mx-auto animate-fade-in mb-4 md:mb-2 2xl:mb-12 md:mt-4">
            <img 
              src={logo} 
              alt="Framestate" 
              className="h-28 md:h-20 lg:h-24 2xl:h-40 w-auto mx-auto mb-2 md:mb-1 2xl:mb-6 drop-shadow-lg"
            />
            
            <p className="text-sm md:text-xs lg:text-base 2xl:text-3xl text-white/95 leading-snug md:leading-relaxed max-w-3xl 2xl:max-w-6xl mx-auto font-medium drop-shadow-md">
              Framestate is a next-generation real estate photo editing system built for speed, scale, and consistency. 
              We help real estate companies process large image volumes in a few hours.
            </p>
          </div>

          {/* --- PART 2: WHAT WE DO --- */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-6 lg:gap-12 2xl:gap-40 items-center">
            
            {/* Left: Text Content */}
            <div className="text-white text-center md:text-left">
              <h2 className="text-3xl md:text-2xl lg:text-3xl 2xl:text-6xl font-bold mb-3 md:mb-2 2xl:mb-10 text-[#f26b2c] drop-shadow-md">
                What We Do
              </h2>
              <p className="text-white/90 text-base md:text-xs lg:text-base 2xl:text-2xl leading-relaxed mb-3 md:mb-2 2xl:mb-8 drop-shadow-sm">
                We run a technology-driven editing workflow backed by a large, specialized editing team and a strict internal hierarchy.
              </p>
              
              <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur p-4 md:p-3 lg:p-5 2xl:p-10 rounded-xl border-l-4 2xl:border-l-8 border-[#f26b2c] shadow-xl transition-colors duration-300">
                <p className="text-lg md:text-sm lg:text-lg 2xl:text-3xl font-bold text-[#22265c] dark:text-white">
                  The result: Rapid delivery, exemplary quality, zero surprises.
                </p>
              </div>
            </div>
            
            {/* Right: Visual Grid */}
            <div className="grid grid-cols-1 gap-3 md:gap-2 lg:gap-3 2xl:gap-10">
              
              {/* Card 1 */}
              <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur p-3 lg:p-3 2xl:p-10 rounded-xl shadow-xl flex items-center gap-3 lg:gap-4 2xl:gap-8 hover:transform hover:scale-[1.02] transition-all duration-300">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 lg:p-2 2xl:p-5 rounded-lg">
                   <Network className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-14 2xl:h-14 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-[#22265c] dark:text-white text-base md:text-sm lg:text-lg 2xl:text-3xl mb-0">Specialized Team</h3>
                  <p className="text-xs md:text-[10px] lg:text-xs 2xl:text-xl text-muted-foreground dark:text-gray-300">Expert editors & strict hierarchy</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur p-3 lg:p-3 2xl:p-10 rounded-xl shadow-xl flex items-center gap-3 lg:gap-4 2xl:gap-8 hover:transform hover:scale-[1.02] transition-all duration-300">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-2 lg:p-2 2xl:p-5 rounded-lg">
                   <Zap className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-14 2xl:h-14 text-[#f26b2c]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#22265c] dark:text-white text-base md:text-sm lg:text-lg 2xl:text-3xl mb-0">Technology Driven</h3>
                  <p className="text-xs md:text-[10px] lg:text-xs 2xl:text-xl text-muted-foreground dark:text-gray-300">Automated workflow systems</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur p-3 lg:p-3 2xl:p-10 rounded-xl shadow-xl flex items-center gap-3 lg:gap-4 2xl:gap-8 hover:transform hover:scale-[1.02] transition-all duration-300">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 lg:p-2 2xl:p-5 rounded-lg">
                   <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-14 2xl:h-14 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold text-[#22265c] dark:text-white text-base md:text-sm lg:text-lg 2xl:text-3xl mb-0">Guaranteed Results</h3>
                  <p className="text-xs md:text-[10px] lg:text-xs 2xl:text-xl text-muted-foreground dark:text-gray-300">Zero delays or inconsistencies</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- SCROLL DOWN INDICATOR --- */}
        {showScrollIndicator && (
          <div className="absolute bottom-2 left-0 right-0 z-10 flex justify-center animate-bounce">
            <div className="flex flex-col items-center gap-1 sm:gap-2">
              <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">Scroll Down</span>
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
          </div>
        )}
      </section>

      {/* Next-Gen Editing System Section */}
      <section className="py-16 2xl:py-32 px-6 lg:px-12 xl:px-16 bg-white dark:bg-footer/30">
        <div className="max-w-6xl 2xl:max-w-[120rem] mx-auto">
          <div className="text-center mb-12 2xl:mb-24">
            <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-bold text-[#22265c] dark:text-[#f26b2c] mb-6 2xl:mb-10">
              Next-Gen Editing System
            </h2>
            <p className="text-xl 2xl:text-3xl text-muted-foreground max-w-3xl 2xl:max-w-5xl mx-auto">
              Most editing services break when volume increases. <br />
              <span className="text-[#22265c] dark:text-white font-bold"> Framestate is designed for it.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-12 mb-12 2xl:mb-24">
            <div className="bg-secondary dark:bg-footer p-6 2xl:p-12 rounded-xl shadow-md text-center hover:-translate-y-1 transition-transform duration-300">
              <Cpu className="w-10 h-10 2xl:w-16 2xl:h-16 text-[#f26b2c] mx-auto mb-4 2xl:mb-8" />
              <h3 className="font-bold text-[#22265c] dark:text-white text-lg 2xl:text-2xl">Advanced Workflow Systems</h3>
            </div>
            <div className="bg-secondary dark:bg-footer p-6 2xl:p-12 rounded-xl shadow-md text-center hover:-translate-y-1 transition-transform duration-300">
              <Network className="w-10 h-10 2xl:w-16 2xl:h-16 text-[#f26b2c] mx-auto mb-4 2xl:mb-8" />
              <h3 className="font-bold text-[#22265c] dark:text-white text-lg 2xl:text-2xl">Smart Task Distribution</h3>
            </div>
            <div className="bg-secondary dark:bg-footer p-6 2xl:p-12 rounded-xl shadow-md text-center hover:-translate-y-1 transition-transform duration-300">
              <ShieldCheck className="w-10 h-10 2xl:w-16 2xl:h-16 text-[#f26b2c] mx-auto mb-4 2xl:mb-8" />
              <h3 className="font-bold text-[#22265c] dark:text-white text-lg 2xl:text-2xl">Multiple Quality Control Layers</h3>
            </div>
            <div className="bg-secondary dark:bg-footer p-6 2xl:p-12 rounded-xl shadow-md text-center hover:-translate-y-1 transition-transform duration-300">
              <BarChart3 className="w-10 h-10 2xl:w-16 2xl:h-16 text-[#f26b2c] mx-auto mb-4 2xl:mb-8" />
              <h3 className="font-bold text-[#22265c] dark:text-white text-lg 2xl:text-2xl">Real-Time Production Monitoring</h3>
            </div>
          </div>
          
          <div className="max-w-4xl 2xl:max-w-6xl mx-auto text-center">
            <p className="text-lg md:text-xl 2xl:text-3xl text-[#22265c] dark:text-white font-medium">
              This allows us to deliver extremely fast turnaround without compromising standards at any scale.
            </p>
          </div>
        </div>
      </section>

      {/* Core Pillars / Why Choose Us */}
      <section className="py-16 2xl:py-32 px-6 lg:px-12 xl:px-16 bg-secondary">
        <div className="max-w-7xl 2xl:max-w-[120rem] mx-auto">
          
          {/* UPDATED: Added Heading and Description here */}
          <div className="text-center mb-12 2xl:mb-24">
            <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-bold text-[#22265c] dark:text-[#f26b2c] mb-6 2xl:mb-10">
              Why Choose Us
            </h2>
            <p className="text-xl 2xl:text-3xl text-muted-foreground max-w-3xl 2xl:max-w-5xl mx-auto">
              If you need a partner that can move fast, handle volume, and stay consistent, Framestate is built for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 2xl:gap-16">
            
            <div className="bg-white dark:bg-footer p-8 2xl:p-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Target className="w-10 h-10 2xl:w-16 2xl:h-16 text-[#f26b2c] mb-6 2xl:mb-10" />
              <h3 className="text-xl 2xl:text-3xl font-bold text-[#22265c] dark:text-white mb-3 2xl:mb-6">Real Estate Focus</h3>
              <p className="text-muted-foreground leading-relaxed text-sm 2xl:text-xl">
                We understand exactly what sells property and what doesn't.
              </p>
            </div>

            <div className="bg-white dark:bg-footer p-8 2xl:p-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Zap className="w-10 h-10 2xl:w-16 2xl:h-16 text-[#f26b2c] mb-6 2xl:mb-10" />
              <h3 className="text-xl 2xl:text-3xl font-bold text-[#22265c] dark:text-white mb-3 2xl:mb-6">Engineered for Speed</h3>
              <p className="text-muted-foreground leading-relaxed text-sm 2xl:text-xl">
                Listings are delivered within minutes or hours, not "business days".
              </p>
            </div>

            <div className="bg-white dark:bg-footer p-8 2xl:p-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <ShieldCheck className="w-10 h-10 2xl:w-16 2xl:h-16 text-[#f26b2c] mb-6 2xl:mb-10" />
              <h3 className="text-xl 2xl:text-3xl font-bold text-[#22265c] dark:text-white mb-3 2xl:mb-6">Strict Quality Control</h3>
              <p className="text-muted-foreground leading-relaxed text-sm 2xl:text-xl">
                Every image is checked, rechecked, and approved before delivery.
              </p>
            </div>

            <div className="bg-white dark:bg-footer p-8 2xl:p-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Layers className="w-10 h-10 2xl:w-16 2xl:h-16 text-[#f26b2c] mb-6 2xl:mb-10" />
              <h3 className="text-xl 2xl:text-3xl font-bold text-[#22265c] dark:text-white mb-3 2xl:mb-6">Consistency at Scale</h3>
              <p className="text-muted-foreground leading-relaxed text-sm 2xl:text-xl">
                Same quality whether it's 20 images or 20,000.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f26b2c] dark:bg-[#22265c] text-white transition-colors duration-300">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Listings?
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto text-white/90">
            Try our professional photo editing services with no commitment. 
            See the difference quality editing makes.
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            asChild
            className="bg-white text-[#f26b2c] hover:bg-white/90 dark:bg-[#f26b2c] dark:text-white dark:hover:bg-[#f26b2c]/90 transition-colors"
          >
            <Link to="/free-trial">Start Your Free Trial</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;