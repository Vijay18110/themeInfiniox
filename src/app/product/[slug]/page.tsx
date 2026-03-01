// "use client";

// import { use } from "react"; // New in React 19/Next 16 for unwrapping params
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ChevronRight, Check } from "lucide-react";

// // Asset Imports (StaticImageData)

// import smartBench from "../../assets/aiSmartBench.jpeg";
// import woodenToys from "../../assets/toy1.jpeg";
// import t2 from "../../assets/toy2.jpeg";
// import t3 from "../../assets/toy3.jpeg";
// import t4 from "../../assets/toy4.jpeg";
// import t5 from "../../assets/toy5.jpeg";
// import t6 from "../../assets/toy6.jpeg";
// import furniture from "../../assets/furniture.jpeg";
// import epoxyFurniture from "../../assets/epoxyFurniture.jpeg";
// import epoxyFlooring from "../../assets/flooring1.jpeg";
// const productsData: Record<string, any> = {
//   "ai-smart-bench": {
//     name: "AI Smart Bench",
//     image: smartBench,
//     longDesc:
//       "Our AI Smart Bench combines cutting-edge technology with durable outdoor furniture design. Equipped with solar panels, USB charging, environmental sensors, and AI-powered occupancy analytics.",
//     features: [
//       "Solar-powered charging stations",
//       "AI occupancy analytics",
//       "Weather & air quality sensors",
//       "Wi-Fi hotspot capability",
//       "Durable all-weather construction",
//       "Custom branding options",
//     ],
//   },
//   "wooden-toys": {
//     name: "Wooden Toys",
//     image: woodenToys,
//     longDesc:
//       "Our wooden toys are handcrafted from sustainably sourced hardwoods, finished with non-toxic paints and natural oils. Each piece is designed to inspire creativity and learning.",
//     features: [
//       "100% sustainably sourced wood",
//       "Non-toxic finishes",
//       "Educational design focus",
//       "Age-appropriate safety standards",
//       "Handcrafted with care",
//       "Gift-ready packaging",
//     ],
//     otherImages: [t2, t3, t4, t5, t6], // Additional images for this product
//   },
//   furniture: {
//     name: "Custom Furniture",
//     image: furniture,
//     longDesc:
//       "Our custom furniture collection showcases the beauty of natural wood, crafted into timeless pieces that complement any interior. From dining tables to bookshelves, each item is made using traditional joinery.",
//     features: [
//       "Custom dimensions & design",
//       "Premium hardwood selection",
//       "Traditional joinery techniques",
//       "Hand-applied finishes",
//       "Lifetime craftsmanship warranty",
//       "White-glove delivery",
//     ],
//   },
//   "epoxy-furniture": {
//     name: "Epoxy Furniture",
//     image: epoxyFurniture,
//     longDesc:
//       "Our epoxy furniture pieces are works of art. Live-edge wood slabs are paired with crystal-clear or pigmented epoxy resin to create stunning river tables and countertops.",
//     features: [
//       "Live-edge wood slabs",
//       "Crystal-clear epoxy resin",
//       "Custom color options",
//       "UV-resistant finish",
//       "Each piece is one-of-a-kind",
//       "Available in various sizes",
//     ],
//   },
//   "epoxy-flooring": {
//     name: "Epoxy Flooring",
//     image: epoxyFlooring,
//     longDesc:
//       "Transform any space with our premium epoxy flooring systems. From metallic marble effects to custom artistic designs, our flooring solutions are durable and visual stunning.",
//     features: [
//       "Metallic & marble finishes",
//       "Commercial-grade durability",
//       "Seamless installation",
//       "Chemical & stain resistant",
//       "Easy maintenance",
//       "Custom designs available",
//     ],
//   },
// };

// export default function ProductDetail({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   // In Next.js 16, dynamic params are a Promise and must be unwrapped
//   const { slug } = use(params);
//   const product = productsData[slug];

//   if (!product) {
//     return (
//       <div className="section-padding text-center min-h-[60vh] flex flex-col justify-center items-center">
//         <h1 className="text-3xl font-bold text-foreground font-display">
//           Product Not Found
//         </h1>
//         <Link
//           href="/products"
//           className="mt-4 text-primary font-semibold hover:underline"
//         >
//           ← Back to Products
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <section className="section-padding bg-background">
//       <div className="container mx-auto">
//         {/* Breadcrumbs */}
//         <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
//           <Link href="/" className="hover:text-primary transition-colors">
//             Home
//           </Link>
        
//           <ChevronRight className="h-3.5 w-3.5" />
//           <span className="text-foreground font-medium">{product.name}</span>
//         </nav>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//           {/* Image Section */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="relative rounded-2xl overflow-hidden border border-border aspect-square shadow-lg"
//           >
//             <Image
//               src={product.image}
//               alt={product.name}
//               fill
//               priority
//               className="object-cover"
//               sizes="(max-width: 768px) 100vw, 50vw"
//             />
//           </motion.div>


//           {/* Content Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <span className="text-primary font-bold text-sm uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
//               Premium Collection
//             </span>
//             <h1 className="text-4xl md:text-5xl font-bold text-foreground font-display mt-6 mb-6">
//               {product.name}
//             </h1>
//             <p className="text-muted-foreground text-lg leading-relaxed mb-10">
//               {product.longDesc}
//             </p>

//             <h3 className="font-display text-xl font-semibold text-foreground mb-6">
//               Key Features
//             </h3>
//             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
//               {product.features.map((f: string) => (
//                 <li key={f} className="flex items-start gap-3">
//                   <div className="mt-1 bg-primary/20 rounded-full p-0.5">
//                     <Check className="h-4 w-4 text-primary flex-shrink-0" />
//                   </div>
//                   <span className="text-muted-foreground">{f}</span>
//                 </li>
//               ))}
//             </ul>

//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all shadow-md"
//             >
//               Request a Quote <ChevronRight className="h-5 w-5" />
//             </Link>
//           </motion.div>
//         </div>
//         {product.otherImages && product.otherImages.length > 0 && (
//     <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-4">
//       {product.otherImages.map((img: any, index: number) => (
//         <div
//           key={index}
//           className="relative aspect-square rounded-xl overflow-hidden border border-border cursor-pointer hover:scale-105 transition-transform"
//         >
//           <Image
//             src={img}
//             alt={`${product.name} ${index + 1}`}
//             fill
//             className="object-cover"
//             sizes="(max-width: 768px) 30vw, 15vw"
//           />
//         </div>
//       ))}
//     </div>
//   )}
//       </div>
//     </section>
//   );
// }



"use client";

import { use, useState, useEffect } from "react"; 
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";

// Asset Imports
import smartBench from "../../assets/aiSmartBench.jpeg";
import woodenToys from "../../assets/toy1.jpeg";
import t2 from "../../assets/toy2.jpeg";
import t3 from "../../assets/toy3.jpeg";
import t4 from "../../assets/toy4.jpeg";
import t5 from "../../assets/toy5.jpeg";
import t6 from "../../assets/toy6.jpeg";
import furniture from "../../assets/furniture.jpeg";
import epoxyFurniture from "../../assets/epoxyFurniture.jpeg";
import epoxyFlooring from "../../assets/flooring1.jpeg";

const productsData: Record<string, any> = {
  "ai-smart-bench": {
    name: "AI Smart Bench",
    image: smartBench,
    longDesc: "Our AI Smart Bench combines cutting-edge technology with durable outdoor furniture design. Equipped with solar panels, USB charging, environmental sensors, and AI-powered occupancy analytics.",
    features: ["Solar-powered charging stations", "AI occupancy analytics", "Weather & air quality sensors", "Wi-Fi hotspot capability", "Durable all-weather construction", "Custom branding options"],
  },
  "wooden-toys": {
    name: "Wooden Toys",
    image: woodenToys,
    longDesc: "Our wooden toys are handcrafted from sustainably sourced hardwoods, finished with non-toxic paints and natural oils. Each piece is designed to inspire creativity and learning.",
    features: ["100% sustainably sourced wood", "Non-toxic finishes", "Educational design focus", "Age-appropriate safety standards", "Handcrafted with care", "Gift-ready packaging"],
    otherImages: [woodenToys, t2, t3, t4, t5, t6], // Included original so it's clickable too
  },
  furniture: {
    name: "Custom Furniture",
    image: furniture,
    longDesc: "Our custom furniture collection showcases the beauty of natural wood, crafted into timeless pieces that complement any interior.",
    features: ["Custom dimensions & design", "Premium hardwood selection", "Traditional joinery techniques", "Hand-applied finishes", "Lifetime craftsmanship warranty", "White-glove delivery"],
  },
  "epoxy-furniture": {
    name: "Epoxy Furniture",
    image: epoxyFurniture,
    longDesc: "Our epoxy furniture pieces are works of art. Live-edge wood slabs are paired with crystal-clear or pigmented epoxy resin.",
    features: ["Live-edge wood slabs", "Crystal-clear epoxy resin", "Custom color options", "UV-resistant finish", "Each piece is one-of-a-kind", "Available in various sizes"],
  },
  "epoxy-flooring": {
    name: "Epoxy Flooring",
    image: epoxyFlooring,
    longDesc: "Transform any space with our premium epoxy flooring systems. From metallic marble effects to custom artistic designs.",
    features: ["Metallic & marble finishes", "Commercial-grade durability", "Seamless installation", "Chemical & stain resistant", "Easy maintenance", "Custom designs available"],
  },
};

export default function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = productsData[slug];

  // State to handle the currently displayed image
  const [activeImage, setActiveImage] = useState(product?.image);

  // Update active image if the route/product changes
  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [slug, product]);

  if (!product) {
    return (
      <div className="section-padding text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-foreground font-display">Product Not Found</h1>
        <Link href="/products" className="mt-4 text-primary font-semibold hover:underline">
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
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Section */}
          <div className="space-y-6">
            <motion.div
              key={activeImage?.src} // Key triggers animation on image change
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative rounded-2xl overflow-hidden border border-border aspect-square shadow-lg bg-muted"
            >
              <Image
                src={activeImage}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Thumbnails Grid */}
            {product.otherImages && product.otherImages.length > 0 && (
              <div className="grid grid-cols-5 gap-4">
                {product.otherImages.map((img: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === img ? "border-primary scale-105" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="10vw"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

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