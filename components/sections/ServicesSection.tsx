"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Zap,
  Music2,
  ShieldAlert,
  Dumbbell,
  Music,
  Footprints,
  UserCheck,
  Leaf,
  Trophy,
  BarChart3,
  Apple,
  Bike,
  Flame,
  Scale,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

/* ── Services data ── */
const services = [
  {
    icon: Zap,
    title: "HIIT",
    desc: "High-Intensity Interval Training that torches fat, builds endurance, and boosts your metabolism long after the session ends.",
    tag: "Fat Burn",
    color: "red",
    gradient: "from-red-600/20 to-red-900/5",
    iconBg: "bg-red-600/15",
    iconColor: "text-red-400",
    tagStyle: "bg-red-500/15 text-red-400 border-red-500/30",
    barColor: "bg-gradient-to-r from-red-600 to-rose-500",
    glowColor: "rgba(220,38,38,0.25)",
    borderHover: "hover:border-red-600/40",
  },
  {
    icon: Music2,
    title: "Aerobics",
    desc: "Rhythm-driven cardio classes that improve heart health, coordination, and overall fitness in an energising group atmosphere.",
    tag: "Cardio",
    color: "pink",
    gradient: "from-pink-600/20 to-pink-900/5",
    iconBg: "bg-pink-600/15",
    iconColor: "text-pink-400",
    tagStyle: "bg-pink-500/15 text-pink-400 border-pink-500/30",
    barColor: "bg-gradient-to-r from-pink-600 to-rose-400",
    glowColor: "rgba(236,72,153,0.2)",
    borderHover: "hover:border-pink-600/40",
  },
  {
    icon: ShieldAlert,
    title: "Kickboxing",
    desc: "Combine martial arts power with cardio intensity. Build strength, agility, and real confidence with every punch and kick.",
    tag: "Combat",
    color: "orange",
    gradient: "from-orange-600/20 to-orange-900/5",
    iconBg: "bg-orange-600/15",
    iconColor: "text-orange-400",
    tagStyle: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    barColor: "bg-gradient-to-r from-orange-600 to-amber-400",
    glowColor: "rgba(234,88,12,0.22)",
    borderHover: "hover:border-orange-600/40",
  },
  {
    icon: Dumbbell,
    title: "CrossFit",
    desc: "Constantly varied functional movements at high intensity. Build all-round athleticism and iron mental toughness.",
    tag: "Functional",
    color: "red",
    gradient: "from-red-700/20 to-red-950/5",
    iconBg: "bg-red-700/15",
    iconColor: "text-red-300",
    tagStyle: "bg-red-600/15 text-red-300 border-red-600/30",
    barColor: "bg-gradient-to-r from-red-700 to-red-500",
    glowColor: "rgba(185,28,28,0.25)",
    borderHover: "hover:border-red-700/40",
  },
  {
    icon: Music,
    title: "Zumba",
    desc: "Dance your way to fitness with Latin-inspired moves. Burn up to 600 calories per session while having an absolute blast.",
    tag: "Dance",
    color: "violet",
    gradient: "from-violet-600/20 to-violet-900/5",
    iconBg: "bg-violet-600/15",
    iconColor: "text-violet-400",
    tagStyle: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    barColor: "bg-gradient-to-r from-violet-600 to-purple-400",
    glowColor: "rgba(124,58,237,0.22)",
    borderHover: "hover:border-violet-600/40",
  },
  {
    icon: Footprints,
    title: "Dance Fitness",
    desc: "High-energy choreographed routines blending multiple dance styles — perfect for boosting mood and burning calories.",
    tag: "Dance",
    color: "purple",
    gradient: "from-purple-600/20 to-purple-900/5",
    iconBg: "bg-purple-600/15",
    iconColor: "text-purple-400",
    tagStyle: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    barColor: "bg-gradient-to-r from-purple-600 to-violet-400",
    glowColor: "rgba(147,51,234,0.22)",
    borderHover: "hover:border-purple-600/40",
  },
  {
    icon: UserCheck,
    title: "Personal Training",
    desc: "One-on-one sessions with a certified coach who designs, tracks, and adjusts your personalised programme for maximum results.",
    tag: "1-on-1",
    color: "red",
    gradient: "from-rose-600/20 to-rose-900/5",
    iconBg: "bg-rose-600/15",
    iconColor: "text-rose-400",
    tagStyle: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    barColor: "bg-gradient-to-r from-rose-600 to-pink-400",
    glowColor: "rgba(244,63,94,0.22)",
    borderHover: "hover:border-rose-600/40",
  },
  {
    icon: Leaf,
    title: "Yoga",
    desc: "Build flexibility, core strength, and mindfulness through guided yoga flows expertly tailored to all experience levels.",
    tag: "Wellness",
    color: "emerald",
    gradient: "from-emerald-600/20 to-emerald-900/5",
    iconBg: "bg-emerald-600/15",
    iconColor: "text-emerald-400",
    tagStyle: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    barColor: "bg-gradient-to-r from-emerald-600 to-teal-400",
    glowColor: "rgba(16,185,129,0.2)",
    borderHover: "hover:border-emerald-600/40",
  },
  {
    icon: Trophy,
    title: "Adult Sports",
    desc: "Structured recreational sports for adults — basketball, badminton and more. Stay active, competitive, and part of a team.",
    tag: "Sports",
    color: "amber",
    gradient: "from-amber-600/20 to-amber-900/5",
    iconBg: "bg-amber-600/15",
    iconColor: "text-amber-400",
    tagStyle: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    barColor: "bg-gradient-to-r from-amber-600 to-yellow-400",
    glowColor: "rgba(217,119,6,0.22)",
    borderHover: "hover:border-amber-600/40",
  },
  {
    icon: BarChart3,
    title: "Weight Training",
    desc: "Progressive overload programs by certified experts to build muscle, increase strength, and sculpt your ideal physique.",
    tag: "Strength",
    color: "red",
    gradient: "from-red-600/20 to-slate-900/5",
    iconBg: "bg-red-600/15",
    iconColor: "text-red-400",
    tagStyle: "bg-red-500/15 text-red-400 border-red-500/30",
    barColor: "bg-gradient-to-r from-red-600 to-orange-500",
    glowColor: "rgba(220,38,38,0.22)",
    borderHover: "hover:border-red-600/40",
  },
  {
    icon: Apple,
    title: "Nutrition Consulting",
    desc: "Personalised meal plans and dietary coaching from certified nutritionists perfectly aligned with your body composition goals.",
    tag: "Diet",
    color: "green",
    gradient: "from-green-600/20 to-green-900/5",
    iconBg: "bg-green-600/15",
    iconColor: "text-green-400",
    tagStyle: "bg-green-500/15 text-green-400 border-green-500/30",
    barColor: "bg-gradient-to-r from-green-600 to-emerald-400",
    glowColor: "rgba(22,163,74,0.2)",
    borderHover: "hover:border-green-600/40",
  },
  {
    icon: Bike,
    title: "Cycling",
    desc: "High-energy indoor cycling with immersive music and coached interval sessions — incredible for legs, lungs, and cardio.",
    tag: "Cardio",
    color: "sky",
    gradient: "from-sky-600/20 to-sky-900/5",
    iconBg: "bg-sky-600/15",
    iconColor: "text-sky-400",
    tagStyle: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    barColor: "bg-gradient-to-r from-sky-600 to-cyan-400",
    glowColor: "rgba(14,165,233,0.2)",
    borderHover: "hover:border-sky-600/40",
  },
  {
    icon: Flame,
    title: "Body Transformation",
    desc: "A complete 90-day programme — training, nutrition, and recovery — designed to completely reshape your body and mindset.",
    tag: "90-Day",
    color: "rose",
    gradient: "from-rose-700/20 to-rose-950/5",
    iconBg: "bg-rose-700/15",
    iconColor: "text-rose-300",
    tagStyle: "bg-rose-600/15 text-rose-300 border-rose-600/30",
    barColor: "bg-gradient-to-r from-rose-700 to-red-400",
    glowColor: "rgba(244,63,94,0.25)",
    borderHover: "hover:border-rose-700/40",
  },
  {
    icon: Scale,
    title: "Weight Loss",
    desc: "Science-backed fat-loss protocols combining targeted workouts, nutrition tracking, and weekly accountability check-ins.",
    tag: "Fat Loss",
    color: "orange",
    gradient: "from-orange-600/20 to-amber-950/5",
    iconBg: "bg-orange-600/15",
    iconColor: "text-orange-300",
    tagStyle: "bg-orange-600/15 text-orange-300 border-orange-600/30",
    barColor: "bg-gradient-to-r from-orange-600 to-yellow-400",
    glowColor: "rgba(234,88,12,0.25)",
    borderHover: "hover:border-orange-600/40",
  },
];

type Service = typeof services[0];

/* ── Individual card ── */
function ServiceCard({
  service,
  index,
  inView,
}: {
  service: Service;
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: 0.05 + (index % 7) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -10, transition: { type: "spring", stiffness: 300, damping: 24 } }}
      className={`
        group relative flex flex-col overflow-hidden
        rounded-2xl cursor-pointer
        border border-white/[0.07] ${service.borderHover}
        transition-colors duration-400
      `}
      style={{
        background: "rgba(10,10,10,0.9)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100`}
        initial={false}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Top accent bar */}
      <div
        className={`absolute top-0 inset-x-0 h-[2px] ${service.barColor} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Corner glow blob */}
      <motion.div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none"
        style={{ background: service.glowColor }}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Bottom glow blob */}
      <motion.div
        className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full blur-2xl pointer-events-none"
        style={{ background: service.glowColor }}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 0.6 : 0 }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Top row: Icon + Tag */}
        <div className="flex items-start justify-between mb-5">
          {/* Large icon box */}
          <motion.div
            className={`
              relative flex items-center justify-center
              w-14 h-14 rounded-2xl
              ${service.iconBg}
              border border-white/[0.08]
              shadow-lg
            `}
            animate={{
              scale: hovered ? 1.1 : 1,
              rotate: hovered ? [0, -4, 4, 0] : 0,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Icon className={`w-7 h-7 ${service.iconColor}`} strokeWidth={1.6} />
            {/* Icon inner glow */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ boxShadow: `inset 0 0 16px ${service.glowColor}` }}
            />
          </motion.div>

          {/* Tag pill */}
          <span
            className={`
              inline-flex items-center px-3 py-1 rounded-full
              text-[10px] font-bold tracking-[0.12em] uppercase
              border ${service.tagStyle}
            `}
          >
            {service.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[17px] font-extrabold text-white mb-2.5 leading-tight tracking-tight group-hover:text-white transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-[13px] text-white/45 leading-relaxed group-hover:text-white/70 transition-colors duration-400 flex-1">
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Main section ── */
export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { openModal } = useModal();

  return (
    <section
      id="services"
      ref={ref}
      className="relative w-full overflow-hidden py-28 bg-[#020202]"
    >
      {/* ── Background ── */}
      {/* Top divider line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
      {/* Bottom divider line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      {/* Left glow */}
      <div className="absolute -left-64 top-1/3 w-[500px] h-[500px] rounded-full bg-red-950/25 blur-[160px] pointer-events-none" />
      {/* Right glow */}
      <div className="absolute -right-64 bottom-1/4 w-[450px] h-[450px] rounded-full bg-red-950/20 blur-[140px] pointer-events-none" />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-red-400 border border-red-600/30 bg-red-600/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-4"
          >
            World-Class{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#DC2626 0%,#EF4444 55%,#F87171 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Fitness Programs
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto w-20 h-[3px] rounded-full bg-gradient-to-r from-red-700 via-red-500 to-red-700 mb-6 origin-center"
          />

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-base text-white/45 leading-relaxed"
          >
            From high-octane HIIT to mindful yoga — 14+ expertly coached programmes
            designed to meet you exactly where you are and take you further than you imagined.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            {[
              { label: "Programs", value: "14+" },
              { label: "Expert Trainers", value: "15+" },
              { label: "Sessions / Day", value: "20+" },
              { label: "Members Trained", value: "5K+" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center px-5 py-3 rounded-xl border border-white/[0.07] bg-white/[0.03]"
              >
                <span className="text-xl font-black text-white">{value}</span>
                <span className="text-[11px] text-white/40 uppercase tracking-wider mt-0.5">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} inView={inView} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <p className="text-sm text-white/35">
            Not sure which programme is right for you?
          </p>
          <motion.button
            type="button"
            whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(220,38,38,0.5)" }}
            whileTap={{ scale: 0.97 }}
            onClick={openModal}
            className="
              group relative overflow-hidden inline-flex items-center gap-2.5
              px-9 py-4 rounded-full
              text-sm font-black tracking-widest uppercase text-white
              bg-gradient-to-r from-red-600 to-rose-500
              shadow-[0_0_28px_rgba(220,38,38,0.35)]
              transition-shadow duration-300
            "
          >
            {/* Shimmer sweep */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
            <span className="relative">Get a Free Consultation</span>
            <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
          <p className="text-xs text-white/20">No commitment required · Free 30-min session</p>
        </motion.div>
      </div>
    </section>
  );
}
