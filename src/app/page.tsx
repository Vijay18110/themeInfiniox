"use client";

import { motion } from "framer-motion";
import {
  Armchair,
  Hammer,
  Cpu,
  Droplets,
  Shield,
  Clock,
  Award,
  Users,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import smartBench from "./assets/aiSmartBench.jpeg";
import woodenToys from "./assets/woodenToys.jpeg";
import furniture from "./assets/furniture.jpeg";
import epoxyFurniture from "./assets/epoxyFurniture.jpeg";
import epoxyFlooring from "./assets/epoxyFlooring.jpeg";
import SectionHeading from "./components/SectionHeading";
import Hero from "./components/Hero/Hero";
import TimelineSection from './components/TimelineSection'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'
const services = [
  {
    icon: Armchair,
    title: "Custom Furniture",
    desc: "Bespoke handcrafted furniture tailored to your space and style.",
  },
  {
    icon: Droplets,
    title: "Epoxy Solutions",
    desc: "Stunning epoxy river tables, countertops, and flooring installations.",
  },
  {
    icon: Cpu,
    title: "Smart Benches",
    desc: "AI-powered smart benches with integrated technology for public spaces.",
  },
  {
    icon: Hammer,
    title: "Wooden Toys",
    desc: "Safe, durable, and beautifully crafted educational wooden toys.",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Premium Quality",
    desc: "We use only the finest materials and time-tested craftsmanship techniques.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Every project is completed within the promised timeline.",
  },
  {
    icon: Award,
    title: "Award Winning",
    desc: "Recognized for excellence in design and innovation.",
  },
  {
    icon: Users,
    title: "500+ Happy Clients",
    desc: "A growing community of satisfied customers.",
  },
];

const offeredProducts = [
  {
    name: "AI Smart Bench",
    image: smartBench,
    path: "/product/ai-smart-bench",
  },
  { name: "Wooden Toys", image: furniture, path: "/product/wooden-toys" },
  { name: "Furniture", image:  woodenToys, path: "/product/furniture" },
  {
    name: "Epoxy Furniture",
    image: epoxyFurniture,
    path: "/product/epoxy-furniture",
  },
  {
    name: "Epoxy Flooring",
    image: epoxyFlooring,
    path: "/product/epoxy-flooring",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Page() {
  return (
    <>
      {/* Hero Section */}
     
      <Hero />
      {/* Our Services */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            // subtitle="What We Do"
            title="Our Core Services"
            description="From custom furniture to cutting-edge smart technology, we deliver excellence across every product category."
          />
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl p-7 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offeredProducts.map((product, i) => (
              <motion.div
                key={product.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  href={product.path}
                  className="group block rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-2 bg-card flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {product.name}
                    </h3>
                    <ChevronRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
   {/* <section className="section-padding bg-foreground">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-display">
              Ready to Transform Your Space?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
              Get in touch with us today for a free consultation and custom
              quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg"
            >
              Contact Us Today <ChevronRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section> */}

      <TimelineSection />
      <FeaturesSection  />
      {/* Why Choose Us */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Our Promise"
            title="Why Choose Us"
            description="We combine traditional craftsmanship with modern innovation to deliver products that stand the test of time."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offered Products */}
      {/* <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Our Collection"
            title="Featured Products"
            description="Explore our range of premium products crafted with passion and precision."
          />
        
        </div>
      </section> */}

      {/* CTA */}
   
      {/* Services */}
      {/* <section className="py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-xl p-7 border hover:shadow-lg transition"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Featured Products */}
    </>
  );
}
