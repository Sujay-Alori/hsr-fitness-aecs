"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { EASE_OUT } from "@/lib/motion";

export default function SupplementsCTA() {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi HSR Fitness World, I need help choosing the right supplement.");
    window.open(`https://wa.me/919980355803?text=${text}`, "_blank");
  };

  return (
    <section className="py-24 lg:py-32 bg-[#060606] relative overflow-hidden border-t border-white/[0.04]">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-md"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            Need Help Choosing the Right Supplement?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Our certified trainers will help you choose the right supplement based on your fitness goals, body type, and dietary requirements.
          </p>
          
          <motion.button
            onClick={handleWhatsApp}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(37,211,102,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(37,211,102,0.2)] transition-shadow duration-300"
          >
            <MessageCircle size={24} />
            Enquire on WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
