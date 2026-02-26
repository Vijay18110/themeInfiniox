"use client";

import { motion } from "framer-motion";

export default function AuthLayout({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 bg-black">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-90">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md bg-card/10 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold font-display text-white">
            {title}
          </h1>
          <p className="text-white/60 mt-2 text-sm">{subtitle}</p>
        </div>
        {children}
      </motion.div>
    </div>
  );
}
