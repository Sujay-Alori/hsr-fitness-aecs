"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, Target, MessageSquare, Send } from "lucide-react";
import { useModal } from "@/context/ModalContext";

/* ── WhatsApp number ── */
const WA_NUMBER = "919980355803";

/* ── Fitness goal options ── */
const GOALS = [
  "Weight Loss",
  "Muscle Gain",
  "General Fitness",
  "Endurance / Cardio",
  "Flexibility & Yoga",
  "Sports Performance",
  "Body Transformation",
  "Stress Relief",
];

/* ── Form state type ── */
interface FormData {
  name: string;
  phone: string;
  goal: string;
  message: string;
}
interface FormErrors {
  name?: string;
  phone?: string;
  goal?: string;
  message?: string;
}

/* ── Field wrapper ── */
function Field({
  label,
  icon: Icon,
  error,
  children,
}: {
  label: string;
  icon: React.ElementType;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
        <Icon size={11} className="text-red-500" />
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="text-red-400 text-[11px] font-medium"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Shared input style ── */
const inputClass =
  "w-full bg-white/[0.04] border border-white/[0.10] hover:border-white/[0.18] focus:border-red-500/60 focus:outline-none focus:ring-2 focus:ring-red-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 transition-all duration-200";

/* ═══════════════════════════════════════════
   ENQUIRY MODAL
═══════════════════════════════════════════ */
export default function EnquiryModal() {
  const { isOpen, closeModal } = useModal();
  const [form, setForm] = useState<FormData>({ name: "", phone: "", goal: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  /* Focus first input when modal opens */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstInputRef.current?.focus(), 350);
      setSubmitted(false);
      setForm({ name: "", phone: "", goal: "", message: "" });
      setErrors({});
    }
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    if (isOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, closeModal]);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* Validation */
  function validate(): boolean {
    const e: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = "Please enter your full name (min 2 characters).";
    const phoneClean = form.phone.replace(/\D/g, "");
    if (!phoneClean || phoneClean.length < 10)
      e.phone = "Please enter a valid 10-digit phone number.";
    if (!form.goal)
      e.goal = "Please select your fitness goal.";
    if (!form.message.trim() || form.message.trim().length < 5)
      e.message = "Please add a short message (min 5 characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  /* Submit → open WhatsApp */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const text = encodeURIComponent(
      `Hi! I'd like to enquire about a Free Trial at HSR Fitness World 🏋️\n\n` +
      `*Name:* ${form.name.trim()}\n` +
      `*Phone:* ${form.phone.trim()}\n` +
      `*Fitness Goal:* ${form.goal}\n` +
      `*Message:* ${form.message.trim()}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeModal}
            className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm"
          />

          {/* ── Panel ── */}
          <motion.div
            key="modal-panel"
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed inset-0 z-[91] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl pointer-events-auto"
              style={{
                background: "linear-gradient(160deg, #0e0e0e 0%, #090909 100%)",
                border: "1px solid rgba(220,38,38,0.22)",
                boxShadow: "0 32px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04), 0 0 60px rgba(220,38,38,0.08)",
              }}
            >
              {/* Top accent bar */}
              <div
                className="h-[3px] w-full rounded-t-2xl"
                style={{ background: "linear-gradient(90deg, #DC2626, #f97316, #DC2626)" }}
              />

              {/* ── Header ── */}
              <div className="flex items-start justify-between px-6 pt-6 pb-5 border-b border-white/[0.06]">
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-red-600/10 border border-red-600/20 text-red-400 text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-2">
                    🎯 Free Trial
                  </span>
                  <h2 className="text-xl font-black text-white leading-tight">
                    Book Your Free Trial
                  </h2>
                  <p className="text-gray-500 text-xs mt-1">
                    Fill in the details — we&apos;ll connect you on WhatsApp instantly.
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  aria-label="Close"
                  className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.08] transition-all duration-200 mt-0.5"
                >
                  <X size={17} />
                </button>
              </div>

              {/* ── Body ── */}
              <div className="px-6 py-6">
                {!submitted ? (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                    {/* Name */}
                    <Field label="Your Name" icon={User} error={errors.name}>
                      <input
                        ref={firstInputRef}
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={form.name}
                        onChange={(e) => { setForm(f => ({ ...f, name: e.target.value })); setErrors(err => ({ ...err, name: undefined })); }}
                        className={inputClass}
                        autoComplete="name"
                      />
                    </Field>

                    {/* Phone */}
                    <Field label="Phone Number" icon={Phone} error={errors.phone}>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={form.phone}
                        onChange={(e) => { setForm(f => ({ ...f, phone: e.target.value })); setErrors(err => ({ ...err, phone: undefined })); }}
                        className={inputClass}
                        autoComplete="tel"
                        maxLength={15}
                      />
                    </Field>

                    {/* Fitness Goal */}
                    <Field label="Fitness Goal" icon={Target} error={errors.goal}>
                      <select
                        value={form.goal}
                        onChange={(e) => { setForm(f => ({ ...f, goal: e.target.value })); setErrors(err => ({ ...err, goal: undefined })); }}
                        className={`${inputClass} cursor-pointer`}
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="" disabled className="bg-[#0e0e0e]">Select your goal…</option>
                        {GOALS.map(g => (
                          <option key={g} value={g} className="bg-[#0e0e0e]">{g}</option>
                        ))}
                      </select>
                    </Field>

                    {/* Message */}
                    <Field label="Message" icon={MessageSquare} error={errors.message}>
                      <textarea
                        rows={3}
                        placeholder="Tell us anything — preferred timing, injuries, goals…"
                        value={form.message}
                        onChange={(e) => { setForm(f => ({ ...f, message: e.target.value })); setErrors(err => ({ ...err, message: undefined })); }}
                        className={`${inputClass} resize-none`}
                      />
                    </Field>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(37,211,102,0.35)" }}
                      whileTap={{ scale: 0.97 }}
                      className="mt-1 flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-bold text-white text-sm tracking-wide transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, #25d366, #128c7e)",
                        boxShadow: "0 6px 28px rgba(37,211,102,0.28)",
                      }}
                    >
                      {/* WhatsApp icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.828L.057 23.5a.5.5 0 00.613.65l5.857-1.54A11.945 11.945 0 0012 24c6.626 0 12-5.374 12-12S18.626 0 12 0zm0 21.818a9.812 9.812 0 01-5.023-1.376l-.36-.214-3.737.981.998-3.648-.235-.374A9.818 9.818 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z" />
                      </svg>
                      Send via WhatsApp
                      <Send size={14} />
                    </motion.button>

                    <p className="text-center text-gray-600 text-[11px]">
                      This will open WhatsApp with your enquiry pre-filled.
                    </p>
                  </form>
                ) : (
                  /* ── Success state ── */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 280, damping: 24 }}
                    className="flex flex-col items-center justify-center py-10 gap-4 text-center"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.3)" }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="#25d366">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.828L.057 23.5a.5.5 0 00.613.65l5.857-1.54A11.945 11.945 0 0012 24c6.626 0 12-5.374 12-12S18.626 0 12 0zm0 21.818a9.812 9.812 0 01-5.023-1.376l-.36-.214-3.737.981.998-3.648-.235-.374A9.818 9.818 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-black text-lg">WhatsApp Opened! 🎉</h3>
                      <p className="text-gray-400 text-sm mt-1 max-w-xs">
                        Your enquiry is pre-filled. Just hit <span className="text-green-400 font-semibold">Send</span> on WhatsApp and we&apos;ll get back to you shortly.
                      </p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="mt-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:bg-white/[0.1]"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
