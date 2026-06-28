"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import { EASE_OUT } from "@/lib/motion";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/#about" },
  { label: "Services",   href: "/#services" },
  { label: "Membership", href: "/#membership" },
  { label: "Gallery",    href: "/#gallery" },
  { label: "Supplements",href: "/#supplements" },
  { label: "Contact",    href: "/#contact" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [activeLink,  setActiveLink]  = useState("#home");
  const { openModal } = useModal();

  /* ── Track scroll position ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Track active section via IntersectionObserver (Home page only) ── */
  useEffect(() => {
    if (pathname !== "/") return;

    const ids = navLinks
      .filter((l) => l.href.startsWith("/#"))
      .map((l) => l.href.replace("/#", ""));
    ids.push("home"); // Ensure home is tracked

    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveLink(id === "home" ? "/" : `/#${id}`); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  /* ── Lock body scroll when menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = useCallback(
    (href: string) => {
      setMenuOpen(false);
      
      if (href.startsWith("/#")) {
        if (pathname === "/") {
          const hash = href.replace("/", "");
          setActiveLink(href);
          const target = document.querySelector(hash);
          if (target) {
            setTimeout(() => {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            }, menuOpen ? 300 : 0);
          }
        } else {
          router.push(href);
        }
      } else if (href === "/") {
        if (pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setActiveLink("/");
        } else {
          router.push(href);
        }
      } else {
        router.push(href);
        setActiveLink(href);
      }
    },
    [menuOpen, pathname, router]
  );

  /* ── Animation variants ── */
  const mobileMenuVariants = {
    closed: { x: "100%", opacity: 0, transition: { duration: 0.35, ease: EASE_OUT } },
    open:   { x: "0%",   opacity: 1, transition: { duration: 0.35, ease: EASE_OUT } },
  };

  const linkVariants = {
    closed: { x: 40, opacity: 0 },
    open:   (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.1 + i * 0.07, duration: 0.4, ease: EASE_OUT },
    }),
  };

  return (
    <>
      {/* ═══════════════ NAVBAR ═══════════════ */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className={`
          fixed top-0 left-0 right-0 z-50 w-full
          transition-all duration-500
          ${scrolled
            ? "bg-black/85 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            : "bg-transparent border-b border-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">

            {/* ── Logo ── */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="flex items-center group flex-shrink-0"
            >
              <div className="relative w-[120px] h-[48px] sm:w-[150px] sm:h-[60px] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.jpg"
                  alt="HSR Fitness World Logo"
                  fill
                  className="object-contain mix-blend-screen"
                  priority
                />
              </div>
            </a>

            {/* ── Desktop Nav Links ── */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className={`
                      relative px-4 py-2 text-sm font-medium tracking-wide rounded-lg
                      transition-colors duration-200 group
                      ${activeLink === href ? "text-white" : "text-white/60 hover:text-white"}
                    `}
                  >
                    {/* Hover / active pill */}
                    <span
                      className={`
                        absolute inset-0 rounded-lg transition-all duration-300
                        ${activeLink === href
                          ? "bg-white/[0.07]"
                          : "bg-transparent group-hover:bg-white/[0.05]"
                        }
                      `}
                    />
                    <span className="relative">{label}</span>

                    {/* Active underline */}
                    <span
                      className={`
                        absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full
                        bg-red-500 transition-all duration-300
                        ${activeLink === href ? "w-5" : "w-0 group-hover:w-3"}
                      `}
                    />
                  </button>
                </li>
              ))}
            </ul>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={openModal}
                className="
                  relative overflow-hidden px-5 py-2.5 rounded-full
                  text-sm font-semibold tracking-wide text-white
                  bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.35)]
                  hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]
                  transition-shadow duration-300 cursor-pointer
                  before:absolute before:inset-0 before:rounded-full
                  before:bg-gradient-to-r before:from-red-500 before:to-red-700
                  before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                "
              >
                <span className="relative">Book Free Trial</span>
              </motion.button>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setMenuOpen((p) => !p)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="
                lg:hidden flex items-center justify-center
                w-10 h-10 rounded-xl
                bg-white/[0.06] hover:bg-white/[0.12]
                border border-white/[0.08] hover:border-white/[0.16]
                transition-all duration-200 flex-shrink-0
              "
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{   rotate:  90,  opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate:  90, opacity: 0 }}
                    animate={{ rotate: 0,  opacity: 1 }}
                    exit={{   rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-white" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ═══════════════ MOBILE MENU OVERLAY ═══════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-in panel */}
            <motion.div
              key="panel"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="
                fixed top-0 right-0 bottom-0 z-50
                w-72 lg:hidden
                bg-black/95 backdrop-blur-3xl
                border-l border-white/[0.07]
                flex flex-col
                shadow-[-20px_0_60px_rgba(0,0,0,0.8)]
              "
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.07]">
                <div className="flex items-center">
                  <div className="relative w-[120px] h-[48px]">
                    <Image
                      src="/logo.jpg"
                      alt="HSR Fitness World Logo"
                      fill
                      className="object-contain mix-blend-screen"
                    />
                  </div>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
                >
                  <X className="w-4 h-4 text-white/70" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 px-4 py-6 overflow-y-auto">
                <ul className="space-y-1">
                  {navLinks.map(({ label, href }, i) => (
                    <motion.li
                      key={href}
                      custom={i}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                    >
                      <button
                        onClick={() => handleNavClick(href)}
                        className={`
                          w-full flex items-center gap-3 px-4 py-3.5 rounded-xl
                          text-left text-sm font-medium tracking-wide
                          transition-all duration-200 group
                          ${activeLink === href
                            ? "bg-red-600/15 text-white border border-red-600/30"
                            : "text-white/60 hover:text-white hover:bg-white/[0.06] border border-transparent"
                          }
                        `}
                      >
                        {/* Active dot */}
                        <span
                          className={`
                            flex-shrink-0 w-1.5 h-1.5 rounded-full transition-colors duration-200
                            ${activeLink === href ? "bg-red-500" : "bg-white/20 group-hover:bg-red-500/50"}
                          `}
                        />
                        {label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA at bottom */}
              <div className="px-4 pb-8 pt-4 border-t border-white/[0.07]">
                <motion.button
                  variants={linkVariants}
                  custom={navLinks.length}
                  initial="closed"
                  animate="open"
                  whileTap={{ scale: 0.97 }}
                  onClick={() => { setMenuOpen(false); openModal(); }}
                  className="
                    w-full py-3.5 rounded-full
                    text-sm font-semibold tracking-wide text-white
                    bg-red-600 hover:bg-red-500
                    shadow-[0_0_24px_rgba(220,38,38,0.4)]
                    hover:shadow-[0_0_32px_rgba(220,38,38,0.6)]
                    transition-all duration-300
                  "
                >
                  Book Free Trial
                </motion.button>
                <p className="mt-4 text-center text-xs text-white/30">
                  © 2024 HSR Fitness World
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
