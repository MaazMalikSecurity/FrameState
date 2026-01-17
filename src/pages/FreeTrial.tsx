import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";

const services = [
  "Photo Retouching / Enhancement",
  "HDR Photo Blending",
  "Virtual Staging",
  "Decluttering / Object Removal",
  "Twilight Conversion",
];

const FreeTrial = () => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    shootsPerMonth: "",
    note: "",
    services: [] as string[],
  });

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Shoots per Month: ${formData.shootsPerMonth}
Services: ${formData.services.join(", ")}

Note:
${formData.note}
`;

    window.location.href = `mailto:trial@framestate.com?subject=Free Trial Request&body=${encodeURIComponent(
      body
    )}`;
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#f26b2c]">
            Start Your Free Trial
          </h1>

          <p className="text-center text-muted-foreground mb-12">
            Submit the form below and our team will contact you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder="Name"
              required
              className="h-12"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <Input
              placeholder="Company Name"
              className="h-12"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />

            <Input
              type="email"
              placeholder="Email"
              required
              className="h-12"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <Input
              type="number"
              placeholder="Number of shoots per month"
              className="h-12"
              value={formData.shootsPerMonth}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  shootsPerMonth: e.target.value,
                })
              }
            />

            {/* Services Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="w-full h-12 flex items-center justify-between rounded-md border border-border px-4 text-sm"
              >
                <span>
                  {formData.services.length > 0
                    ? `${formData.services.length} service(s) selected`
                    : "Select Services"}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {open && (
                <div className="absolute z-20 mt-2 w-full rounded-md border border-border bg-background shadow-lg p-4 space-y-3">
                  {services.map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <Checkbox
                        checked={formData.services.includes(service)}
                        onCheckedChange={() => toggleService(service)}
                        className="data-[state=checked]:bg-[#f26b2c] data-[state=checked]:border-[#f26b2c]"
                      />
                      <span className="text-sm">{service}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <Textarea
              placeholder="Note"
              className="min-h-28"
              value={formData.note}
              onChange={(e) =>
                setFormData({ ...formData, note: e.target.value })
              }
            />

            <Button type="submit" variant="hero" className="w-full">
              Submit Free Trial
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeTrial;
