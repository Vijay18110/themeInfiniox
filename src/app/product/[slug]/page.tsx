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
// import furniture from "../../assets/product-furniture.jpg";
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

import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Check, ArrowLeft, ZoomIn } from "lucide-react";

// Asset Imports
import smartBench from "../../assets/aiSmartBench.jpeg";
import woodenToys from "../../assets/toy1.jpeg";
import t2 from "../../assets/toy2.jpeg";
import t3 from "../../assets/toy3.jpeg";
import t4 from "../../assets/toy4.jpeg";
import t5 from "../../assets/toy5.jpeg";
import t6 from "../../assets/toy6.jpeg";
import furniture from "../../assets/product-furniture.jpg";
import epoxyFurniture from "../../assets/epoxyFurniture.jpeg";
import epoxyFlooring from "../../assets/flooring1.jpeg";

const productsData: Record<string, any> = {
  "ai-smart-bench": {
    name: "AI Smart Bench",
    image: smartBench,
    longDesc: "Our AI Smart Bench combines cutting-edge technology with durable outdoor furniture design. Equipped with solar panels, USB charging, environmental sensors, and AI-powered occupancy analytics.",
    features: ["Solar-powered charging", "AI occupancy analytics", "Weather sensors", "Wi-Fi hotspot", "All-weather build"],
  },
  "wooden-toys": {
    name: "Wooden Toys",
    image: woodenToys,
    longDesc: "Handcrafted from sustainably sourced hardwoods, finished with non-toxic paints. Each piece is designed to inspire creativity and learning.",
    features: ["100% Sustainable", "Non-toxic finishes", "Educational focus", "Safety tested", "Handcrafted"],
    otherImages: [t2, t3, t4, t5, t6],
  },
  "furniture": {
    name: "Custom Furniture",
    image: furniture,
    longDesc: "Timeless pieces crafted from premium hardwood using traditional joinery techniques.",
    features: ["Custom design", "Premium hardwood", "Traditional joinery", "Hand-applied finish"],
  },
  "epoxy-furniture": {
    name: "Epoxy Furniture",
    image: epoxyFurniture,
    longDesc: "Live-edge wood slabs paired with crystal-clear resin to create stunning river tables.",
    features: ["Live-edge slabs", "UV-resistant resin", "Custom colors", "One-of-a-kind"],
  },
  "epoxy-flooring": {
    name: "Epoxy Flooring",
    image: epoxyFlooring,
    longDesc: "Transform any space with metallic marble effects and commercial-grade durability.",
    features: ["Metallic finishes", "Chemical resistant", "Seamless install", "Easy maintenance"],
  },
};

export default function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = productsData[slug];

  // State to handle image swapping
  const [activeImage, setActiveImage] = useState(product?.image);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center px-4">
        <h1 className="text-3xl font-bold font-display">Product Not Found</h1>
        <Link href="/products" className="mt-4 text-primary hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section className="py-3 bg-background transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
        
          <span className="text-foreground font-semibold">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          
          {/* LEFT: Image Gallery Logic */}
          <div className="space-y-6">
            <motion.div 
              layoutId="main-img"
              className="relative aspect-square rounded-3xl overflow-hidden border border-border shadow-2xl bg-muted"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage?.src || 'default'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <Image
                    src={activeImage}
                    alt={product.name}
                    fill
                    priority
                    className="object-fit-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Thumbnails (Only if there are multiple images) */}
            {/* {product.otherImages && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {[product.image, ...product.otherImages].map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === img ? "border-primary scale-105 shadow-md" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )} */}
          </div>

          {/* RIGHT: Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-tighter w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Premium Collection
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground font-display mt-6 leading-tight">
              {product.name}
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mt-6">
              {product.longDesc}
            </p>

            <div className="my-10 h-px bg-gradient-to-r from-border via-border to-transparent" />

            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              Key Features 
              <span className="text-xs font-normal text-muted-foreground uppercase tracking-widest">(Technical Specs)</span>
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {product.features.map((feature: string) => (
                <li key={feature} className="flex items-center gap-3 group">
                  <div className="bg-primary/10 group-hover:bg-primary transition-colors duration-300 rounded-full p-1">
                    <Check className="h-4 w-4 text-primary group-hover:text-white" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="flex-1 text-center bg-primary text-primary-foreground px-8 py-5 rounded-2xl font-bold hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Request a Custom Quote <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM: Visual Showcase Gallery */}
        {product.otherImages && product.otherImages.length > 0 && (
          <div className="mt-5">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold font-display tracking-tight">Product Showcase</h2>
              </div>
              <div className="hidden md:block h-px flex-1 bg-border mx-10 mb-4" />
            </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {product.otherImages.map((img: any, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => {
        setActiveImage(img);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      /* Added aspect-square to force uniform size */
      className="relative aspect-square rounded-2xl overflow-hidden border border-border group cursor-pointer bg-muted shadow-sm"
    >
      <Image
        src={img}
        alt={`${product.name} showcase ${index + 1}`}
        fill /* Used fill with the aspect-ratio container */
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
        <ZoomIn className="text-white w-8 h-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300" />
        <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-100">View Product</span>
      </div>
    </motion.div>
  ))}
</div>
          </div>
        )}

      </div>
    </section>
  );
}