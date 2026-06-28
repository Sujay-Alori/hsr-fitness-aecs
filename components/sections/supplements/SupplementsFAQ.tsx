"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { EASE_OUT } from "@/lib/motion";

const faqs = [
  {
    q: "Are all supplements genuine?",
    a: "Yes. We source 100% of our supplements directly from official importers and authorized distributors. You can verify the authenticity using the scratch codes provided on the products.",
  },
  {
    q: "Can trainers help me choose a supplement?",
    a: "Absolutely! Our certified trainers will assess your fitness goals, body type, and dietary preferences to recommend the exact supplements you need for optimal results.",
  },
  {
    q: "Can I reserve a supplement on WhatsApp?",
    a: "Yes, you can easily enquire and reserve your preferred supplements via WhatsApp. Just click the 'Enquire' button on any product.",
  },
  {
    q: "Do you provide supplement guidance?",
    a: "Yes, supplement guidance is part of our comprehensive fitness approach. We help you understand when and how to take your supplements for maximum effectiveness.",
  },
];

export default function SupplementsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-[#030303]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/50">Everything you need to know about our supplement store.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }}
                className={`border rounded-2xl transition-colors duration-300 overflow-hidden ${
                  isOpen ? "bg-white/[0.04] border-red-600/30" : "bg-transparent border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                >
                  <span className={`font-semibold md:text-lg transition-colors ${isOpen ? "text-white" : "text-white/80"}`}>
                    {faq.q}
                  </span>
                  <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-red-600 text-white" : "bg-white/5 text-white/50"}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE_OUT }}
                    >
                      <div className="px-5 md:px-6 pb-6 text-white/50 text-sm md:text-base leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
