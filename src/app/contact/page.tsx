"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, LucideIcon } from "lucide-react";
import { z } from "zod";
import SectionHeading from "../components/SectionHeading";
// 1. Remove useToast and import toast from react-toastify

interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string; // Added for clickability
}

const contactInfo: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: "info@craftworks.com",
    href: "mailto:info@craftworks.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Craft Lane, Portland, OR 97201",
    href: "https://maps.google.com/?q=123+Craft+Lane+Portland+OR",
  },
];
import { toast } from "react-toastify";

export default function Contact() {
  // 2. Remove the const { toast } = useToast() line
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactForm, string>>
  >({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((r) => setTimeout(r, 1200));

      // 3. Use toast.success for the confirmation
      toast.success("Message sent! We'll get back to you soon.");

      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      // 4. Use toast.error for catch block
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all outline-none";

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading
          subtitle="Get In Touch"
          title="Contact Us"
          description="Have a question or want a custom quote? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-12">
          {/* Info Sidebar remains the same... */}
          <div className="space-y-4">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                className="bg-card rounded-xl p-6 border border-border flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                    {info.label}
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form remains the same... */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-card rounded-2xl p-6 md:p-10 border border-border shadow-sm space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  className={inputBase}
                />
                {errors.name && (
                  <p className="text-destructive text-xs ml-1">{errors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  className={inputBase}
                />
                {errors.email && (
                  <p className="text-destructive text-xs ml-1">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Subject and Message fields... */}
            <div className="space-y-2">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help? *"
                rows={5}
                className={`${inputBase} resize-none`}
              />
              {errors.message && (
                <p className="text-destructive text-xs ml-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-xl font-bold hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && <Send className="h-4 w-4" />}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
