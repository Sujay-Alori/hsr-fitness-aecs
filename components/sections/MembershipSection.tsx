"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Flame, Calendar, CalendarDays, CalendarRange, Crown } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { EASE_IN_OUT } from "@/lib/motion";

/* ── Plan data ── */
const plans = [
  {
    id: "day",
    name: "Day Pass",
    tagline: "Try us for a day",
    price: 300,
    period: "one-time",
    icon: Flame,
    accentFrom: "#6b7280",
    accentTo: "#9ca3af",
    glowColor: "rgba(156,163,175,0.18)",
    borderColor: "rgba(255,255,255,0.08)",
    badgeBg: "rgba(255,255,255,0.06)",
    featured: false,
  },
  {
    id: "1m",
    name: "1 Month",
    tagline: "Start your journey",
    price: 2299,
    period: "/ month",
    icon: Calendar,
    accentFrom: "#3b82f6",
    accentTo: "#60a5fa",
    glowColor: "rgba(59,130,246,0.2)",
    borderColor: "rgba(59,130,246,0.18)",
    badgeBg: "rgba(59,130,246,0.07)",
    featured: false,
  },
  {
    id: "3m",
    name: "3 Months",
    tagline: "Build the habit",
    price: 4999,
    period: "/ 3 months",
    icon: CalendarDays,
    accentFrom: "#8b5cf6",
    accentTo: "#a78bfa",
    glowColor: "rgba(139,92,246,0.2)",
    borderColor: "rgba(139,92,246,0.18)",
    badgeBg: "rgba(139,92,246,0.07)",
    featured: false,
  },
  {
    id: "6m",
    name: "6 Months",
    tagline: "Serious commitment",
    price: 6999,
    period: "/ 6 months",
    icon: CalendarRange,
    accentFrom: "#f59e0b",
    accentTo: "#fbbf24",
    glowColor: "rgba(245,158,11,0.22)",
    borderColor: "rgba(245,158,11,0.22)",
    badgeBg: "rgba(245,158,11,0.07)",
    featured: false,
  },
  {
    id: "12m",
    name: "12 Months",
    tagline: "Best value — go all in",
    price: 9999,
    period: "/ year",
    icon: Crown,
    accentFrom: "#DC2626",
    accentTo: "#f97316",
    glowColor: "rgba(220,38,38,0.45)",
    borderColor: "rgba(220,38,38,0.55)",
    badgeBg: "rgba(220,38,38,0.10)",
    featured: true,
  },
];

/* ── Savings helper ── */
function monthlyCost(plan: (typeof plans)[number]) {
  if (plan.id === "day") return null;
  const months = plan.id === "1m" ? 1 : plan.id === "3m" ? 3 : plan.id === "6m" ? 6 : 12;
  return Math.round(plan.price / months);
}

/* ── Framer variants ── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_IN_OUT } },
};



/* ══════════════════════════════════════════
   PRICING CARD
══════════════════════════════════════════ */
function PricingCard({ plan, index }: { plan: (typeof plans)[number]; index: number }) {
  const Icon = plan.icon;
  const perMonth = monthlyCost(plan);
  const { openModal } = useModal();

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, transition: { duration: 0.28, ease: "easeOut" } }}
      className="relative flex flex-col rounded-2xl overflow-hidden h-full"
      style={{
        background: plan.featured
          ? "linear-gradient(145deg, rgba(220,38,38,0.10) 0%, rgba(0,0,0,0.85) 60%)"
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${plan.borderColor}`,
        boxShadow: plan.featured
          ? `0 0 80px ${plan.glowColor}, 0 0 20px rgba(0,0,0,0.6)`
          : `0 4px 30px rgba(0,0,0,0.4)`,
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      {/* Featured BADGE */}
      {plan.featured && (
        <div className="absolute top-0 inset-x-0 flex justify-center z-20">
          <span
            className="inline-flex items-center gap-1.5 text-white text-[11px] font-bold tracking-[0.18em] uppercase px-5 py-1.5 rounded-b-xl"
            style={{
              background: "linear-gradient(90deg, #DC2626, #f97316)",
              boxShadow: "0 4px 20px rgba(220,38,38,0.5)",
            }}
          >
            <Crown size={10} className="fill-white" />
            Best Value
          </span>
        </div>
      )}

      {/* Top accent bar */}
      <div
        className="h-[3px] w-full flex-shrink-0"
        style={{ background: `linear-gradient(90deg, ${plan.accentFrom}, ${plan.accentTo})` }}
      />

      {/* Card body */}
      <div className="p-7 flex flex-col flex-1" style={{ paddingTop: plan.featured ? "2.5rem" : "1.75rem" }}>
        {/* Icon + name */}
        <div className="flex items-center gap-3.5 mb-5">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${plan.accentFrom}33, ${plan.accentTo}22)`,
              border: `1px solid ${plan.accentFrom}44`,
            }}
          >
            <Icon size={20} style={{ color: plan.accentTo }} />
          </div>
          <div>
            <h3 className="text-white font-black text-xl leading-tight">{plan.name}</h3>
            <p className="text-gray-500 text-xs mt-0.5">{plan.tagline}</p>
          </div>
        </div>

        {/* Price block */}
        <div className="mb-6">
          <div className="flex items-start gap-1">
            <span className="text-gray-400 text-xl font-semibold leading-none mt-1">₹</span>
            <span
              className="text-[2.75rem] font-black leading-none tracking-tight"
              style={{
                background: `linear-gradient(135deg, ${plan.accentFrom}, ${plan.accentTo})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {plan.price.toLocaleString("en-IN")}
            </span>
          </div>
          <div className="mt-2 text-[13px]">
            {perMonth ? (
              <p className="text-gray-400 font-semibold">
                ≈ ₹{perMonth.toLocaleString("en-IN")}<span className="text-gray-500 font-normal">/month</span>
              </p>
            ) : (
              <p className="text-gray-500">
                Single Entry Pass
              </p>
            )}
          </div>
        </div>

        {/* CTA */}
        <motion.button
          type="button"
          onClick={openModal}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-auto block w-full py-3.5 rounded-xl font-bold text-center text-sm tracking-wide cursor-pointer transition-all duration-300"
          style={
            plan.featured
              ? {
                background: `linear-gradient(135deg, ${plan.accentFrom}, ${plan.accentTo})`,
                color: "#fff",
                boxShadow: `0 6px 28px ${plan.glowColor}`,
              }
              : {
                background: `${plan.badgeBg}`,
                border: `1px solid ${plan.accentFrom}44`,
                color: plan.accentTo,
              }
          }
        >
          Join Now
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   SECTION
══════════════════════════════════════════ */
export default function MembershipSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { openModal } = useModal();

  return (
    <section
      ref={ref}
      id="membership"
      className="relative py-28 bg-[#050505] overflow-hidden"
    >
      {/* ── ambient glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/3 w-[800px] h-[800px] rounded-full opacity-[0.06] blur-[140px]"
          style={{ background: "radial-gradient(circle, #DC2626, transparent)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[110px]"
          style={{ background: "radial-gradient(circle, #f97316, transparent)" }}
        />
        <div
          className="absolute top-1/2 left-0 w-[300px] h-[600px] opacity-[0.03] blur-[90px]"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/25 text-red-400 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
            <Crown size={12} />
            Membership Plans
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Invest in{" "}
            <span className="bg-gradient-to-r from-red-500 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Your Health
            </span>
          </h2>
          <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your lifestyle. Every plan gives you access to world-class equipment and expert guidance.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-6 items-stretch"
        >
          {plans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </motion.div>

        {/* ── Footer note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          All prices are inclusive of GST. No hidden charges.{" "}
          <button type="button" onClick={openModal} className="text-red-400 hover:text-red-300 underline underline-offset-2 transition-colors">
            Contact us
          </button>{" "}
          for corporate &amp; group packages.
        </motion.p>
      </div>
    </section>
  );
}
