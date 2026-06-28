"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Camera,
  Clock,
  ArrowUpRight,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { EASE_IN_OUT } from "@/lib/motion";

/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
const infoCards = [
  {
    id: "address",
    icon: MapPin,
    label: "Our Address",
    primary: "2484E, 60th Main Road",
    secondary: "AECS Layout - A Block, Singasandra, Bengaluru – 560068",
    href: "https://maps.app.goo.gl/ymUuazJAtJEiaidw7?g_st=aw",
    linkLabel: "Get Directions",
    accent: "#DC2626",
    glow: "rgba(220,38,38,0.22)",
    border: "rgba(220,38,38,0.28)",
    bg: "rgba(220,38,38,0.07)",
    iconBg: "rgba(220,38,38,0.15)",
    schedule: null,
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    primary: "+91 9980355803",
    secondary: "",
    href: "tel:+919980355803",
    linkLabel: "Call Now",
    accent: "#10b981",
    glow: "rgba(16,185,129,0.18)",
    border: "rgba(16,185,129,0.28)",
    bg: "rgba(16,185,129,0.06)",
    iconBg: "rgba(16,185,129,0.15)",
    schedule: null,
  },
  {
    id: "email",
    icon: Mail,
    label: "Email Us",
    primary: "poweredbyganesh@gmail.com",
    secondary: "",
    href: "mailto:poweredbyganesh@gmail.com",
    linkLabel: "Send Email",
    accent: "#3b82f6",
    glow: "rgba(59,130,246,0.18)",
    border: "rgba(59,130,246,0.28)",
    bg: "rgba(59,130,246,0.06)",
    iconBg: "rgba(59,130,246,0.15)",
    schedule: null,
  },
  {
    id: "instagram",
    icon: Camera,
    label: "Instagram",
    primary: "@hsrfitnessworld_aecslayout15",
    secondary: "Follow us for daily motivation",
    href: "https://instagram.com/hsrfitnessworld_aecslayout15",
    linkLabel: "Follow Us",
    accent: "#e1306c",
    glow: "rgba(225,48,108,0.2)",
    border: "rgba(225,48,108,0.3)",
    bg: "rgba(225,48,108,0.07)",
    iconBg: "rgba(225,48,108,0.15)",
    schedule: null,
  },
  {
    id: "hours",
    icon: Clock,
    label: "Opening Hours",
    primary: "",
    secondary: "",
    href: null,
    linkLabel: null,
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.18)",
    border: "rgba(245,158,11,0.28)",
    bg: "rgba(245,158,11,0.06)",
    iconBg: "rgba(245,158,11,0.15)",
    schedule: [
      { days: "Every Day", time: "5:00 AM – 10:00 PM" },
    ],
  },
] as const;

/* ═══════════════════════════════════════════
   FRAMER VARIANTS
═══════════════════════════════════════════ */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: EASE_IN_OUT },
  },
};

/* ═══════════════════════════════════════════
   INFO CARD
═══════════════════════════════════════════ */
function InfoCard({ card }: { card: (typeof infoCards)[number] }) {
  const Icon = card.icon;
  const [hovered, setHovered] = useState(false);

  const inner = (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.26, ease: "easeOut" }}
      className="relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: card.bg,
        border: `1px solid ${hovered ? card.accent + "55" : card.border}`,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: hovered
          ? `0 20px 60px ${card.glow}, 0 0 0 1px ${card.accent}22`
          : "0 4px 24px rgba(0,0,0,0.35)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
        cursor: card.href ? "pointer" : "default",
      }}
    >
      {/* Top gradient accent bar */}
      <div
        className="h-[2px] w-full flex-shrink-0"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${card.accent} 40%, ${card.accent}99 70%, transparent 100%)`,
          opacity: hovered ? 1 : 0.5,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Card body */}
      <div className="px-5 py-4 flex flex-col gap-3">
        {/* Icon + Label row */}
        <div className="flex items-center gap-3">
          {/* Pulsing icon wrapper */}
          <div className="relative flex-shrink-0">
            {hovered && (
              <span
                className="absolute inset-0 rounded-xl animate-ping opacity-30"
                style={{ background: card.accent }}
              />
            )}
            <div
              className="relative w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: card.iconBg }}
            >
              {card.id === "instagram" ? (
                <svg
                  width="19" height="19" viewBox="0 0 24 24"
                  fill="none" stroke={card.accent}
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              ) : (
                <Icon size={19} style={{ color: card.accent }} />
              )}
            </div>
          </div>

          {/* Label */}
          <span
            className="text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: card.accent }}
          >
            {card.label}
          </span>

          {/* Hover link */}
          {card.linkLabel && (
            <motion.span
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -6 }}
              transition={{ duration: 0.2 }}
              className="ml-auto flex items-center gap-1 text-[11px] font-semibold"
              style={{ color: card.accent }}
            >
              {card.linkLabel}
              <ArrowUpRight size={12} />
            </motion.span>
          )}
        </div>

        {/* Divider */}
        <div
          className="h-px w-full"
          style={{
            background: `linear-gradient(90deg, ${card.accent}33, transparent)`,
          }}
        />

        {/* Content — regular cards */}
        {card.primary && (
          <div>
            <p className="text-white font-semibold text-sm leading-snug">
              {card.primary}
            </p>
            {card.secondary && (
              <p className="text-gray-400 text-xs mt-1">{card.secondary}</p>
            )}
          </div>
        )}

        {/* Content — schedule card */}
        {card.schedule && (
          <div className="space-y-2">
            {card.schedule.map((row) => (
              <div key={row.days} className="flex items-center justify-between">
                <span className="text-gray-400 text-xs">{row.days}</span>
                <span
                  className="text-xs font-bold"
                  style={{ color: card.accent }}
                >
                  {row.time}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  return card.href ? (
    <a href={card.href} target="_blank" rel="noopener noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

/* ═══════════════════════════════════════════
   SECTION
═══════════════════════════════════════════ */
export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-28 bg-[#030303] overflow-hidden"
    >
      {/* ── Ambient background glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -bottom-20 -left-20 w-[700px] h-[700px] rounded-full opacity-[0.06] blur-[150px]"
          style={{ background: "radial-gradient(circle, #DC2626, transparent)" }}
        />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-px opacity-[0.06]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #DC2626, transparent)",
          }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/25 text-red-400 text-xs font-bold tracking-[0.22em] uppercase px-4 py-2 rounded-full mb-5">
            <MessageCircle size={12} />
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Find &amp;{" "}
            <span className="bg-gradient-to-r from-red-500 via-rose-400 to-orange-400 bg-clip-text text-transparent">
              Reach Us
            </span>
          </h2>
          <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We're right in the heart of AECS Layout, Singasandra. Walk in anytime, or drop
            us a message — we're always here for you.
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* ───────────── LEFT — Info Cards ───────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-3"
          >
            {infoCards.map((card) => (
              <InfoCard key={card.id} card={card} />
            ))}

            {/* ── Quick Action Buttons ── */}
            <motion.div variants={cardVariants} className="flex gap-3 mt-1">
              {/* WhatsApp */}
              <a
                href="https://wa.me/919980355803"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #25d366, #128c7e)",
                  boxShadow: "0 6px 28px rgba(37,211,102,0.3)",
                }}
              >
                {/* WhatsApp SVG */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.828L.057 23.5a.5.5 0 00.613.65l5.857-1.54A11.945 11.945 0 0012 24c6.626 0 12-5.374 12-12S18.626 0 12 0zm0 21.818a9.812 9.812 0 01-5.023-1.376l-.36-.214-3.737.981.998-3.648-.235-.374A9.818 9.818 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z" />
                </svg>
                WhatsApp Us
              </a>

              {/* Call */}
              <a
                href="tel:+919980355803"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-95"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Phone size={15} />
                Call Now
              </a>
            </motion.div>
          </motion.div>

          {/* ───────────── RIGHT — Google Map ───────────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.18 }}
            className="flex flex-col gap-4"
          >
            {/* Map card */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(220,38,38,0.25)",
                boxShadow:
                  "0 28px 90px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            >
              {/* Browser-style top bar */}
              <div
                className="flex items-center gap-3 px-5 py-3.5 flex-shrink-0"
                style={{
                  background: "rgba(8,8,8,0.97)",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Traffic lights */}
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>

                {/* URL bar */}
                <div
                  className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <MapPin size={11} className="text-red-400 flex-shrink-0" />
                  <span className="text-gray-400 text-[11px] truncate">
                    AECS Layout, Singasandra, Bengaluru 560068
                  </span>
                </div>

                {/* Open in Google Maps */}
                <a
                  href="https://maps.app.goo.gl/ymUuazJAtJEiaidw7?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-gray-500 hover:text-red-400 transition-colors duration-200"
                  aria-label="Open in Google Maps"
                >
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* iFrame */}
              <iframe
                title="HSR Fitness World Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.590220695587!2d77.6367375!3d12.8711867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152d0cf098c1%3A0xaa7d4443281b1487!2sHSR%20Fitness%20World%20(AECS%20Layout)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="430"
                style={{
                  display: "block",
                  filter:
                    "invert(90%) hue-rotate(180deg) saturate(0.75) brightness(0.85)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating location pin card */}
              <div
                className="absolute bottom-5 left-5 right-5 sm:right-auto sm:w-[260px] rounded-xl px-4 py-3 flex items-center gap-3"
                style={{
                  background: "rgba(4,4,4,0.93)",
                  border: "1px solid rgba(220,38,38,0.35)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.7)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(220,38,38,0.18)" }}
                >
                  <MapPin size={17} className="text-red-400" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold leading-tight">
                    HSR Fitness World (AECS Layout)
                  </p>
                  <p className="text-gray-500 text-[11px] mt-0.5">
                    AECS Layout - A Block, Singasandra
                  </p>
                </div>
                {/* Pulsing red dot */}
                <span className="ml-auto flex-shrink-0 relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                </span>
              </div>
            </div>

            {/* Stats ribbon */}
            <div
              className="grid grid-cols-3 rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.025)",
              }}
            >
              {[
                { value: "10+", label: "Years Here", color: "#DC2626" },
                { value: "2,500+", label: "Happy Members", color: "#f59e0b" },
                { value: "Open 365", label: "Days a Year", color: "#10b981" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center py-5 px-3 text-center"
                  style={{
                    borderRight:
                      i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  }}
                >
                  <span
                    className="text-xl font-black"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-gray-500 text-[11px] mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
