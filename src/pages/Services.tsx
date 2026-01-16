import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    name: "Photo Retouching / Enhancement",
    href: "/services/photo-retouching",
    description: "Professional color correction, exposure adjustment, and image enhancement.",
  },
  {
    name: "HDR Photo Blending",
    href: "/services/hdr-blending",
    description: "Combine multiple exposures for perfectly balanced interior and exterior shots.",
  },
  {
    name: "Virtual Staging",
    href: "/services/virtual-staging",
    description: "Digitally furnish empty rooms to help buyers visualize the space.",
  },
  {
    name: "Decluttering / Object Removal",
    href: "/services/decluttering",
    description: "Remove unwanted objects and distractions for a clean presentation.",
  },
  {
    name: "Twilight Conversion",
    href: "/services/twilight",
    description: "Transform daytime photos into stunning twilight/dusk shots.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Professional real estate photo editing services tailored for agents and photographers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className="group p-8 rounded-xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
