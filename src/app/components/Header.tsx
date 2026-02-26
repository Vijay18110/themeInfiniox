"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const productLinks = [
  { name: "AI Smart Bench", path: "/product/ai-smart-bench" },
  { name: "Wooden Toys", path: "/product/wooden-toys" },

  { name: "Furniture & Epoxy Furniture", path: "/product/epoxy-furniture" },
  { name: "Epoxy Flooring", path: "/product/epoxy-flooring" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products", children: productLinks },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || (path !== "/" && pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50 bg-foreground/95 backdrop-blur-md border-b /20">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-2xl font-bold text-primary-foreground tracking-tight"
        >
          <span className="text-primary">Infiniox</span>
          {/* <Image
            src="/image.png"
            alt="Infiniox Logo"
            width={40}
            height={40}
            className="ml-2"
          /> */}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.children ? (
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-primary-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </button>
              ) : (
                <Link
                  href={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-primary-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              )}

              {/* Dropdown */}
              {link.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-card rounded-lg shadow-xl border  p-2 min-w-[200px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        className="block px-4 py-2.5 text-sm rounded-md text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/login"
          className="hidden md:inline-flex px-5 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Sign In
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-foreground overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setProductsOpen(!productsOpen)}
                        className="flex items-center justify-between w-full px-3 py-2.5 text-primary-foreground/80 text-sm font-medium"
                      >
                        {link.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            productsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {productsOpen && (
                        <div className="pl-4 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              href={child.path}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 text-sm text-primary-foreground/60 hover:text-primary"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2.5 text-sm font-medium ${
                        isActive(link.path)
                          ? "text-primary"
                          : "text-primary-foreground/80"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
