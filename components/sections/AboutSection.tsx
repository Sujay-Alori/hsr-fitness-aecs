"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  Zap,
  Trophy,
  HeartPulse,
  ArrowRight,
  Star,
} from "lucide-react";
import { EASE_OUT } from "@/lib/motion";

/* ── Feature bullets ── */
const features = [
  {
    icon: ShieldCheck,
    title: "Certified Expert Trainers",
    desc: "Our NSCA & ACE-certified coaches build plans tailored to your goals, experience, and lifestyle.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Equipment",
    desc: "Over 200 premium machines and free-weight stations — from Olympic platforms to functional rigs.",
  },
  {
    icon: Trophy,
    title: "Proven Transformation Results",
    desc: "900+ member success stories with measurable strength, fat-loss, and endurance improvements.",
  },
  {
    icon: HeartPulse,
    title: "Holistic Wellness Approach",
    desc: "We integrate nutrition coaching, recovery sessions, and mental wellness into every program.",
  },
];

/* ── Stat chips ── */
const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "2,500+", label: "Active Members" },
  { value: "30+", label: "Expert Trainers" },
  { value: "98%", label: "Satisfaction Rate" },
];

/* ── Shared fade-up variant ── */
const fadeUp = (delay = 0) => ({
  hidden: { y: 36, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE_OUT, delay },
  },
});

const fadeLeft = (delay = 0) => ({
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: EASE_OUT, delay },
  },
});

const fadeRight = (delay = 0) => ({
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: EASE_OUT, delay },
  },
});

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full overflow-hidden bg-[#050505] section-padding"
    >
      {/* ── Background accents ── */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent" />
      <div className="absolute -left-64 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-900/8 blur-[130px] pointer-events-none" />
      <div className="absolute -right-64 top-1/3 w-[400px] h-[400px] rounded-full bg-red-950/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ════════════════════════════════════════
              LEFT — IMAGE BLOCK
          ════════════════════════════════════════ */}
          <motion.div
            variants={fadeLeft(0)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-red-600/30 via-transparent to-red-900/20 blur-sm" />

            {/* Image wrapper */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
              <Image
                src="/images/about-gym.png"
                alt="HSR Fitness World — Premium gym interior"
                fill
                quality={90}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

              {/* Floating experience badge */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                className="
                  absolute top-6 left-6
                  flex flex-col items-center justify-center
                  w-24 h-24 rounded-2xl
                  bg-black/70 backdrop-blur-xl
                  border border-red-600/40
                  shadow-[0_0_30px_rgba(220,38,38,0.25)]
                  text-center
                "
              >
                <span className="text-3xl font-black text-red-500 leading-none">10+</span>
                <span className="text-[10px] text-white/60 leading-tight mt-1 px-1">Years of Excellence</span>
              </motion.div>
            </div>

            {/* Stat chips row — visible below image on mobile, overlapping on desktop */}
            <div className="grid grid-cols-2 gap-3 mt-4 lg:hidden">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  variants={fadeUp(0.3 + i * 0.1)}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="
                    flex flex-col items-center p-3 rounded-xl
                    bg-white/[0.04] border border-white/[0.07]
                    backdrop-blur-sm text-center
                  "
                >
                  <span className="text-xl font-black text-red-500">{value}</span>
                  <span className="text-[10px] text-white/50 mt-0.5">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ════════════════════════════════════════
              RIGHT — CONTENT BLOCK
          ════════════════════════════════════════ */}
          <motion.div
            variants={fadeRight(0.1)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp(0.15)} initial="hidden" animate={isInView ? "visible" : "hidden"}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-red-400 border border-red-600/30 bg-red-600/10 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                About Us
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeUp(0.22)} initial="hidden" animate={isInView ? "visible" : "hidden"}>
              <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-black leading-[1.05] tracking-tight text-white mb-2">
                HSR{" "}
                <span
                  className="text-transparent"
                  style={{
                    background: "linear-gradient(135deg, #DC2626 0%, #EF4444 60%, #F87171 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Fitness World
                </span>
              </h2>
              {/* Underline accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="w-16 h-[3px] rounded-full bg-gradient-to-r from-red-600 to-red-400 mb-6 origin-left"
              />
            </motion.div>

            {/* Paragraph */}
            <motion.p
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-[15px] sm:text-base text-white/60 leading-relaxed mb-8"
            >
              Founded in AECS Layout, Bangalore, HSR Fitness World is more than a gym — it&apos;s a
              movement. We&apos;ve spent over a decade crafting an environment where every member,
              from first-timer to elite athlete, finds the tools, expertise, and community to
              achieve extraordinary results. Our philosophy is simple: world-class coaching,
              premium equipment, and an unwavering commitment to your transformation.
            </motion.p>

            {/* ── Feature bullets ── */}
            <div className="space-y-3 mb-8">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  variants={fadeUp(0.35 + i * 0.1)}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="
                    group flex items-start gap-4 p-4 rounded-2xl
                    bg-white/[0.03] hover:bg-white/[0.06]
                    border border-white/[0.06] hover:border-red-600/25
                    backdrop-blur-sm
                    transition-all duration-300 cursor-default
                    hover:shadow-[0_4px_20px_rgba(220,38,38,0.08)]
                  "
                >
                  {/* Icon */}
                  <div className="
                    flex-shrink-0 flex items-center justify-center
                    w-10 h-10 rounded-xl
                    bg-red-600/15 border border-red-600/25
                    group-hover:bg-red-600/25 group-hover:border-red-500/40
                    transition-all duration-300
                  ">
                    <Icon className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors duration-300" strokeWidth={1.75} />
                  </div>
                  {/* Text */}
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-red-100 transition-colors duration-200 mb-0.5">
                      {title}
                    </p>
                    <p className="text-xs text-white/45 leading-relaxed group-hover:text-white/60 transition-colors duration-200">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ── Glassmorphism stats card (desktop only) ── */}
            <motion.div
              variants={fadeUp(0.75)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="
                hidden lg:grid grid-cols-4 gap-0
                rounded-2xl overflow-hidden
                border border-white/[0.08]
                bg-white/[0.03] backdrop-blur-xl
                mb-8
                shadow-[0_8px_32px_rgba(0,0,0,0.4)]
              "
            >
              {stats.map(({ value, label }, i) => (
                <div
                  key={label}
                  className={`
                    flex flex-col items-center justify-center py-5
                    ${i < stats.length - 1 ? "border-r border-white/[0.07]" : ""}
                    hover:bg-red-600/8 transition-colors duration-300 cursor-default
                  `}
                >
                  <span className="text-2xl font-black text-red-500 leading-none">{value}</span>
                  <span className="text-[11px] text-white/45 mt-1 text-center px-2">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* ── CTA Button ── */}
            <motion.div
              variants={fadeUp(0.85)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(220,38,38,0.5)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleScroll("services")}
                className="
                  group relative overflow-hidden
                  inline-flex items-center gap-2
                  px-8 py-3.5 rounded-full
                  text-sm font-bold tracking-widest uppercase text-white
                  bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.3)]
                  transition-shadow duration-300
                "
              >
                {/* Shimmer */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                <span className="relative">Learn More</span>
                <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
