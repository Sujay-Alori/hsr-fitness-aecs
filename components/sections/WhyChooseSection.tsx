"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Dumbbell,
  Apple,
  Flame,
} from "lucide-react";

/* ── Card data ── */
const cards = [
  {
    icon: Users,
    number: "01",
    title: "Certified Trainers",
    desc: "Our team of NSCA & ACE-certified coaches bring decades of combined experience. Every trainer is handpicked, background-checked, and committed to delivering personalized programs that generate real, lasting results.",
    highlight: "30+ Expert Coaches",
    gradient: "from-red-950/60 via-red-900/20 to-transparent",
    iconBg: "bg-red-600/20 border-red-600/30",
    iconColor: "text-red-400",
    glowColor: "rgba(220,38,38,0.18)",
    accentLine: "from-red-600 to-red-400",
  },
  {
    icon: Dumbbell,
    number: "02",
    title: "Modern Equipment",
    desc: "Equipped with 200+ premium machines including Technogym, Life Fitness and Eleiko Olympic platforms. Our facility is updated yearly so you always train with the most advanced, safest equipment available.",
    highlight: "200+ Machines",
    gradient: "from-orange-950/40 via-orange-900/10 to-transparent",
    iconBg: "bg-orange-600/20 border-orange-600/30",
    iconColor: "text-orange-400",
    glowColor: "rgba(234,88,12,0.15)",
    accentLine: "from-orange-600 to-orange-400",
  },
  {
    icon: Apple,
    number: "03",
    title: "Nutrition Guidance",
    desc: "Transformations happen in the kitchen too. Our certified nutritionists craft science-backed meal plans aligned with your training regimen — whether your goal is muscle gain, fat loss, or athletic performance.",
    highlight: "Custom Meal Plans",
    gradient: "from-emerald-950/40 via-emerald-900/10 to-transparent",
    iconBg: "bg-emerald-600/20 border-emerald-600/30",
    iconColor: "text-emerald-400",
    glowColor: "rgba(16,185,129,0.12)",
    accentLine: "from-emerald-600 to-emerald-400",
  },
  {
    icon: Flame,
    number: "04",
    title: "Body Transformation",
    desc: "From the first consultation to your 90-day check-in, we track every metric — body fat %, strength benchmarks, endurance gains. Our structured transformation programs have helped 900+ members hit goals they once thought impossible.",
    highlight: "900+ Success Stories",
    gradient: "from-rose-950/50 via-red-900/15 to-transparent",
    iconBg: "bg-rose-600/20 border-rose-600/30",
    iconColor: "text-rose-400",
    glowColor: "rgba(244,63,94,0.15)",
    accentLine: "from-rose-600 to-rose-400",
  },
];

/* ── Variants ── */
const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

const sectionFade = {
  hidden: { y: 30, opacity: 0 },
  visible: (d = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE, delay: d },
  }),
};

const cardVariant = {
  hidden: { y: 50, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE, delay: 0.2 + i * 0.13 },
  }),
};

export default function WhyChooseSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="why-choose"
      ref={ref}
      className="relative w-full overflow-hidden bg-black section-padding"
    >
      {/* ── Background decoration ── */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/25 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      {/* Ambient glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-red-950/20 blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-red-900/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ════ HEADER ════ */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Eyebrow */}
          <motion.div
            custom={0}
            variants={sectionFade}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-red-400 border border-red-600/30 bg-red-600/10 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Why Choose Us
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            custom={0.1}
            variants={sectionFade}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[clamp(2rem,4.5vw,3.25rem)] font-black leading-[1.05] tracking-tight text-white mb-4"
          >
            The HSR Fitness{" "}
            <span
              className="text-transparent"
              style={{
                background: "linear-gradient(135deg,#DC2626 0%,#EF4444 55%,#F87171 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Difference
            </span>
          </motion.h2>

          {/* Animated accent line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="mx-auto w-20 h-[3px] rounded-full bg-gradient-to-r from-red-700 via-red-500 to-red-700 mb-5 origin-center"
          />

          <motion.p
            custom={0.35}
            variants={sectionFade}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-2xl mx-auto text-sm sm:text-base text-white/50 leading-relaxed"
          >
            Every detail of HSR Fitness World is engineered to give you an unfair advantage
            on your fitness journey — from day one to your best-ever result.
          </motion.p>
        </div>

        {/* ════ CARDS GRID ════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {cards.map(
            ({ icon: Icon, number, title, desc, highlight, gradient, iconBg, iconColor, glowColor, accentLine }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{
                  y: -10,
                  boxShadow: `0 24px 60px ${glowColor}, 0 0 0 1px rgba(255,255,255,0.07)`,
                  transition: { type: "spring", stiffness: 280, damping: 22 },
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0c0c0c] cursor-default flex flex-col"
              >
                {/* Card inner gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Top accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.13 }}
                  className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl bg-gradient-to-r ${accentLine} origin-left opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Hover glow orb (top-right corner) */}
                <div
                  className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: glowColor }}
                />

                {/* Card content */}
                <div className="relative z-10 flex flex-col h-full p-7">

                  {/* Number + Icon row */}
                  <div className="flex items-start justify-between mb-7">
                    {/* Card number */}
                    <span className="text-[3.5rem] font-black leading-none text-white/[0.05] group-hover:text-white/[0.08] transition-colors duration-300 select-none">
                      {number}
                    </span>

                    {/* Large icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`
                        flex items-center justify-center
                        w-16 h-16 rounded-2xl
                        border ${iconBg}
                        shadow-[0_4px_20px_rgba(0,0,0,0.4)]
                        group-hover:scale-110
                        transition-transform duration-300
                      `}
                    >
                      <Icon
                        className={`w-8 h-8 ${iconColor} group-hover:scale-110 transition-transform duration-300`}
                        strokeWidth={1.5}
                      />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-50 transition-colors duration-300">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/45 leading-relaxed group-hover:text-white/65 transition-colors duration-300 flex-1 mb-6">
                    {desc}
                  </p>

                  {/* Highlight pill */}
                  <div className="mt-auto">
                    <span
                      className={`
                        inline-flex items-center gap-2
                        px-3.5 py-1.5 rounded-full
                        text-[11px] font-semibold tracking-wider uppercase
                        border ${iconBg} ${iconColor}
                        bg-black/30 backdrop-blur-sm
                        group-hover:bg-black/50
                        transition-all duration-300
                      `}
                    >
                      <span className="w-1 h-1 rounded-full bg-current opacity-70" />
                      {highlight}
                    </span>
                  </div>
                </div>

                {/* Bottom shimmer on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          )}
        </div>

        {/* ════ BOTTOM STAT BAR ════ */}
        <motion.div
          custom={0.8}
          variants={sectionFade}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="
            mt-16 grid grid-cols-2 md:grid-cols-4 gap-0
            rounded-2xl overflow-hidden
            border border-white/[0.07]
            bg-white/[0.02] backdrop-blur-xl
          "
        >
          {[
            { value: "10+", label: "Years in Business" },
            { value: "2,500+", label: "Members Trained" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "0", label: "Compromise on Quality" },
          ].map(({ value, label }, i, arr) => (
            <div
              key={label}
              className={`
                flex flex-col items-center justify-center py-6 px-4
                ${i < arr.length - 1 ? "border-b md:border-b-0 md:border-r border-white/[0.06]" : ""}
                ${i === 1 ? "border-b md:border-b-0" : ""}
                hover:bg-red-600/5 transition-colors duration-300 cursor-default
              `}
            >
              <span className="text-2xl sm:text-3xl font-black text-red-500 leading-none mb-1">
                {value}
              </span>
              <span className="text-[11px] text-white/40 text-center">{label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
