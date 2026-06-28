"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowUp,
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Trainers", href: "#trainers" },
  { label: "Membership", href: "#membership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "HIIT Training",
  "Weight Training",
  "Yoga & Mindfulness",
  "CrossFit",
  "Boxing & Kickboxing",
  "Zumba & Dance",
  "Personal Training",
  "Nutrition Consulting",
];

const schedule = [
  { day: "Every Day", time: "5:00 AM – 10:00 PM" },
];

/* ═══════════════════════════════════════════
   COLUMN HEADING
═══════════════════════════════════════════ */
function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h4 className="text-white font-black text-sm uppercase tracking-[0.18em]">
        {children}
      </h4>
      <div
        className="mt-2 h-[2px] w-8 rounded-full"
        style={{
          background: "linear-gradient(90deg, #DC2626, #f97316)",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════ */
export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* ═══ FOOTER ═══ */}
      <footer className="relative bg-[#020202] overflow-hidden">
        {/* Ambient top border glow */}
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #DC2626 30%, #f97316 50%, #DC2626 70%, transparent 100%)",
            opacity: 0.35,
          }}
        />

        {/* Background glow blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] opacity-[0.04] blur-[120px]"
            style={{ background: "radial-gradient(ellipse, #DC2626, transparent)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-[0.03] blur-[100px]"
            style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── CTA Banner ── */}
          <div
            className="my-14 rounded-2xl px-8 py-9 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(220,38,38,0.13) 0%, rgba(0,0,0,0.5) 100%)",
              border: "1px solid rgba(220,38,38,0.22)",
              boxShadow: "0 0 60px rgba(220,38,38,0.06)",
            }}
          >
            <div>
              <p className="text-red-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">
                Limited Spots Available
              </p>
              <h3 className="text-white font-black text-2xl md:text-3xl leading-tight">
                Ready to Transform? Start{" "}
                <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                  Today.
                </span>
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Join 5,000+ members already achieving their goals at HSR Fitness World.
              </p>
            </div>
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(220,38,38,0.45)" }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-red-600/30 transition-all duration-300 whitespace-nowrap text-sm"
            >
              Book Free Trial
              <ChevronRight size={16} />
            </motion.button>
          </div>

          {/* ── Main Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-t border-white/[0.06]">

            {/* ── Brand Column (spans 2 on lg) ── */}
            <div className="lg:col-span-2 flex flex-col">
              {/* Logo */}
              <div className="flex items-center mb-5">
                <div className="relative w-[150px] h-[60px]">
                  <Image
                    src="/logo.jpg"
                    alt="HSR Fitness World Logo"
                    fill
                    className="object-contain mix-blend-screen"
                  />
                </div>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
                Bangalore&apos;s premier fitness destination. World-class equipment,
                certified trainers and an unmatched community to fuel your transformation.
              </p>

              {/* Contact mini info */}
              <div className="space-y-3 mb-6">
                {[
                  { Icon: MapPin, text: "AECS Layout - A Block, Singasandra, Bengaluru" },
                  { Icon: Phone, text: "+91 9980355803" },
                  { Icon: Mail, text: "poweredbyganesh@gmail.com" },
                ].map(({ Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-gray-500 text-xs">
                    <Icon size={13} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-snug">{text}</span>
                  </div>
                ))}
              </div>

              {/* Instagram social pill */}
              <a
                href="https://instagram.com/hsrfitnessworld_aecslayout15"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white w-fit transition-all duration-300 hover:brightness-110 hover:scale-[1.03]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(225,48,108,0.2), rgba(131,58,180,0.18))",
                  border: "1px solid rgba(225,48,108,0.3)",
                }}
              >
                {/* Instagram SVG */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="url(#ig-grad-footer)" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="ig-grad-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f9a825" />
                      <stop offset="50%" stopColor="#e1306c" />
                      <stop offset="100%" stopColor="#833ab4" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent font-bold">
                  @hsrfitnessworld_aecslayout15
                </span>
                <ExternalLink size={10} className="text-gray-500" />
              </a>
            </div>

            {/* ── Quick Links ── */}
            <div>
              <ColHeading>Quick Links</ColHeading>
              <ul className="space-y-2.5">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="group flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-all duration-200"
                    >
                      <ChevronRight
                        size={12}
                        className="text-red-600 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                      />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Services ── */}
            <div>
              <ColHeading>Our Services</ColHeading>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      className="group flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-all duration-200"
                    >
                      <ChevronRight
                        size={12}
                        className="text-red-600 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                      />
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Instagram + Hours ── */}
            <div className="flex flex-col gap-8">
              {/* Instagram mini card */}
              <div>
                <ColHeading>Instagram</ColHeading>
                <div
                  className="rounded-xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(225,48,108,0.2)",
                    background: "rgba(225,48,108,0.04)",
                  }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-2.5 px-3.5 py-3 border-b border-white/[0.05]">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #f9a825, #e1306c, #833ab4)",
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                        stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-[11px] font-bold leading-none">@hsrfitnessworld_aecslayout15</p>
                      <p className="text-gray-600 text-[9px] mt-0.5">Follow for daily motivation</p>
                    </div>
                  </div>
                  {/* Photo grid (placeholder squares) */}
                  <div className="grid grid-cols-3 gap-0.5 p-0.5">
                    {[
                      { bg: "from-red-900/60 to-orange-900/40", emoji: "🏋️" },
                      { bg: "from-purple-900/60 to-pink-900/40", emoji: "💪" },
                      { bg: "from-blue-900/60 to-cyan-900/40", emoji: "🥊" },
                      { bg: "from-green-900/60 to-emerald-900/40", emoji: "🧘" },
                      { bg: "from-yellow-900/60 to-amber-900/40", emoji: "🏃" },
                      { bg: "from-rose-900/60 to-red-900/40", emoji: "⚡" },
                    ].map((cell, i) => (
                      <a
                        key={i}
                        href="https://instagram.com/hsrfitnessworld_aecslayout15"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`aspect-square bg-gradient-to-br ${cell.bg} flex items-center justify-center text-xl hover:opacity-80 transition-opacity duration-200`}
                      >
                        <span>{cell.emoji}</span>
                      </a>
                    ))}
                  </div>
                  {/* Follow button */}
                  <div className="px-3.5 py-3">
                    <a
                      href="https://instagram.com/hsrfitnessworld_aecslayout15"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center text-[11px] font-bold py-2 rounded-lg transition-all duration-200 hover:brightness-110"
                      style={{
                        background: "linear-gradient(135deg, #e1306c, #833ab4)",
                        color: "#fff",
                      }}
                    >
                      Follow Us on Instagram
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours mini */}
              <div>
                <ColHeading>Opening Hours</ColHeading>
                <div className="space-y-2.5">
                  {schedule.map(({ day, time }) => (
                    <div
                      key={day}
                      className="flex items-center justify-between gap-3 pb-2.5 border-b border-white/[0.05] last:border-0"
                    >
                      <div className="flex items-center gap-1.5">
                        <Clock size={10} className="text-amber-500 flex-shrink-0" />
                        <span className="text-gray-500 text-[11px]">{day}</span>
                      </div>
                      <span className="text-white text-[11px] font-semibold whitespace-nowrap">
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Live indicator */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-emerald-400 text-[11px] font-semibold">
                    Currently Open
                  </span>
                </div>
              </div>
            </div>

          </div>{/* /main grid */}

          {/* ── Bottom Bar ── */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 border-t border-white/[0.06]"
          >
            <p className="text-gray-600 text-xs text-center sm:text-left flex items-center gap-1 flex-wrap justify-center sm:justify-start">
              © {new Date().getFullYear()} HSR Fitness World. All rights reserved.
              Made with{" "}
              <Heart size={11} className="text-red-500 fill-red-500 inline" />{" "}
              in Bangalore.
            </p>
            <div className="flex items-center gap-5">
              <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors duration-200">
                Privacy Policy
              </a>
              <span className="text-white/10">|</span>
              <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>

        </div>{/* /container */}
      </footer>

      {/* ═══════════════════════════════════════════
          FLOATING WHATSAPP BUTTON (bottom-left)
      ═══════════════════════════════════════════ */}
      <motion.a
        href="https://wa.me/919980355803"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full text-white"
        style={{
          background: "linear-gradient(135deg, #25d366, #128c7e)",
          boxShadow: "0 6px 30px rgba(37,211,102,0.45)",
        }}
      >
        {/* WhatsApp icon */}
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.828L.057 23.5a.5.5 0 00.613.65l5.857-1.54A11.945 11.945 0 0012 24c6.626 0 12-5.374 12-12S18.626 0 12 0zm0 21.818a9.812 9.812 0 01-5.023-1.376l-.36-.214-3.737.981.998-3.648-.235-.374A9.818 9.818 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z" />
        </svg>

        {/* Pulse ring — starts after 2s */}
        <span
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            background: "#25d366",
            animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
            animationDelay: "2s",
          }}
        />
      </motion.a>

      {/* ═══════════════════════════════════════════
          BACK TO TOP BUTTON (bottom-right)
      ═══════════════════════════════════════════ */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="back-to-top"
            onClick={scrollTop}
            initial={{ opacity: 0, y: 20, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.7 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full text-white"
            style={{
              background: "linear-gradient(135deg, #DC2626, #f97316)",
              boxShadow: "0 6px 28px rgba(220,38,38,0.45)",
            }}
            aria-label="Back to top"
          >
            <ArrowUp size={19} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
