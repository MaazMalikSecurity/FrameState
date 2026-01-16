import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FreeTrial = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
    instructions: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Free trial submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Start Your Free Trial
          </h1>
          <p className="text-center text-muted-foreground text-lg mb-12">
            We provide professional real estate photo editing services for real estate agencies and property marketing companies. To help agencies evaluate our quality, we offer a free trial. Interested companies can fill in the details below, and our team will review the request and contact you within 24 hours with further information.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              placeholder="Full Name"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="h-14"
            />
            <Input
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-14"
            />
            <Input
              type="text"
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="h-14"
            />
            <Select
              onValueChange={(value) => setFormData({ ...formData, service: value })}
            >
              <SelectTrigger className="h-14">
                <SelectValue placeholder="Select Service" />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border">
                <SelectItem value="photo-editing">Photo Editing</SelectItem>
                <SelectItem value="day-to-dusk">Day to Dusk</SelectItem>
                <SelectItem value="virtual-staging">Virtual Staging</SelectItem>
                <SelectItem value="decluttering">Decluttering</SelectItem>
                <SelectItem value="hdr-blending">HDR Blending</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="file"
              multiple
              className="h-14 pt-4"
            />
            <Textarea
              placeholder="Additional Instructions"
              value={formData.instructions}
              onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
              className="min-h-32"
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
