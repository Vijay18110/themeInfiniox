 
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, LucideIcon } from "lucide-react";
import { z } from "zod";
import { toast } from "react-toastify";
import SectionHeading from "../components/SectionHeading";

interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string; 
}

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: "info@infiniox.com",
    href: "mailto:info@infiniox.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 – 7715857501 / 9324010854",
    href: "tel:+917715857501",
  },
  {
    icon: MapPin,
    label: "Offices",
    value: "NCR Lucknow, Bangalore,Mumbai,Hyderabad",
    href: "https://maps.google.com",
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      
      // FIX: Changed .errors to .issues to resolve TypeScript build error
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      });
      
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1200));

      toast.success("Message sent! We'll get back to you soon.");

      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
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
          <div className="space-y-4">
            {contactInfo.map((info) => (
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
                  <p className="text-destructive text-xs ml-1">{errors.email}</p>
                )}
              </div>
            </div>

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
                <p className="text-destructive text-xs ml-1">{errors.message}</p>
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