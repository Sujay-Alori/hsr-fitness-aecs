"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Dumbbell, Users, Clock, Flame } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { EASE_OUT, EASE_IN_OUT } from "@/lib/motion";

/* ── Feature cards data ── */
const features = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    desc: "State-of-the-art machines",
    color: "from-red-600/20 to-red-900/10",
    border: "border-red-600/25",
    glow: "shadow-[0_0_20px_rgba(220,38,38,0.12)]",
  },
  {
    icon: Users,
    title: "Certified Trainers",
    desc: "Expert-led programs",
    color: "from-orange-600/15 to-red-900/10",
    border: "border-orange-500/20",
    glow: "shadow-[0_0_20px_rgba(234,88,12,0.10)]",
  },
  {
    icon: Clock,
    title: "Open Daily",
    desc: "5 AM – 10 PM",
    color: "from-white/5 to-white/[0.02]",
    border: "border-white/10",
    glow: "shadow-[0_0_20px_rgba(255,255,255,0.04)]",
  },
  {
    icon: Flame,
    title: "Body Transformation",
    desc: "Proven results fast",
    color: "from-red-600/20 to-red-900/10",
    border: "border-red-600/25",
    glow: "shadow-[0_0_20px_rgba(220,38,38,0.12)]",
  },
];

/* ── Animation variants ── */
const fadeUp = (delay = 0) => ({
  initial: { y: 40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: EASE_OUT, delay },
  },
});

const cardVariants = {
  initial: { y: 30, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_OUT, delay: 0.9 + i * 0.1 },
  }),
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { openModal } = useModal();

  /* Parallax on background */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ═══ BACKGROUND IMAGE + PARALLAX ═══ */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[115%] -top-[7.5%]"
      >
        <Image
          src="/images/hero-bg.png"
          alt="HSR Fitness World premium gym interior"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* ═══ LAYERED OVERLAYS ═══ */}
      {/* Base dark */}
      <div className="absolute inset-0 bg-black/70" />
      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/90" />
      {/* Red left bloom */}
      <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] rounded-full bg-red-700/15 blur-[120px] pointer-events-none" />
      {/* Red right bloom */}
      <div className="absolute -right-40 bottom-1/3 w-[400px] h-[400px] rounded-full bg-red-900/15 blur-[100px] pointer-events-none" />
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* ═══ MAIN CONTENT ═══ */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8 flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-red-400 border border-red-600/30 bg-red-600/10 backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            AECS Layout&apos;s #1 Premium Gym
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1 {...fadeUp(0.25)} className="mb-6">
          <span className="block text-[clamp(3rem,10vw,7rem)] font-black leading-[0.92] tracking-[-0.02em] text-white uppercase">
            Build Your
          </span>
          <span className="block text-[clamp(3rem,10vw,7rem)] font-black leading-[0.92] tracking-[-0.02em] uppercase">
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: "2px transparent",
                background: "linear-gradient(135deg, #DC2626 0%, #EF4444 50%, #F87171 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Dream Body
            </span>
          </span>
        </motion.h1>

        {/* Red accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="w-24 h-[3px] rounded-full bg-gradient-to-r from-red-700 via-red-500 to-red-700 mb-8 origin-left"
        />

        {/* Description */}
        <motion.p
          {...fadeUp(0.45)}
          className="max-w-2xl text-[clamp(0.95rem,2.2vw,1.15rem)] text-white/65 leading-relaxed mb-10"
        >
          Transform your body and mind with certified trainers, modern equipment,
          personalized workout plans and motivating group fitness sessions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16 sm:mb-20"
        >
          {/* Primary — Join Now */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(220,38,38,0.65)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleScroll("membership")}
            className="
              group relative overflow-hidden
              flex items-center gap-2
              px-8 py-4 rounded-full
              text-sm font-bold tracking-widest uppercase text-white
              bg-red-600 shadow-[0_0_24px_rgba(220,38,38,0.4)]
              transition-shadow duration-300
            "
          >
            {/* Shimmer sweep */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            <span className="relative">Join Now</span>
            <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>

          {/* Secondary — Book Free Trial */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={openModal}
            className="
              group relative overflow-hidden
              flex items-center gap-2
              px-8 py-4 rounded-full
              text-sm font-bold tracking-widest uppercase text-white
              border border-white/25 hover:border-red-600/50
              bg-white/5 backdrop-blur-md hover:bg-white/10
              transition-all duration-300
            "
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
            <span className="relative">Book Free Trial</span>
            <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>

        {/* ═══ FEATURE CARDS ═══ */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {features.map(({ icon: Icon, title, desc, color, border, glow }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`
                group relative overflow-hidden
                flex flex-col items-center sm:items-start gap-2
                p-4 sm:p-5 rounded-2xl
                bg-gradient-to-br ${color}
                border ${border} ${glow}
                backdrop-blur-xl cursor-default
                transition-all duration-300
                hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(220,38,38,0.18)]
              `}
            >
              {/* Subtle corner glow on hover */}
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-red-600/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Icon */}
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/20 border border-red-600/30 group-hover:bg-red-600/30 transition-colors duration-300">
                <Icon className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors duration-300" strokeWidth={2} />
              </div>

              {/* Text */}
              <div>
                <p className="text-sm sm:text-base font-bold text-white leading-tight">{title}</p>
                <p className="text-xs text-white/50 mt-0.5 leading-snug">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ═══ SCROLL INDICATOR ═══ */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={() => handleScroll("about")}
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-white/35 group-hover:text-white/60 transition-colors">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center group-hover:border-red-600/50 transition-colors duration-300"
        >
          <ChevronDown className="w-4 h-4 text-white/40 group-hover:text-red-400 transition-colors duration-300" />
        </motion.div>
      </motion.button>
    </section>
  );
}
