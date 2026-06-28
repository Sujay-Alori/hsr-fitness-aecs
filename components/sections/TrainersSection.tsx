"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Share2, MessageCircle, Link2, Star, Dumbbell } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { EASE_IN_OUT } from "@/lib/motion";

/* ── Trainer data ── */
const trainers = [
  {
    name: "Ravi Sharma",
    specialty: "Strength & Conditioning",
    experience: "8 Years",
    rating: 4.9,
    clients: 120,
    certifications: ["NSCA-CSCS", "ACE CPT"],
    color: "from-red-600 to-rose-500",
    glowColor: "rgba(220,38,38,0.35)",
    initials: "RS",
    bio: "Elite strength coach specializing in powerlifting and functional training for athletes and beginners alike.",
  },
  {
    name: "Priya Menon",
    specialty: "Yoga & Mindfulness",
    experience: "6 Years",
    rating: 4.8,
    clients: 95,
    certifications: ["RYT-500", "NASM CPT"],
    color: "from-violet-600 to-purple-500",
    glowColor: "rgba(139,92,246,0.35)",
    initials: "PM",
    bio: "Certified yoga instructor bringing harmony of body and mind through therapeutic and power yoga sessions.",
  },
  {
    name: "Arjun Patel",
    specialty: "HIIT & CrossFit",
    experience: "7 Years",
    rating: 4.9,
    clients: 140,
    certifications: ["CrossFit L2", "ACSM CPT"],
    color: "from-orange-600 to-amber-500",
    glowColor: "rgba(234,88,12,0.35)",
    initials: "AP",
    bio: "High-intensity specialist who transforms fitness levels with dynamic, result-driven CrossFit workouts.",
  },
  {
    name: "Nisha Reddy",
    specialty: "Nutrition & Body Transformation",
    experience: "5 Years",
    rating: 4.7,
    clients: 80,
    certifications: ["Precision Nutrition L2", "ISSA Trainer"],
    color: "from-emerald-600 to-teal-500",
    glowColor: "rgba(16,185,129,0.35)",
    initials: "NR",
    bio: "Certified nutritionist & body transformation expert helping clients achieve lasting results through science-backed plans.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_IN_OUT } },
};

export default function TrainersSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { openModal } = useModal();

  return (
    <section
      ref={ref}
      id="trainers"
      className="relative py-28 bg-[#030303] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[120px]"
          style={{ background: "radial-gradient(circle, #DC2626, transparent)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px]"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/25 text-red-400 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
            <Dumbbell size={12} />
            Expert Coaches
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Meet Your{" "}
            <span className="bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">
              Trainers
            </span>
          </h2>
          <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            World-class certified coaches committed to your transformation journey — every rep, every set, every day.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.name}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ boxShadow: `0 0 40px ${trainer.glowColor}` }}
              />

              {/* Top gradient accent */}
              <div className={`h-1 w-full bg-gradient-to-r ${trainer.color}`} />

              {/* Avatar area */}
              <div className="relative px-6 pt-8 pb-4 flex flex-col items-center text-center">
                {/* Avatar with gradient ring */}
                <div className="relative mb-4">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${trainer.color} flex items-center justify-center text-2xl font-black text-white shadow-xl`}
                  >
                    {trainer.initials}
                  </div>
                  {/* Online indicator */}
                  <span className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#0a0a0a]" />
                </div>

                <h3 className="text-white font-bold text-lg leading-tight">{trainer.name}</h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${trainer.color} bg-clip-text text-transparent mt-0.5`}>
                  {trainer.specialty}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                  <Star size={12} className="text-amber-400 fill-amber-400" />
                  <span className="text-white text-sm font-bold">{trainer.rating}</span>
                  <span className="text-gray-500 text-xs">rating</span>
                </div>

                {/* Bio */}
                <p className="text-gray-400 text-xs leading-relaxed mt-3 line-clamp-3">{trainer.bio}</p>
              </div>

              {/* Stats bar */}
              <div className="flex divide-x divide-white/5 border-t border-white/5 mx-4 mb-4">
                <div className="flex-1 py-3 text-center">
                  <p className="text-white font-bold text-sm">{trainer.experience}</p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">Experience</p>
                </div>
                <div className="flex-1 py-3 text-center">
                  <p className="text-white font-bold text-sm">{trainer.clients}+</p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">Clients</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="px-4 pb-4">
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {trainer.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="text-[10px] font-medium text-gray-400 bg-white/5 border border-white/8 rounded-full px-2.5 py-0.5"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="px-4 pb-5">
                <div className="flex justify-center gap-3">
                  {[
                    { Icon: Share2, label: "Share profile" },
                    { Icon: MessageCircle, label: "Message trainer" },
                    { Icon: Link2, label: "View profile" },
                  ].map(({ Icon, label }, i) => (
                    <motion.button
                      key={i}
                      type="button"
                      aria-label={label}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <Icon size={13} />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-gray-400 mb-4">Want to train with our specialists?</p>
          <motion.button
            type="button"
            onClick={openModal}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-500 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300"
          >
            Book a Session
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
