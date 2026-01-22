import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Zap, Layers, ShieldCheck, Cpu, Network, CheckCircle2, BarChart3 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-secondary transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-12 px-6 lg:px-12 xl:px-16 bg-secondary">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#22265c] dark:text-[#f26b2c] mb-6">
            About Framestate
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Framestate is a next-generation real estate photo editing system built for speed, scale, and consistency. 
            We help real estate companies process large image volumes in a few hours, with professional, guaranteed results every time.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-6 lg:px-12 xl:px-16 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#22265c] dark:text-[#f26b2c] mb-6">
                What We Do
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We run a technology-driven editing workflow backed by a large, specialized editing team and a strict internal hierarchy.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Every image moves through a planned, multi-stage system designed to completely eliminate delays, errors, and inconsistencies.
              </p>
              
              <div className="bg-white dark:bg-footer p-6 rounded-xl border-l-4 border-[#f26b2c] shadow-sm">
                <p className="text-xl font-bold text-[#22265c] dark:text-white">
                  The result: Rapid delivery, exemplary quality, zero surprises.
                </p>
              </div>
            </div>
            
            {/* Right: Simple Visual Grid */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white dark:bg-footer p-6 rounded-xl shadow-lg flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                   <Network className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-[#22265c] dark:text-white text-lg">Specialized Team</h3>
                  <p className="text-sm text-muted-foreground">Expert editors & strict hierarchy</p>
                </div>
              </div>
              <div className="bg-white dark:bg-footer p-6 rounded-xl shadow-lg flex items-center gap-4">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                   <Zap className="w-8 h-8 text-[#f26b2c]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#22265c] dark:text-white text-lg">Technology Driven</h3>
                  <p className="text-sm text-muted-foreground">Automated workflow systems</p>
                </div>
              </div>
              <div className="bg-white dark:bg-footer p-6 rounded-xl shadow-lg flex items-center gap-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                   <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold text-[#22265c] dark:text-white text-lg">Guaranteed Results</h3>
                  <p className="text-sm text-muted-foreground">Zero delays or inconsistencies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next-Gen Editing System Section */}
      <section className="py-16 px-6 lg:px-12 xl:px-16 bg-white dark:bg-footer/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#22265c] dark:text-[#f26b2c] mb-6">
              Next-Gen Editing System
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Most editing services break when volume increases. <br />
              <span className="text-[#22265c] dark:text-white font-bold"> Framestate is designed for it.</span>
            </p>
          </div>

          {/* 4 Grid Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-secondary dark:bg-footer p-6 rounded-xl shadow-md text-center hover:-translate-y-1 transition-transform duration-300">
              <Cpu className="w-10 h-10 text-[#f26b2c] mx-auto mb-4" />
              <h3 className="font-bold text-[#22265c] dark:text-white text-lg">Advanced Workflow Systems</h3>
            </div>
            <div className="bg-secondary dark:bg-footer p-6 rounded-xl shadow-md text-center hover:-translate-y-1 transition-transform duration-300">
              <Network className="w-10 h-10 text-[#f26b2c] mx-auto mb-4" />
              <h3 className="font-bold text-[#22265c] dark:text-white text-lg">Smart Task Distribution</h3>
            </div>
            <div className="bg-secondary dark:bg-footer p-6 rounded-xl shadow-md text-center hover:-translate-y-1 transition-transform duration-300">
              <ShieldCheck className="w-10 h-10 text-[#f26b2c] mx-auto mb-4" />
              <h3 className="font-bold text-[#22265c] dark:text-white text-lg">Multiple Quality Control Layers</h3>
            </div>
            <div className="bg-secondary dark:bg-footer p-6 rounded-xl shadow-md text-center hover:-translate-y-1 transition-transform duration-300">
              <BarChart3 className="w-10 h-10 text-[#f26b2c] mx-auto mb-4" />
              <h3 className="font-bold text-[#22265c] dark:text-white text-lg">Real-Time Production Monitoring</h3>
            </div>
          </div>

          {/* Concluding Text (Normal Text, No Quote Box) */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="text-lg md:text-xl text-[#22265c] dark:text-white font-medium">
              This allows us to deliver extremely fast turnaround without compromising standards at any scale.
            </p>
            <p className="text-lg text-muted-foreground">
              If you need a partner that can move fast, handle volume, and stay consistent, Framestate is built for you.
            </p>
          </div>
        </div>
      </section>

      {/* Core Pillars / Why Choose Us */}
      <section className="py-16 px-6 lg:px-12 xl:px-16 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-white dark:bg-footer p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Target className="w-10 h-10 text-[#f26b2c] mb-6" />
              <h3 className="text-xl font-bold text-[#22265c] dark:text-white mb-3">Real Estate Focus</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We understand exactly what sells property and what doesn’t.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white dark:bg-footer p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Zap className="w-10 h-10 text-[#f26b2c] mb-6" />
              <h3 className="text-xl font-bold text-[#22265c] dark:text-white mb-3">Engineered for Speed</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Listings are delivered within minutes or hours, not “business days”.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white dark:bg-footer p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <ShieldCheck className="w-10 h-10 text-[#f26b2c] mb-6" />
              <h3 className="text-xl font-bold text-[#22265c] dark:text-white mb-3">Strict Quality Control</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Every image is checked, rechecked, and approved before delivery.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white dark:bg-footer p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Layers className="w-10 h-10 text-[#f26b2c] mb-6" />
              <h3 className="text-xl font-bold text-[#22265c] dark:text-white mb-3">Consistency at Scale</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Same quality whether it’s 20 images or 20,000.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-12 xl:px-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Listings?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied real estate professionals who trust Framestate with their photo editing needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-[#f26b2c] text-white hover:bg-[#f26b2c]/90" asChild>
              <Link to="/free-trial">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;