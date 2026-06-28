"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, Users, MapPin } from "lucide-react";
import { EASE_OUT } from "@/lib/motion";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Genuine Products",
    desc: "Sourced directly from official importers. Scan QR for authenticity.",
  },
  {
    icon: Globe,
    title: "Trusted International Brands",
    desc: "We stock only the world's most trusted supplement brands.",
  },
  {
    icon: Users,
    title: "Expert Supplement Guidance",
    desc: "Our certified trainers help you choose the right stack for your goals.",
  },
  {
    icon: MapPin,
    title: "Available at Our Gym",
    desc: "Pick up instantly at HSR Fitness World. No waiting for delivery.",
  },
];

export default function SupplementsFeatures() {
  return (
    <section className="section-padding bg-[#060606] relative border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Why Buy Supplements From Us?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE_OUT }}
              className="group relative bg-white/[0.02] border border-white/5 hover:border-red-600/30 rounded-2xl p-6 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={24} className="text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
