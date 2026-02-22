import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Zap, Layers, ShieldCheck, Cpu, Network, CheckCircle2, BarChart3, ChevronDown, Clock, Calendar, Image as ImageIcon, ArrowRight } from "lucide-react";
import HeroSlideshow from "@/components/HeroSlideshow";
import logo from "@/assets/logowhite.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden">
        <HeroSlideshow />
        
        {/* FADE TRANSITION OVERLAY */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[100rem] mx-auto px-6 md:px-12 flex flex-col items-center justify-center h-full gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="max-w-5xl text-center mx-auto"
          >
            <img 
              src={logo} 
              alt="Framestate" 
              className="h-28 md:h-40 w-auto mx-auto mb-8 drop-shadow-lg"
            />
            
            <p className="text-xl md:text-3xl text-white/95 leading-relaxed max-w-4xl mx-auto font-medium drop-shadow-md">
              Framestate is a next-generation real estate photo editing system built for speed, scale, and consistency. 
              We help real estate companies process large image volumes in a few hours.
            </p>
          </motion.div>

          {/* Stats Island */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full max-w-3xl mx-auto gradient-hero rounded-3xl p-8 md:p-10 glow-orange-strong shadow-2xl"
          >
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center text-center divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
              {[
                { icon: Calendar, value: "5+", label: "Years Experience" },
                { icon: Clock, value: "12hr", label: "Turnaround Time" },
                { icon: ImageIcon, value: "5,000+", label: "Images Daily" },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center px-4 pt-4 md:pt-0 first:pt-0">
                  <div className="flex items-center gap-3 mb-1">
                    <stat.icon className="w-6 h-6 text-primary-foreground/80" />
                    <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</h3>
                  </div>
                  <p className="text-primary-foreground/80 text-sm font-semibold uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

          {showScrollIndicator && (
            <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center animate-bounce">
              <div 
                className="flex flex-col items-center gap-2 cursor-pointer group" 
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              >
                <span className="text-white text-sm font-medium whitespace-nowrap drop-shadow-md group-hover:text-[#f26b2c] transition-colors">Scroll Down</span>
                <ChevronDown className="w-6 h-6 text-white drop-shadow-md group-hover:text-[#f26b2c] transition-colors" />
              </div>
            </div>
          )}
      </section>

      {/* --- WHAT WE DO --- */}
      <section className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 relative">
        <div className="max-w-[100rem] mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.3 }} // Ensures it only animates when 30% visible
              transition={{ duration: 0.8 }} // Slowed down
              className="flex flex-col justify-center"
            >
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-10 leading-tight">
                What We <span className="gradient-text">Do</span>
              </h2>
              <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed mb-12">
                We run a technology-driven editing workflow backed by a large, specialized editing team and a strict internal hierarchy.
              </p>
              
              <div className="glass-card p-10 rounded-2xl border-l-8 border-primary">
                <p className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
                  The result: Rapid delivery, exemplary quality, zero surprises.
                </p>
              </div>
            </motion.div>

            {/* Right Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.3 }} // Ensures it only animates when 30% visible
              transition={{ duration: 0.8, delay: 0.2 }} // Slowed down with a slight delay
              className="space-y-6"
            >
              {[
                { Icon: Network, title: "Specialized Team", desc: "Expert editors & strict hierarchy" },
                { Icon: Zap, title: "Technology Driven", desc: "Automated workflow systems" },
                { Icon: CheckCircle2, title: "Guaranteed Results", desc: "Zero delays or inconsistencies" },
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-8 md:p-10 rounded-2xl flex items-center gap-8 hover:border-primary/50 transition-all duration-300">
                  <div className="gradient-orange p-5 rounded-2xl shrink-0">
                    <item.Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-2xl md:text-3xl mb-2">{item.title}</h3>
                    <p className="text-lg md:text-xl text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- NEXT-GEN SYSTEM --- */}
      <section className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 relative bg-secondary/5">
        <div className="max-w-[100rem] mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }} // Slowed down
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              Next-Gen <span className="gradient-text">Editing System</span>
            </h2>
            <p className="text-xl md:text-3xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Most editing services break when volume increases. Framestate is designed for it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: Cpu, title: "Advanced Workflow" },
              { Icon: Network, title: "Smart Distribution" },
              { Icon: ShieldCheck, title: "Quality Control" },
              { Icon: BarChart3, title: "Real-Time Monitoring" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }} // Slower duration, staggered delay
                className="glass-card p-12 rounded-3xl text-center hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center min-h-[300px]"
              >
                <div className="gradient-orange p-5 rounded-full mb-8">
                  <item.Icon className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground text-2xl md:text-3xl">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 relative">
        <div className="max-w-[100rem] mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }} // Slowed down
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8">
              Why <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-xl md:text-3xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Experience the difference of a partner built for high-volume performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: Target, title: "Real Estate Focus", text: "We understand exactly what sells property." },
              { Icon: Zap, title: "Engineered for Speed", text: "Delivered in minutes or hours, not days." },
              { Icon: ShieldCheck, title: "Quality Control", text: "Every image checked before delivery." },
              { Icon: Layers, title: "Scale Consistency", text: "Same quality for 20 or 20,000 images." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }} // Slower duration, staggered delay
                className="glass-card p-10 rounded-3xl hover:border-primary/50 transition-all duration-300 min-h-[350px] flex flex-col justify-center"
              >
                <item.Icon className="w-14 h-14 text-primary mb-8" />
                <h3 className="text-3xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-xl leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }} // Triggers when 40% of the box is visible
          transition={{ duration: 1.0 }} // Nice and slow fade in (1 second)
          className="max-w-[70rem] mx-auto text-center gradient-navy rounded-[3rem] p-16 md:p-24 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/40 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Listings?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Try our professional photo editing services with no commitment. See the difference quality editing makes.
            </p>
            <Link
              to="/free-trial"
              className="gradient-orange text-white font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-lg inline-flex items-center gap-2 glow-orange"
            >
              Start Your Free Trial
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;