import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Award, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-secondary transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12 xl:px-16 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#22265c] dark:text-[#f26b2c] mb-6">
            About FrameState
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We're a team of professional photo editors dedicated to helping real estate agents and photographers showcase properties at their absolute best.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 lg:px-12 xl:px-16 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#22265c] dark:text-[#f26b2c] mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                At FrameState, we believe that every property deserves to be presented in the best possible light. Our mission is to provide high-quality, affordable photo editing services that help real estate professionals sell properties faster and for better prices.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We combine cutting-edge editing techniques with a deep understanding of real estate marketing to deliver images that capture attention and drive results.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-footer p-6 rounded-xl shadow-lg">
                <Target className="w-10 h-10 text-[#f26b2c] mb-4" />
                <h3 className="font-bold text-xl mb-2 text-[#22265c] dark:text-white">Precision</h3>
                <p className="text-muted-foreground text-sm">Meticulous attention to every detail</p>
              </div>
              <div className="bg-white dark:bg-footer p-6 rounded-xl shadow-lg">
                <Zap className="w-10 h-10 text-[#f26b2c] mb-4" />
                <h3 className="font-bold text-xl mb-2 text-[#22265c] dark:text-white">Speed</h3>
                <p className="text-muted-foreground text-sm">Fast turnaround without compromising quality</p>
              </div>
              <div className="bg-white dark:bg-footer p-6 rounded-xl shadow-lg">
                <Users className="w-10 h-10 text-[#f26b2c] mb-4" />
                <h3 className="font-bold text-xl mb-2 text-[#22265c] dark:text-white">Expertise</h3>
                <p className="text-muted-foreground text-sm">Years of real estate editing experience</p>
              </div>
              <div className="bg-white dark:bg-footer p-6 rounded-xl shadow-lg">
                <Award className="w-10 h-10 text-[#f26b2c] mb-4" />
                <h3 className="font-bold text-xl mb-2 text-[#22265c] dark:text-white">Quality</h3>
                <p className="text-muted-foreground text-sm">Professional results every time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 lg:px-12 xl:px-16 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#22265c] dark:text-[#f26b2c] mb-12">
            Why Choose FrameState?
          </h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-footer p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#22265c] dark:text-[#f26b2c] mb-3">
                Industry Expertise
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team specializes exclusively in real estate photography editing. We understand the unique requirements of property marketing and know exactly what buyers are looking for.
              </p>
            </div>
            <div className="bg-white dark:bg-footer p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#22265c] dark:text-[#f26b2c] mb-3">
                Affordable Pricing
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Professional editing shouldn't break the bank. We offer competitive pricing that makes high-quality photo editing accessible to agents and photographers at every level.
              </p>
            </div>
            <div className="bg-white dark:bg-footer p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#22265c] dark:text-[#f26b2c] mb-3">
                Quick Turnaround
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Time is money in real estate. We deliver professionally edited photos within 24 hours, helping you get your listings to market faster than the competition.
              </p>
            </div>
            <div className="bg-white dark:bg-footer p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#22265c] dark:text-[#f26b2c] mb-3">
                Customer Satisfaction
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We're not happy until you're thrilled with the results. Our dedicated support team ensures every project meets your exact specifications with unlimited revisions.
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
            Join hundreds of satisfied real estate professionals who trust FrameState with their photo editing needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
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