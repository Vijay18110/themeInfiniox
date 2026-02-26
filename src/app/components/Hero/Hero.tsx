// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// // Import your slider images
// import img1 from "../../assets/hero-banner.jpg";
// import img2 from "../../assets/product-epoxy-furniture.jpg";
// import img3 from "../../assets/product-smart-bench.jpg";

// const sliderImages = [img1, img2, img3];

// export default function Hero() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-screen w-full flex items-center overflow-hidden bg-black text-white">
//       {/* 1. Full Screen Image Slider Layer */}
//       <div className="absolute inset-0 z-0">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, scale: 1.1 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             className="absolute inset-0 h-full w-full"
//           >
//             <Image
//               src={sliderImages[currentIndex]}
//               alt="Craftsmanship Background"
//               fill
//               className="object-cover"
//               priority
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* 2. Overlays (Texture and Gradients) */}
//       {/* Dark tint to make text readable */}
//       <div className="absolute inset-0 bg-black/50 z-[1]" />

//       {/* Gradient for depth */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-[2]" />

//       {/* Optional: Video Overlay (Low opacity for subtle motion texture) */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-[3]"
//       >
//         <source src={"../../assets/01-01-2026.mp4"} type="video/mp4" />
//       </video>

//       {/* 3. Content Layer */}
//       <div className="relative container mx-auto px-6 z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           className="max-w-3xl"
//         >
//           <span className="inline-block bg-primary/20 border border-primary/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-md text-primary">
//             Handcrafted Excellence
//           </span>

//           <h1 className="text-5xl md:text-8xl font-bold leading-tight font-display mb-6 drop-shadow-lg">
//             Where Art Meets <br />
//             <span className="text-primary">Craftsmanship</span>
//           </h1>

//           <p className="text-white/80 text-lg md:text-xl max-w-xl leading-relaxed mb-10 drop-shadow-md">
//             Premium furniture, epoxy solutions, and innovative smart products
//             designed to transform your everyday spaces into works of art.
//           </p>

//           <div className="flex flex-wrap gap-5">
//             <Link
//               href="/products"
//               className="inline-flex items-center gap-2 bg-primary px-10 py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-xl shadow-primary/40 active:scale-95"
//             >
//               Explore Products <ChevronRight className="h-5 w-5" />
//             </Link>
//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-md px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all active:scale-95"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </motion.div>
//       </div>

//       {/* 4. Bottom Navigation & Indicators */}
//       <div className="absolute bottom-12 left-6 right-6 flex items-end justify-between z-10">
//         {/* Slider Indicators */}
//         <div className="flex gap-3">
//           {sliderImages.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentIndex(i)}
//               className="group py-4"
//             >
//               <div
//                 className={`h-1 transition-all duration-500 rounded-full ${
//                   currentIndex === i
//                     ? "w-12 bg-primary"
//                     : "w-6 bg-white/30 group-hover:bg-white/60"
//                 }`}
//               />
//             </button>
//           ))}
//         </div>

//         {/* Scroll Mouse Icon */}
//         <motion.div
//           animate={{ y: [0, 8, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="hidden md:flex flex-col items-center gap-2 opacity-60"
//         >
//           <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
//             <div className="w-1 h-2 bg-white rounded-full" />
//           </div>
//           <span className="text-[9px] uppercase tracking-[0.3em] font-bold">
//             Scroll
//           </span>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Assets

import img2 from "../../assets/product-epoxy-furniture.jpg";
import img3 from "../../assets/product-smart-bench.jpg";

// Mixed media array
const sliderItems = [
  { type: "image", src: img3 },
  { type: "image", src: img2 },
  { type: "video", src: "/video.mp4" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderItems.length);
    }, 8000); // 8 seconds gives users time to see the video
    return () => clearInterval(timer);
  }, []);

  const currentItem = sliderItems[currentIndex];

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-black text-white">
      {/* 1. Dynamic Background Layer (Video or Image) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 h-full w-full"
          >
            {currentItem.type === "video" ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/video.mp4" type="video/mp4" />
              </video>
            ) : (
              <Image
                src={currentItem.src}
                alt="Craftsmanship Background"
                fill
                className="object-cover"
                priority
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-black/40 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-[2]" />
      <div className="relative container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl"
        >
          <span className="inline-block bg-primary/20 border border-primary/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-md text-primary">
            Hell0
          </span>

          <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] font-display mb-6 drop-shadow-2xl">
            We're Infiniox <br />
            <span className="text-primary">Innovation Sustainable Design</span>
          </h1>

          <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 drop-shadow-md">
            Manufacturing excellence where sustainability meets smart technology
            and timeless craftsmanship
          </p>
          <div className="flex flex-wrap gap-5">
            <Link
              href="/product"
              className="group inline-flex items-center gap-2 bg-primary px-10 py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-xl shadow-primary/40 active:scale-95"
            >
              Explore Products
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-md px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 4. Navigation Indicators */}
      <div className="absolute bottom-12 left-6 right-6 flex items-end justify-between z-10">
        <div className="flex gap-4">
          {sliderItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="group py-4 flex flex-col items-center gap-2"
            >
              <span
                className={`text-[10px] font-bold transition-opacity ${currentIndex === i ? "opacity-100" : "opacity-0"}`}
              >
                0{i + 1}
              </span>
              <div
                className={`h-1 transition-all duration-700 rounded-full ${
                  currentIndex === i
                    ? "w-16 bg-primary"
                    : "w-8 bg-white/20 group-hover:bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Animated Mouse Icon */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="hidden md:flex flex-col items-center gap-2 opacity-60"
        >
          <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center p-1">
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1.5 bg-white rounded-full"
            />
          </div>
          <span className="text-[8px] uppercase tracking-[0.4em] font-bold">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
