"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Pill, 
  Dumbbell, 
  Zap, 
  Flame, 
  Activity, 
  HeartPulse, 
  Droplets, 
  Apple, 
  Fish, 
  Cookie,
  MessageCircle,
  CheckCircle2
} from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { EASE_OUT, EASE_IN_OUT } from "@/lib/motion";

const supplementCategories = [
  {
    id: "whey",
    name: "Whey Protein",
    desc: "Fast-absorbing protein for optimal muscle recovery and growth.",
    icon: Dumbbell,
  },
  {
    id: "mass",
    name: "Mass Gainers",
    desc: "High-calorie blends designed for serious size and strength gains.",
    icon: Activity,
  },
  {
    id: "creatine",
    name: "Creatine",
    desc: "Enhance ATP production for explosive power and endurance.",
    icon: Zap,
  },
  {
    id: "bcaa",
    name: "BCAA",
    desc: "Essential amino acids to prevent muscle breakdown during workouts.",
    icon: Droplets,
  },
  {
    id: "preworkout",
    name: "Pre-Workout",
    desc: "Intense energy and focus formulas to crush your training sessions.",
    icon: Flame,
  },
  {
    id: "glutamine",
    name: "Glutamine",
    desc: "Supports immune function and speeds up post-workout recovery.",
    icon: HeartPulse,
  },
  {
    id: "fatburners",
    name: "Fat Burners",
    desc: "Thermogenic compounds to help accelerate metabolism and weight loss.",
    icon: Flame,
  },
  {
    id: "multivitamins",
    name: "Multivitamins",
    desc: "Daily essential micronutrients for overall health and vitality.",
    icon: Apple,
  },
  {
    id: "fishoil",
    name: "Fish Oil (Omega-3)",
    desc: "Supports heart, joint, and brain health with premium Omega-3s.",
    icon: Fish,
  },
  {
    id: "proteinbars",
    name: "Protein Bars",
    desc: "Convenient, high-protein snacks for on-the-go nutrition.",
    icon: Cookie,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_IN_OUT } },
};

export default function SupplementsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { openModal } = useModal();

  return (
    <section id="supplements" ref={ref} className="section-padding bg-[#030303] relative border-y border-white/[0.04]">
      {/* Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/25 text-red-400 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
            <Pill size={14} />
            HSR Nutrition
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.05] tracking-tight mb-6">
            Premium{" "}
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
              Supplements
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
            We provide 100% genuine fitness supplements to support your fitness goals. Visit our gym or enquire on WhatsApp for more information.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-6"
        >
          {supplementCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: EASE_OUT } }}
                className="group bg-white/[0.02] border border-white/5 hover:border-red-600/30 rounded-2xl p-6 flex flex-col h-full backdrop-blur-sm transition-colors duration-300 shadow-lg"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-red-600/10 flex items-center justify-center mb-5 group-hover:bg-red-600/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={28} className="text-red-500" />
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                </div>

                {/* Badges & CTA */}
                <div className="mt-auto">
                  <div className="flex items-center gap-1.5 mb-4 text-[11px] font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-400/10 px-3 py-1.5 rounded-full w-fit">
                    <CheckCircle2 size={12} />
                    Available at HSR
                  </div>
                  
                  <motion.button
                    onClick={openModal}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 bg-white/5 hover:bg-red-600 border border-white/10 hover:border-red-600 text-sm font-bold text-white transition-all duration-300"
                  >
                    <MessageCircle size={16} />
                    Enquire Now
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8, ease: EASE_OUT }}
          className="mt-20 lg:mt-24 text-center bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 rounded-[2rem] p-10 lg:p-14 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.1),transparent)] pointer-events-none" />
          
          <h3 className="text-2xl md:text-4xl font-black text-white mb-4 relative z-10">
            Need Help Choosing the Right Supplement?
          </h3>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-8 relative z-10">
            Our certified trainers will help you choose the right supplement based on your fitness goals and fitness level.
          </p>
          
          <motion.button
            onClick={() => {
              const text = encodeURIComponent("Hi HSR Fitness World, I need help choosing the right supplement.");
              window.open(`https://wa.me/919980355803?text=${text}`, "_blank");
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(37,211,102,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(37,211,102,0.2)] transition-shadow duration-300 relative z-10"
          >
            <MessageCircle size={24} />
            Enquire on WhatsApp
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
