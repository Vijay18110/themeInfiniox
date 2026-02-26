"use client";

import Link from "next/link"; // Changed from react-router-dom
import Image from "next/image"; // Next.js Image optimization
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

// Import images (Next.js handles these as StaticImageData objects)
import smartBench from "../assets/product-smart-bench.jpg";
import woodenToys from "../assets/product-wooden-toys.jpg";
import furniture from "../assets/product-furniture.jpg";
import epoxyFurniture from "../assets/product-epoxy-furniture.jpg";
import epoxyFlooring from "../assets/product-epoxy-flooring.jpg";
import SectionHeading from "../components/SectionHeading";

const categories = [
  {
    name: "AI Smart Bench",
    path: "/products/ai-smart-bench",
    image: smartBench,
    desc: "Intelligent outdoor seating with integrated technology, solar charging, and environmental monitoring.",
  },
  {
    name: "Wooden Toys",
    path: "/products/wooden-toys",
    image: woodenToys,
    desc: "Safe, durable, and beautifully crafted educational toys made from sustainably sourced wood.",
  },
  {
    name: "Furniture",
    path: "/products/furniture",
    image: furniture,
    desc: "Custom handcrafted wooden furniture designed to last generations with timeless elegance.",
  },
  {
    name: "Epoxy Furniture",
    path: "/products/epoxy-furniture",
    image: epoxyFurniture,
    desc: "Stunning river tables, countertops, and art pieces combining live-edge wood with crystal-clear epoxy resin.",
  },
  {
    name: "Epoxy Flooring",
    path: "/products/epoxy-flooring",
    image: epoxyFlooring,
    desc: "High-performance decorative flooring with metallic, marble, and custom artistic finishes.",
  },
];

export default function Products() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading
          subtitle="Our Products"
          title="Explore Our Collection"
          description="Discover our full range of premium handcrafted products and innovative solutions."
        />

        <div className="space-y-8 max-w-5xl mx-auto mt-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* href replaces 'to' in Next.js Link */}
              <Link
                href={cat.path}
                className="group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 bg-card"
              >
                <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill // Fills the container aspect ratio
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {cat.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {cat.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    View Products <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
