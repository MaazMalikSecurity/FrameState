import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Zap, Layers, ShieldCheck, Cpu, Network, CheckCircle2, BarChart3, ChevronDown, Clock, Calendar, Image as ImageIcon } from "lucide-react";
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

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden">
        {/* Background Slideshow */}
        <HeroSlideshow />
        
        {/* Content Wrapper */}
        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col items-center justify-center h-full gap-10 md:gap-14">
          
          {/* Logo & Intro */}
          <div className="max-w-4xl text-center mx-auto animate-fade-in">
            <img 
              src={logo} 
              alt="Framestate" 
              className="h-24 md:h-32 lg:h-40 w-auto mx-auto mb-6 drop-shadow-lg"
            />
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-md">
              Framestate is a next-generation real estate photo editing system built for speed, scale, and consistency. 
              We help real estate companies process large image volumes in a few hours.
            </p>
          </div>

          {/* --- STATS ISLAND --- */}
          <div className="w-full max-w-4xl mx-auto bg-[#22265c]/70 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-full p-6 md:p-10 shadow-2xl animate-fade-in-up">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
              
              <div className="flex flex-col items-center justify-center px-4">
                <div className="flex items-center gap-3 mb-1">
                   <Calendar className="w-6 h-6 text-[#f26b2c]" />
                   <h3 className="text-3xl md:text-4xl font-bold text-white">5+</h3>
                </div>
                <p className="text-white/90 text-sm font-semibold uppercase tracking-wider">Years Experience</p>
              </div>

              <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
                <div className="flex items-center gap-3 mb-1">
                   <Clock className="w-6 h-6 text-[#f26b2c]" />
                   <h3 className="text-3xl md:text-4xl font-bold text-white">4 Hr</h3>
                </div>
                <p className="text-white/90 text-sm font-semibold uppercase tracking-wider">Turnaround Time</p>
              </div>

              <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
                <div className="flex items-center gap-3 mb-1">
                   <ImageIcon className="w-6 h-6 text-[#f26b2c]" />
                   <h3 className="text-3xl md:text-4xl font-bold text-white">5,000+</h3>
                </div>
                <p className="text-white/90 text-sm font-semibold uppercase tracking-wider">Images Daily</p>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center animate-bounce">
            <div 
              className="flex flex-col items-center gap-2 cursor-pointer" 
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <span className="text-white text-sm font-medium whitespace-nowrap drop-shadow-md">Scroll Down</span>
              <ChevronDown className="w-6 h-6 text-white drop-shadow-md" />
            </div>
          </div>
        )}
      </section>

      {/* --- WHAT WE DO --- */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-[90rem] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Text Content */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#f26b2c]">
                What We Do
              </h2>
              <p className="text-[#22265c] dark:text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
                We run a technology-driven editing workflow backed by a large, specialized editing team and a strict internal hierarchy.
              </p>
              
              <div className="bg-secondary dark:bg-slate-800 p-6 rounded-xl border-l-4 border-[#f26b2c] shadow-sm">
                <p className="text-lg md:text-xl font-bold text-[#22265c] dark:text-white">
                  The result: Rapid delivery, exemplary quality, zero surprises.
                </p>
              </div>
            </div>
            
            {/* Right: Visual Grid */}
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              {[
                { Icon: Network, title: "Specialized Team", desc: "Expert editors & strict hierarchy", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-900/30" },
                { Icon: Zap, title: "Technology Driven", desc: "Automated workflow systems", color: "text-[#f26b2c]", bg: "bg-orange-100 dark:bg-orange-900/30" },
                { Icon: CheckCircle2, title: "Guaranteed Results", desc: "Zero delays or inconsistencies", color: "text-green-600 dark:text-green-400", bg: "bg-green-100 dark:bg-green-900/30" }
              ].map((item, idx) => (
                <div key={idx} className="bg-secondary dark:bg-slate-800 p-6 rounded-xl shadow-md flex items-center gap-5 hover:transform hover:scale-[1.02] transition-all duration-300">
                  <div className={`${item.bg} p-3 rounded-lg`}>
                     <item.Icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#22265c] dark:text-white text-xl">{item.title}</h3>
                    <p className="text-base text-muted-foreground dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next-Gen Editing System Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-secondary dark:bg-footer/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#22265c] dark:text-[#f26b2c] mb-6">
              Next-Gen Editing System
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Most editing services break when volume increases. <br />
              <span className="text-[#22265c] dark:text-white font-bold"> Framestate is designed for it.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { Icon: Cpu, title: "Advanced Workflow Systems" },
              { Icon: Network, title: "Smart Task Distribution" },
              { Icon: ShieldCheck, title: "Multiple Quality Control Layers" },
              { Icon: BarChart3, title: "Real-Time Production Monitoring" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-footer p-8 rounded-xl shadow-md text-center hover:-translate-y-1 transition-transform duration-300">
                <item.Icon className="w-12 h-12 text-[#f26b2c] mx-auto mb-6" />
                <h3 className="font-bold text-[#22265c] dark:text-white text-xl">{item.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-2xl text-[#22265c] dark:text-white font-medium">
              This allows us to deliver extremely fast turnaround without compromising standards at any scale.
            </p>
          </div>
        </div>
      </section>

      {/* Core Pillars / Why Choose Us */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#22265c] dark:text-[#f26b2c] mb-6">
              Why Choose Us
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              If you need a partner that can move fast, handle volume, and stay consistent, Framestate is built for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: Target, title: "Real Estate Focus", text: "We understand exactly what sells property and what doesn't." },
              { Icon: Zap, title: "Engineered for Speed", text: "Listings are delivered within minutes or hours, not 'business days'." },
              { Icon: ShieldCheck, title: "Strict Quality Control", text: "Every image is checked, rechecked, and approved before delivery." },
              { Icon: Layers, title: "Consistency at Scale", text: "Same quality whether it's 20 images or 20,000." }
            ].map((item, idx) => (
              <div key={idx} className="bg-secondary dark:bg-footer p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <item.Icon className="w-12 h-12 text-[#f26b2c] mb-6" />
                <h3 className="text-2xl font-bold text-[#22265c] dark:text-white mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-[#f26b2c] dark:bg-[#22265c] text-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Listings?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto text-white/90">
            Try our professional photo editing services with no commitment. 
            See the difference quality editing makes.
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            asChild
            className="bg-white text-[#f26b2c] hover:bg-white/90 dark:bg-[#f26b2c] dark:text-white dark:hover:bg-[#f26b2c]/90 transition-colors text-lg px-8 h-12"
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