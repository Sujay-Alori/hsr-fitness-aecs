"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, UserCheck, LayoutGrid, Trophy } from "lucide-react";
import { useModal } from "@/context/ModalContext";

/* ── Stats data ── */
const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Happy Members",
    sub: "Active community members",
    iconBg: "bg-red-600/15 border-red-600/25",
    iconColor: "text-red-400",
    glow: "rgba(220,38,38,0.20)",
    barColor: "bg-red-600",
    barWidth: "w-[92%]",
  },
  {
    icon: UserCheck,
    value: 15,
    suffix: "+",
    label: "Certified Trainers",
    sub: "NSCA & ACE certified",
    iconBg: "bg-orange-600/15 border-orange-600/25",
    iconColor: "text-orange-400",
    glow: "rgba(234,88,12,0.18)",
    barColor: "bg-orange-500",
    barWidth: "w-[75%]",
  },
  {
    icon: LayoutGrid,
    value: 12,
    suffix: "+",
    label: "Fitness Programs",
    sub: "Tailored for every goal",
    iconBg: "bg-violet-600/15 border-violet-600/25",
    iconColor: "text-violet-400",
    glow: "rgba(124,58,237,0.15)",
    barColor: "bg-violet-500",
    barWidth: "w-[80%]",
  },
  {
    icon: Trophy,
    value: 8,
    suffix: "+",
    label: "Years Experience",
    sub: "Transforming lives since 2016",
    iconBg: "bg-amber-600/15 border-amber-600/25",
    iconColor: "text-amber-400",
    glow: "rgba(217,119,6,0.18)",
    barColor: "bg-amber-500",
    barWidth: "w-[65%]",
  },
];

/* ── Animated counter hook ── */
function useCounter(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    let raf: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return count;
}

/* ── Individual stat card ── */
function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  sub,
  iconBg,
  iconColor,
  glow,
  barColor,
  barWidth,
  index,
  started,
}: (typeof stats)[0] & { index: number; started: boolean }) {
  const count = useCounter(value, 1800 + index * 150, started);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={started ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.13,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{
        y: -8,
        boxShadow: `0 20px 60px ${glow}, 0 0 0 1px rgba(255,255,255,0.06)`,
        transition: { type: "spring", stiffness: 280, damping: 22 },
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0b0b0b] cursor-default flex flex-col p-7"
    >
      {/* Gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top corner glow */}
      <div
        className="absolute -top-8 -right-8 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: glow }}
      />

      {/* Icon */}
      <div
        className={`
          relative z-10 flex items-center justify-center
          w-14 h-14 rounded-2xl border ${iconBg}
          mb-6 group-hover:scale-110
          transition-transform duration-300
          shadow-[0_4px_16px_rgba(0,0,0,0.4)]
        `}
      >
        <Icon className={`w-7 h-7 ${iconColor}`} strokeWidth={1.75} />
      </div>

      {/* Animated number */}
      <div className="relative z-10 mb-1">
        <span className="text-[clamp(3rem,5vw,4rem)] font-black leading-none tracking-tight text-white tabular-nums">
          {count.toLocaleString()}
        </span>
        <span
          className="text-[clamp(2rem,3.5vw,2.75rem)] font-black leading-none"
          style={{
            background: "linear-gradient(135deg,#DC2626 0%,#EF4444 60%,#F87171 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {suffix}
        </span>
      </div>

      {/* Label */}
      <p className="relative z-10 text-base font-bold text-white/90 mb-1 group-hover:text-white transition-colors duration-300">
        {label}
      </p>

      {/* Sub-label */}
      <p className="relative z-10 text-xs text-white/40 mb-6 group-hover:text-white/60 transition-colors duration-300">
        {sub}
      </p>

      {/* Progress bar */}
      <div className="relative z-10 mt-auto">
        <div className="w-full h-[3px] rounded-full bg-white/[0.07] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={started ? { width: barWidth.replace("w-[", "").replace("]", "") } : { width: 0 }}
            transition={{ duration: 1.6, delay: 0.4 + index * 0.13, ease: [0.4, 0, 0.2, 1] }}
            className={`h-full rounded-full ${barColor} shadow-[0_0_8px_currentColor]`}
          />
        </div>
      </div>

      {/* Bottom border glow on hover */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(to right, transparent, ${glow}, transparent)` }}
      />
    </motion.div>
  );
}

/* ── Section ── */
export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { openModal } = useModal();

  return (
    <section
      id="stats"
      ref={ref}
      className="relative w-full overflow-hidden bg-[#050505] section-padding"
    >
      {/* ── Background decoration ── */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/25 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Large red glow behind centre */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-red-950/25 blur-[140px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-14 lg:mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-red-400 border border-red-600/30 bg-red-600/10 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Our Numbers
            </span>
          </motion.div>

          <motion.h2
            initial={{ y: 25, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2rem,4.5vw,3.25rem)] font-black leading-[1.05] tracking-tight text-white mb-4"
          >
            Numbers That{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#DC2626 0%,#EF4444 55%,#F87171 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Speak
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto w-20 h-[3px] rounded-full bg-gradient-to-r from-red-700 via-red-500 to-red-700 mb-5 origin-center"
          />

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl mx-auto text-sm sm:text-base text-white/45 leading-relaxed"
          >
            A decade of dedication, thousands of transformed lives, and a community
            that keeps growing stronger every single day.
          </motion.p>
        </div>

        {/* ── Stats cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} started={isInView} />
          ))}
        </div>

        {/* ── Bottom CTA band ── */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="
            mt-14 flex flex-col sm:flex-row items-center justify-between gap-6
            px-7 py-6 rounded-2xl
            border border-white/[0.07]
            bg-white/[0.025] backdrop-blur-xl
          "
        >
          <div>
            <p className="text-lg font-bold text-white mb-1">
              Join the{" "}
              <span className="text-red-400">HSR Fitness Family</span>
            </p>
            <p className="text-sm text-white/40">
              Be part of a community that motivates, supports, and celebrates you.
            </p>
          </div>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(220,38,38,0.55)" }}
            whileTap={{ scale: 0.97 }}
            onClick={openModal}
            className="
              group relative overflow-hidden flex-shrink-0
              px-7 py-3 rounded-full
              text-sm font-bold tracking-widest uppercase text-white
              bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.3)]
              transition-shadow duration-300
            "
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            <span className="relative">Start Today</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
