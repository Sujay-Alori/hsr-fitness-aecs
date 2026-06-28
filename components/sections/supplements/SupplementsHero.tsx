"use client";

import { motion } from "framer-motion";
import { Pill, ShieldCheck, ChevronRight } from "lucide-react";
import { EASE_OUT } from "@/lib/motion";

export default function SupplementsHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#020202] overflow-hidden">
      {/* ── Ambient glow ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/25 text-red-400 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
            <Pill size={14} />
            HSR Nutrition
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-black text-white leading-[1.1] tracking-tight mb-6 max-w-4xl">
            Premium Fitness{" "}
            <span className="bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 bg-clip-text text-transparent">
              Supplements
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed mb-8">
            We provide 100% genuine fitness supplements from trusted brands to support your fitness journey. Expert guidance included.
          </p>

          {/* Trust Badge */}
          <div className="flex items-center gap-2 text-sm font-medium text-white/40 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 backdrop-blur-sm">
            <ShieldCheck size={16} className="text-red-500" />
            100% Authentic Products Guaranteed
          </div>
        </motion.div>
      </div>
    </section>
  );
}
