"use client";

import { use } from "react"; // New in React 19/Next 16 for unwrapping params
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";

// Asset Imports (StaticImageData)
import smartBench from "../../assets/product-smart-bench.jpg";
import woodenToys from "../../assets/product-wooden-toys.jpg";
import furniture from "../../assets/product-furniture.jpg";
import epoxyFurniture from "../../assets/product-epoxy-furniture.jpg";
import epoxyFlooring from "../../assets/product-epoxy-flooring.jpg";

const productsData: Record<string, any> = {
  "ai-smart-bench": {
    name: "AI Smart Bench",
    image: smartBench,
    longDesc:
      "Our AI Smart Bench combines cutting-edge technology with durable outdoor furniture design. Equipped with solar panels, USB charging, environmental sensors, and AI-powered occupancy analytics.",
    features: [
      "Solar-powered charging stations",
      "AI occupancy analytics",
      "Weather & air quality sensors",
      "Wi-Fi hotspot capability",
      "Durable all-weather construction",
      "Custom branding options",
    ],
  },
  "wooden-toys": {
    name: "Wooden Toys",
    image: woodenToys,
    longDesc:
      "Our wooden toys are handcrafted from sustainably sourced hardwoods, finished with non-toxic paints and natural oils. Each piece is designed to inspire creativity and learning.",
    features: [
      "100% sustainably sourced wood",
      "Non-toxic finishes",
      "Educational design focus",
      "Age-appropriate safety standards",
      "Handcrafted with care",
      "Gift-ready packaging",
    ],
  },
  furniture: {
    name: "Custom Furniture",
    image: furniture,
    longDesc:
      "Our custom furniture collection showcases the beauty of natural wood, crafted into timeless pieces that complement any interior. From dining tables to bookshelves, each item is made using traditional joinery.",
    features: [
      "Custom dimensions & design",
      "Premium hardwood selection",
      "Traditional joinery techniques",
      "Hand-applied finishes",
      "Lifetime craftsmanship warranty",
      "White-glove delivery",
    ],
  },
  "epoxy-furniture": {
    name: "Epoxy Furniture",
    image: epoxyFurniture,
    longDesc:
      "Our epoxy furniture pieces are works of art. Live-edge wood slabs are paired with crystal-clear or pigmented epoxy resin to create stunning river tables and countertops.",
    features: [
      "Live-edge wood slabs",
      "Crystal-clear epoxy resin",
      "Custom color options",
      "UV-resistant finish",
      "Each piece is one-of-a-kind",
      "Available in various sizes",
    ],
  },
  "epoxy-flooring": {
    name: "Epoxy Flooring",
    image: epoxyFlooring,
    longDesc:
      "Transform any space with our premium epoxy flooring systems. From metallic marble effects to custom artistic designs, our flooring solutions are durable and visual stunning.",
    features: [
      "Metallic & marble finishes",
      "Commercial-grade durability",
      "Seamless installation",
      "Chemical & stain resistant",
      "Easy maintenance",
      "Custom designs available",
    ],
  },
};

export default function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // In Next.js 16, dynamic params are a Promise and must be unwrapped
  const { slug } = use(params);
  const product = productsData[slug];

  if (!product) {
    return (
      <div className="section-padding text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-foreground font-display">
          Product Not Found
        </h1>
        <Link
          href="/products"
          className="mt-4 text-primary font-semibold hover:underline"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link
            href="/product"
            className="hover:text-primary transition-colors"
          >
            Products
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative rounded-2xl overflow-hidden border border-border aspect-square shadow-lg"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-primary font-bold text-sm uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
              Premium Collection
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-display mt-6 mb-6">
              {product.name}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {product.longDesc}
            </p>

            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Key Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {product.features.map((f: string) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/20 rounded-full p-0.5">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  </div>
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all shadow-md"
            >
              Request a Quote <ChevronRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
