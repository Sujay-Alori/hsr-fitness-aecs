"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";
import { EASE_IN_OUT } from "@/lib/motion";

/* ── Testimonial data ── */
const testimonials = [
  {
    name: "Ananya Krishnan",
    role: "Software Engineer",
    initials: "AK",
    color: "from-red-600 to-rose-500",
    rating: 5,
    months: 8,
    quote:
      "HSR Fitness World completely transformed my lifestyle. Lost 18kg in 6 months with Ravi's training program. The gym's atmosphere is electric — I've never been more consistent in my life!",
    highlight: "Lost 18kg in 6 months",
  },
  {
    name: "Karthik Subramaniam",
    role: "Marketing Manager",
    initials: "KS",
    color: "from-orange-600 to-amber-500",
    rating: 5,
    months: 12,
    quote:
      "Joined for the CrossFit classes and never left. Arjun's coaching style is intense but incredibly effective. The equipment is top-tier and the community keeps you motivated every single day.",
    highlight: "Gained 8kg muscle mass",
  },
  {
    name: "Deepa Iyer",
    role: "Entrepreneur",
    initials: "DI",
    color: "from-violet-600 to-purple-500",
    rating: 5,
    months: 5,
    quote:
      "Priya's yoga classes are life-changing. I came in stressed and burnt out — now I feel like a completely different person. The mindfulness sessions combined with strength training is a perfect balance.",
    highlight: "Stress-free, balanced life",
  },
  {
    name: "Rahul Mehta",
    role: "CA & Finance Consultant",
    initials: "RM",
    color: "from-emerald-600 to-teal-500",
    rating: 5,
    months: 14,
    quote:
      "Best investment I've ever made. The nutrition consulting with Nisha completely changed how I eat and train. My energy levels, sleep quality and focus at work have all dramatically improved.",
    highlight: "Complete lifestyle transformation",
  },
  {
    name: "Sneha Patil",
    role: "Doctor",
    initials: "SP",
    color: "from-cyan-600 to-blue-500",
    rating: 5,
    months: 9,
    quote:
      "As a doctor I'm particular about safe, science-backed fitness. HSR delivers exactly that. The trainers are knowledgeable, the equipment is pristine, and the results speak for themselves.",
    highlight: "Lost 12kg, gained strength",
  },
  {
    name: "Vikram Nair",
    role: "Startup Founder",
    initials: "VN",
    color: "from-pink-600 to-rose-500",
    rating: 5,
    months: 18,
    quote:
      "I've tried 4 gyms in Bangalore. None come close to HSR. The personal attention, world-class trainers, premium equipment and the overall culture make it in a completely different league.",
    highlight: "18 months strong, never leaving",
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE_IN_OUT } },
    exit: (d: number) => ({
      opacity: 0,
      x: d > 0 ? -80 : 80,
      transition: { duration: 0.4 },
    }),
  };

  const t = testimonials[current];

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative py-28 bg-[#030303] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04] blur-[150px]"
          style={{ background: "radial-gradient(circle, #DC2626, transparent)" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/25 text-red-400 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
            <MessageSquare size={12} />
            Member Stories
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Real Results,{" "}
            <span className="bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">
              Real People
            </span>
          </h2>
          <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto">
            Hear directly from our members about how HSR Fitness World changed their lives.
          </p>
        </motion.div>

        {/* Main slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Big quote mark */}
          <Quote
            size={80}
            className="absolute -top-6 -left-4 text-red-600/10 fill-red-600/10"
            strokeWidth={0}
          />

          {/* Slider card */}
          <div
            className="relative rounded-3xl overflow-hidden min-h-[320px] flex items-center"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full p-8 md:p-12 lg:p-16"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                  {/* Left — avatar + info */}
                  <div className="flex-shrink-0 flex flex-col items-center lg:items-start gap-4 lg:w-52">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-2xl font-black text-white shadow-xl`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">{t.name}</p>
                      <p className="text-gray-500 text-sm">{t.role}</p>
                      <div className="flex gap-0.5 mt-2">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-xs mt-1">{t.months} months member</p>
                    </div>

                    {/* Highlight pill */}
                    <span
                      className={`inline-block text-xs font-semibold bg-gradient-to-r ${t.color} text-white px-3 py-1.5 rounded-full`}
                    >
                      🏆 {t.highlight}
                    </span>
                  </div>

                  {/* Right — quote */}
                  <div className="flex-1">
                    <p className="text-gray-200 text-xl lg:text-2xl leading-relaxed font-light italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-red-500" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button
                onClick={next}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center text-red-400 hover:bg-red-600 hover:text-white transition-all"
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Mini testimonial grid below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12"
        >
          {testimonials.map((tm, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                i === current
                  ? "border-red-600/40 bg-red-600/[0.05]"
                  : "border-white/5 bg-white/[0.02] hover:border-white/10"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${tm.color} flex items-center justify-center text-xs font-black text-white`}
                >
                  {tm.initials}
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">{tm.name}</p>
                  <p className="text-gray-500 text-[10px]">{tm.role}</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs line-clamp-2">&ldquo;{tm.quote}&rdquo;</p>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
