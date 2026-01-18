import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";

const FreeTrial = () => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    shootsPerMonth: "",
    note: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = `
      Name: ${formData.name}
      Company: ${formData.company}
      Email: ${formData.email}
      Shoots per Month: ${formData.shootsPerMonth}
      Note:
      ${formData.note}
      `;

    window.location.href = `mailto:trial@framestate.com?subject=Free Trial Request&body=${encodeURIComponent(
      body
    )}`;
  };

  return (
    <div className="min-h-screen bg-secondary transition-colors duration-300">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#22265c] dark:text-[#f26b2c]">
            Start Your Free Trial
          </h1>

          <p className="text-center text-muted-foreground mb-12">
            We provide professional real estate photo editing services for real estate agencies and property marketing companies. To help agencies evaluate our quality, we offer a free trial. Interested companies can fill in the details below, and our team will review the request and contact you within 24 hours with further information.
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
