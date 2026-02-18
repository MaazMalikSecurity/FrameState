import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FreeTrial = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    shootsPerMonth: "",
    note: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- 1. LOGIC: Send to Google Sheets (From your original code) ---
    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("company", formData.company);
    formPayload.append("email", formData.email);
    formPayload.append("shootsPerMonth", formData.shootsPerMonth);
    formPayload.append("note", formData.note);

    try {
      // REPLACE THIS URL with your actual Google Web App URL if it changes
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby9MkhbuQs5rZf9FHNEqVTovrm-Wv-MztCFk2Si2hJ4APdfZnNz9eSiqWEEFYHtlKaV/exec";
      
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formPayload,
        mode: 'no-cors' 
      });

      console.log("Data sent to Sheets");

    } catch (error) {
      console.error("Error sending to sheets:", error);
    }

    // --- 2. LOGIC: Prepare Email Body (From your original code) ---
    const emailBody = `
      Name: ${formData.name}
      Company: ${formData.company}
      Email: ${formData.email}
      Shoots per Month: ${formData.shootsPerMonth}
      Note:
      ${formData.note}
    `;

    // --- 3. LOGIC: Open Email Client ---
    window.location.href = `mailto:sales@framestate.co?subject=Free Trial Request&body=${encodeURIComponent(emailBody)}`;

    // --- 4. Reset Form ---
    setIsSubmitting(false);
    setFormData({
      name: "",
      company: "",
      email: "",
      shootsPerMonth: "",
      note: "",
    });
  };

  return (
    // DESIGN: Matches the new navy/dark theme structure
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Start Your <span className="gradient-text">Free Trial</span>
            </h1>

            <p className="text-center text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
              We provide professional real estate photo editing services. Fill in the details below, and our team will contact you within 24 hours.
            </p>

            {/* DESIGN: Glass Card Effect */}
            <form onSubmit={handleSubmit} className="space-y-6 glass-card p-8 rounded-2xl border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  placeholder="Name"
                  required
                  // DESIGN: Muted background for inputs
                  className="h-12 text-base bg-muted/50 border-border focus:border-primary/50"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <Input
                  placeholder="Company Name"
                  className="h-12 text-base bg-muted/50 border-border focus:border-primary/50"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <Input
                type="email"
                placeholder="Email"
                required
                className="h-12 text-base bg-muted/50 border-border focus:border-primary/50"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <Input
                type="number"
                placeholder="Approximate shoots per month"
                className="h-12 text-base bg-muted/50 border-border focus:border-primary/50"
                value={formData.shootsPerMonth}
                onChange={(e) => setFormData({ ...formData, shootsPerMonth: e.target.value })}
              />

              <Textarea
                placeholder="Additional Notes..."
                className="min-h-32 text-base p-4 bg-muted/50 border-border focus:border-primary/50"
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-orange text-primary-foreground font-semibold py-3.5 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] text-lg disabled:opacity-50 disabled:hover:scale-100 shadow-lg glow-orange"
              >
                {isSubmitting ? "Processing..." : "Submit Request"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeTrial;