import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FreeTrial = () => {
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

      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#22265c] dark:text-[#f26b2c]">
            Start Your Free Trial
          </h1>

          <p className="text-center text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            We provide professional real estate photo editing services. Fill in the details below, and our team will contact you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                placeholder="Name"
                required
                className="h-12 text-base"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <Input
                placeholder="Company Name"
                className="h-12 text-base"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
            </div>

            <Input
              type="email"
              placeholder="Email"
              required
              className="h-12 text-base"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <Input
              type="number"
              placeholder="Approximate shoots per month"
              className="h-12 text-base"
              value={formData.shootsPerMonth}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  shootsPerMonth: e.target.value,
                })
              }
            />

            <Textarea
              placeholder="Additional Notes..."
              className="min-h-32 text-base p-4"
              value={formData.note}
              onChange={(e) =>
                setFormData({ ...formData, note: e.target.value })
              }
            />

            <Button type="submit" variant="hero" className="w-full text-lg h-12">
              Submit Request
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeTrial;