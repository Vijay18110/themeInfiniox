import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground/70">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-display text-2xl font-bold text-primary-foreground"
            >
              <span className="text-primary">Infiniox</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Infiniox exceptional furniture, epoxy solutions, and innovative
              smart products since 2015.
            </p>
          </div>

          <div>
            <h4 className="font-display text-primary-foreground font-semibold mb-4">
              Quick Links
            </h4>
            <div className="space-y-2.5">
              {["Home", "About", "Product", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block text-sm hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-primary-foreground font-semibold mb-4">
              Products
            </h4>
            <div className="space-y-2.5">
              {[
                { name: "AI Smart Bench", path: "/product/ai-smart-bench" },
                { name: "Wooden Toys", path: "/product/wooden-toys" },
                { name: "Epoxy Furniture", path: "/product/epoxy-furniture" },
                { name: "Epoxy Flooring", path: "/product/epoxy-flooring" },
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="block text-sm hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-primary-foreground font-semibold mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" /> info@infiniox.com
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" /> 91 – 7715857501 /
                9324010854
              </div>
              {/* <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" /> 123 Craft Lane,
                Portland, OR
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-xs">
          © {2025} Infiniox. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
