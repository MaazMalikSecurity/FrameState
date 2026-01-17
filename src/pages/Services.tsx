import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BeforeAfterScroll from "@/components/BeforeAfterScroll";

import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

const servicesData = [
  {
    id: "photo-retouching",
    name: "Photo Retouching / Enhancement",
    description: "Professional color correction, exposure adjustment, and image enhancement.",
    examples: [
      {
        beforeImage: before1,
        afterImage: after1,
        title: "Brightness & Exposure Correction",
        description: "Adjusting lighting levels to bring out the best in dim or overexposed areas, ensuring every corner of the room looks inviting and well-lit."
      },
      {
        beforeImage: before2,
        afterImage: after2,
        title: "Color Balance Enhancement",
        description: "Fine-tuning color tones to eliminate unwanted color casts and create natural, appealing hues that accurately represent the property."
      },
      {
        beforeImage: before1,
        afterImage: after1,
        title: "Sharpness & Detail Enhancement",
        description: "Enhancing image clarity and sharpness to highlight architectural details, textures, and finishes that make the property stand out."
      },
      {
        beforeImage: before2,
        afterImage: after2,
        title: "Contrast Optimization",
        description: "Balancing shadows and highlights to create depth and dimension, making spaces feel more vibrant and three-dimensional."
      }
    ]
  },
  {
    id: "hdr-blending",
    name: "HDR Photo Blending",
    description: "Combine multiple exposures for perfectly balanced interior and exterior shots.",
    examples: [
      {
        beforeImage: before1,
        afterImage: after1,
        title: "Window View Recovery",
        description: "Perfectly exposing both interior spaces and exterior views through windows, eliminating blown-out windows while maintaining interior brightness."
      },
      {
        beforeImage: before2,
        afterImage: after2,
        title: "Multi-Exposure Blending",
        description: "Combining multiple bracketed exposures to capture the full dynamic range of a scene, from the darkest shadows to the brightest highlights."
      },
      {
        beforeImage: before1,
        afterImage: after1,
        title: "Interior-Exterior Balance",
        description: "Creating seamless transitions between indoor and outdoor spaces, showcasing patios, gardens, and views without sacrificing interior detail."
      },
      {
        beforeImage: before2,
        afterImage: after2,
        title: "Natural Light Preservation",
        description: "Maintaining the authentic look of natural lighting while ensuring all areas are properly exposed and visually appealing."
      }
    ]
  },
  {
    id: "virtual-staging",
    name: "Virtual Staging",
    description: "Digitally furnish empty rooms to help buyers visualize the space.",
    examples: [
      {
        beforeImage: before1,
        afterImage: after1,
        title: "Living Room Staging",
        description: "Transform empty living spaces into warm, inviting rooms with stylish furniture and decor that help buyers envision their future home."
      },
      {
        beforeImage: before2,
        afterImage: after2,
        title: "Bedroom Furnishing",
        description: "Add beds, nightstands, and tasteful accessories to create cozy, functional bedroom spaces that appeal to potential buyers."
      },
      {
        beforeImage: before1,
        afterImage: after1,
        title: "Dining Area Setup",
        description: "Digitally furnish dining areas with elegant tables, chairs, and centerpieces to showcase the entertaining potential of the space."
      },
      {
        beforeImage: before2,
        afterImage: after2,
        title: "Home Office Creation",
        description: "Convert empty rooms into productive home office spaces with desks, shelving, and professional decor to highlight versatile room usage."
      }
    ]
  },
  {
    id: "decluttering",
    name: "Decluttering / Object Removal",
    description: "Remove unwanted objects and distractions for a clean presentation.",
    examples: [
      {
        beforeImage: before1,
        afterImage: after1,
        title: "Personal Items Removal",
        description: "Seamlessly remove personal belongings, family photos, and clutter to create a neutral, market-ready presentation."
      },
      {
        beforeImage: before2,
        afterImage: after2,
        title: "Utility Object Cleanup",
        description: "Eliminate distracting elements like trash cans, electrical outlets, power lines, and utility boxes for a cleaner appearance."
      },
      {
        beforeImage: before1,
        afterImage: after1,
        title: "Lawn & Exterior Cleanup",
        description: "Remove lawn equipment, hoses, and outdoor clutter to present a pristine exterior that enhances curb appeal."
      },
      {
        beforeImage: before2,
        afterImage: after2,
        title: "Reflection & Shadow Removal",
        description: "Clean up unwanted reflections in mirrors and windows, and remove photographer shadows for professional results."
      }
    ]
  },
  {
    id: "twilight",
    name: "Twilight Conversion",
    description: "Transform daytime photos into stunning twilight/dusk shots.",
    examples: [
      {
        beforeImage: before1,
        afterImage: after1,
        title: "Exterior Twilight Magic",
        description: "Transform daytime exterior shots into stunning twilight scenes with warm interior lighting and dramatic skies."
      },
      {
        beforeImage: before2,
        afterImage: after2,
        title: "Landscape Lighting Enhancement",
        description: "Add beautiful landscape and pathway lighting to highlight outdoor features and create an inviting evening atmosphere."
      },
      {
        beforeImage: before1,
        afterImage: after1,
        title: "Pool & Water Feature Glow",
        description: "Illuminate pools and water features with realistic underwater and surrounding lighting for a luxurious twilight effect."
      },
      {
        beforeImage: before2,
        afterImage: after2,
        title: "Architectural Accent Lighting",
        description: "Enhance architectural features with strategic accent lighting that showcases the property's unique design elements at dusk."
      }
    ]
  }
];

const Services = () => {
  const { serviceId } = useParams();

  // If a serviceId exists in the URL, show the single service page with before/after scrolls
  if (serviceId) {
    const service = servicesData.find((s) => s.id === serviceId);

    if (!service) {
      return (
        <div className="min-h-screen">
          <Navbar />
          <section className="pt-32 pb-20 px-6 lg:px-16 text-center">
            <h2 className="text-3xl font-bold text-primary">Service Not Found</h2>
            <Link to="/services" className="text-blue-600 underline mt-4 inline-block">
              Back to Services
            </Link>
          </section>
          <Footer />
        </div>
      );
    }

    return (
      <div className="min-h-screen">
        <Navbar />
        
        {/* Service Header */}
        <section className="bg-secondary pt-24 pb-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {service.name}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Scroll through each example to see the transformation
            </p>
          </div>
        </section>

        {/* Service Examples with Before/After Scroll */}
        <section className="bg-secondary">
          {service.examples.map((example, index) => (
            <div key={index}>
              <BeforeAfterScroll
                beforeImage={example.beforeImage}
                afterImage={example.afterImage}
                title={example.title}
                description={example.description}
                reversed={index % 2 !== 0}
              />
            </div>
          ))}
        </section>

        <Footer />
      </div>
    );
  }

  // Otherwise show the services grid
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="bg-secondary py-12">
        <div className="text-center mb-8 pt-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#f26b2c]">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto px-6">
            Click on a service to see detailed examples and transformations
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-5 justify-items-center pb-12">
          {servicesData.map((service) => (
            <Link
              to={`/services/${service.id}`}
              key={service.id}
              className="relative w-full max-w-[23.5rem] h-44 sm:h-50 md:h-56 flex flex-col justify-end p-5 bg-cover bg-center rounded-xl shadow-lg text-white transition-transform hover:scale-105"
              style={{ backgroundImage: `url(${after1})` }}
            >
              <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
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