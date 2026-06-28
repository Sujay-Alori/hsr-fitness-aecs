"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

// The 13 image paths as requested
const images = Array.from({ length: 13 }).map((_, i) => `/images/gallery/gallery-${i + 1}.jpeg`);

/* ─────────────────────────────────────────────
   Lightbox
───────────────────────────────────────────── */
function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const imageSrc = images[index];

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8"
      style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(15px)" }}
      onClick={onClose}
    >
      {/* Image panel */}
      <motion.div
        key={imageSrc}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-6xl w-full h-[80vh] sm:h-[90vh] rounded-2xl flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={`Gallery image ${index + 1}`}
            fill
            className="object-contain drop-shadow-2xl"
            quality={90}
            priority
          />
        </div>

        {/* Counter */}
        <div className="absolute top-4 left-4 z-50">
          <span className="text-xs font-semibold tracking-wider text-white/90 bg-black/50 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {index + 1} / {images.length}
          </span>
        </div>
      </motion.div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200 backdrop-blur-md z-50 shadow-xl"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      {/* Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/40 border border-white/15 flex items-center justify-center text-white hover:bg-red-600 transition-colors duration-300 backdrop-blur-md z-50 shadow-xl"
        aria-label="Previous"
      >
        <ChevronLeft size={28} className="mr-1" />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/40 border border-white/15 flex items-center justify-center text-white hover:bg-red-600 transition-colors duration-300 backdrop-blur-md z-50 shadow-xl"
        aria-label="Next"
      >
        <ChevronRight size={28} className="ml-1" />
      </button>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Gallery Card
───────────────────────────────────────────── */
function GalleryCard({
  src,
  index,
  inView,
  onClick,
}: {
  src: string;
  index: number;
  inView: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 5) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full rounded-2xl overflow-hidden cursor-pointer group aspect-square"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      {/* Background/Base Image */}
      <Image
        src={src}
        alt={`HSR Fitness World Gallery ${index + 1}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
      />

      {/* Subtle dark overlay for the hover effect */}
      <motion.div
        className="absolute inset-0 bg-black/0 transition-colors duration-300"
        animate={{ backgroundColor: hovered ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)" }}
      />

      {/* Glassmorphism Expand Icon on Hover */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-shadow">
          <ZoomIn size={24} className="text-white drop-shadow-lg" />
        </div>
      </motion.div>

      {/* Premium Red Accent Border on Hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ boxShadow: "inset 0 0 0 2px rgba(220,38,38,0.7)" }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Section
───────────────────────────────────────────── */
export default function GallerySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevSlide = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    []
  );
  const nextSlide = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)),
    []
  );

  return (
    <>
      <section
        ref={ref}
        id="gallery"
        className="relative py-28 bg-[#030303] overflow-hidden"
      >
        {/* Ambient Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[120px]"
            style={{ background: "radial-gradient(circle, #DC2626, transparent)" }}
          />
          <div
            className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.03] blur-[120px]"
            style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
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
              <ImageIcon size={14} className="text-red-400" />
              Gallery
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              <span className="bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Take a look inside HSR Fitness World and experience our world-class fitness environment.
            </p>
          </motion.div>

          {/* ── Strict 4-Column Balanced Grid Layout ── */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
            {images.map((src, i) => (
              <div 
                key={i}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              >
                <GalleryCard
                  src={src}
                  index={i}
                  inView={inView}
                  onClick={() => openLightbox(i)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Portal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevSlide}
            onNext={nextSlide}
          />
        )}
      </AnimatePresence>
    </>
  );
}
