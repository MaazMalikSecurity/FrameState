import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import background image
import after1 from "@/assets/after-1.jpg";

const services = [
  {
    name: "Photo Retouching / Enhancement",
    href: "/services/photo-retouching",
    description:
      "Professional color correction, exposure adjustment, and image enhancement.",
  },
  {
    name: "HDR Photo Blending",
    href: "/services/hdr-blending",
    description:
      "Combine multiple exposures for perfectly balanced interior and exterior shots.",
  },
  {
    name: "Virtual Staging",
    href: "/services/virtual-staging",
    description:
      "Digitally furnish empty rooms to help buyers visualize the space.",
  },
  {
    name: "Decluttering / Object Removal",
    href: "/services/decluttering",
    description:
      "Remove unwanted objects and distractions for a clean presentation.",
  },
  {
    name: "Twilight Conversion",
    href: "/services/twilight",
    description:
      "Transform daytime photos into stunning twilight/dusk shots.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-secondary py-12">
        {/* Header */}
        <div className="text-center mb-8 pt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto px-6">
            Scroll through each service to see the transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-5 justify-items-center">
          {services.map((service, idx) => (
            <Link
              to={service.href}
              key={idx}
              className="relative w-full max-w-[23.5rem] h-44 sm:h-50 md:h-56 flex flex-col justify-end p-5 bg-cover bg-center rounded-xl shadow-lg text-white transition-transform hover:scale-105"
              style={{ backgroundImage: `url(${after1})` }}
            >
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-bold mb-1">
                  {service.name}
                </h3>
                <p className="text-sm md:text-base text-white/90">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
