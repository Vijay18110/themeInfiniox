"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import Image from "next/image"; // Use Next.js Image component
import heroBanner from "../assets/hero-banner.jpg";
import SectionHeading from "../components/SectionHeading";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To deliver world-class craftsmanship that transforms everyday spaces into works of art, blending innovation with tradition.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To become the leading provider of premium handcrafted furniture and smart solutions recognized globally for quality and innovation.",
  },
  {
    icon: Heart,
    title: "Our Values",
    desc: "Quality, integrity, sustainability, and customer satisfaction drive every decision we make and every product we create.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <Image
          src={heroBanner}
          alt="About CraftWorks"
          fill // This makes it behave like object-cover background
          priority // Loads this image immediately
          className="object-cover"
        />
        {/* Overlay using your custom gradient variable */}
        <div
          className="absolute inset-0 z-0"
          style={{ background: "var(--hero-gradient)" }}
        />

        <div className="relative container mx-auto px-4 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-primary-foreground font-display"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-primary-foreground/80 max-w-lg mx-auto text-lg"
          >
            Discover the story, passion, and people behind CraftWorks.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading subtitle="Our Story" title="Crafting Since 2015" />
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mt-8">
            <p>
              CraftWorks was born from a deep passion for woodworking and a
              vision to merge traditional craftsmanship with modern technology.
              Founded in Portland, Oregon, we started as a small workshop
              creating custom furniture for local clients.
            </p>
            <p>
              Over the years, we expanded our expertise into epoxy artistry,
              creating stunning river tables and flooring solutions. Our latest
              venture into <strong>AI-powered smart benches</strong> represents
              our commitment to innovation while staying true to our craft
              roots.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding section-alt border-t border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-8 border border-border text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
